import "./CarouselCards.css";

export const CarouselCards = ({ storyUserProfileIcn, cardImg, storyUserName }) => {


    return (
        <div className="card-container" >
            <div className="story-user-profile-icn-container">
                <img src={storyUserProfileIcn} className="story-user-profile-img" alt="profile icn" />
            </div>
            <div className="card-img-container">
                <img src={cardImg} className="card-img" alt="card img" />
            </div>
            <div className="story-user-name">{storyUserName}</div>
        </div>
    )
}
