import Maindash from './components/mainDash/maindash';
import Rightside from './components/RightSide/rightside';
import Sidebar from './components/sidebar/sidebar';
import './sass/main.scss';

function App() {
  return (
    <div className='App'>
      <div className='AppGlass'>
      <Sidebar />
      <Maindash />
      <Rightside />
      </div>
    </div>
  );
}

export default App;
