import { StatusBar } from "expo-status-bar";
import Dashboard from "./src/screens/Dashboard";
import Home from "./src/screens/Home";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Dashboard />
    </>
  );
}
