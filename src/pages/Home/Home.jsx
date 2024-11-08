import React, { useEffect, useState } from 'react';
import "./Home.css";
import { Post } from '../../components/Post';
import { CreatePostOrGoLive } from '../../components/CreatePostOrGoLive';
import { Carousel } from '../../components/Carousel';
import { getValue } from 'firebase/remote-config';
import { database, remoteConfig } from '../../utils/firebase';
import { onValue, ref } from 'firebase/database';



export const Home = () => {

    const [postsRemoteData, setPostsRemoteData] = useState(null);
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        const fetchedData = getValue(remoteConfig, "posts");
        const postsData = JSON.parse(fetchedData._value);
        setPostsRemoteData(postsData);
        console.log(postsData, "post DATA=============")
    }, []);

    useEffect(() => {
        /* Remove this useEffect after implementing React Redux */
        const userInfoRef = ref(database, `users/${localStorage.getItem("loggedInUser")}`);
        onValue(userInfoRef, (snapshot) => {
            const userData = snapshot.val();
            console.log(snapshot.val(), "snapshot value")
            setUserInfo(userData);
        });
    }, []);


    const renderPost = () => {
        let postArray = []
        for (let i = 0; i < postsRemoteData?.length; i++) {
            postArray.push(
                <Post
                    key={i}
                    authorProfileImg={postsRemoteData[i]?.authorProfileImg}
                    authorName={postsRemoteData[i]?.author}
                    postTimestamp={postsRemoteData[i]?.timestamp}
                    postText={postsRemoteData[i]?.contentText}
                    postMedia={postsRemoteData[i]?.contentMedia}
                />
            );
        };
        return postArray;
    };

    console.log(userInfo)

    return (
        <div className='home-container'>
            <Carousel profileImg={userInfo?.profilePicture} />
            <CreatePostOrGoLive userName={userInfo?.fName} userImg={userInfo?.profilePicture} />
            {renderPost()}
        </div>
    )
}
