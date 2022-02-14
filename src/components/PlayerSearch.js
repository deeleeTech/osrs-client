import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import DisplayStats from './DisplayStats';

export default function PlayerSearch() {
  const customStyles = {
    'container' : {
      padding: '10px',
      maxHeight: '100vh',
      overFlow: 'auto'
    },
    'titleStyle' : {
      fontSize: '46px',
      fontWeight: '600',
      letterSpacing: '2px',
      padding: '10px'
    },
    'searchButtonStyle' : {
      height: '100%',
      width: '100%',
      backgroundColor: '#13560B',
      color: 'white',
      textShadow: '1px 0px 10px black',
      padding: '1px',
      fontSize: '20px'
    }
  }

  const [ typedPlayer, setTypedPlayer ] = useState('');
  const [ player, setPlayer ] = useState(null);

  const searchForPlayer = () => { //SERVER REQUEST
    axios.get('http://localhost:9000/OSRS/getPlayerStats',{
      params: {
        playername: typedPlayer
      }
    })
     .then( res => { 
        //console.log(res.data)
        setPlayer(res.data)
    }).catch( err => {
      console.log(err);
    })
  }

  const handlePlayerChange = (event) => {
    setTypedPlayer(event.target.value);
};


  return (
    <Grid container sx={customStyles.container}>

      <Grid item xs={12} sx={customStyles.titleStyle}>
          RUNESCAPE PLAYER SEARCH
      </Grid>

      <Grid item xs={2}></Grid>
      <Grid item xs={7}>
        <TextField fullWidth id="standard-basic" label="search" variant="standard" value={typedPlayer} onChange={handlePlayerChange} />
      </Grid>
      <Grid item xs={1}>
        <Button onClick={()=>searchForPlayer()} sx={customStyles.searchButtonStyle}>
            SEARCH
        </Button>
      </Grid>
      <Grid item xs={2}></Grid>

      {player ?
        <Grid item xs={12} sx={{ paddingLeft: '30px', paddingRight: '30px' }}>
            <DisplayStats playerStats={player} />
        </Grid>
          :
        <Grid item xs={12} sx={{ height: '90%' }}>

        </Grid>
      }

    </Grid>
  )
}
