import "./App.css";
import Header from "./components/ui/Header/Header";
import Content from "./components/ui/Content/Content";
import { fetchCarers } from "./components/ui/Services/carer.service";
import { useEffect, useState } from "react";
import { CarerInfo } from "./components/ui/Services/types";
import React from "react";

export const CarerContext = React.createContext(undefined);

const App = () => {
  const [carerList, setCarerList] = useState<CarerInfo | null>(null);

  useEffect(() => {
    async function getCarersList() {
      const { data } = await fetchCarers();
      setCarerList(data);
    }
    getCarersList();
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Header></Header>
      <Content carersList={carerList}></Content>
    </div>
  );
};

export default App;
