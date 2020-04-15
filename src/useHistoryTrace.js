import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const useHistoryTrace = () => {
  const history = useHistory();
  const [from, setFrom] = useState({
    same: false,
    history: []
  });
  useEffect(() => {
    if (history.location.state && history.location.state.redirect) {
      history.location.state = false;
      return;
    }
    setFrom(f => {
      const s = f.history;
      const p = history.location.pathname;
      const newHistory =
        s.length >= 20
          ? [...s.slice(10), history.location.pathname]
          : [...s, history.location.pathname];
      return {
        same: s[s.length - 1] === p && p,
        history: newHistory
      };
    });
  }, [history.location]);

  return from;
};

export default useHistoryTrace;
