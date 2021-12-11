import './App.css';
import {  DashBoard } from './components/dashboard/DashBoard';
import { useSelector } from 'react-redux';
import { Login } from './components/userLogin/Login';
import {Switch,BrowserRouter as Router,Route} from 'react-router-dom';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { setUser, setUserData } from './redux/actions/loginRegisterActions';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getDatabase, ref, onValue,set} from "firebase/database";
import PrivateRoute from './utils/PrivateRoute';
const App=()=>{
  const dispatch = useDispatch();
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user!=null && user.uid) {
          dispatch(setUser(user));
          const db = getDatabase();
          const userRef = ref(db, 'users/' + user.uid);
          onValue(userRef, (snapshot) => {
            const data = snapshot.val();
            if(data==null)
            {
              set(userRef, {
                email: user.email,
                leetcode:"",
                codechef:"",
                codeforces:"",
                gfg:"",
                collegeName:""
              });
              const userData={
                leetcode:"",
                codechef:"",
                codeforces:"",
                gfg:"",
                collegeName:""
              }
              dispatch(setUserData(userData));
            } 
            else
            {
              const userData={
                leetcode:data.leetcode,
                codechef:data.codechef,
                codeforces:data.codeforces,
                gfg:data.gfg,
                collegeName:data.collegeName
              }
              dispatch(setUserData(userData));
            }
          });

      } else {
        dispatch(setUser(null));
        const userData={
          leetcode:"",
          codechef:"",
          codeforces:"",
          gfg:"",
          collegeName:"",
          graphData:[]
        }
        dispatch(setUserData(userData));
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
                <PrivateRoute path="/dashboard" component={DashBoard} exact/>
              </Switch>
          </Router>
        </div>
    
  );
}

export default App;
