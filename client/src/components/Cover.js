import React from "react"
import "../styles/css/styles.css"
import styled from "styled-components"

const BookCover = styled.div`
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  min-width: 10em;
  text-align: center;
  height: 14em;
  background: ${(props) => props.color};
  position: relative;
  box-shadow: 3px -3px #3c3744;
`

const BookTag = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  width: 120px;
  padding-top: 1em;
  padding-bottom: 1em;
  background: white;
  text-align: center;
  font-size: 0.8rem;
  padding-top: 0.5em;
`

const Author = styled.p`
  margin: 0;
  color: #696969;
  font-weight: 600;
  font-size: 0.7rem;
`

const Title = styled.p`
  margin: 0.5em;
  line-height: 0.9rem;
  font-weight: 200;
  color: #000;
`

// Function to truncate author and title if their length is too long
// Character length limit => Author: 17, Title: 29
const truncate = (text, limit) => {
  if (text.length > limit) {
    text = text.substring(0, limit) + "..."
  }
  return text
}

export default function Cover({ title, author, color }) {
  return (
    <div>
      <BookCover color={color}>
        <BookTag>
          <Author>{truncate(author, 17)}</Author>
          <Title>{truncate(title, 29)}</Title>
        </BookTag>
      </BookCover>
    </div>
  )
}
