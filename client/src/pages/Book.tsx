import React from "react"
import { useParams } from "react-router-dom"
import gql from "graphql-tag"
import { useQuery, useMutation } from "@apollo/react-hooks"

interface RouterProps {
  id: string
}

const GET_BOOK = gql`
  query GetBook($id: ID!) {
    book(id: $id) {
      id
      title
      author
      genre
      pages
      progress
      startedAt
      coverColor
    }
  }
`

export const Book: React.FC = () => {
  let { id } = useParams<RouterProps>()
  const { data, loading, error } = useQuery(GET_BOOK, {
    variables: { id },
  })

  if (loading) {
    return <h1> Loading</h1>
  }

  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <div>
      <h1>{data.book.title}</h1>
    </div>
  )
}
