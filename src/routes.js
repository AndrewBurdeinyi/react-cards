import React from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import Cabinet from "./pages/Cabinet";
import {Login} from "./pages/Login";

export const useRotes = isAutenticated => {
 if(isAutenticated) {
     return(
         <Switch>
             <Route path="/cabinet" exact>
                <Cabinet/>
             </Route>
             <Redirect to="/cabinet"/>
         </Switch>
     )
 }
 return(
     <Switch>
         <Route path="/" exact>
             <Login/>
         </Route>
         <Redirect to="/"/>
     </Switch>
 )
};