import { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import { TwitterContext } from '../context/TwitterContext';

import SidebarOption from './SidebarOption';

import { VscTwitter } from 'react-icons/vsc';
import { FiMoreHorizontal, FiBell } from 'react-icons/fi';
import { RiHome7Line, RiHome7Fill, RiFileList2Fill } from 'react-icons/ri';
import { BiHash } from 'react-icons/bi';
import { HiOutlineMail, HiMail } from 'react-icons/hi';
import { FaRegListAlt, FaHashtag, FaBell } from 'react-icons/fa';
import { BsBookmark, BsBookmarkFill, BsPerson, BsPersonFill } from 'react-icons/bs'
import { CgMoreO } from 'react-icons/cg';

const style = {
    wrapper: `flex-[0.7] px-8 flex flex-col`,
    twitterIconContainer: `text-3xl m-4`,
    tweetButton: `bg-[#1d9bf0] hover:bg-[#1b8cd8] flex items-center justify-center font-bold rounded-3xl h-[50px] mt-[20px] cursor-pointer`,
    navContainer: `flex-1`,
    profileButton: `flex items-center mb-6 cursor-pointer hover:bg-[#333c45] rounded-[100px] p-2`,
    profileLeft: `flex items-center justify-center mr-4`,
    profileImage: `height-12 w-12 rounded-full`,
    profileRight: `flex-1 flex`,
    details: `flex-1`,
    name: `text-lg`,
    handle: `text-[#8899a6]`,
    moreContainer: `flex items-center mr-2`,
};

interface SideBarProps {
    initialSelectedIcon?: string,
}

const Sidebar = ({ initialSelectedIcon = 'Home' } : SideBarProps) => {

    const [selected, setSelected] = useState<string>(initialSelectedIcon);
    const { currentAccount, currentUser } = useContext(TwitterContext);
    const router = useRouter();

    return (
        <div className={style.wrapper}>
            <div className={style.twitterIconContainer}>
                <VscTwitter />
            </div>
            <div className={style.navContainer}>
                <SidebarOption 
                    text='Home'
                    Icon={selected === 'Home' ? RiHome7Fill : RiHome7Line}
                    isActive={Boolean(selected === 'Home')}
                    setSelected={setSelected}
                    redirect={'/'}
                /> 
               <SidebarOption 
                    text='Explore'
                    Icon={selected === 'Explore' ? FaHashtag : BiHash}
                    isActive={Boolean(selected === 'Explore')}
                    setSelected={setSelected}
                /> 
                <SidebarOption 
                    text='Notifications'
                    Icon={selected === 'Notifications' ? FaBell : FiBell}
                    isActive={Boolean(selected === 'Notifications')}
                    setSelected={setSelected}
                />
                <SidebarOption 
                    text='Messages'
                    Icon={selected === 'Messages' ? HiMail : HiOutlineMail}
                    isActive={Boolean(selected === 'Messages')}
                    setSelected={setSelected}
                />
                <SidebarOption 
                    text='Bookmarks'
                    Icon={selected === 'Bookmarks' ? BsBookmarkFill : BsBookmark}
                    isActive={Boolean(selected === 'Bookmarks')}
                    setSelected={setSelected}
                />
                <SidebarOption 
                    text='Lists'
                    Icon={selected === 'Lists' ? RiFileList2Fill : FaRegListAlt}
                    isActive={Boolean(selected === 'Lists')}
                    setSelected={setSelected}
                />
                <SidebarOption 
                    text='Profile'
                    Icon={selected === 'Profile' ? BsPersonFill : BsPerson}
                    isActive={Boolean(selected === 'Profile')}
                    setSelected={setSelected}
                    redirect={'/profile'}
                />
                <SidebarOption 
                    text='More'
                    Icon= {CgMoreO}
                    setSelected={setSelected}
                />
                <div 
                    onClick={()=> {router.push(`${router.pathname}/?mint=${currentAccount}}`)}}
                    className={style.tweetButton}
                >
                        Mint
                </div>
            </div>
            <div className={style.profileButton}>
                <div className={style.profileLeft}>
                    <img className={currentUser.isProfileImageNft ? `${style.profileImage} smallHex` : style.profileImage} 
                        src={currentUser.profileImage} alt='profile' 
                    />
                </div>
                <div className={style.profileRight}>
                    <div className={style.details}>
                        <div className={style.name}>{currentUser.name}</div>
                        <div className={style.handle}>
                            @{currentAccount.slice(0, 6)}...{currentAccount.slice(-6)}
                        </div>
                    </div>
                    <div className={style.moreContainer}>
                        <FiMoreHorizontal />    
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Sidebar;