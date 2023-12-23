import React from "react";
 const currTime = new Date();
  const currYear = currTime.getFullYear();
function Footer() {
 

  return <p className="footer">copyright ©️ {currYear} </p>;
}

export default Footer;
