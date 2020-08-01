import React from "react"
import uuid from "uuid"
import moment from "moment"

const headers = ["Date", "Start Time", "End Time", "Activity Duration"]

const DashboardHeader = () => (
  <thead key={uuid()}>
    <tr>
      {headers.map(header => (
        <th key={uuid()} className="header-text">
          {header}
        </th>
      ))}
    </tr>
  </thead>
)

const DashboardBody = ({ bodies }) => {
  return (
    <tbody>
      {bodies.length > 0 ?
        bodies.map((body, index) => {
          const startDate = moment(body.start_time, "MMM DD YYYY hh:mmA")
          const endDate = moment(body.end_time, "MMM DD YYYY hh:mmA")
          const date = startDate.format("MMM DD YYYY")
          const startTime = startDate.format("hh:mm A")
          const endTime = endDate.format("hh:mm A")
          const result = moment.duration(endDate.diff(startDate))
          const hrs = result.hours()
          const min = result.minutes()
          return (
            <tr key={`activity-tracker${index}`}>
              <td>{date}</td>
              <td>{startTime}</td>
              <td>{endTime}</td>
              <td>{hrs > 0 ? `${hrs} h ${min} m` : `${min} m`}</td>
            </tr>
          )
        })
        : (
          <tr>
            <td colSpan="5">No Record found</td>
          </tr>
        )
      
      }
    </tbody>
  )
}

const ActivityTable = ({ bodies }) => (
  <table>
    <DashboardHeader />
    <DashboardBody bodies={bodies} />
  </table>
)

export default ActivityTable
