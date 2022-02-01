import React from 'react'
import './Ideas.css'
import Card from './Card'

const Ideas = ({ ideas, deleteIdea }) => {
  const ideaCards = ideas.map(idea => {
    return (
      <Card 
        title={idea.title}
        description={idea.description}
        id={idea.id}
        key={idea.id}
        deleteIdea={deleteIdea}
      />
    )
  })
  
  return (
    <section className="ideas-container">
      {ideaCards}
    </section>
  )
}

export default Ideas