import { DarkModeProvider } from "./components/context/DarkmodeContext";
import Header from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";
import { useState } from "react";

const filters = ["all", "active", "completed"];
function App() {
  const [filter, setFilter] = useState(filters[0]);
  return (
    <DarkModeProvider>
      <Header
        filters={filters}
        selectedFilter={filter}
        onFilterChange={setFilter}
      />
      <TodoList filter={filter} />
    </DarkModeProvider>
  );
}

export default App;
