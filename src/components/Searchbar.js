import { render } from '@testing-library/react';
import React from 'react';
import './Searchbar.css';


class Searchbar extends React.Component {
    state = { result : ""};
     
   OnSubmitHandler = (event) => {
       event.preventDefault();

        this.props.OnSubmit(this.state.result);
    };

    render(){
        return(
            <div>
<div className=" ui  ">
<form onChange={this.OnSubmitHandler}>

  <input className='searchbar' type="text" placeholder="Search..." value={this.state.result} onChange = { (event) => { console.log(event.target.value); this.setState({result : event.target.value});}} />
  
  </form>
            </div>
            <br /><br /><br />
            <h1><center>{this.state.result}</center></h1>
            
</div>
        );
    }
 
};

export default Searchbar;