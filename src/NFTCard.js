import React from "react";
import './css//NFTCard.css';
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";



const NFTCard = ({image, blurAmount, blurOffset, leftOffset}) => {

  const useStyles = makeStyles((theme) => ({
      blurAnim: {
        animation: `$blurAnim 4s ${blurOffset}s linear 1`
      },
      "@keyframes blurAnim": {
        "0%": {
          filter: `blur(${blurAmount}px)`
        },
        "40%": {
          filter: `blur(0)`
        },
        "60%": {
          filter: `blur(0)`
        },
        "100%": {
          filter: `blur(${blurAmount}px)`
        }
      }
  }));

  const classes = useStyles();

  return(
    <div className={"NFTCard " + clsx(classes.blurAnim, {
        [classes.blurAnim]: true
      })} 
      style={{filter: `blur(${blurAmount}px)`, left: leftOffset}}>
        <img src={image} alt={image}></img>
    </div>
  )
}

export default NFTCard;