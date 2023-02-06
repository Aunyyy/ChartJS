import './App.css';
import LineChart from './components/LineChart';
import { useState, useEffect } from 'react';

function App() {

  let data = [
    { year: 2010, count: 12 },
    { year: 2011, count: 42 },
    { year: 2012, count: 30 },
    { year: 2013, count: 72 },
    { year: 2014, count: 55},
    { year: 2015, count: 83 },
    { year: 2016, count: 74 },
  ];

  const [userData, setUserData] = useState(
  {
    labels: data.map(row => row.year),
    datasets: [
      {
        label: 'Users Gained',
        data: data.map(row => row.count),
        backgroundColor : ["#000000"],
        borderColor : ["#f3ba2f"]
      }
    ]
  })

  useEffect(() => {
    const interval = setInterval(() => {
      data = data.map(row => {
        row.count = Math.floor(Math.random() * 101);
        return row;
      });
      setUserData(userData => ({
        labels: data.map(row => row.year),
        datasets: [
          {
            label: 'Users Gained',
            data: data.map(row => row.count),
            backgroundColor : ["#000000"],
            borderColor : ["#f3ba2f"]
          }
        ]
    }));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <div className="line-chart">
        <LineChart chartData={userData} />
      </div>
    </div>
  );
}

export default App;
