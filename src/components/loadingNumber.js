import React from "react";
import { Box, Stack, Typograpy } from "@mui/material";
import { CircularProgress } from "@mui/material";

const loadingNumber = () => {
  return (
    <>
      <Box
        sx={{ marginTop: "2rem", color: "hsl(150, 100%, 66%)", height: "1rem" }}
        className="advice-number"
      ></Box>
      <Box
        className="advice"
        sx={{
          marginTop: "2.2rem",
          width: "80%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "hsl(193, 38%, 86%)",
          fontSize: "22px",
          textAlign: "center",
          height: "5rem",
        }}
      >
        <CircularProgress />
      </Box>
    </>
  );
};

export default loadingNumber;
