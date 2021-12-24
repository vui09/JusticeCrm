import React, {Fragment, useContext, useState} from "react";
import {Route, Routes, Navigate} from "react-router-dom";

import Main from "./pages/Main";
import Products from "./pages/Products";
import Sales from "./pages/Sales";
import Cabinet from "./pages/Cabinet";
import Signin from "./pages/Signin";
import CreateAccount from "./pages/CreateAccount";

import './assets/_global.scss'

function App() {

  const [isAuth, setisAuth] = useState(localStorage?.getItem('token'))
  const [flag, setFlag] = useState(false)

  return (
    <div className="App">
      {isAuth
        ? <Routes>
	          <Route path="/" element={<Main setisAuth={setisAuth}/>} />
            <Route path="/products" element={<Products flag={flag} setFlag={setFlag} />} />
	          <Route path="/sales" element={<Sales />} />
	          <Route path="/cabinet" element={<Cabinet />} />
	          <Route
	            path="*"
	            element={<Navigate to="/" />}
	          />
          </Routes>
        : <Routes>
			      <Route path="/signin" element={<Signin setisAuth={setisAuth} />} />
			      <Route path="/createAccount" element={<CreateAccount />} />
			      <Route
				      path="*"
				      element={<Navigate to="/signin" />}
			      />
	      </Routes>
      }
    </div>
  );
}

export default App;
