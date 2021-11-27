// import logo from './logo.svg';
import { Fragment } from 'react';
import './App.css';
import Auth from './components/Auth';
import Counter from './components/Counter';
import Header from './components/Header';

function App() {
  return (
    <Fragment>
      <Header></Header>
      <div className="App">
        <Auth></Auth>
        <Counter></Counter>
      </div>
    </Fragment>
  );
}

export default App;
