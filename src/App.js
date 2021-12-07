import './App.css';
import { Calender } from './components/calender/Calender';
import { useSelector } from 'react-redux';
import { Login } from './components/userLogin/Login';

const App=()=>{
  const state = useSelector(state => state.userReducer);
  console.log(state);
  return (
   
        <div className="App">
          <Login/>
          {/* <Calender/> */}
        </div>
    
  );
}

export default App;
