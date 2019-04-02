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
            this.setState({
                data: res.data
            })
        })
        .catch(err => {
            console.log(err);
        })
    }

    form() {
        return (
            <div className="form ">
            <form onSubmit={this.handleSubmit.bind(this)}>
                <div className="form-group">
                    <label>History Search</label>
                    <input type="text" id="query" className="form-control" placeholder="Egypt" />
                </div>
                <div>
                    <button type="submit" className="btn btn-primary">Search</button>
                </div>
            </form>
            <br />
            <hr></hr>
            </div>
        )
    }

    list() {
        const { data } = this.state;
        return (
            <div className="list">
                <ul className="list-group list-group-flush">
                {data.map((elem, i) => {
                    return <li className="list-group-item">
                        <p><b>Year:</b> {elem.date} </p>
                        <p><b>Location:</b> {elem.category2}</p>
                        <p><b>Description:</b> {elem.description}</p>
                    </li>
                })}
                </ul>
            </div>
            )
    }

    render() { 
        const { data } = this.state;
        console.log(data, 'STATE')
        return (
            <div>
                {this.form()}
                {this.list()}
            </div>
        );
    }
}
 
export default App;