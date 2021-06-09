import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Speaker",
    amount: 1000,
    date: new Date(2020, 5, 14),
  },
  { id: "e2", title: "New TV", amount: 20000, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Glasses",
    amount: 2000,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };

  return (
    <div>
      <NewExpense onAddExpenseHandler={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
