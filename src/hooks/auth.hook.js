import {useState, useCallback, useEffect} from 'react';

const storageName = 'userData';

export const useAuth = () => {
  const [token, setToken] = useState(null);
  const [usrID, setUsrId] = useState(null);

  const login = useCallback((jwtToken, id) => {
      setToken(jwtToken);
      setUsrId(id);

      localStorage.setItem(storageName, JSON.stringify({
          usrID:id, token:jwtToken
      }))
  }, []);

  const logout = useCallback(() => {
      setToken(null);
      setUsrId(null);

      localStorage.removeItem(storageName);
  }, []);

  useEffect(() => {
      const data = JSON.parse(localStorage.getItem(storageName));
      if (data && data.token) {
          login(data.token, data.usrID);
      }
  }, [login]);

  return{login, logout, token, usrID};
};