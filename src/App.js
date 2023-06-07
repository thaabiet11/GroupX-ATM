import './atm.css';
import {Routes,BrowserRouter,Route,} from "react-router-dom";  
import Login from "./Login"
import Menu from "./Menu" ;
import Balance from "./Balance" ;
import Deposit from "./Deposit" ;
import Withdrawal from "./Withdrawal" ;
import Transfer from "./Transfer" ;
import ChangePin from "./ChangePin" ;
import SignUp from "./SignUp" ;

function App() {
  return (
    <BrowserRouter>  
                    <Routes>
                        <Route exact path="/" Component={Login}/>
                        <Route exact path="/Menu" Component={Menu}/>
                        <Route exact path="/Balance" Component={Balance}/>
                        <Route exact path="/Deposit" Component={Deposit}/>
                        <Route exact path="/Withdrawal" Component={Withdrawal}/>
                        <Route exact path="/Transfer" Component={Transfer}/>
                        <Route exact path="/ChangePin" Component={ChangePin}/>
                        <Route exact path="/SignUp" Component={SignUp}/>
                    </Routes>
            </BrowserRouter>
  );
}

export default App;
