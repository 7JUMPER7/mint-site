import React, { useState } from "react";
import NFTCard from "./NFTCard";
import './css/NFTCarousel.css';

import Image1 from "./NFTs/nft1.png";
import Image2 from "./NFTs/nft2.png";
import Image3 from "./NFTs/nft3.png";
import Image4 from "./NFTs/nft4.png";

const NFTCarousel = () => {
    // const images = [Image1, Image2, Image3, Image4];
    const [images, setImages] = useState([Image1, Image2, Image3, Image4, Image1, Image2, Image3, Image4]);

    return(
        <div className="NFTCarousel">
            <div className="blurMask"></div>
            <div className="NFTContainer">
                {
                    images.map((image, index) => {
                        return(
                            <NFTCard image={image} key={index} blurIndex={index}></NFTCard>
                        )
                    })
                }
            </div>
    </div>
    )
}

export default NFTCarousel;