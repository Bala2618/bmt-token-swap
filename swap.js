
import './style.css';
import logo1 from '../image/bmt.png';
import logo2 from '../image/the.png';
import logo3 from '../image/bmt.png';
import logo5 from '../image/maata.png';
import logo from '../image/srr.png';
import arrow from '../image/arrow.png';
import React, { useState,useEffect } from 'react'
import axios from 'axios';



function Swap () {  
  
const [input,setInput]=useState();
const [output,setOutput]=useState();
const [swapinput,setswapinput]=useState(true);
const [amount1,setAmount1]=useState();
const [value1,setValue1]=useState();
const [price,setPrice]=useState();
const [cost,setCost]=useState();
const [divide,setDivide]=useState();
console.log('pr',price);
console.log('token',cost);
console.log('oo',divide);
function swapamount (e){
  setInput(e.target.value);

  Calculatedtoken(e.target.value)
 }
 useEffect(()=>{
  Calculatedtoken()
},[]
)

const Calculatedtoken =(amount) => { 
  setValue1(amount);
 let div=price / cost;
 
 setDivide(div);
  let amount1= amount *divide;
  setAmount1(amount1);
}
const getAmount=async()=>{
  const result=await axios.get("https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd");
  console.log(result);
 const data=result.data.ethereum.usd;
 console.log(data)
 setPrice(data)
 
}
useEffect(()=>{
  getAmount()
},[]
)

const getCost=async()=>{
  const result=await axios.get("https://api.coingecko.com/api/v3/simple/price?ids=lockness&vs_currencies=usd");
   console.log(result);
  const data=result.data.lockness.usd;
  console.log(data)
  setCost(data)
 
}
useEffect(()=>{
  getCost()
},[]
)

function swaptoken (e) {
  setInput(e.target.value);
 
  Calculatedvalue(e.target.value)
}
useEffect(()=>{
  Calculatedvalue()
},[]
)
 
const Calculatedvalue =(value) =>{
  setAmount1(value);
  let value1= value /divide;
  setValue1(value1);
  
}



 

  return (
    <div className='full' >
      <header className='navbar'>
          <img src={logo1} className="img" width="80px" height="80px"/>
          <h2 className='bmt'>BMT TOKENS </h2><br></br>
          <button className='sbt'>smart investor choice</button>
          
          <button className='wallet'><img src={logo5} className='mm'margin-left='30px' width='30px' height='20px'/>wallet</button>
 </header>
 <hr className='line'></hr>
        
         <div className='container-fluid ' >
           <div className='fullfill'>
              <h1 className='wel'>WELCOME TO BMT TOKEN,</h1><br></br>
              <h5><img src={logo} className='imm'width='30px'height='30px'/>  Let Start  Jorney</h5>
         </div><br></br>
         <div className='row'>
         <div className='col-md-5'></div>
         <div className='col-md-4 eth'>
           <p className='tp'><div className='eee'><img src={logo2} className="img2" width='20px' height='30px' /> <b> 1ETH=33333345</b>   <img src={logo3} className="img1" width='30px' height='30px' /><b>1BMT=0.00003ETH</b></div></p>
         </div>
         <div className='col-md-3'></div>
         </div>
         <br></br>
         <div className='row'>
         <div className='col-md-1'></div>
         <div className='col-md-4 maa'>
           <div className='main'>
           { 
           swapinput ?
           <div>
             <div className='col-md-1'></div>
         
             <div className='col-md-10 input1'>
             <img src={logo2} className='eh' width='30px' height='40px'/><input className='input2' value={value1} onChange={(e)=>swapamount(e) }type="text" placeholder='0.0'/><br></br>
             <br></br>
             <img src={logo3}className='eh1' width='35px' height='40px'/><input className='input3' placeholder='0.0' onChange={(e)=>swaptoken(e)} value={amount1} type="text" />
             <button className='arrow'><img src={arrow} onClick={()=>setswapinput(false)} className='arr' width='20px' height='20px'/></button>
             <i class="fa-solid fa-arrow-down-arrow-up"></i>
             </div>
             <div className='col-md-1'></div>
             <button className='bnt'>connect wallet</button>
             
             </div>
             :
             <div>
               <div className='col-md-1'></div>
             <div className='col-md-10 input1'>
             <img src={logo3}className='eh3' width='35px' height='40px'/><input className='input4' placeholder='0.0' onChange={(e)=>swaptoken(e)} value={amount1} type="text" /><br></br>
             <br></br>
             <img src={logo2} className='eh' width='30px' height='40px'/><input className='input5' value={value1} onChange={(e)=>swapamount(e) }type="text" placeholder='0.0'/>
             <button className='arrow'><img src={arrow} onClick={()=>setswapinput(true)} className='arr' width='20px' height='20px'/></button>
             <i class="fa-solid fa-arrow-down-arrow-up"></i>
             </div>
             <div className='col-md-1'></div>
             
             <button className='bnt'>connect wallet</button>
             </div>
           }       
           </div>
         </div>
         <div className='col-md-7'>
           <div className='row'>
             <div className='col-md-5 history'><h4>Transaction History</h4></div>
             <div className='col-md-7'></div>
           </div><br></br>
         <div className='row row1'>
           <div className='col-md-1'>
             <p>NO</p>
           </div>
           <div className='col-md-3'> Transaction cash</div>
           <div  className='col-md-2'>wallet</div>
           <div className='col-md-1'>USD</div>
           <div className='col-md-2'>CBE</div>
           <div className='col-md-3'>Transaction Date</div>
         </div>
         <div className='row row2'>
         <div className='col-md-1'>
             <p>1</p>
           </div>
           <div className='col-md-3'> 123456789012</div>
           <div  className='col-md-2'>123456789012</div>
           <div className='col-md-1'>10.23</div>
           <div className='col-md-2'>12'23</div>
           <div className='col-md-3'>26 mon 2022</div>
         </div>



         </div>
         
         <h4 className='buy1'>BUY BMT</h4>
         
         
           </div>
          
          
         
         

      
       
         
        
         
      </div>   
  </div>
  )        
       
}

export default Swap;