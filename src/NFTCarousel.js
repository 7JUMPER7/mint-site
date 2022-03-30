import React, { useEffect, useState } from "react";
import NFTCard from "./NFTCard";
import './css/NFTCarousel.css';

import Image1 from "./NFTs/nft1.png";
import Image2 from "./NFTs/nft2.png";
import Image3 from "./NFTs/nft3.png";
import Image4 from "./NFTs/nft4.png";

const NFTCarousel = () => {
    const [images, setImages] = useState([Image1, Image2, Image3, Image4, Image1, Image2, Image3, Image4]);

    useEffect(() => {
        
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setImages([...images]);
        }, 16000);
    }, [images]);

    return(
        <div className="NFTWrap">
            <div className="NFTMover">
                <div className="NFTCarousel">
                    <div className="NFTContainer">
                        {
                            images.map((image, index) => {
                                let leftOffset = (index * 400) + (index * 150) + 150;
                                let blurAmount = 5;
                                let blurOffset = index * 4 - 4;
                                return(
                                    <NFTCard image={image} key={index} blurAmount={blurAmount} blurOffset={blurOffset} leftOffset={leftOffset}></NFTCard>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NFTCarousel;