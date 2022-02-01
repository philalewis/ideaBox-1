import React from 'react'
import './Card.css'

const Card = ({ title, description, id, deleteIdea }) => {
  return (
    <section className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={() => deleteIdea(id)}>🗑</button>
    </section>
  )
}

export default Card