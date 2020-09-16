import React , {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';

//controlled Component

class Counter extends Component{

    // state = {
//     count : this.props.counter.value 
// }
 
products =[ '3nb', 'btee5' , 'roman'] ;


///for styling
//   styles = {
//       fontSize: 50 , 
//       fontWeight: "bold"
//   } ;

    // constructor(){
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    // handleIncrement = (number)=>{
    //     console.log(this, "this is the this");
    //     console.log(number);
    //     this.setState({count : this.state.count +1});
    // }


    render(){
        console.log(this.props , "propssssssss");

        return (
                    <div className = "row">

                        <div className = "col-12">


                 <h2>counter# {this.props.id}</h2> 
                
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                
                <button 
                onClick = {()=>this.props.onIncrement(this.props.counter)}
                 className = "btn btn-success">+</button>

                <button
                onClick = {()=>this.props.onDecrement(this.props.counter)}
                disabled = {this.props.counter.value ===0}
               className ="btn ml-3 btn-primary">_</button>


                 <button 
                 onClick ={()=>this.props.onDelete(this.props.counter.id)} 
                 className="ml-3 btn btn-danger">Delete </button>   
                   

                            </div>
                        </div>  
                        // {/* {this.renderProducts()} */}
                        // {/* {this.products.length ===3 && <h1>nonono</h1>} */}


        )}


        renderProducts (){
            if(this.products.length ===0) return <p>no elements</p>;
    
            return <ul>{this.products.map(product=><li key ={product}>{product}</li>)}</ul>
        }
    


    getBadgeClasses() {
        let classes = "badge ml-1 mt-2 mr-4 badge-";
        classes += this.props.value === 0 ? "warning" : "primary";
        return classes;
    }

        formatCount(){
            const count  = this.props.value; 
            return count ===0 ? <span>Zero</span> : count;
        }
    
}

export default Counter;