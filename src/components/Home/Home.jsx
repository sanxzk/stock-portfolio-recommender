import { useState } from "react";
import { Box, TextField, FormControl, Typography, Button } from "@mui/material";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import {  useNavigate } from "react-router-dom";

const style = {
  "@media (max-width: 480px)": {
    width: "75vw",
  },
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "25vw",
  bgcolor: "background.paper",
  border: "2px solid none",
  boxShadow: 24,
  p: 4,
};

const inputStyle = {
  width: "100%",
  margin: "auto",
  marginTop: "0.75rem",
};
const Home = () => {
  const navigate = useNavigate();

  const [creds, setCreds] = useState({
    principle: null,
    expectedDate: "",
    factor: null,
  });

  const [date, setDate] = useState(null);

  const handleOnChange = (e) => {
    const { id, value } = e.target;
    setCreds({ ...creds, [id]: value });
  };

  const submitHandler = () => {
    if (!creds.principle || !creds.factor || !date) {
      alert("Please fill all fields");
      return false;
    }
    navigate(
      `/predict?principle=${creds.principle}&factor=${creds.factor}&expectedDate=${date.toISOString()}`
    );
  };

  return (
    <Box sx={style}>
      <Typography
        align="center"
        id="modal-modal-title"
        variant="h6"
        component="h2"
      >
        Input details for investment
      </Typography>
      <FormControl
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          margin: "1rem 1rem",
        }}
      >
        <TextField
          sx={inputStyle}
          onChange={handleOnChange}
          value={creds.principle}
          name="principle"
          id="principle"
          label="principle"
          variant="filled"
        />
        <TextField
          sx={inputStyle}
          onChange={handleOnChange}
          value={creds.factor}
          name="factor"
          id="factor"
          label="cummulative calculation factor"
          variant="filled"
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            sx={{ margin: "0.5rem 1rem 0rem 0.5rem" }}
            format="DD-MM-YYYY"
            label="end Date"
            value={date}
            onChange={(newValue) => setDate(newValue)}
          />
        </LocalizationProvider>
        <Button
          onClick={submitHandler}
          type="submit"
          color="secondary"
          sx={{ width: "30%", margin: "auto", marginTop: "1.5rem" }}
          variant="contained"
        >
          GO
        </Button>
      </FormControl>
    </Box>
  );
};

export default Home;
