// import logo from './logo.svg';
import { useState } from 'react';
import Alert from './Alert';
import './App.css';
import NavBar from './NavBar';
import TextArea from './TextArea';


function App() {
  const [Mode,setMode] = useState("light");
  const change_theme = ()=>{
    if (Mode==="dark") {
      setMode("light");
      showAlert("Light mode has been set.","success")
      document.body.style.backgroundColor = "#0000";
      document.body.style.color = "#000000";
    }
    else{
      setMode("dark");
      showAlert("Dark mode has been set.","success")
      document.body.style.backgroundColor = "#1A1A1A";
      document.body.style.color = "white";
    }
  }
  const [alert,setAlert] = useState(null);
  const showAlert = (messagee,type)=>{
    setAlert({
      msg: messagee,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }
  return (
    <>
      <NavBar title="TextUtils" mode={Mode} toggleMode={change_theme} />
      <Alert alert={alert}/>
      <TextArea showAlert={showAlert}/>
    </>
  );
}

export default App;

