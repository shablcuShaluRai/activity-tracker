import React, { useState, useEffect } from "react"

function UserList() {
  const [userListData, setUserList] = useState([])

  async function getUserData() {
    const response = await fetch(
      "https://api.jsonbin.io/b/5f21ba57c1edc4661760f18f"
    )
    const data = await response.json()
    setUserList(data.members)
  }

  useEffect(() => {
    getUserData()
  }, [])

  return (
    <div>
      {userListData && userListData.map(({id, real_name, tz }) => (
        <div key={id}>
          <p>{real_name}</p>
          <p>{tz}</p>
        </div>
      ))}
    </div>
  )
}

export default UserList