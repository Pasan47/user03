import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Protected({ childern }) {
  const authStatus = useSelector((state) => state.auth.status);

  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    if (!authStatus) {
      navigate("/login");
    } else {
    }
    setLoader(false);
  }, [authStatus, navigate]);
  return loader ? <div>Loading...</div> : <>{childern}</>;
}

export default Protected;

// Check the states of the authSlise. Is that false --> navigate to the login page
// The children prop is passed from index.js


/*
  secure routing :  create AuthLayout, AuthSlice, Store.js and edit index
*/ 