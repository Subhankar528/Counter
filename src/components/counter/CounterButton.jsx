import './Counter.css'
import PropTypes from 'prop-types';
export default function CounterButton({by,incrementMethod,decrementMethod}){
 // const buttonStyle={width:"50px",backgroundColor:"cyan",fontSize:"10px",margin:"10px",color:"white",padding:"15px",borderRadius:"20px"}
  return(
    <div className="Counter">
      {/* <button className="counterButton" onClick={incrementCounterFunction} style={buttonStyle}>+1</button> */}
      <button className="counterButton" onClick={()=>incrementMethod(by)} >+{by}</button>
      <button className="decrementButton" onClick={()=>decrementMethod(by)} >-{by}</button>
    </div>
  )
}

CounterButton.propTypes={
  by: PropTypes.number
}
CounterButton.defaultProps={
  by:1
}
