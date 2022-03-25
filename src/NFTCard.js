import React from "react";
import './css//NFTCard.css';
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";



const NFTCard = ({image, blurIndex}) => {
    const useStyles = makeStyles((theme) => ({
        blurAnim: {
          animation: `$blurAnim 16s ${blurIndex + 1}s linear infinite`
        },
        "@keyframes blurAnim": {
          "0%": {
            filter: `blur(${blurIndex}px)`
          },
          "50%": {
            filter: `blur(0)`
          },
          "100%": {
            filter: `blur(${blurIndex}px)`
          }
        }
    }));


    const classes = useStyles();

    

    return(
        // <div className={"NFTCard " + clsx(classes.blurAnim, {
        //     [classes.blurAnim]: true
        //   })} 
        //   style={{filter: `blur(${blurIndex}px)`}}>
        //     <img src={image} alt={image}></img>
        // </div>
        <div className={"NFTCard "}>
            <img src={image} alt={image}></img>
        </div>
    )
}

export default NFTCard;