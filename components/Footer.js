import React,{Component} from 'react';

class Footer extends Component{
    render(){
        return(
           <header>
               <div>{this.props.footer}</div>
           </header>
        );
    }
}

export default Footer;


