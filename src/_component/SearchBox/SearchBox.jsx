import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import TextField from "@mui/material/TextField";

const SearchBox = () => {
  return (
    <div
      style={{
        width: "45%",
        borderRadius: "10px",
        padding: "20px 5px 20px 5px",
        display: "flex",
        backgroundColor: "#b9a1ed",
        opacity: "0.8",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "80%",
          margin: "0 0 0 5%",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            height: "100%",
            border: "1px solid #ccc",
            borderRadius: "10px",
          }}
        >
          <SearchOutlinedIcon
            sx={{
              height: "inherit",
              width: "30px",
              padding: "0 15px",
              backgroundColor: "#FFFFFF",
              borderRadius: "10px",
            }}
          />
        </div>
        <TextField
          id="outlined-basic"
          label="Spam Mail Project"
          variant="outlined"
          sx={{
            height: "inherit",
            width: "80%",
            backgroundColor: "#FFFFFF",
            borderRadius: "10px",
          }}
        />
      </div>
    </div>
  );
};

export default SearchBox;
