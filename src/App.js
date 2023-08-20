import './App.css';
import HomeScreen from './components/HomeScreen';
import RulesScreen from './components/RulesScreen';

// need to go back and adjust the cpu game based on the bonus specs
// bug 1: home screen needs to be dark purple at 768 and greater

function App() {

  return (
    <div className="App">
      <div id='mainWrapper'>
        <div id='mainContainer' className='bg-purple h-screen flex justify-center items-center px-5'>
          <div id='homeScreenWrapper' className='hidden'>
            <HomeScreen />
          </div>
          <div id='rulesScreenWrapper' className='w-full max-w-[480px]'>
            <RulesScreen />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
