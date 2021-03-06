import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Home from "../views/home";
import FourOFour from "../views/404/404";
import PokeDetail from "../views/PokeDetail/PokeDetail";
import ScrollToTop from "../components/ScrollToTop";
export default function Routes(){
    
    return (
        <Router>
            <ScrollToTop/>
            <Switch>
                <Route path="/" exact>
                    <Home/>
                </Route>
                <Route path="/pokemon/:id">
                    <PokeDetail/>
                </Route>
                <Route>
                    <FourOFour/>
                </Route>
            </Switch>
            
        </Router>
    );
}