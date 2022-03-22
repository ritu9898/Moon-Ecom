import "./App.css";
import AUthContextProvider from "./context/auth-context";
import Header from "./pages/header";

function App() {
  return (
    <AUthContextProvider>
      <Header />
    </AUthContextProvider>
  );
}

export default App;
