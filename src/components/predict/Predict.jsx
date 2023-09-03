import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Stocks from "../Stocks/Stocks";
import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import { TailSpin } from "react-loader-spinner";
import './Predict.css'

const Predict = () => {
  const params = new URLSearchParams(useLocation().search);
  const navigate = useNavigate();
  const principle = params.get("principle");
  const factor = params.get("factor");
  const date = params.get("expectedDate");
  const [apiData, setApiData] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const config = {
        headers: {
          "Content-Type": "application/json",
          principle,
          factor,
          ExpecTedDate: date,
        },
      };
      const response = await axios.get(
        "https://stockify-backend-five.vercel.app/predict",
        config
      );
      if (response.data.success === true) {
        setApiData(response.data);
      } else {
        navigate("/");
      }
    }
    fetchData();
  }, [principle, factor, date]);

  if (apiData === null) {
    return (
      <div className="loader">
        <TailSpin
          height="160"
          width="160"
          color="#5271FF"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
        <img src="../../market-analysis.png" alt="logo" className="loader_logo"/>
      </div>
    )
  }
  return (
    <>
      <Typography sx={{textAlign:"center"}} variant="h3"> Recommended Stocks are :</Typography>
      <Container
        sx={{ margin: "1rem auto", display: "flex", flexWrap: "wrap", justifyContent:"center" }}
      >
        {apiData.stocks.selectedStocks.map((stock) => {
          return <Stocks stock={stock} />;
        })}
      </Container>
    </>
  );
};

export default Predict;
