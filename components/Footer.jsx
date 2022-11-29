import React from 'react';
import { RiEarthFill} from 'react-icons/ri';
import {IoIosMail } from 'react-icons/io';
import {BsGithub } from 'react-icons/bs';


const Footer = () => {
  return (
    <div className="footer-container">
      <p>Harmeet Store All rights reserverd</p>
      <p className="icons">
      <a href="https://github.com/Harmeet135" target='_blank'><BsGithub/></a>
      <a href="https://portfolio213.000webhostapp.com/" target='_blank'><RiEarthFill/></a>
      </p>
    </div>
  )
}

export default Footer