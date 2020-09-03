import React from "react"
import { Result, Button } from "antd"
import { Container } from "../components/App"
// import ErrorImg from "../images/errorImg.svg"
const ErrorImg = require("../images/errorImg.svg") as string

export default function Shelves() {
  return (
    <Container
      center
      align
      style={{
        width: "100%",
        padding: "3.2em",
        borderTop: "1px solid #dcdad0",
      }}
    >
      <Result
        icon={<ErrorImg />}
        status='warning'
        title='oh no!'
        subTitle='Sorry, the Shelves page is under construction.'
        extra={<Button type='primary'>Back Home</Button>}
      />
    </Container>
  )
}
