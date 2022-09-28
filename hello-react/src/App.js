import './App.css';
import logo from './images/ironhack-logo-xs.png';
import menu from './images/menu-top-xs.png';
import icon1 from './images/icon1.png';
import icon2 from './images/icon2.png';
import icon3 from './images/icon3.png';
import icon4 from './images/icon4.png';




function App() {
  return (
  <div className="App">
     <div className='navbar'> 
     <img className='navbar-logo' src={logo} alt='logo' />
     <img className='navbar-menu' src={menu} alt='Open menu' />
     
     </div>

      <div className='hero'>
      <h1 className='hero-title'>Say hello to ReactJS</h1>
      <p className='hero-description'>
        You will learn how to use the most popular frontend library,
        and becomea super Ninja developer.
      </p>
      <button className='hero-action-button'>Awesome!</button>
      </div>


      <ul className='icon-card-list'>
        <li className='icon-card'>
        <img className='icon-card-image' src={icon1} alt='Icon' />
        <h2 className='icon-card-title'>Declarative</h2>
        <p className='icon-card-description'>
          React makes it painless to create interactive UIs
        </p>
        </li>

        <li className='icon-card'>
        <img className='icon-card-image' src={icon2} alt='Icon' />
        <h2 className='icon-card-title'>Components</h2>
        <p className='icon-card-description'>
          Build encapsulated components that manage their state.
        </p>
        </li>

        <li className='icon-card'>
        <img className='icon-card-image' src={icon3} alt='Icon' />
        <h2 className='icon-card-title'>Single-Way</h2>
        <p className='icon-card-description'>
          A set of immutable values are passed to the component's.
        </p>
        </li>

        <li className='icon-card'>
        <img className='icon-card-image' src={icon4} alt='Icon' />
        <h2 className='icon-card-title'>JSX</h2>
        <p className='icon-card-description'>
        Statically-typed. designed to run on modern browsers.
        </p>
        </li>

      </ul>
      
    </div>
  );
}

export default App;
