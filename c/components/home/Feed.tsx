import Post from '../Post';

import { BsStars } from "react-icons/bs";
import TweetBox from "./TweetBox";

const style = {
    wrapper: `flex-[2] border-r border-l border-[#38444d]`,
    header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
    headerTitle: `text-xl font-bold`,
}

interface Tweet  {
    displayName: string;
    userName: string;
    avatar: string;
    text: string;
    isProfileImageNft: boolean;
    timestamp: string;
}

const tweets : Tweet[] = [
    {
        displayName: 'Adarsh',
        userName: '0x3219739428adfeb3242bf3434323099d',
        avatar: 'https://cloudfront-us-east-2.images.arcpublishing.com/reuters/43YAWLITTZJLZIQTCP2JSS4KSM.jpg',
        text: 'gm',
        isProfileImageNft: false,
        timestamp: '2020-06-01T12:00:00.000Z', // this is how sanity stoes timestamps
    },
    {
        displayName: 'Adarsh',
        userName: '0x3219739428adfeb3242bf3434323099d',
        avatar: 'https://cloudfront-us-east-2.images.arcpublishing.com/reuters/43YAWLITTZJLZIQTCP2JSS4KSM.jpg',
        text: 'gm',
        isProfileImageNft: false,
        timestamp: '2020-06-01T12:00:00.000Z', // this is how sanity stoes timestamps
    },
    {
        displayName: 'Adarsh',
        userName: '0x3219739428adfeb3242bf3434323099d',
        avatar: 'https://cloudfront-us-east-2.images.arcpublishing.com/reuters/43YAWLITTZJLZIQTCP2JSS4KSM.jpg',
        text: 'gm',
        isProfileImageNft: false,
        timestamp: '2020-06-01T12:00:00.000Z', // this is how sanity stoes timestamps
    },
    {
        displayName: 'Adarsh',
        userName: '0x3219739428adfeb3242bf3434323099d',
        avatar: 'https://cloudfront-us-east-2.images.arcpublishing.com/reuters/43YAWLITTZJLZIQTCP2JSS4KSM.jpg',
        text: 'gm',
        isProfileImageNft: false,
        timestamp: '2020-06-01T12:00:00.000Z', // this is how sanity stoes timestamps
    },
]

const Feed = () => {
    
    return (
        <div className={style.wrapper}>
            <div className={style.header}>
                <div className={style.headerTitle}>Home</div>
                <BsStars />
            </div>
            <TweetBox />

            {
                tweets.map((tweet : Tweet, index : number) => (
                    <Post 
                        key={index}
                        displayName={tweet.displayName}
                        userName={`${tweet.userName.slice(0,4)}...${tweet.userName.slice(-4)}`}
                        avatar={tweet.avatar}
                        text={tweet.text}
                        isProfileImageNft={tweet.isProfileImageNft}
                        timestamp={tweet.timestamp}
                    />
                ))
            }
        </div>
    );
};

export default Feed;