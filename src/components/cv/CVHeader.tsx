'use client';

import { useState } from "react";
import { useAge } from "../customHooks/useAge";

const Header = () => {
  const [picture, setPicture] = useState('https://avatars.githubusercontent.com/u/56323265?v=4');
  const [name, setName] = useState('Gabriele Zigurella');
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
        <h1 className="header-name mt-4 mb-2 text-xl font-medium">[DOWNLOAD BUTTON]|[PHONE]|[EMAIL]</h1>
        <p className="header-description text-slate-200 text-sm">{description}</p>
        <div className="header-details flex gap-x-10 my-4">
          <div className="header-detail detail-1">
            <ul>
              <ListItem itemName="Location" itemValue={location} />
              <ListItem itemName="Nationality" itemValue={nationality} />
              <ListItem itemName="Spoken Languages" itemValue={spokenLanguages.join(', ')} />
            </ul>
          </div>
          <div className="header-detail detail-2">
            <ul>
              <ListItem itemName="Age" itemValue={age} />
              <ListItem itemName="Interests" itemValue={interests.join(', ')} />
              <ListItem itemName="Current Employment" itemValue={currentEmployment} />
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

const ListItem = ({ itemName, itemValue } : ListItemProps) => {
  return (
    <li className="font-medium">{itemName}: <span className="font-light">{itemValue}</span></li>
  );
}

export default Header;
