import React from 'react';
// import logo from './logo.svg';
import './App.css';
import divOne from './components/divOne';

const App = (props) => {

  const [state, setState] = React.useState({
    tardis: {
      name: "Time and Relative Dimension in Space",
      caps: false
    }
  })



  return (
    <div className="App">
      {/* what is the purpose of tardis */}
      <divOne tardis={state} />
    </div>
  )
}



export default App;
