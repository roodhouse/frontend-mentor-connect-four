import './App.css';
import HomeScreen from './components/HomeScreen';
import RulesScreen from './components/RulesScreen';

function App() {
  return (
    <div className="App">
      <div id='mainWrapper'>
        <div id='mainContainer' className='bg-purple h-screen flex justify-center items-center px-5 md:bg-darkPurple'>
          <div id='homeScreenWrapper' className='hidden'>
            <HomeScreen />
          </div>
          <div id='rulesScreenWrapper' className='w-full'>
            <RulesScreen />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
