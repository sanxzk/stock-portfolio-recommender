import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const formatDate = (isoDateString) => {
  const date = new Date(isoDateString);
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();
  return `${month}, ${year}`;
};
const style = {
  boxStyle: {
    "@media (max-width:480px)": {
      minWidth: "80%",
      maxWidth: "100%",
    },
    minWidth: "30%",
    maxWidth: "45%",
  },
};
export default function Stocks(props) {
  const stock = props.stock;
  const card = (
    <>
      <CardContent sx={{textAlign:"center"}}>
        <Typography variant="h5" component="div">
          {stock.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
         Price: {stock.price.toFixed(2)} INR
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Quantity: {stock.quantity}
        </Typography>
      </CardContent>
    </>
  );
  return (
    <Box sx={style.boxStyle}>
      <Card
        sx={{
          margin: "1rem 0.5rem 1rem 0.5rem",
          boxShadow: "10px 5px 5px rgba(148, 0, 211,0.5)",
        }}
        variant="outlined"
      >
        {card}
      </Card>
      {
        // JSON.stringify(props)
      }
    </Box>
  );
}
