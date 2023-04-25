import React from "react";
import { UserAuth } from "./../../context/AuthContext";

import "./invoice.css";
import Header from "./../Header/header";
import Footer from "./../Footer/footer";
import QRCode from "./../../images/qrcode.png";

function Invoice() {
  const {user} = UserAuth();
  
  return (
    <div>
      <Header />
      <div id="invoiceMain">
        <div id="invoiceInfo">
          <h2>Your invoice information</h2>
          <p><strong>Provider:</strong> LocoTravel Inc.</p>
          <p><strong>Username:</strong> {user.email}</p>
          <p><strong>Description:</strong> Carefully check the information before paying. Once the QR code has been scanned, the amount will not be refunded.</p>
        </div>
        <div id="invoiceContent">
          <h2>Scan QR code to pay</h2>
          <img src={QRCode} alt="QR_code" width="500px" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Invoice;
