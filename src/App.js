
import './App.css';
import Countries from './component/Countries/Countries';


function App() {
  return (
    <div className="App">
      <Countries></Countries>
    </div>
  );
}

/* function Loadcountries(){
  const [countries, setCountries] = useState([])
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setCountries(data))
  },[])
  return (
    <div>
      <h1>Visiting all the country around the globe!</h1>
      <h3>Countries Availabe: {countries.length}</h3>
    </div>
  )
} */


export default App;
