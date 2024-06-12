import React from "react";
import { Grid } from "@mui/material";
import linkedin from "../img/linkedin.png"
import loupe from "../loupe.png "
import Home from "../img/Home.png"
import reseau from "../img/reseau.png"
import messag from "../img/messag.png"
import profil from "../img/profil.png"


function navbar(){
    return (
        <div style={{padding:"10px",borderBottom:"1px solid #D6D6D6"}} >
            <Grid container>
                <Grid item xs={6}>
                    <img style={{width: "25px", marginleft:"80px"}} src={linkedin}/>
                    <img style={{width: "25px", marginleft:"20px"}} src={loupe}/>
                </Grid>
                <Grid item xs={6}>
                    <img style={{width: "25px", marginleft:"20px"}} src={Home}/>
                    <img style={{width: "25px", marginleft:"20px"}} src={reseau}/>
                    <img style={{width: "25px", marginleft:"20px"}} src={messag}/>
                    <img style={{width: "25px", marginleft:"20px" }} src={profil}/>
                </Grid>

            </Grid>
        </div>
    )
}

export default navbar;