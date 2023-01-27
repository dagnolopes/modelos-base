import { Grupo } from "./styles";
import { createContext, useContext, useState } from "react";

const CycleContext = createContext({} as any);

function NewCycleForm() {
  const { activeCycle, setActiveCycle } = useContext(CycleContext);
  return (
    <h1>
      NewCycleForm {activeCycle}
      <button onClick={() => setActiveCycle((state: number) => state + 1)}>
        Alterar ciclo ativo
      </button>
    </h1>
  );
}

function Countdown() {
  const { activeCycle } = useContext(CycleContext);
  return <h1> Countdown {activeCycle}</h1>;
}

export function Contexto() {
  const [activeCycle, setActiveCycle] = useState(0);

  return (
    <CycleContext.Provider value={{ activeCycle, setActiveCycle }}>
      <div>
        <NewCycleForm />
        <Countdown />
      </div>
    </CycleContext.Provider>
  );
}
