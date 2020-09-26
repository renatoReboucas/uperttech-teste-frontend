import React from "react";


export default function ProtectRouter(props) {
  const hasLogin = window.localStorage.getItem("hasLogin");
  console.log(hasLogin);
}
