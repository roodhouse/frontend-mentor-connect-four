import './App.css';
import HomeScreen from './components/HomeScreen';

function App() {
  return (
    <div className="App">
      <div id='mainWrapper'>
        <div id='mainContainer' className='bg-purple h-screen flex justify-center items-center px-5'>
          <div id='homeScreenWrapper'>
            <HomeScreen />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
