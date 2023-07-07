import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AnimatedLetters from '@components/AnimatedLetters/AnimatedLetters';
import './introduction.scss';

const Introduction = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const nameArray = [...'Thinh,'];
  const jobArray = [...'Web Developer'];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
  });

  return (
    <div className='intro '>
      <div className='intro__left'>
        <span className='sectiontag'>&lt;div&gt;</span>

        <h1 className='intro__headingPrimary'>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          &nbsp;
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>&apos;m</span>
          &nbsp;
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={19}
          />
        </h1>
        <h2 className='intro__headingSecondary'>Front-End Developer</h2>
        <Link to='/contact' className='intro__button'>
          Contact Me
        </Link>
        <span className='sectiontag'>&lt;/div&gt;</span>
      </div>
      <div className='intro__right'>
        <div className='logo__fill'>
          <svg width='425' height='425' xmlns='http://www.w3.org/2000/svg'>
            <g className='layer'>
              <title>Layer 1</title>
              <path
                clip-rule='evenodd'
                d='m247.09,273.51l-92.71,-86.28l-49.58,25.42l92.71,86.28l49.58,-25.42zm-91.42,-95.44l106.35,-54.52l-26.98,-25.1l-106.35,54.51l26.98,25.11zm119.42,-52.71l92.72,86.28l49.59,-25.42l-92.72,-86.28l-49.59,25.42zm91.44,95.44l-60.14,30.83l-0.08,0.04l-0.16,0.08l-0.09,0.05l-45.89,23.52l26.98,25.1l106.35,-54.52l-26.97,-25.1z'
                fill='#F8F9E7'
                fill-rule='evenodd'
                id='svg_2'
              />
              <path
                d='m94.46,211.75c0,-1.58 0.95,-2.93 2.32,-3.51l0.08,-0.04l21.48,-11.01l0,-45.13c0,-1.57 0.97,-2.93 2.33,-3.5l0.09,-0.04l113.2,-58.02c1.45,-0.75 3.17,-0.45 4.31,0.6l0,-0.01l30.92,28.78l54.41,-27.89a3.8,3.8 0 0 1 4.3,0.61l0,-0.01l98.43,91.58a3.83,3.83 0 0 1 1.41,2.96l0,90.43c0,1.6 -1,2.98 -2.4,3.53l-21.5,11.02l0,45.13l-0.02,0a3.79,3.79 0 0 1 -2.06,3.38l-113.25,58.04a3.82,3.82 0 0 1 -4.78,-0.62l-30.74,-28.61l-54.11,27.74a3.79,3.79 0 0 1 -4.78,-0.62l-98.24,-91.41a3.81,3.81 0 0 1 -1.4,-2.96l0,-90.43l0,0.01zm7.6,8.71l0,80.07l91.01,84.69l0,-80.07l-91.01,-84.69zm98.61,85.36l0,81.92l49.16,-25.21l0,-81.91l-49.16,25.2zm56.77,-22.69l0,80.07l25.26,23.51l0,-80.07l-25.26,-23.51zm32.87,24.18l0,81.92l105.93,-54.3l0,-81.92l-105.93,54.3zm112.12,-63.46a3.83,3.83 0 0 1 1.41,2.96l0,36.78l16.29,-8.35l0,-81.91l-46.42,23.79l28.72,26.73zm-276.47,-50.55l22.53,-11.55l-22.53,-20.97l0,32.52zm134.21,82.02l26.98,25.1l106.35,-54.52l-26.97,-25.1l-60.14,30.83l-0.08,0.04l-0.16,0.08l-0.09,0.04l0,0.01l-45.89,23.52zm-5.89,-5.49l43.69,-22.4l-30.06,-27.97l-43.69,22.39l30.06,27.98zm50.87,-26.08l55.48,-28.44l-88.28,-82.14l0,80.07l32.8,30.51zm-40.4,-113.09l-103.19,52.9l56.76,52.81l46.43,-23.8l0,-81.91l0,0zm-159.95,81.99l92.71,86.28l49.58,-25.42l-92.71,-86.28l-49.59,25.42l0.01,0zm170.29,-87.29l92.72,86.28l49.59,-25.42l-92.72,-86.28l-49.59,25.42zm-146.4,27.6l26.98,25.11l106.35,-54.52l-26.98,-25.1l-106.35,54.51zm296.65,128.12a3.79,3.79 0 0 1 -1.4,0.27l1.4,-0.27z'
                fill='#03323A'
                id='svg_3'
                transform='matrix(1 0 0 1 0 0)'
              />
              <path
                clip-rule='evenodd'
                d='m148.49,181.75l-22.53,-20.97l0,32.52l22.53,-11.55zm44.58,123.4l-91.01,-84.69l0,80.07l91.01,84.69l0,-80.07zm79.28,-91.91l32.8,30.51l55.48,-28.44l-88.28,-82.14l0,80.07zm10.35,93.4l-25.26,-23.51l0,80.07l25.26,23.51l0,-80.07z'
                fill='#65BCC3'
                fill-rule='evenodd'
                id='svg_4'
              />
              <path
                clip-rule='evenodd'
                d='m161.56,183.56l56.76,52.81l46.43,-23.8l0,-81.91l-103.19,52.9zm88.27,97.06l-49.16,25.2l0,81.92l49.16,-25.21l0,-81.91zm40.48,26.69l0,81.92l105.93,-54.3l0,-81.92l-105.93,54.3z'
                fill='#F29494'
                fill-rule='evenodd'
                id='svg_5'
              />
              <path
                clip-rule='evenodd'
                d='m373.71,217.13l28.72,26.72a3.83,3.83 0 0 1 1.41,2.96l0,36.78l16.29,-8.35l0,-81.91l-46.42,23.79l0,0.01z'
                fill='#F29494'
                fill-rule='evenodd'
                id='svg_6'
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
