import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import logo from "../../../assets/logos_ethereum.png";
import { Box, Chip } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./CardInformation.scss";

export interface CardInformationProps {
  tier: string;
  theme: string;
  price: number;
  time: Date;
  image?: string;
  backGround?: string;
}

const CardInformation: React.FC<CardInformationProps> = ({
  tier,
  theme,
  price,
  image,
  backGround,
}) => {
  return (
    <Card sx={{ maxWidth: 345 }} className="card-container">
      <Box
        sx={{
          background: backGround,
        }}
      >
        <div className="card-header">
          <Chip label={tier} className="chip" />
          <FavoriteIcon className="favorite-icon" />
        </div>

        <CardMedia
          component="img"
          height="194"
          image={image}
          alt="Paella dish"
        />
      </Box>

      <CardActions className="card-action">
        <Typography>{theme}</Typography>
        <Box>
          <Avatar className="card-action__label" src={logo} />
          <Typography>{price} ETH</Typography>
        </Box>
      </CardActions>
      <CardContent className="card-content">
        <Avatar
          className="card-content__avatar"
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
        />
        <Typography className="card-content__text">Ghozali_Ghozalu</Typography>
      </CardContent>
    </Card>
  );
};
export default CardInformation;
