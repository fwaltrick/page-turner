import React, { useState } from "react"
import Calendar from "../components/Calendar"
import Books from "../components/Books"
import { Container } from "../components/App"
import styled, { css } from "styled-components"

const ContainerBooksList = styled.div`
  --scrollbarBG: #b8c6cc;
  --thumbBG: #e87e35;
  width: 45%;
  min-width: 380px;
  height: 100vh;
  overflow: scroll;
  background: #dcdad0;
  padding: 1em 2em;
  scrollbar-width: thin;
  scrollbar-color: var(--thumbBG) var(--scrollbarBG);
  overflow-x: hidden;

  &&::-webkit-scrollbar {
    width: 11px;
  }

  &&::-webkit-scrollbar-track {
    background: var(--scrollbarBG);
  }
  &&::-webkit-scrollbar-thumb {
    background-color: var(--thumbBG);
    border-radius: 6px;
    border: 3px solid var(--scrollbarBG);
  }
`

const ContainerCalendar = styled.div`
  width: 55%;
  height: 100vh;
  border-top: 1px solid #dcdad0;
  overflow: scroll;
`

export default function Home() {
  return (
    <Container>
      <ContainerBooksList>
        <Books />
      </ContainerBooksList>
      <ContainerCalendar>
        <Calendar />
      </ContainerCalendar>
    </Container>
  )
}
