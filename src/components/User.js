import React, { Component } from 'react';

export default class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: this.props.user.check
        };
    }

    render() {
        return (
            <div>
                <div className="card horizontal">
                    <div className="user-check">
                        <p>
                            <input type="checkbox" className="filled-in" id={ 'check' + this.props.index } defaultChecked={ this.state.isChecked } onChange={ this.onChange.bind(this) }/>
                            <label htmlFor={ 'check' + this.props.index }></label>
                        </p>
                    </div>
                    <div className="card-stacked">
                        <div className="card-content user-title">
                            <p>{ this.props.user.name }</p>
                        </div>
                        <div className="card-content">
                            <p>{ this.props.user.email }</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    onChange() {
        this.props.user.check = !this.state.isChecked;
        this.setState({
            isChecked: !this.state.isChecked
        });

        this.props.checked();
    }
}