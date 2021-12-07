import './App.css';
import { Calender } from './components/calender/Calender';
import { useSelector } from 'react-redux';
import { Login } from './components/userLogin/Login';
import {Switch,BrowserRouter as Router,Route} from 'react-router-dom';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { setUser } from './redux/actions/loginRegisterActions';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
const App=()=>{
  const dispatch = useDispatch();
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
          dispatch(setUser(user));
      } else {
        dispatch(setUser(null));
      }
    });
  }, [dispatch])
  const state = useSelector(state => state.userReducer);
  console.log(state);
  return (
   
        <div className="App">
          <Router>
             <Switch>
                <Route exact path="/" component={Login}/>
                <Route exact path="/dashboard" component={Calender}/>
              </Switch>
          </Router>
        </div>
    
  );
}

export default App;
