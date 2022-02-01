import React from 'react'
import Ideas from './Ideas'
import Form from './Form'
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

  addIdea = newIdea => {
    this.setState({ ideas: [...this.state.ideas, newIdea] })
  }

  // deleteIdea = (id) => {
  //   console.log(id);
  //   const filteredIdeas = this.state.ideas.filter(idea => idea.id != id);

  //   this.setState({ ideas: filteredIdeas });
  // }

  deleteIdea = id => {
    const filteredIdeas = this.state.ideas.filter(idea => idea.id !== id)
    this.setState({ ideas: filteredIdeas })
  }

  render() {
    return (
      <main className="App">
        <h1>Idea Box</h1>
        <Form addIdea={this.addIdea} />
        { !this.state.ideas.length && <h2>There are currently no ideas to display...</h2> }
        <Ideas ideas={this.state.ideas} deleteIdea={this.deleteIdea} />
      </main>
    )
  }
}

export default App