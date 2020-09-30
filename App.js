import React, {useState} from 'react';

import Icon from './components/Icons';
import 'bootstrap/dist/css/bootstrap.min.css';

////toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

////bootstrap
import { Button } from 'reactstrap';


function App() {

  const[ans,setAns] = useState(["","","","","","","","",""]);
  const[cross,setCross] = useState(1);
  const[count,setCount] = useState(1);
  const[iswin,setIswin] = useState(0); 
 
  ///winning logic

  const checkWinner = (i) => {
    if(count>4){
      ///for0
      if(i===0){
        if((ans[0]===ans[1] && ans[0]===ans[2]) || (ans[0]===ans[3] && ans[0]===ans[6]) ||  (ans[0]===ans[4] && ans[0]===ans[8])){
          return (1);
        }
        else{
          return (-1);
        }
      }
      ///for1
      if(i===1){
        if((ans[1]===ans[0] && ans[1]===ans[2]) || (ans[1]===ans[4] && ans[1]===ans[7])){
          return (1);
        }
        else{
          return (-1);
        }
      }
      ///for2
      if(i===2){
        if((ans[2]===ans[0] && ans[2]===ans[1]) || (ans[2]===ans[5] && ans[2]===ans[8]) ||  (ans[2]===ans[4] && ans[2]===ans[6])){
          return (1);
        }
        else{
          return (-1);
        }
      }
      ///for3
      if(i===3){
        if((ans[3]===ans[0] && ans[3]===ans[6]) || (ans[3]===ans[4] && ans[3]===ans[5]) ){
          return (1);
        }
        else{
          return (-1);
        }
      }
      ///for4
      if(i===4){
        if((ans[4]===ans[0] && ans[4]===ans[8]) || (ans[4]===ans[2] && ans[4]===ans[6]) ||  (ans[4]===ans[3] && ans[4]===ans[5])  ||  (ans[4]===ans[1] && ans[4]===ans[7])){
          return (1);
        }
        else{
          return (-1);
        }
      }
      ///for5
      if(i===5){
        if((ans[5]===ans[2] && ans[5]===ans[8]) || (ans[5]===ans[3] && ans[5]===ans[4])){
          return (1);
        }
        else{
          return (-1);
        }
      }
      ////for6
      if(i===6){
        if((ans[6]===ans[0] && ans[6]===ans[3]) || (ans[6]===ans[2] && ans[6]===ans[4]) ||  (ans[6]===ans[7] && ans[6]===ans[8])){
          return (1);
        }
        else{
          return (-1);
        }
      }
      ////for7
      if(i===7){
        if((ans[7]===ans[1] && ans[7]===ans[4]) || (ans[7]===ans[6] && ans[7]===ans[8]) ){
          return (1);
        }
        else{
          return (-1);
        }
      }
      ////for8
      if(i===8){
        if((ans[8]===ans[4] && ans[8]===ans[0]) || (ans[8]===ans[6] && ans[8]===ans[7]) ||  (ans[8]===ans[2] && ans[8]===ans[5])){
          return (1);
        }
        else{
          return (-1);
        }
      }
    }

  }



  ///changing element
  const changeCross = (index) => {
    var arr = ans;
    if(cross===1 && iswin===0){
      if(arr[index]===''){
        arr[index] = 'X'
        setAns(arr);
        setCount(count+1)
        if(checkWinner(index)===1){
          setIswin(1);
          toast("X is won the match!")
        }
        setCross(0);
        //console.log(ans);

      }
      else{
        if(iswin===1){
          toast("x is already winner")
        }
        else if(iswin ===2){
          toast("o is already winner");

        }
        else{
          toast("error cant change played boxes" , {type:"error ", toastId: 2} );
        }
        
        
      }
      
      
    }
    else{
      if(arr[index]==='' && iswin===0){
        arr[index] = 'O'
        setAns(arr);
        setCount(count+1)
        if(checkWinner(index)===1){
          toast("O won the match")
          setIswin(2);
        }
        setCross(1);
      }
      else{
        if(iswin===1){
          toast("x is already winner")
        }
        else if(iswin ===2){
          toast("o is already winner");

        }
        else{
          toast("error cant change played boxes" , {type:"error ", toastId: 2} );
        }

      }
      
      
    }
    
  }
  /////reset
  const ResetMatch = () => {
    var new_arr = ["","","","","","","","",""];
    setAns(new_arr);
    setCross(1);
    setCount(1);
    setIswin(0);
  }

  return (
        <div className='container  mt-4'>
          <h1 className="text-light text-center">Welcome to my TicTacToe</h1>
          <ToastContainer position="bottom-center"/>
          <div className='row pt-4'>
            <div className='col text-center'>
              <button className='btn btn-primary' onClick={()=>{changeCross(0)}}>{ans[0]}</button>
              <button className='btn btn-primary ml-2' onClick={()=>{changeCross(1)}}>{ans[1]}</button>
              <button className='btn btn-primary ml-2' onClick={()=>{changeCross(2)}}>{ans[2]}</button>
              
            </div>
            
          </div>
          <div className='row pt-2'>
            <div className='col text-center'>
              <button className='btn btn-primary '  onClick={()=>{changeCross(3)}} >{ans[3]}</button>
              <button className='btn btn-primary ml-2' onClick={()=>{changeCross(4)}} >{ans[4]}</button>
              <button className='btn btn-primary ml-2' onClick={()=>{changeCross(5)}} >{ans[5]}</button>
              
            </div>
            
          </div>
          <div className='row pt-2 pb-4'>
            <div className='col text-center'>
              <button className='btn btn-primary ' onClick={()=>{changeCross(6)}} >{ans[6]}</button>
              <button className='btn btn-primary ml-2' onClick={()=>{changeCross(7)}} >{ans[7]}</button>
              <button className='btn btn-primary ml-2' onClick={()=>{changeCross(8)}} >{ans[8]}</button>
              
            </div>
            
          </div>
          <p className="text-light text-center">player 1 starts with X!</p>
          <div className="row">
            <div className="col text-center">
               <button type="" className="btn-warning" onClick={()=>{ResetMatch()}}>Reset!</button>
            </div>
          </div>
        </div>
   
  );
}

export default App;
