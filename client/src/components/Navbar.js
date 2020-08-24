import React from "react"
import { Switch, Route, Link } from "react-router-dom"
import { Menu } from "antd"
import { BookOutlined } from "@ant-design/icons"
import styled, { css } from "styled-components"
import { Container } from "./App"
import Logo from "../images/pt_logo.svg"

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
`

export default function Navbar() {
  return (
    <Container between style={{ width: "100%" }}>
      <StyledLink to='/'>
        <Logo style={{ height: "48px" }} />
      </StyledLink>
      <Menu mode='horizontal' style={{ fontSize: "1.1rem" }}>
        <Menu.Item key='shelves'>
          <Link to='/shelves'>
            <BookOutlined />
            Your Shelves
          </Link>
        </Menu.Item>
      </Menu>
    </Container>
  )
}
