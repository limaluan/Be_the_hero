import { CasesContextProvider } from "./hooks/useCase";
import { List } from "./pages/List";

export function App() {
  return (
    <CasesContextProvider>
      <List />
    </CasesContextProvider>
  );
}
