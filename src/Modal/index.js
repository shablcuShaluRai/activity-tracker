import React, { useState } from "react"
import moment from "moment"
import DatePicker from "react-datepicker"

import "react-datepicker/dist/react-datepicker.css"
import "./modal.css"

function dateIsSame(selectedDate, startDate) {
  let parseStartDate = moment(startDate, "MMM DD YYYY")
  let parseSelectedDate = moment(selectedDate, "MMM DD YYYY")
  const dateIsSame = moment(parseStartDate).isSame(moment(parseSelectedDate))
  return dateIsSame
}

function Modal({ selectedUser, toggle }) {
  const { id, activityPeriod } = selectedUser
  const [startDate, setStartDate] = useState("")
  const result = startDate ? activityPeriod.filter(acf => dateIsSame(startDate, acf.start_time)) : activityPeriod
  return (
    <div className="modal">
      <div className="modal_content">
        <span className="close" onClick={() => toggle(false)}>
          &times;
        </span>
        {result.map(({ start_time, end_time }) => {
          let a = moment(start_time, "MMM DD YYYY hh:mmA")
          let b = moment(end_time, "MMM DD YYYY hh:mmA")
          let result = moment.duration(b.diff(a))
          let hrs = result.hours()
          let min = result.minutes()
          return (
            <div key={id}>
              <div>{`${hrs}h ${min}m`}</div>
              <div>{start_time}</div>
              <div>{end_time}</div>
            </div>
          )
        })}
        <DatePicker selected={startDate} onChange={setStartDate} />
      </div>
    </div>
  )
}

export default Modal
