import React from 'react'
import './App.css'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      ideas: [
        {id: 1, title: 'Learn React', description: 'Get a stupid well-paying job and have a good life.'},
        {id: 2, title: 'Go skiing', description: 'skiing us super fun so I would like to do it.'}      
      ]
    }
  }

  render() {
    return (
      <main className="App">
        <h1>Idea Box</h1>
        <p>Some text here</p>
      </main>
    )
  }
}

export default App