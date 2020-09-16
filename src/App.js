import React, { Component } from 'react';
import './App.css';
import Nav from './components/nav';
import Counters from './components/counters';

class App extends Component {

  state = {
      counters : [
        {id : 1 , value: 4 },
        {id : 2 , value: 0 },
        {id : 3 , value: 0 },
        {id : 4 , value: 0 },
      ]
  }


  handleIncrement =(counter)=>{
    const counters  = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] ={...counter};
    counters[index].value++;
    this.setState({counters});  
  }



handleDelete =(counterId)=>{
  const counters = this.state.counters.filter(c=>c.id !== counterId);
    this.setState({counters});
    };



  handleReset=()=>
    {
        let counters = [...this.state.counters];
        counters = counters.map((counter)=>{
            counter.value = 0;
            return counter;
        })
        console.log(this.state.counters);
        this.setState({counters});
    }


    handleDecrement=(counter)=>{
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index] = {...counter};
      counters[index].value--;
      this.setState({counters});
    }


    render(){
    const count = this.state.counters.filter(c=>c.value !==0).length;


    return (
      <React.Fragment>
      <Nav count = {count}/>
        <main className= "container" >
  
          <Counters
            counters={this.state.counters}
            onDelete = {this.handleDelete}
            onReset = {this.handleReset}
            onIncrement = {this.handleIncrement}
            onDecrement = {this.handleDecrement}
    />
  
        </main>
      </React.Fragment>

    );
  }


}


export default App;
