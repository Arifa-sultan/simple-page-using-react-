// import { useState } from 'react';
// import react,{component} from 'react'
// import {useState} from 'react';
// import React, { Component } from 'react';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';      
// import { Button } from 'react-bootstrap';
// import React,{useEffect,useState} from 'react'
// import student from './student';
// import React,{useState} from React
// import Student from './student';
// import User from './User'
// functional state 
// function App(){
//   const [data, setdata]=useState(0)
//   function updatedata()
//   {
//     setdata(data+1)
//   }
//   console.warn("____");
// return(
//   <div className='App'>
//     <h1>{data}</h1>
//     <button onClick={updatedata}>ipdate data</button>
//   </div>
// )
// }
// class state 
// class App extends component{
//   constructor()
//   {
//     super();
//     this.state={
//       data:'anil'
//     }
//   }
//   apple(){
// this.setState({data:'sindhu'})
//   }
//   render()
//   {
//     return(
//       <div className='App'>
//         <h1>{this.state.data}</h1>
//         <button onClick={()=>this.apple()}>updata </button>
//       </div>
//     )
//   }
// }
// props  functional compoanent 
// function App(){
//     return(
//         <div className='App'>
//             <h1>Prps in React</h1>
//             <Student name={'anil'} email={'arifa@gamil'}/>
//             <Student name={'anil'}/>
//             <Student name={'anil'}/>
//         </div>
//     )
// }
// props with class compoanent 
// import student from './student';
// function App(){
//     return(
//         <div className='App'>
//             <h1>Props</h1>
//             <Student name="anil"/>

//         </div>
//     )
// }
// get inpuut box value 
// function App(){
//     const [data,setdata]=useState(null)
//     const [print,setprint]=useState(false)
//     function getdata(val)
//     {
//         console.log(val.target.value)
//         setdata(val.target.value)
//     }
//     return(
//         <div className='App'>
// {
//     print?
//     <h1>{data}</h1>
//     :null
// }
// <input type="text" onChange={getdata} />
// <button onClick={()=>setprint(true)}></button>
//         </div>
//     )
// }
// show , hide toggle in react 
// function App(){
//     const [status,setstatus]=React.useState(true)
//     return(
// <div className='App'>
//     {
//         status? <h1>Hello</h1>:null
//     }
//     {/* <h1>hello world!</h1> */}
//     {/* <button onClick={()=>setstatus(false)}>Hide</button>
//     <button onClick={()=>setstatus(false)}>Show</button> */}
//     <button onClick={()=>setstatus(!status)}>toggle</button>

// </div>
//     );
// }
// form handler 
// function App(){
//    const [name,setname]=useState("");
//    const [tnc, settnc]=useState(false);
//    const [interest,setinterest]=useState("")
//     function getformdata(e){
//         console.log(name,tnc,interest)
//         e.preventDefault()
//     }
//     return(
//         <div className='App'>
//             <h1>Handle form in React</h1>
//             <form onSubmit={getformdata}>
//                 <input type="text" placeholder='anter name' onChange={(e)=>setname(e.target.value)} /> <br />
//                 <select onChange={(e)=>setinterest(e.target.value)}>
//                     <option>helo</option>
//                     <option>hi</option>
//                     <option>hey</option>
//                 </select> <br /> <br />
//                 <input type="checkbox" onChange={(e)=>settnc (e.target.checked)} /> <span>Accepy term an condition</span> <br />
//                 <button type='submit'>submit</button>
//             </form>
//         </div>
//     )
// }
// conditional rendering in react 
// function App(){
//     return(
//         <div className='App'>
// <h1>Render method in react</h1>
//     <student/>
//         </div>
//     )
// }
// compoanentdidmount 
// class App extends React.Component{
//     constructor(){
//         super();
//         console.warn("constuctor")
//     }
//     componentDidMount(){
//         console.warn("render")
//     }
//     render(){
//         console.warn("render");
//         return(
//             <div className='App'>
//                 <h1>Component did Mount</h1>
//             </div>
//         )
//     }
// }
// life cycle method 
// 1.compoanentdidmount
// class App extends React.Component{
//     constructor()
//     {
//         super();
//         this.state={
//             names:'anil'
//         }
//     }
// }
// ComponentDidMount()
// {
//     console.warn("componentdidmount")
// }
// render()
// {
// console.warn("render")
// return(
// <div className='App'>
//     <h1>componentdidmount{this.state.name}</h1>
//     <button>update</button>

// </div>
// )
// }
// componentdidupdate 
// class App extends React.Component{
//     constructor()
//     {
//         super();
//         console.warn("constuctor")
//         this.state={
//             count:0
//         }
//     }
//     componentDidUpdate(preprops,prestate,shapshot)
//     {
//         console.warn("componentdidupdate",snapshot)
//         if(this.state.count<10)
//         {
//             this.setState({count: this.state.count+1})
//         }
        
