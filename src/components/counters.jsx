import React, {Component} from 'react';
import Counter from '../components/counter';

class Counters extends Component{


    render()
    {
        const {onReset , onDelete , onIncrement , onDecrement} =this.props;

        return (

            <div>
                {/* <Counter/>
                <Counter/>
                <Counter/>
                <Counter/> */}

                    <button onClick = {onReset}>Reset </button>
                
                {this.props.counters.map(counter=> 
                                    <Counter key= {counter.id} 
                                    counter= {counter} 
                                    onIncrement= {onIncrement}
                                    onDelete= {onDelete} 
                                    id = {counter.id}
                                    value = {counter.value}
                                    onDecrement ={onDecrement}
                                    />
                                         )}
            </div>
            
        );
    }

}
export default Counters;