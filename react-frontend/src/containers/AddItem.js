import React, { Component } from 'react'

export default class AddItem extends Component {
    constructor(){
        super();
        this.state = [];

    render() {
        return (
            <div>
                <Button variant="contained" color="primary">ADD</Button>
            </div>
        )
    }
}
