import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import  Counters from './components/counters.jsx';
import Heart from './components/heart';


const element = <h1>hello </h1>

ReactDOM.render(<Heart/>,
  document.getElementById('root')
  );

const jobs = [
  {"id" : 1, "title" : "SWA"} ,
  {"id" : 2, "title" :"QA"}
];

const colors = ["red , green"];
const newList= colors.map(color=>`<li>${color}</li>`);

let titles = jobs.filter(job=>job.title==="SWA");
console.log(titles);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
