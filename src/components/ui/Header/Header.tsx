import React from "react";
import Clock from "../Clock/Clock";
import { primaryColor } from "../constants";
import Logo from "../Logo/Logo";

const Header = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "row",
      backgroundColor: primaryColor,
      height: 148,
      justifyContent: "space-between",
      alignItems: "center",
      color: "white",
    }}
    data-testid="Header"
  >
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Logo style={{ width: 196, height: 91, marginLeft: 49 }}></Logo>
      <div style={{ display: "flex", flexDirection: "column", marginLeft: 50 }}>
        <span style={{ fontSize: 36, fontWeight: 400 }}>Carers</span>
        <span style={{ fontSize: 20 }}>
          Here you'll be able to schedule your carers visits
        </span>
      </div>
    </div>
    <Clock style={{ marginRight: 38, fontSize: 24, fontWeight: 400 }}></Clock>
  </div>
);

export default Header;
