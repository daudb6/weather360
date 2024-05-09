import { Routes, Route, RouterProvider } from "react-router-dom";
import "./App.css";
import { Navbar } from "./Features/Navbar/Navbar";
import { Report } from "./Features/Report/Report";
import { Cloud } from "./Features/overcast/Cloud";
import store from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Navbar />

      <Routes>
        <Route path="/" element={<Report />} />
        <Route path="Cloud" element={<Cloud />} />
      </Routes>
    </Provider>
  );
}

export default App;
