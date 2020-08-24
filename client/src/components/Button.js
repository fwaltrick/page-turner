import React from "react"
import { Button as AntButton } from "antd"
import styled, { css } from "styled-components"

const StyledButton = styled(AntButton)``
export default function Button({ color, children }) {
  return (
    <StyledButton primary={primary} danger={danger}>
      {children}
    </StyledButton>
  )
}
