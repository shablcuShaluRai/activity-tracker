import React, { useState, useEffect } from "react";
import Modal from "../Modal";
import "./userList.css"

function UserList() {
  const [userListData, setUserList] = useState([]);
  const [open, toggle] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});

  async function getUserData() {
    const response = await fetch(
      "https://api.jsonbin.io/b/5f24f9bb6f8e4e3faf2823f2/3"
    );
    const data = await response.json();
    setUserList(data.members);
  }

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div className="userlist-container">
      {userListData &&
        userListData.map(({ id, real_name, tz, activity_periods }) => (
          <div
            key={id}
            className="userlist"
            onClick={() => {
              setSelectedUser({ id, activityPeriod: activity_periods });
              toggle(true);
            }}
          >
            <img
              alt={`alt ${real_name}`}
              src={`https://robohash.org/galinda?set=set2`}
            />
            <p>{real_name}</p>
            <p>{tz}</p>
          </div>
        ))}
      {open && <Modal selectedUser={selectedUser} toggle={toggle} />}
    </div>
  );
}

export default UserList;
