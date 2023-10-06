'use client';

import { useState } from "react";
import { useAge } from "../customHooks/useAge";
import { FaDownload, FaEnvelope, FaPhone } from "react-icons/fa6";

interface HeaderProps {
  refDownloadCallback: () => void;
}

const Header = ({ refDownloadCallback}: HeaderProps) => {
  const [picture, setPicture] = useState('https://avatars.githubusercontent.com/u/56323265?v=4');
  const [name, setName] = useState('Gabriele Zigurella');
  const [phone, setPhone] = useState('+39 331 3129558');
  const [email, setEmail] = useState('gzigurella99@gmail.com');
  const [description, setDescription] = useState(`I'm a software engineer with a passion for building and maintaining scalable, reliable, and efficient distributed systems. 
  \nI specialize in java microservices and techOps, and I have a proven track record of success in delivering high-quality software. 
  I'm also a strong advocate for open source software and DevOps practices. I believe in the power of collaboration and automation to build better software, faster.`);
  const [location, setLocation] = useState('Livorno, Italy');
  const [nationality, setNationality] = useState('Italian');
  const [spokenLanguages, setSpokenLanguages] = useState(['Italian', 'English', 'Spanish']);
  const age = useAge("1999-10-11");
  const [interests, setInterests] = useState(['Technology', 'Italian Rock', 'Tabletop games', 'Reading']);
  const [currentEmployment, setCurrentEmployment] = useState('Software Engineer at Nextmind S.r.l.');

  return (
    <div className="header md:flex items-center justify-center gap-x-14 hidden bg-zinc-800 mx-10 px-10 rounded-t-3xl">
      <div className="header-left mt-4 self-start">
        <img src={picture} alt="Profile picture" className="profile-picture rounded-lg min-h-24" />
      </div>
      <div className="header-right text-white">
        <div className="header-name mt-4 mb-1 text-md font-medium flex flex-1 gap-x-2">
          <DownloadButton name={name} Callback={refDownloadCallback}/>
          <div className="flex items-center gap-x-2 text-zinc-400"><FaPhone/> {phone}</div>
          <div className="flex items-center gap-x-2 text-zinc-400"><FaEnvelope/> {email}</div>
        </div>
        <p className="header-description text-zinc-400 text-sm">{description}</p>
        <div className="header-details flex gap-x-10 my-4">
          <div className="header-detail detail-1">
            <ul>
              <ListItem key="header-location" itemName="Location" itemValue={location} />
              <ListItem key="header-nationality" itemName="Nationality" itemValue={nationality} />
              <ListItem key="header-languages" itemName="Spoken Languages" itemValue={spokenLanguages.join(', ')} />
            </ul>
          </div>
          <div className="header-detail detail-2">
            <ul>
              <ListItem key="header-age" itemName="Age" itemValue={age} />
              <ListItem key="header-interests" itemName="Interests" itemValue={interests.join(', ')} />
              <ListItem key="header-employment" itemName="Current Employment" itemValue={currentEmployment} />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

interface ListItemProps {
  itemName: string;
  itemValue: string;
}

interface DownloadButtonProps {
  name: string;
  Callback: () => void;
}

const DownloadButton = ({name, Callback}: DownloadButtonProps) => {
  const [downloaded, setDownloaded] = useState(false);
  function handleDownload() {
    setDownloaded(true);
    Callback();
    setInterval(() => {
      setDownloaded(false);
    }, 1200);
  }

  return (
    <>
    {downloaded ? (<div className="text-white font-bold text-lg">{name}</div>) : 
    (<div className="flex items-center gap-x-2 px-5 py-1 border-white border-2 rounded-lg bg-purple-300 hover:bg-sky-400 hover:cursor-pointer" onClick={handleDownload}><FaDownload/> Download CV</div>)}
    </>
  );
}

const ListItem = ({ itemName, itemValue } : ListItemProps) => {
  return (
    <li className="font-medium">{itemName}: <span className="font-light">{itemValue}</span></li>
  );
}

export default Header;
