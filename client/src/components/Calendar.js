import React from "react"
import { Calendar as AntCalendar, Badge } from "antd"

// Ant Calendar function
function onPanelChange(value, mode) {
  console.log(value.format("YYYY-MM-DD"), mode)
}

function getListData(value) {
  let listData
  switch (value.date()) {
    case 3:
      listData = [{ color: "#4CAF50", content: "Siddharta" }]
      break
    case 4:
      listData = [{ color: "#4CAF50", content: "Siddharta" }]
      break
    case 5:
      listData = [{ color: "#4CAF50", content: "Siddharta" }]
      break
    case 6:
      listData = [{ color: "#4CAF50", content: "Siddharta" }]
      break
    case 7:
      listData = [{ color: "#4CAF50", content: "Siddharta" }]
      break
    case 8:
      listData = [{ color: "#4CAF50", content: "Siddharta" }]
      break
    case 9:
      listData = [{ color: "#4CAF50", content: "Siddharta" }]
      break
    case 10:
      listData = [
        { color: "#4CAF50", content: "Siddharta" },
        { color: "#0693E3", content: "Candide" },
      ]
      break
    case 11:
      listData = [{ color: "#0693E3", content: "Candide" }]
      break
    case 12:
      listData = [{ color: "#0693E3", content: "Candide" }]
      break
    case 13:
      listData = [
        { color: "#0693E3", content: "Candide" },
        { color: "#BA68C8", content: "Capital" },
      ]
      break
    case 14:
      listData = [
        { color: "#0693E3", content: "Candide" },
        { color: "#BA68C8", content: "Capital" },
      ]
      break
    case 15:
      listData = [
        { color: "#0693E3", content: "Candide" },
        { color: "#BA68C8", content: "Capital" },
      ]
      break
    case 16:
      listData = [
        { color: "#0693E3", content: "Candide" },
        { color: "#BA68C8", content: "Capital" },
        { color: "#FF6900", content: "Gegen Hass" },
      ]
      break
    case 17:
      listData = [
        { color: "#0693E3", content: "Candide" },
        { color: "#BA68C8", content: "Capital" },
        { color: "#FF6900", content: "Gegen Hass" },
      ]
      break
    case 18:
      listData = [
        { color: "#0693E3", content: "Candide" },
        { color: "#BA68C8", content: "Capital" },
        { color: "#FF6900", content: "Gegen Hass" },
      ]
      break
    case 19:
      listData = [
        { color: "#0693E3", content: "Candide" },
        { color: "#BA68C8", content: "Capital" },
        { color: "#FF6900", content: "Gegen Hass" },
      ]
      break
    case 20:
      listData = [
        { color: "#BA68C8", content: "Capital" },
        { color: "#FF6900", content: "Gegen Hass" },
      ]
      break
    case 21:
      listData = [
        { color: "#BA68C8", content: "Capital" },
        { color: "#FF6900", content: "Gegen Hass" },
      ]
      break
    case 22:
      listData = [
        { color: "#BA68C8", content: "Capital" },
        { color: "#FF6900", content: "Gegen Hass" },
      ]
      break
    case 23:
      listData = [{ color: "#BA68C8", content: "Capital" }]
      break
    case 24:
      listData = [{ color: "#BA68C8", content: "Capital" }]
      break
    case 25:
      listData = [{ color: "#BA68C8", content: "Capital" }]
      break

    default:
  }
  return listData || []
}

function dateCellRender(value) {
  const listData = getListData(value)
  return (
    <ul style={{ padding: 0 }}>
      {listData.map((item) => (
        <li
          key={item.content}
          style={{
            listStyle: "none",
            fontSize: "0.7rem",
            color: `${item.color}`,
          }}
        >
          <Badge
            color={item.color}
            text={item.content}
            style={{ fontSize: "0.5rem", color: `${item.color}` }}
          />
        </li>
      ))}
    </ul>
  )
}

function getMonthData(value) {
  if (value.month() === 8) {
    return 1394
  }
}

function monthCellRender(value) {
  const num = getMonthData(value)
  return num ? (
    <div className='notes-month'>
      <section>{num}</section>
      <span>Backlog number</span>
    </div>
  ) : null
}

export default function Calendar() {
  return (
    <AntCalendar
      style={{
        margin: "0 1.5em",
        overflow: "auto",
      }}
      dateCellRender={dateCellRender}
      monthCellRender={monthCellRender}
      onPanelChange={onPanelChange}
    />
  )
}
