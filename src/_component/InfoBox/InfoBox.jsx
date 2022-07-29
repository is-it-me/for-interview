import React from "react";
import PreviewOutlinedIcon from "@mui/icons-material/PreviewOutlined";
import SaveAsOutlinedIcon from "@mui/icons-material/SaveAsOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";

const InfoBox = () => {
  return (
    <div
      style={{
        width: "45%",
        borderRadius: "10px",
        padding: "20px 5px 20px 5px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#fceacf",
        opacity: "0.8",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "0 0 0 7%",
        }}
      >
        <b>Spam Mail Project</b>
        <div
          className="controls"
          style={{
            width: "80%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <PreviewOutlinedIcon />
          <SaveAsOutlinedIcon />
          <DeleteForeverOutlinedIcon />
        </div>
      </div>
      <div
        className="info"
        style={{
          textAlign: "end",
          padding: "0 5% 0 0",
          lineHeight: "10px",
          fontSize: "10px",
        }}
      >
        <p>Author Name: Nagaranjan More</p>
        <p>Created On: DD/MM/YYYY</p>
        <p>Last Updated On: DD/MM/YYYY</p>
      </div>
    </div>
  );
};

export default InfoBox;
