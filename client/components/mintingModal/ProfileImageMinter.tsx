import { useState, useContext } from "react"
import { useRouter } from "next/router";

import FinishedState from "./FinishedState";
import InitialState from "./InitialState";
import LoadingState from "./LoadingState";

import { TwitterContext } from "../../context/TwitterContext";
import { pinJSONToIPFS, pinFileToIPFS } from "../../lib/pinata";
import { client } from "../../lib/client";
import { contractAddress, contractABI } from "../../lib/constants";

import { ethers } from "ethers";

declare let window: any

let metamask : any

if (typeof window !== 'undefined') {
  metamask = window.ethereum;
}

interface Metadata {
  name: string
  description: string
  image: string
}

interface HeaderObject {
  key: string | undefined
  value: string | undefined
}

const getEthereumContract = async () => {

  const provider = new ethers.providers.Web3Provider(metamask)
  const signer = provider.getSigner()
  const transactionContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  )

  return transactionContract
}

const ProfileImageMinter = () => {

   const router = useRouter();
   const { currentAccount, setAppStatus } = useContext(TwitterContext);

    const [status, setStatus] = useState<string>('initial')
    const [profileImage, setProfileImage] = useState<File>()
    const [name, setName] = useState<string>('')
    const [description, setDescription] = useState<string>('')

    const mint = async () => {
        if (!name || !description || !profileImage) return;
        setStatus('loading')

        const pinataMetadata = {
          name: `${name} - ${description}`,
        }

        const ipfsImageHash = await pinFileToIPFS(profileImage, pinataMetadata);
    
        await client.patch(currentAccount).set({
          profileImage: ipfsImageHash
        }).set({
          isProfileImageNft: true,
        }).commit();

        const imageMetaData = {
          name: name,
          description: description,
          image: `ipfs://${ipfsImageHash}`,
        }

        const ipfsJsonHash = await pinJSONToIPFS(imageMetaData);

        const contract = await getEthereumContract();

        const transactionParameters = {
          to: contractAddress,
          from: currentAccount,
          data: await contract.mint(currentAccount, `ipfs://${ipfsJsonHash}`),
        }

        try {
          await metamask.request({
            method: 'eth_sendTransaction',
            params: [transactionParameters],
          })
          setStatus('finished');
        } catch (error) {
          console.log(error);
          setStatus('finished');
        }
      }

    const modalChildren = (modalStatus = status) => {
        switch(modalStatus) {
            case 'initial':
                return (<InitialState 
                profileImage={profileImage!}
                setProfileImage={setProfileImage}
                name={name}
                setName={setName}
                description={description}
                setDescription={setDescription}
                mint={mint}  
              />)
                break;
            case 'loading':
                return <LoadingState />
            case 'finished': 
                return <FinishedState />
            default:
                router.push('/')
                setAppStatus('error') 
                break;
        }
    }
  return (
    <>{modalChildren(status)}</>
  )
}

export default ProfileImageMinter