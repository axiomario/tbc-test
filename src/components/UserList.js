import React, { Component } from 'react';
import { observer } from 'mobx-react';

import users from '../controllers/UserController';
import User from './User';

declare var Materialize;

export class UserList extends Component {
    constructor() {
        super();
        this.state = { counter: "" };
    }

    render() {
        let list = [];

        users.array.forEach((value, index) => {
            list.push(<User key={ index } user={ value } index={ index } checked={ this.onChecked.bind(this) }/>);
        });

        return (
            <div className="container">
                <br/>
                <h5>{ this.state.counter }</h5>
                { list }
                <a className="waves-effect waves-light btn" onClick={ this.showNames }><i className="material-icons left">check</i>Confirm</a>
                <br/>
                <br/>
            </div>
        );
    }

    onChecked() {
        let count = 0;

        users.array.forEach((value, index) => {
            if (value.check) count++;
        });

        this.setState({
            counter: count > 0 ? "" + count + " of " + users.array.length + " selected" : ""
        });
    }

    showNames() {
        console.clear();
        users.array.forEach((value, index) => {
            if (value.check) {
                Materialize.toast(value.name, 4000);
                console.log(value.name);
            }
        });
    }
}

export default observer(UserList);