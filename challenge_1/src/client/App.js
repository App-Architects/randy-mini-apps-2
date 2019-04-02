import React, { Component } from 'react';
import Axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
        }
    }

    handleSubmit(e) {
        e.preventDefault()
        console.log(e.target.query.value)
        Axios.get(`/events?q=${e.target.query.value}`)
        .then(res => {
            console.log(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }

    form() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                <div className="col-sm-3">
                    <label>Keyword Search</label>
                    <input type="text" id="query" className="form-control" placeholder="Egypt" />
                    <button type="submit" className="btn btn-primary">Search</button>
                </div>
                </div>
            </form>
        )
    }

    render() { 
        return (
            <div>
                {this.form()}
            </div>
        );
    }
}
 
export default App;