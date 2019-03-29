/* eslint-disable prefer-const */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import $ from 'jquery';
import Axios from 'axios';
import Chart from './components/Chart';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: [],
    };
  }

  componentWillMount() {
    Axios.get('https://api.coindesk.com/v1/bpi/historical/close.json?start=2019-02-01&end=2019-09-05')
      .then((res) => {
        const arrData = [];
        $.each(res.data.bpi, (k, v) => {
          arrData.push({ date: k, close: v });
        });
        this.setState({
          chartData: arrData,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { chartData } = this.state;
    return (
      <div>
        <Chart chartData={chartData} />
      </div>
    );
  }
}

export default App;
