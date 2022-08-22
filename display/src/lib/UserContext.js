import { useState } from 'react';
import { createContext } from 'react';
const HenrikDevValorantAPI = require('unofficial-valorant-api');
const VAPI = new HenrikDevValorantAPI();

export const UserContext = createContext(null);

const userData = {
  username: localStorage.getItem('username'),
  tag: localStorage.getItem('tag'),
};

export function UserProvider({ children }) {
  const [data, setData] = useState([]);
  const [mmr, setMmr] = useState([]);


  const fetchData = e => {
    const name = `${userData.username}`;
    const tag = `${userData.tag}`;

    VAPI.getAccount({ name, tag }).then(resp => {
      setData(resp.data);
    });
  };

  const fetchDataMMR = e => {
    const name = `${userData.username}`;
    const tag = `${userData.tag}`;
    const version = 'v1';
    const region = 'na';

    VAPI.getMMR({ version, region, name, tag }).then(resp => {
      setMmr(resp.data);
    });
  };

  return (
    <UserContext.Provider
      value={{
        userData,
        data,
        mmr,
        fetchData,
        fetchDataMMR,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}