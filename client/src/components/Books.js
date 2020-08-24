import React, { useState } from "react"
import gql from "graphql-tag"
import { useQuery, useMutation } from "@apollo/react-hooks"
import { Link } from "react-router-dom"
import { List, Button } from "antd"
import { PlusCircleFilled } from "@ant-design/icons"
import { Container } from "./App"
import Progress from "./Progress"
import Cover from "./Cover"
import styled from "styled-components"

const ACTIVE_BOOKS = gql`
  query ActiveBooks {
    books(input: { active: true }) {
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

const Title = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 0;
`

export default function Books() {
  const { data, loading, error } = useQuery(ACTIVE_BOOKS)

  if (loading) {
    return <h1> Loading</h1>
  }

  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <List
      dataSource={data.books}
      itemLayout='vertical'
      header={
        <Container between>
          <Title>Books you are currently reading</Title>
          <Link to='/add'>
            <Button type='primary' shape='round'>
              <PlusCircleFilled />
              Add a New Book
            </Button>
          </Link>
        </Container>
      }
      renderItem={(item) => (
        <List.Item key={item.id}>
          <Container between>
            <Container>
              {/* Dynamic link to Book page */}
              <Link to={`/books/${item.id}`}>
                <Cover
                  color={item.coverColor}
                  title={item.title}
                  author={item.author}
                />
              </Link>
              <div className='book-description' style={{ minWidth: "250px" }}>
                <ul style={{ listStyleType: "none" }}>
                  <li
                    style={{
                      fontWeight: "600",
                    }}
                  >
                    {item.title}
                  </li>
                  <li>
                    <span
                      style={{
                        color: "gray",
                        fontWeight: "600",
                        fontSize: "0.7rem",
                      }}
                    >
                      by
                    </span>{" "}
                    {item.author}
                  </li>
                  <li>
                    <span
                      style={{
                        color: "gray",
                        fontWeight: "600",
                        fontSize: "0.7rem",
                      }}
                    >
                      pages:
                    </span>{" "}
                    {item.pages}
                  </li>
                  <li>
                    <span
                      style={{
                        color: "gray",
                        fontWeight: "600",
                        fontSize: "0.7rem",
                      }}
                    >
                      start date:
                    </span>{" "}
                    {item.startedAt}
                  </li>
                </ul>
              </div>
            </Container>
            <Progress pages={item.pages} progress={item.progress} />
          </Container>
        </List.Item>
      )}
    />
  )
}
