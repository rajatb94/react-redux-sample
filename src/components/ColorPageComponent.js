//import logo from './logo.svg';
//import './App.css';
import { connect } from "react-redux";
import {changeColor} from '../stores/actions';

function ColorPage(props) {
    console.log(props)

    const changeColor = ()=>{
      props.changeColor({color: "red"})
    }
    return (
      <div >
          {props.rang}
          <button onClick={changeColor}>changeToRed</button>
      </div>
    );
  }
  
  function mapStateToProps(state){
    return {rang: state.color}
  }

  export default connect(mapStateToProps, { changeColor })(ColorPage);