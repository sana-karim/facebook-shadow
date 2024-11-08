import "./Carousel.css";

import React, { useEffect, useRef, useState } from 'react'
import { CarouselTabBtn } from "./CarouselTabBtn";
import { assets } from "../utils/imports";
import { CarouselCards } from "./CarouselCards";
import { CreateStoryCard } from "./CreateStoryCard";
import { getValue } from "firebase/remote-config";
import { remoteConfig } from "../utils/firebase";

export const Carousel = ({ profileImg }) => {

    const [selectedCarouselTab, setSelectedCarouselTab] = useState("stories")
    const [storiesRemoteData, setStoriesRemoteData] = useState(null);

    let carouselContainer = useRef(null)

    useEffect(() => {
        carouselContainer.current = document.querySelector(".carousel-card-container");
    }, [storiesRemoteData]);

    useEffect(() => {
        const fetchedData = getValue(remoteConfig, "stories");
        const storiesData = JSON.parse(fetchedData._value);
        setStoriesRemoteData(storiesData);
    }, [selectedCarouselTab]);

    const handleOnPrevious = () => {
        const carouselContainerWidth = carouselContainer.current.clientWidth;
        carouselContainer.current.scrollLeft = carouselContainer.current.scrollLeft - carouselContainerWidth / 1.5;
    }

    const handleOnNext = () => {
        const carouselContainerWidth = carouselContainer.current.clientWidth;
        carouselContainer.current.scrollLeft = carouselContainer.current.scrollLeft + carouselContainerWidth / 1.5;
    }

    const handleOnCarouselTab = (selectedTab) => {
        setSelectedCarouselTab(selectedTab);
    }

    const renderCarouselCards = () => {
        let cardsArray = [];
        for (let i = 0; i < storiesRemoteData?.length; i++) {
            cardsArray.push(
                <CarouselCards
                    storyUserProfileIcn={storiesRemoteData[i]?.authorProfileImg}
                    cardImg={storiesRemoteData[i]?.contentMedia}
                    storyUserName={storiesRemoteData[i]?.authorName} key={i}
                />
            );
        };
        return cardsArray;
    }

    return (
        <div className="carousel-container">
            <div className="carousel-tab-btn-container">
                <div className="tab-btn-container">
                    <div className={`story-btn-container ${selectedCarouselTab === "stories" ? "selected-tab" : ""}`} onClick={() => { handleOnCarouselTab("stories") }}>
                        <CarouselTabBtn btnIcn={selectedCarouselTab === "stories"
                            ?
                            assets.story_icn_blue
                            :
                            assets.story_icn_gray}
                            isHoverActive={selectedCarouselTab === "stories"
                                ?
                                false
                                :
                                true}
                            btnName="Stories" />
                    </div>
                    <div className={`reels-btn-container ${selectedCarouselTab === "reels" ? "selected-tab" : ""}`} onClick={() => { handleOnCarouselTab("reels") }}>
                        <CarouselTabBtn
                            btnIcn={selectedCarouselTab === "reels"
                                ?
                                assets.reels_icn_blue
                                :
                                assets.reels_icn_gray}
                            isHoverActive={selectedCarouselTab === "reels"
                                ?
                                false
                                :
                                true} btnName="Reels" />
                    </div>
                </div>
            </div>
            <div className="carousel-card-container">
                <div className="previous-btn previous-btn-pos" onClick={handleOnPrevious}>
                    <img src={assets.lessthan_icn} className="previous-btn-icn" alt="prevBtn" />
                </div>
                <CreateStoryCard profileImg={profileImg} />
                {renderCarouselCards()}
                <div className="next-btn next-btn-pos" onClick={handleOnNext}>
                    <img src={assets.greaterthan_icn} className="next-btn-icn" alt="nextBtn" />
                </div>
            </div>
        </div>
    )
}
