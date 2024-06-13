import React from "react";
import profil from "./img/profil"
import {TextField} from "@mui/material";


function Middle (){
    return(
        <div>
            <div>
                <img style={{width:"40px"}} src={profil}/>
                <TextField variant = 'outlined' label="start a post" style={{width:"450px"}} />
            </div>
            <div>

            </div>
        </div>

    )
}
export default Middle