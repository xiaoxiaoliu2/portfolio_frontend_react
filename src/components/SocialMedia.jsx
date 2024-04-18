import React from 'react';
import { BsTwitter, BsMedium  } from 'react-icons/bs';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
        <div>
      <a href="https://www.linkedin.com/in/xiaoxiao-liu/">
        <FaLinkedin />
      </a>
    </div>
    <div>
      <a href="https://github.com/xiaoxiaoliu2">
        <FaGithub />
      </a>
    </div>
    <div>
      <a href="https://twitter.com/LIU32234697">
        <BsTwitter />
      </a>
    </div>
    <div>
      <a href="https://medium.com/@xiaoxiaoliu1">
        <BsMedium />
      </a>
    </div>
  </div>
);

export default SocialMedia;
