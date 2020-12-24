import React,{Conponent} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import style from '../static/Style';

class Layout extends Conponent{
    render(){
        return(
            <div>
                {style}
                <Header header={this.props.header} 
                title={this.props.title} />
                    {this.props.children}
                <Footer footer="copyright"  />
            </div>
        );
    }
}

export default Layout;


