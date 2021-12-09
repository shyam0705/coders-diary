import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
export default class App extends React.Component {
  //other logic
  render() {
    return (
        <div className="loader">
            <Loader type="TailSpin" color="#00BFFF" height={150} width={120} />
        </div>  
    );
  }
}

