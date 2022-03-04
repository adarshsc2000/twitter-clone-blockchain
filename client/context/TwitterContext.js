import { createContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { client } from '../lib/client';

export const TwitterContext = createContext()

export const TwitterProvider = ({ children }) => {
  const [appStatus, setAppStatus] = useState('loading')
  const [currentAccount, setCurrentAccount] = useState('')

  const router = useRouter()

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  const checkIfWalletIsConnected = async () => {
    if (!window.ethereum) return setAppStatus('noMetaMask')
    try {
      const addressArray = await window.ethereum.request({
        method: 'eth_accounts',
      })
      if (addressArray.length > 0) {
        setAppStatus('connected')
        setCurrentAccount(addressArray[0])
        createUserAccount(addressArray[0])
      } else {
        router.push('/')
        setAppStatus('notConnected')
      }
    } catch (error) {
      router.push('/');
      setAppStatus('error');
    }
  }

  // Initiates the Metamask Wallet Connection
  const connectWallet = async () => {
    if (!window.ethereum) return setAppStatus('noMetaMask')
    try {
      setAppStatus('loading')

      const addressArray = await window.ethereum.request({
        method: 'eth_requestAccounts',
      })

      if (addressArray.length > 0) {
        setAppStatus('connected');
        setCurrentAccount(addressArray[0]);
        createUserAccount(addressArray[0]);
      } else {
        router.push('/');
        setAppStatus('notConnected');
      }
    } catch (error) {
      setAppStatus('error')
    }
  }

  const createUserAccount = async (userWalletAddress = currentAccount) => {
    if (!window.ethereum) return setAppStatus('noMetaMask');
    try {
      const userDoc = {
        _type: 'users',
        _id: userWalletAddress,
        name: 'Unnamed',
        isProfileImageNft: false,
        profileImage: 'https://cloudfront-us-east-2.images.arcpublishing.com/reuters/43YAWLITTZJLZIQTCP2JSS4KSM.jpg',
        walletAddress: userWalletAddress,
      }
    
      await client.createIfNotExists(userDoc);


    } catch (error) {
      router.push('/');
      setAppStatus('error');
      console.log(error);
    }
  }

  return (
    <TwitterContext.Provider
      value={{appStatus, currentAccount, connectWallet}}
    >
      {children}
    </TwitterContext.Provider>
  )
}
