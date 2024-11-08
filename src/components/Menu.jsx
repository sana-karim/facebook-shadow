import React from 'react';
import "./Menu.css";
import { assets } from '../utils/imports';
import { MenuCreateList } from './MenuCreateList';
import { Link } from 'react-router-dom';
import { MenuList } from './MenuList';

export const Menu = () => {
    return (
        <div className='menu-container'>
            <h2 className="menu-header">Menu</h2>
            <div className="menu-body-contianer">
                <div className="menu-body-container-left">
                    <div className="menu-search-container">
                        <div className='menu-search-input-container'>
                            <img src={assets.search_icn} className='menu-search-icn' alt="search icn" />
                            <input type="text" className='menu-search-input' placeholder='Search menu' />
                        </div>
                    </div>
                    <div className='menu-social-container'>
                        <div className='social-header'>Social</div>
                        <MenuList imgSrc={assets.events_icn} header={"Events"} subHeader={"Organize or find events and other things to do online and nearby"} />
                        <MenuList imgSrc={assets.friends_icn_blue} header={"Friends"} subHeader={"Search for friends or people you may know"} />
                        <MenuList imgSrc={assets.group_icn_blue} header={"Group"} subHeader={"Connect with people who share your interests"} />
                        <MenuList imgSrc={assets.newsfeed_icn} header={"News Feed"} subHeader={"See relevant posts from people and pages that you follow"} />
                        <MenuList imgSrc={assets.feeds_icn} header={"Feeds (most recent)"} subHeader={"See the most recent posts from your friends, groups, Pages and more"} />
                        <MenuList imgSrc={assets.pages_icn} header={"Pages"} subHeader={"Discover and connect with businesses on Facebook"} />
                    </div>
                    <div className='menu-entertainment-container'>
                        <div className='entertainment-header'>Entertainment</div>
                        <MenuList imgSrc={assets.gaming_video_icn} header={"Gaming Video"} subHeader={"Watch and connect with your favourite games and streamers"} />
                        <MenuList imgSrc={assets.play_games_icn} header={"Play Games"} subHeader={"Play your favourite games"} />
                        <MenuList imgSrc={assets.watch_icn_blue} header={"Watch"} subHeader={"A video destination personalized to your interests and connections"} />
                    </div>
                    <div className='menu-shopping-container'>
                        <div className='shopping-header'>Shopping</div>
                        <MenuList imgSrc={assets.marketplace_icn_blue} header={"Marketplace"} subHeader={"Buy and sell in your community"} />
                    </div>
                    <div className='menu-personal-container'>
                        <div className='personal-header'>Personal</div>
                        <MenuList imgSrc={assets.recent_ad_activity_icn} header={"Recent ad activity"} subHeader={"See all of the ads you've interacted with on Facebook"} />
                        <MenuList imgSrc={assets.memories_icn} header={"Memories"} subHeader={"Browse your old photos, videos and posts on facebook"} />
                        <MenuList imgSrc={assets.saved_icn} header={"Saved"} subHeader={"Find posts, photoes and videos that you've saved for later"} />
                    </div>
                    <div className='menu-professional-container'>
                        <div className='professional-header'>Professional</div>
                        <MenuList imgSrc={assets.ads_manager_icn} header={"Ads Manager"} subHeader={"Create, manage and track the performance of your ads"} />
                        <MenuList imgSrc={assets.ad_center_icn} header={"Ad Centre"} subHeader={"Manage all of the ads that you create in Pages, with streamlined features"} />
                    </div>
                    <div className='menu-community-resources-container'>
                        <div className='community-resources-header'>community</div>
                        <MenuList imgSrc={assets.blood_icn} header={"Blood Donations"} subHeader={"Get updates about donating blood near you"} />
                        <MenuList imgSrc={assets.climate_science_centre_icn} header={"Climate Science Centre"} subHeader={"Learn about climate change"} />
                        <MenuList imgSrc={assets.crisis_response_icn} header={"Crisis Response"} subHeader={"Find the latest updates for recent crisisn happening around the world"} />
                        <MenuList imgSrc={assets.fundraisers_icn} header={"Fund Raisers"} subHeader={"Donate and raise money for charities and personal causes"} />
                    </div>
                    <div className='menu-more-from-meta-container'>
                        <div className='more-from-meta-header'>More from meta</div>
                        <MenuList imgSrc={assets.messenger_kids_icn} header={"Messenger Kids"} subHeader={"Let children message close friends and family"} />
                    </div>
                </div>

                <div className="menu-body-container-right">
                    <div className="menu-body-container-right-top">
                        <div className='create-header'>Create</div>
                        <MenuCreateList imgPath={assets.post_icn} listName={"Post"} />
                        <MenuCreateList imgPath={assets.story_icn} listName={"Story"} />
                        <MenuCreateList imgPath={assets.reel_icn} listName={"Reel"} />
                        <MenuCreateList imgPath={assets.room_icn} listName={"Room"} />
                    </div>
                    <div className="menu-body-container-right-bottom">
                        <MenuCreateList imgPath={assets.page_icn} listName={"Page"} />
                        <MenuCreateList imgPath={assets.ad_icn} listName={"Ad"} />
                        <MenuCreateList imgPath={assets.group_icn} listName={"Group"} />
                        <MenuCreateList imgPath={assets.event_icn} listName={"Event"} />
                        <MenuCreateList imgPath={assets.marketplace_black_icn} listName={"Marketplace Listing"} />
                    </div>
                </div>
            </div>
        </div>
    )
}
