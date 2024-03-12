import React from "react";
import { Navigation } from "../component/Navigation";

export const ErrorPage = () => {
  return (
    <div>
      <div>{/* <Navigation /> */}</div>
      <div className="error">
        <center
          style={{
            marginTop: "20%",
            fontSize: "900",
            height: "200px",
            // background: "white",
            // color: "black",
            width: "400px",
            marginLeft: "300px",
          }}
        >
          Page Not Found 404
        </center>
      </div>
    </div>
  );
};
