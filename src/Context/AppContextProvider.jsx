import { useEffect, useState } from "react";
import { AppContext } from "./CreateContext";
const arrKey='article';
function AppProvider({ children }) {
  const [objArr, setObjArr] = useState(()=>{
    try {
            const rawData = localStorage.getItem(arrKey);
            if (!rawData) return [];
            return JSON.parse(rawData);
        } catch (error) {
            console.error("Error parsing todos from localStorage:", error);
            return [];
        }
    }
  );

  useEffect(() => {
    localStorage.setItem(arrKey, JSON.stringify(objArr));
  }, [objArr]);

  return (
    <AppContext.Provider value={{ objArr, setObjArr }}>
      {children}
    </AppContext.Provider>
  );
}
export default AppProvider;