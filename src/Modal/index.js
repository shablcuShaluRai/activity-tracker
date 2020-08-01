import React, { useState } from "react"
import moment from "moment"
import DatePicker from "react-datepicker"
import ActivityTable from "./ActivityTable"
import "react-datepicker/dist/react-datepicker.css"
import "./modal.css"

function dateIsSame(selectedDate, startDate) {
  let parseStartDate = moment(startDate, "MMM DD YYYY")
  let parseSelectedDate = moment(selectedDate, "MMM DD YYYY")
  const dateIsSame = moment(parseStartDate).isSame(moment(parseSelectedDate))
  return dateIsSame
}

function Modal({ selectedUser, toggle }) {
  const { activityPeriod } = selectedUser
  const [startDate, setStartDate] = useState("")
  const result = startDate
    ? activityPeriod.filter(acf => dateIsSame(startDate, acf.start_time))
    : activityPeriod
  return (
    <div className="modal">
      <div className="modal_content">
        <div className="datepicker-container">
          <DatePicker
            selected={startDate}
            onChange={setStartDate}
            placeholderText="MM/DD/YYYY"
            className="date-picker"
            maxDate={moment.now()}
          />
          <span className="close" onClick={() => toggle(false)}>
            &times;
          </span>
        </div>
        <ActivityTable bodies={result} />
      </div>
    </div>
  )
}

export default Modal
