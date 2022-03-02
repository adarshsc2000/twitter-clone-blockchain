// installed as a npm package (npm install timeago.js)
import { format } from 'timeago.js'; // it will format date to a human readable format

import { BsFillPatchCheckFill } from "react-icons/bs"
import { FaRegComment, FaRetweet } from 'react-icons/fa';
import { AiOutlineHeart } from "react-icons/ai";
import { FiShare } from 'react-icons/fi';

const style = {
  wrapper: `flex p-3 border-b border-[#38444d]`,
  profileImage: `rounded-full h-[40px] w-[40px] object-cover`,
  postMain: `flex-1 px-4`,
  headerDetails: `flex items-center`,
  name: `font-bold mr-1`,
  verified: `text-[0.8rem]`,
  handleAndTimeAgo: `text-[#8899a6] ml-1`,
  tweet: `my-2`,
  image: `rounded-3xl`,
  footer: `flex justify-between mr-28 mt-4 text-[#8899a6]`,
  footerIcon: `rounded-full text-lg p-2`,
}

interface PostProps  {
  key: number,
  displayName: string;
  userName: string;
  avatar: string;
  text: string;
  isProfileImageNft: boolean;
  timestamp: string;
}

const Post = ({
    key,
    displayName,
    userName,
    avatar,
    text,
    isProfileImageNft,
    timestamp 
} : PostProps ) => {
  return (
    <div className={style.wrapper}>
      <div>
        <img 
          src={avatar} 
          alt={userName}
          className={ 
            isProfileImageNft 
                ? `${style.profileImage} smallHex` 
                : style.profileImage
          }
        />
      </div>
      <div className={style.postMain}>
          <div>
            <span className={style.headerDetails}>
              <span className={style.name}>{displayName}</span>
              { isProfileImageNft && (
                <span className={style.verified}>
                  <BsFillPatchCheckFill />
                </span>
              )}
              <span className={style.handleAndTimeAgo}>
                  @{userName} · {format(new Date(timestamp).getTime())}
              </span>
            </span>
            <div className={style.tweet}>{text}</div>
          </div>
          <div className={style.footer}>
            <div className={`${style.footerIcon} hover:text-[#1d9bf0] hover:bg-[#1e364a]`}>
              <FaRegComment />
            </div>
            <div
              className={`${style.footerIcon} hover:text-[#03ba7c] hover:bg-[#1b393b]`}
            >
              <FaRetweet />
            </div>
            <div
              className={`${style.footerIcon} hover:text-[#f91c80] hover:bg-[#39243c]`}
            >
              <AiOutlineHeart />
            </div>
            <div
              className={`${style.footerIcon} hover:text-[#1d9bf0] hover:bg-[#1e364a]`}
            >
              <FiShare />
            </div>
          </div>
      </div>
    </div>
  )
}

export default Post