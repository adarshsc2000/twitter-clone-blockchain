import Post from "../Post";
import { useContext } from "react";
import { TwitterContext } from "../../context/TwitterContext";

const style = {
    wrapper: `no-scrollbar`,
    header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
    headerTitle: `text-xl font-bold`,
  }

  interface Tweet {
    timestamp: string
    tweet: string
  }
  
  interface Tweets extends Array<Tweet> {}
  
  interface Author {
    name: string
    profileImage: string
    walletAddress: string
    isProfileImageNft: Boolean | undefined
  }

const ProfileTweets = () => {

    const { currentUser } = useContext(TwitterContext);

  return (
    <div className={style.wrapper}>
        {currentUser.tweets?.map((tweet : Tweet, index : number) => (
            <Post 
                key={index}
                displayName={
                    currentUser.name == 'Unnamed' 
                        ? `${currentUser.walletAddress.slice(0,4)}...${currentUser.walletAddress.slice(-4)}` 
                        : currentUser.name
                  }
                userName={`${currentUser.walletAddress.slice(0,4)}...${currentUser.walletAddress.slice(-4)}`}
                avatar={currentUser.profileImage}
                text={tweet.tweet}
                isProfileImageNft={currentUser.isProfileImageNft}
                timestamp={tweet.timestamp}
            />
        ))}
    </div>
  )
};

export default ProfileTweets;