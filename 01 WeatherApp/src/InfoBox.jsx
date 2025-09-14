import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import SunnyIcon from "@mui/icons-material/Sunny";
import AcUnitIcon from "@mui/icons-material/AcUnit";
export default function InfoBox({ info }) {
  let Rain_URL =
    "https://images.unsplash.com/photo-1507027682794-35e6c12ad5b4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&w=800&q=80";
  let Hot_URL =
    "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&w=800&q=80";
  let Cold_URL =
    "https://images.unsplash.com/photo-1668531387310-9c3c2f272d52?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&w=800&q=80";
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={
            info.humidity > 80 ? Rain_URL : info.temp > 15 ? Hot_URL : Cold_URL
          }
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.humidity > 80 ? (
              <ThunderstormIcon />
            ) : info.temp > 15 ? (
              <SunnyIcon />
            ) : (
              <AcUnitIcon />
            )}
            &nbsp;
            {info.city}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            <p>Temperature:{info.temp}&deg;C</p>
            <p>Humidity:{info.humidity}</p>
            <p>Min temp:{info.tempMin}&deg;C</p>
            <p>Max temp:{info.tempMax}&deg;C</p>
            <p>
              Weather is described as {info.weather} and feels like{" "}
              {info.feelsLike}&deg;C
            </p>
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
