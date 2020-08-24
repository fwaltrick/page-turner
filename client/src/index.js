import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { ApolloProvider } from "@apollo/react-hooks"
import App from "./components/App"
import client from "./client"

const Root = () => (
  <Router>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Router>
)
ReactDOM.render(<Root />, document.getElementById("root"))

if (module.hot) {
  module.hot.accept()
}
