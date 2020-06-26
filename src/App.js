import React from "react";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpenses } from "./components/IncomeExpenses";

function App() {
  return (
    <div>
      <Header />
      <section>
        <Balance />
        <IncomeExpenses />
      </section>
    </div>
  );
}

export default App;
