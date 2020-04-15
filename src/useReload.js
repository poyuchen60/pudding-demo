import { useContext, useEffect, useState } from "react";
import HistoryTraceContext from "./HistroyTraceContext";

const useReload = path => {
  const [reload, setReload] = useState(false);
  const from = useContext(HistoryTraceContext);
  useEffect(() => {
    if (from.same === path) {
      setReload(true);
    }
  }, [from, path]);

  return [reload, setReload];
};

export default useReload;
