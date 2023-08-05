import logo from "./img.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { useState } from "react";
import About from "./components/About";
import Alert from "./components/Alert";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const [mode, setMode] = useState("light"); //Wheather dark mode is enabled or not
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#556772";
      showAlert("Dark mode has beem enabled", "success");
      // document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has beem enabled", "success");
      // document.title = "TextUtils - Light Mode";
    }
  };
  return (
    <>
      <BrowserRouter>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          {/* <div className="container my-3"> */}
          <Route path="/about" element={<About mode={mode} />} />
          <Route
            path="/"
            element={
              <TextForm
                showAlert={showAlert}
                heading="Try TextUtils - Word Counter,Character Counter, Remove extra spaces"
                mode={mode}
              />
            }
          />
          {/* </div> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
