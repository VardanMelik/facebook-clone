import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';

function App() {
 
  return (
    // DEM naming convention
    <div className="App">
      <Header />
      <div className="app__body">
        <Sidebar/>
        <Feed />
        {/* Widget */}
      </div>
     
    </div>
  );
}

export default App;
