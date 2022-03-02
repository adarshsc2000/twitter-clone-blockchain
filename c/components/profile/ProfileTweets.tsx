import Post from "../Post";

const style = {
    wrapper: `no-scrollbar`,
    header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
    headerTitle: `text-xl font-bold`,
  }
  
  const tweets = [
    {
        displayName: 'Qazi',
        userName: '0x3219739428adfeb3242bf3434323099d',
        avatar: 'https://cloudfront-us-east-2.images.arcpublishing.com/reuters/43YAWLITTZJLZIQTCP2JSS4KSM.jpg',
        text: 'gm',
        isProfileImageNft: false,
        timestamp: '2020-06-01T12:00:00.000Z', // this is how sanity stoes timestamps
    },
    {
        displayName: 'Qazi',
        userName: '0x3219739428adfeb3242bf3434323099d',
        avatar: 'https://cloudfront-us-east-2.images.arcpublishing.com/reuters/43YAWLITTZJLZIQTCP2JSS4KSM.jpg',
        text: 'gm',
        isProfileImageNft: false,
        timestamp: '2020-06-01T12:00:00.000Z', // this is how sanity stoes timestamps
    },
    {
        displayName: 'Qazi',
        userName: '0x3219739428adfeb3242bf3434323099d',
        avatar: 'https://cloudfront-us-east-2.images.arcpublishing.com/reuters/43YAWLITTZJLZIQTCP2JSS4KSM.jpg',
        text: 'gm',
        isProfileImageNft: false,
        timestamp: '2020-06-01T12:00:00.000Z', // this is how sanity stoes timestamps
    },
    {
        displayName: 'Qazi',
        userName: '0x3219739428adfeb3242bf3434323099d',
        avatar: 'https://cloudfront-us-east-2.images.arcpublishing.com/reuters/43YAWLITTZJLZIQTCP2JSS4KSM.jpg',
        text: 'gm',
        isProfileImageNft: false,
        timestamp: '2020-06-01T12:00:00.000Z', // this is how sanity stoes timestamps
    },
    {
        displayName: 'Qazi',
        userName: '0x3219739428adfeb3242bf3434323099d',
        avatar: 'https://cloudfront-us-east-2.images.arcpublishing.com/reuters/43YAWLITTZJLZIQTCP2JSS4KSM.jpg',
        text: 'gm',
        isProfileImageNft: false,
        timestamp: '2020-06-01T12:00:00.000Z', // this is how sanity stoes timestamps
    },
]

const ProfileTweets = () => {
  return (
    <div className={style.wrapper}>
        {tweets?.map((tweet, index) => (
            <Post 
                key={index}
                displayName={tweet.displayName}
                userName={`${tweet.userName.slice(0,4)}...${tweet.userName.slice(-4)}`}
                avatar={tweet.avatar}
                text={tweet.text}
                isProfileImageNft={tweet.isProfileImageNft}
                timestamp={tweet.timestamp}
            />
        ))}
    </div>
  )
};

export default ProfileTweets;