//     }
// }
// render()
// return(
//     <div className='App'>
//         <h1>componentDidUpdate{this.state.count}</h1>
//         <button onClick={()=>{this.setState({count:1})}}>update name</button>
//     </div>
// )
// shoulscomponentupdate life cycle 
// class App extends React.Component{
//     constructor(){
//         super();
//         this.state={
//             count:0
//         }
//     }
//     shouldComponentUpdate()
//     {
//         console.warn("she up",this.state.count);
//         return true;
//     }
//     render(){
//         return(
//             <div className='App'>
//                 <h1>shouldComponentUpdate { this.setState}</h1>
//                 <button onClick={()=>{this.setState({count: this.state.count+1})}}>update now</button>
//             </div>
//         )
//     }
// } 
// Hooks in react
// 1.useState 
// function App(){
//     const [data,setdata]=useState("Anil")
//     return(
//         <div className='App'>
// <h1>{data}</h1>
// <button onClick={()=>setdata('sidhu')}>update Date</button>
//         </div>
//     )
// }
// 2.useeffect in react 
// function App(){
//     const [count,setcount]=useState(0)
//     useEffect(()=>{
//         console.warn("work 1")
//     }, [])
//     return(
//         <div className='App'>
// <h1>useeffect in React {count}</h1>
// <button onClick={()=>setcount(count+1)}>update counter</button>
//         </div>
//     )
// }
// using useeffect 
// function App(){
//     const [data,setdata]=useState(10);
//     const [count,setcount]=useState(100);
//     useEffect(()=>{
//         console.warn("called with data sate")
//     },[data])
//     useEffect(()=>{
//         alert("count is "+ count)
//     },[count])
//     return(
//         <div className='App'>
// <h1>Count: {count}</h1>
// <h1>Date: {data}</h1>
// <button onClick={()=>setcount(count+1)}>update count</button>
// <button onClick={()=>setdata(data+1)}>update data</button>
//         </div>
//     )
// }
// style in React 
// function App(){
//     return(
        // <div className='APP'>
        //     <h1>Install bootstrap</h1>
        //     <button onClick={()=>alert("hello")}>click me</button>
        // </div>
        // <div>
  // <Badge pill variant="primary">
    // Primary
  // </Badge>{' '}
  // <Badge pill variant="secondary">
    // Secondary
  // </Badge>{' '}
  // <Badge pill variant="success">
    // Success
  // </Badge>{' '}
  // <Badge pill variant="danger">
    // Danger
  // </Badge>{' '}
  // <Badge pill variant="warning">
    // Warning
  // </Badge>{' '}
  // <Badge pill variant="info">
    // Info
  // </Badge>{' '}
  // <Badge pill variant="light">
    // Light
  // </Badge>{' '}
  // <Badge pill variant="dark">
    // Dark
  // </Badge>
// </div>
    // )
// }


// export default App; 
// import React from 'react'

// const App =() => {
//   let heroData = [
// {text1:"dive into", text2:"what do you love"},
// {tet2:"indulge",text2:"your passions"},
// {text3:"give in to", text2:"your passions"},
//   ]
//   const [herocount,setherocount]=usestate(2);
//   const[playstatus,setplaystatus]=usestate(false);
// return (
//     <div>
//       <background playstatus={playstatus} herocount={herocount}></background>
//     </div>
//   )
// }
// export default App
// function App(){
//   let data = "anil sindhu"
//   function apple()
//   {
//    data='peter'
//    alert(data)
//   }
//   return(
//     <div className="App">
//       <h1>{data}</h1>
//       <button onClick={apple}>click me</button>
      
//     </div>
//   );
// }
// states 
// 
// import users from "./users"
// function App(){
//   return(
//     <div className="App">
//       <h1>props in react</h1>
//     <users name={"anil"} email="anil gmail.com"/>

//     </div>
//   )
// }
// export default App
// inout box on change 
// import React, {useState} from "react";
// function App(){
//   const [data, setdata]=useState(null)
//   function getdata(val)
//   {
//     console.warn(val.target.value)
//     setdata(val.target.value)
//   }
//   return(
//     <div className="App">
//       <h1>{data}</h1>
//       <input type="text" onChange={getdata} />
//     </div>
//   )
// }
//       export default App
// import {useState} from "react";
// function App(){
  //   const [status, setstatus]=React.useState(true)
  //   return(
    //     <div className="App">
//       {
  //         status? <h1>hello oct</h1>:null
  //       }
//       <button onClick={()=>setstatus(false)}>hide</button>
//       <button onClick={()=>setstatus(true)}>show</button>

//     </div>
//   )
// }
// handle form 
// function App(){
  //   const[name,setname]=useState("");
  //   const[tnc,settnc]=useState(false);
//   const[interest,setinterest]=useState("")
//   function getformdata(e){
  //     console.warn(name,tnc,interest)
  // e.preventdefault()
  //   }
  //   return(
    //     <div className="App">
    //       <h1>Handle Form in React</h1>
    //       <form onSubmit={getformdata}>
    // <input type="text" placeholder="enter name" onChange={(e)=>setname(e.target.value)} /> <br></br>
    // <select onChange={(e)=>setinterest(e.target.value)}>
    //   <option>Select option</option>
    //   <option>Marvael</option>
    //   <option>Dc</option>
    // </select> <br></br>
    // <input type="checkbox" onChange={(e)=>settnc(e.target.checked)}/> <span>accept all term and conditions</span>
    // <br></br>
    // <button type="submit">submit</button>
    //       </form>
    //     </div>
    //   )
    // }
//     import users from "./users";
//     function App(){
//       return(
//     <div className="App">
//       <h1>hekk</h1>
//      <Users></Users>
//     </div>
//   )
// }
// export default App
import React from 'react'
import Navbar from './components/Navbar/Navbar'

const App = () => {
  return (
    <div>
      <Navbar />
    
    </div>
  )
}

export default App

