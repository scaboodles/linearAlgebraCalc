import { eventWrapper } from '@testing-library/user-event/dist/utils';
import React from 'react';
import ReactDOM from 'react-dom/client';

const Calc = () =>{
  return(
    <div id="mainContainer"> 
      <Row/>
    </div>
  )
}

class Row extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      size:3,
      /*cols:[{value:null, setFunc:(newVal) => setValue(0,newVal), key:0} , {value:null, setFunc:(newVal) => setValue(1,newVal), key:1} , {value:null, setFunc:(newVal) => setValue(2,newVal), key:2}]*/
      cols:[0,1,2]
    }
    const setValue = (col, newVal) => {
      let columns = this.state.cols;
      columns[col].value = newVal;
      this.setState({cols:columns});
    };
  }
  render(){
    const InitRows = () => (
      <>
        {this.state.cols.map(column => (
          /*<DigitEntry key={column.key} val={column.value} updateValue={column.setFunc}/>*/
          <DigitEntry key={column}/>
        ))}
      </>
    );
    return(
      <div className='row'>
        <InitRows/>
      </div>
    )
  }
}

const DigitEntry = (props) =>{
  const [num, setNum] = React.useState("");
    return(
      <input
        onChange={ (event) => setNum(event.target.value)}
        value={num}
        placeholder="0"
        type="number"
      />
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Calc/>
  </React.StrictMode>
);