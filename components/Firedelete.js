import React,{Component} from 'react'
import firebase from 'firebase'
import 'firebase/storage'
import Router from "next/router";

class Firedelete extends Component{
    style={
        fontSize:"12pt",
        padding:"5px 10px"
    }

    // 初期化処理
    constructor(props){
        super(props);
        this.state = {
            id_str:''
        }
        this.doChange = this.doChange.bind(this);
        this.doAction = this.doAction.bind(this);
    }

    doChange(e){
        this.setState({
            id_str:e.target.value
        })
    }

    doAction(e){
        this.deleteFireDate();
        Router.push('/fire');
    }

    // 項目の削除
    deleteFireDate(){
        let id = this.state.id_str;
        let db = firebase.database();
        let ref = db.ref('sample/' + id);
        ref.remove();
    }

    render(){
        return(
            <div>
                <table>
                    <tbody>
                        <tr>
                            <th className="label">ID:</th>
                            <td><input type="text" placeholder="delete ID:"
                            onChange={this.doChange}
                            value={this.state.id_str} /></td>
                        </tr>
                        <tr><th></th><td>
                            <button onClick={this.doAction}>Delete</button>    
                        </td></tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Firedelete;