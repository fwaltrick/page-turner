import React from "react"
import { Layout as AntLayout } from "antd"
import {
  LinkedinOutlined,
  GithubOutlined,
  MailOutlined,
  GlobalOutlined,
} from "@ant-design/icons"
import Logo from "../images/pt_logo.svg"
import Navbar from "./Navbar"

export default function Layout({ children }) {
  const { Header, Content, Footer } = AntLayout

  return (
    <AntLayout style={{ background: "#fff" }}>
      <Header
        style={{
          background: "#fff",
          justifyContent: "flex-start",
        }}
      >
        <Navbar />
      </Header>
      <Content className='content'>{children}</Content>
      <Footer style={{ background: "#fffb0a", color: "#3c3744" }}>
        <div>
          PageTurner ©2020 Created by Fabricio Waltrick for portfolio purposes
          only{" "}
          <a target='_blank' href='https://github.com/fwaltrick'>
            <GlobalOutlined
              style={{ marginLeft: "0.5rem", fontSize: "1.1rem" }}
            />
          </a>
          <a target='_blank' href='https://github.com/fwaltrick'>
            <GithubOutlined
              style={{ marginLeft: "0.5rem", fontSize: "1.2rem" }}
            />
          </a>
          <a
            target='_blank'
            href='https://www.linkedin.com/in/fabricio-waltrick-988352164/'
          >
            <LinkedinOutlined
              style={{ marginLeft: "0.5rem", fontSize: "1.2rem" }}
            />
          </a>
          <a href='mailto:fabricio.waltrick@gmail.com'>
            <MailOutlined
              style={{ marginLeft: "0.5rem", fontSize: "1.2rem" }}
            />
          </a>
        </div>
      </Footer>{" "}
    </AntLayout>
  )
}
