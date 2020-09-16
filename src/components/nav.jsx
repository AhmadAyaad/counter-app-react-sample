import React ,{Component} from 'react';

// class Nav extends Component {
//     render() { 
//         return (
         
//          <nav class="navbar navbar-light bg-light">
//          <span class="navbar-brand mb-0 h1">Navbar{this.props.count}</span>
         
//          </nav>

//           );
//     }
// }


    ///stateless functional component
    ///cause this component does not have state and any methods 

    const Nav = ({count}) => {
        return (  
            <nav className="navbar navbar-light bg-light">
                <span className="navbar-brand mb-0 h1">NavBar: {count}</span>
            </nav>

        );
    }

    
export default Nav;