import React from "react"
import { Link, Switch, Route, useLocation } from "react-router-dom"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import Layout from "./Layout"
import Home from "../pages/Home"
import Book from "../pages/Book"
import Shelves from "../pages/Shelves"
import styled, { css } from "styled-components"
import "../../src/styles/css/antd.css"
import "../../src/styles/css/styles.css"

export const Container = styled.div`
  display: flex;
  ${({ between }) =>
    between &&
    css`
      justify-content: space-between;
    `}
  ${({ around }) =>
    around &&
    css`
      justify-content: space-around;
    `}
  ${({ center }) =>
    center &&
    css`
      justify-content: center;
    `}    
  ${({ align }) =>
    align &&
    css`
      align-items: center;
    `}
  ${({ column }) =>
    column &&
    css`
      flex-direction: column;
    `}
`

const App = () => {
  const location = useLocation()
  console.log(location.key)
  return (
    <Layout>
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          timeout={{ enter: 400, exit: 400 }}
          classNames={"fade"}
        >
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/shelves'>
              <Shelves />
            </Route>
            <Route exact path='/books/:id'>
              <Book />
            </Route>
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </Layout>
  )
}

export default App
