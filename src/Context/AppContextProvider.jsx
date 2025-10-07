import { useEffect, useState } from "react";
import { AppContext } from "./CreateContext";

function AppProvider({ children }) {
  const [idArr, setIdArr] = useState(() => {
    const stored = localStorage.getItem("idArr");
    return stored ? JSON.parse(stored) : [];  
  });

  useEffect(() => {
    localStorage.setItem("idArr", JSON.stringify(idArr));
  }, [idArr]);

  return (
    <AppContext.Provider value={{ idArr, setIdArr }}>
      {children}
    </AppContext.Provider>
  );
}
export default AppProvider;