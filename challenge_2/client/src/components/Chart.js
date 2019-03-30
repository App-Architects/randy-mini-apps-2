/* eslint-disable prefer-const */
/* eslint-disable quote-props */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';


class Chart extends Component {
  constructor(props) {
    super(props);
  }

  chart() {
    const { chartData } = this.props;
    const months = {
      '01': 'Jan',
      '02': 'Feb',
      '03': 'Mar',
      '04': 'Apr',
      '05': 'May',
      '06': 'Jun',
      '07': 'Jul',
      '08': 'Aug',
      '09': 'Sep',
      '10': 'Oct',
      '11': 'Nov',
      '12': 'Dec',
    };
    let data = {
      labels: [],
      legend: false,
      datasets: [
        {
          label: 'Closing Price',
          data: [],
          backgroundColor: 'rgba(0, 0, 0, 0)',
          borderColor: 'rgba(232, 44, 12)',
          pointBackgroundColor: 'rgba(232, 44, 12)',
          borderWidth: 2,
          lineTension: 0,
        },
      ],
    };
    console.log(chartData, 'PROPS');
    chartData.map((elem) => {
      const date = elem.date.slice(5);
      const month = date.substring(0, 2);
      const day = date.substring(3, 5);
      data.labels.push(`${months[month]} ${day}`);
      data.datasets[0].data.push(elem.close);
    });
    return (
      <div className="container">
        <Line
          data={data}
          height={500}
          options={{
            maintainAspectRatio: false,
            elements: { point: { radius: 0 } },
          }
            }
        />
      </div>
    );
  }

  render() {
    return (
      this.chart()
    );
  }
}

export default Chart;
