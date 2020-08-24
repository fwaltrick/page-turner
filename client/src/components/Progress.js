import React from "react"
import { Progress as AntProgress, Tag, Button } from "antd"
import { BookFilled } from "@ant-design/icons"
import { Container } from "./App"

export default function Progress({ pages, progress }) {
  const percentage = (progress) => {
    if (!progress) {
      return 0
    } else if (progress >= pages) {
      return 100
    } else {
      return Math.round((progress / pages) * 100)
    }
  }

  return (
    <Container column around>
      <AntProgress
        type='circle'
        width={120}
        strokeColor='#096dd7'
        percent={percentage(progress)}
      />

      {percentage(progress) === 100 && (
        <Container column around>
          <p
            style={{
              textAlign: "center",
              color: "#5b8c00",
              fontWeight: "600",
              marginBottom: "0.3em",
            }}
          >
            Book finished!
          </p>
          <Button shape='round'>Shelve it</Button>
        </Container>
      )}
    </Container>
  )
}
