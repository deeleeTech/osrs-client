import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function DisplayStats(props) {
    const customStyles = {
        'container' : {
            padding: '10px',
            height: '100%',
            paddingTop: '30px'
        },
        'skillTitleStyle': {
            fontSize: '44px',
            fontWeight: '600',
            textTransform: 'uppercase',
            textAlign: 'left'
        },
        'levelStyle' : {
            fontSize: '44px',
            fontWeight: '700'
        }
    }

    const playerTotal = props.playerStats.totalSkills;
    const playerSkills = props.playerStats.skills;
    const playerClues = props.playerStats.clues;
    const playerBosses = props.playerStats.bosses;

    return (
        <Grid container sx={customStyles.container}>
            <Grid item xs={12}>
                {Object.keys(playerSkills).map((eachSkill, index)=>{
                    return(
                        <Grid container>
                            <Grid item xs={1}></Grid>
                            <Grid item xs={3} sx={customStyles.skillTitleStyle}>
                                {eachSkill}
                            </Grid>
                            <Grid item xs={6}>
                                
                            </Grid>
                            <Grid item xs={1} sx={customStyles.levelStyle}>
                                {playerSkills[eachSkill].level}
                            </Grid>
                            <Grid item xs={1}></Grid>
                        </Grid>
                    )
                })}
            </Grid>
        </Grid>
    )
}
