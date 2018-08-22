import React, { Component } from 'react';
import axios from 'axios';

class Comic extends Component {

  constructor(){
    super();
    this.state = {
      comic: {},
      input: ''
    }
  }

  componentDidMount(){
    axios.get('/api/comic')
      .then(response => {
        console.log('response: ', response);
        this.setState({
          comic: response.data,
          input: response.data.transcript
        })
      })
  }

  getRandom = () => {
    axios.get('/api/comic')
      .then(response => {
        console.log('response: ', response);
        this.setState({
          comic: response.data
        })
      })
  }

  editTranscript = () => {
    axios.put(`/api/comic`, {transcript: this.state.input})
      .then(response => {
        console.log('response: ', response);
        this.setState({
          comic: response.data
        })
      })
  }


  render() {
    console.log(this.state);
    const {comic} = this.state
    return (
      <div>
        <button onClick={this.getRandom}>Random</button>
        <h2>{comic.title}</h2>
        <img src={comic.img} alt=""/>
        <p>{comic.transcript}</p>
        <input type="text" value={this.state.input} onChange={(e) => this.setState({ input: e.target.value })}/>
        <button onClick={this.editTranscript}>Submit</button>
      </div>
    );
  }
}

export default Comic;