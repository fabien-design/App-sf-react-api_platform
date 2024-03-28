import './App.css';
import React, { Component } from 'react';


class App extends Component {
    state = {
        post: {}
    }
    
    componentDidMount(){
        fetch('http://127.0.0.1:8003/api/products/1')
        .then(response => {
        return response.json();
        })
        .then(data => this.setState({post: data}));
    };
    render() {
      return (
        <div className="App">
            <h1>Hello World</h1>
            <p>{this.state.post.name}</p>
        </div>
      );
    }
}


export default App;
