import React from "react";
import { Box, Stack, Typograpy } from "@mui/material";

const notLoadingNumber = (props) => {
  return (
    <Box
      sx={{
        marginTop: "2rem",
        color: "hsl(150, 100%, 66%)",
        height: "1rem",
      }}
      className="advice-number"
    >
      ADVICE #{props.number}
    </Box>
  );
};

export default notLoadingNumber;
