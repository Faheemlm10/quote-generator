import { Box, Stack, Typograpy } from "@mui/material";
import { useEffect, useState } from "react";
import { fetchFromAPI } from "./utils/fetchFromAPI";
import designImage from "./images/pattern-divider-desktop.svg";
import iconDice from "./images/icon-dice.svg";
import { fontSize } from "@mui/system";
import { CircularProgress } from "@mui/material";
import loadingNumber from "./components/loadingNumber";

function App() {
  const [number, setNumber] = useState();
  const [advice, setAdvice] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchFromAPI().then((data) => {
      setNumber(data.slip.id);
      setAdvice(data.slip.advice);
    });
  }, []);
  const fetchFunc = () => {
    setLoading(true);
    fetchFromAPI().then((data) => {
      setNumber(data.slip.id);
      setAdvice(data.slip.advice);
      setLoading(false);
    });
  };

  return (
    <div>
      <Box
        sx={{
          height: "300px",
          width: "500px",
          backgroundColor: "hsl(217, 19%, 24%)",
          borderRadius: "1rem",
          position: "relative",
        }}
      >
        <Stack direction="column" alignItems="center">
          {loading && (
            <Box
              sx={{ marginTop: "2rem", color: "hsl(150, 100%, 66%)", height: "1rem" }}
              className="advice-number"
            ></Box>
          )}
          {!loading && (
            <Box
              sx={{ marginTop: "2rem", color: "hsl(150, 100%, 66%)", height: "1rem" }}
              className="advice-number"
            >
              ADVICE #{number}
            </Box>
          )}
          {loading && (
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
          )}
          {!loading && (
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
              "{advice}"
            </Box>
          )}

          <Box
            className="pattern"
            sx={{
              marginTop: "3.3rem",
              display: "flex",
              width: "80%",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            <img src={designImage} alt="" />
          </Box>
        </Stack>
        <Box
          className="dice"
          onClick={fetchFunc}
          sx={{
            borderRadius: "50%",
            padding: "1rem",
            backgroundColor: "hsl(150, 100%, 66%)",
            width: "1.5rem",
            height: "1.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
          }}
        >
          <img src={iconDice} />
        </Box>
      </Box>
    </div>
  );
}

export default App;
