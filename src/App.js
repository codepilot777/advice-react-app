import './App.css';
import React from 'react';
import axios from 'axios';


class App extends React.Component {
  constructor(){
    super()
    this.state ={
      advice:'',
    }
  }

  componentDidMount () {
    this.fetchAdvice()
  }

  fetchAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
    .then(response => this.setState({advice:response.data.slip.advice}))
    .catch(err => {
      console.log(err);
    })
  }

  render(){
    const {advice} = this.state;
    return (
    <div className="app">
      <div className="card">
        <h1 className="heading">{advice}</h1>
      <button className="button" onClick={this.fetchAdvice}>
        <span>GIVE ME ADVICE!</span>
      </button>
      </div>
    </div>
  )
  }
  
}

export default App;
