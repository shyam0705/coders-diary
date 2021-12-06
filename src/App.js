import './App.css';
import { Calender } from './components/calender/Calender';
import { useSelector } from 'react-redux';

const App=()=>{
  const state = useSelector(state => state.userReducer);
  console.log(state);
  return (
   
        <div className="App">
          <Calender/>
        </div>
    
  );
}

export default App;
