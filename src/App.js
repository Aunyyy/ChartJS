import './App.css';
import LineChart from './components/LineChart';

function App() {

  const data = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 30 },
    { year: 2016, count: 28 },
  ];

  const userData = {
    labels: data.map(row => row.year),
    datasets: [
      {
        label: 'Users Gained',
        data: data.map(row => row.count),
        backgroundColor : ["#000000"],
        borderColor : ["#f3ba2f"]
      }
    ]
  }

  return (
    <div className="App">
      <div className="line-chart">
        <LineChart chartData={userData} />
      </div>
    </div>
  );
}

export default App;
