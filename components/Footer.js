import React,{Conponent} from 'react';

class Footer extends Conponent{
    render(){
        return(
           <header>
               <div>{this.props.footer}</div>
           </header>
        );
    }
}

export default Footer;


