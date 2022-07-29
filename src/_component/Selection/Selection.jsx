import React from "react";
import StorageOutlinedIcon from "@mui/icons-material/StorageOutlined";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
const Selection = ({ active, value }) => {
  return (
    <div
      style={{
        border: active ? "1px solid #ccc" : "",
        width: "90%",
        height: "10%",
        display: "flex",
        alignItems: "center",
        backgroundColor: active ? "white" : "",
        borderRadius: "5px",
      }}
    >
      <p
        style={{
          marginLeft: "15px",
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <StorageOutlinedIcon />
        &nbsp;&nbsp;{value}
      </p>
      {!active && (
        <ChevronRightOutlinedIcon
          sx={{
            float: "right",
          }}
        />
      )}
    </div>
  );
};

export default Selection;
