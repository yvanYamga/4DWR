import React from "react";
import react from "./img/react.png";

 function sidebar(){
     return(
         <div style={{backgroundColor:"white",border:"1px solid #D6D6D6", width:"210px",height:"370px",borderRadius:"15px"}}>
             <img style={{height:"65px", width:"210px", borderTopRightRadius:"15px", borderTopLeftRadius:"15px"}} src={react}/>
             <div style={{position:"relative", left:"37%"}}>
              <img src={profil} style={{width:"55px"}}/>
                 <h3>Name</h3>
             </div>

             <h4 style={{position:"relative",left:"28%", color:"#6F6F6F"}}> Designation</h4>
             <div style={{color: "#6F6F6F", borderTop: "1px solid #D6D6D6", paddingLeft:"10px"}}>
                 <h5 style={{fontWeight:"100"}}>Connections</h5>
                 <h5 style={{fontWeight:"100"}}>Invitations</h5>

             </div>
         </div>
     )
 }

 export default sidebar