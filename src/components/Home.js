import React from "react";
import Sidebar from "./Sidebar"
import Middle from "./Middle"
import Rightbar from "./Rightbar"
import Grid from "@mui/material/Grid";

function Home() {
    return (
        <div style={{backgroundColor:"#F6F7F3", height:"100vh", paading:"30px"}}>
                <Grid container>
                    <Grid item xs={3}>
                        <Sidebar />
                    </Grid>
                    <Grid item xs={6}>
                        <Middle />
                    </Grid>
                    <Grid item xs={3}>
                        <Rightbar/>
                    </Grid>

                </Grid>


        </div>
    )
}

export default Home