import { useEffect, useState } from "react";
import { CasesContext } from "./Context";
import { List } from "./pages/List";
import { api } from "./services/api";

interface userProps {
  id: number,
  name: string,
  email: string,
  phone: number,
  city: string,
  uf: string
}

interface casesProps {
  id: number;
  title: string;
  desc: string;
  value: number;
  date: number;
  ong_id: number;
}


export function App() {
  const [user, setUser] = useState<userProps>();
  const [cases, setCases] = useState<casesProps[]>([]);

  useEffect(() => {
    api.get('/ongs')
      .then((data) => setUser(data.data.users[0]));

    api.get('/cases')
      .then(data => setCases(data.data.cases));
  }, [])


  return (
    <>
      <CasesContext.Provider value={{user, cases}}>
        <List />
      </CasesContext.Provider>
    </>
  );
}
