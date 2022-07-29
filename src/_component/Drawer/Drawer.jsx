import React from "react";
import Selection from "../Selection/Selection";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
const Drawer = () => {
  return (
    <div
      style={{
        width: "18%",
        backgroundColor: "#b9a1ed",
        borderRadius: "10px",
        height: "70vh",
      }}
    >
      <br />
      <ArrowBackOutlinedIcon sx={{ paddingLeft: "10px" }} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <br />
        <br />
        <br />
        {[
          "Experiments",
          "Data",
          "Data Sources",
          "Model Factory",
          "Model Tunning",
        ].map((e, _i) => (
          <Selection active={_i === 2} value={e} />
        ))}
      </div>
    </div>
  );
};

export default Drawer;
