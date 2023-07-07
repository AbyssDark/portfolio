import React, { useState, useEffect } from 'react';
import './projects.scss';
import LazyLoad from 'react-lazyload';
import AnimatedLettersFast from '@components/AnimatedLettersFast/AnimatedLettersFast';

const Project = () => {
  const [letterClass, setLetterClass] = useState('text-animate-fast');
  const nameArray = [...'02. My Projects'];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-fast-hover');
    }, 4000);
  });
  return (
    <div className='project' id='projects'>
      <span className='sectiontag'>&lt;div&gt;</span>

      <h1 className='about__headingPrimary'>
        <AnimatedLettersFast
          letterClass={letterClass}
          strArray={nameArray}
          idx={15}
        />
      </h1>

      {/* ----------------------------------------- for desktops -------------------------- */}

      <LazyLoad once height={400}>
        <section className='project__section'>
          <div className='project__left'>
            <img
              className='project__img'
              src='https://res.cloudinary.com/dwztvzdvn/image/upload/v1688699059/timom4ijfxelvtrf6g5c.png'
              alt='E-Commerce'
            />
          </div>
          <div className='project__right'>
            <h3 className='project__headingTertiary'>Personal Project</h3>
            <a
              href='https://github.com/AbyssDark/Angular'
              target='_blank'
              rel='noreferrer'
              className='project__headingSecondary'
            >
              <h2>E-Commerce Project</h2>
            </a>
            <div className='project__descriptionContainer'>
              <p className='project__description'>
                Welcome to E-Commerce Project! As students, I understand the
                importance of convenience and affordability. My platform aims to
                provide you with a seamless online shopping experience, offering
                a wide range of products specifically curated for students. From
                textbooks and stationery to electronics and fashion, we have it
                all at student-friendly prices. With a user-friendly interface
                and secure payment options, shopping has never been easier. We
                prioritize customer satisfaction and are always ready to assist
                you with any queries or concerns.{' '}
              </p>
              <div className='project__tags'>
                {' '}
                Angular &nbsp; SQL &nbsp; HTML &nbsp; CSS &nbsp; TypeScript
              </div>
              <div className='project__icons'>
                <a
                  href='https://github.com/AbyssDark/Angular'
                  target='_blank'
                  rel='noreferrer'
                  style={{ marginRight: '1.6rem' }}
                >
                  <svg className='project__icon'>
                    <use href='icons/symbol-defs.svg#icon-github' />
                  </svg>
                </a>
                <a
                  href='https://github.com/AbyssDark/Angular'
                  target='_blank'
                  rel='noreferrer'
                >
                  <svg className='project__icon'>
                    <use href='icons/symbol-defs.svg#icon-external-link' />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </LazyLoad>
      <LazyLoad once height={400}>
        <section className='project__section'>
          <div className='project__left1'>
            <h3 className='project__headingTertiary'>Personal Project</h3>
            <a
              href='https://github.com/AbyssDark/ATM'
              target='_blank'
              rel='noreferrer'
              className='project__headingSecondary'
            >
              <h2>ATM Management</h2>
            </a>
            <div className='project__descriptionContainer project__descriptionContainer1'>
              <p className='project__description'>
                Welcome to our ATM Project! As students, I understand the
                importance of managing finances and gaining practical knowledge
                about banking systems. Our project aims to provide you with a
                hands-on experience of using an ATM machine. Through this demo,
                you will learn how to withdraw cash, check your balance, and
                perform other basic banking transactions. We have created a
                user-friendly interface that simulates the functionalities of a
                real ATM machine. This project will equip you with the necessary
                skills to navigate banking systems confidently.{' '}
              </p>
              <div className='project__tags'>
              Java &nbsp; SQL &nbsp;

              </div>
              <div className='project__icons project__icons1'>
                <a
                  href='https://github.com/AbyssDark/ATM'
                  target='_blank'
                  rel='noreferrer'
                  style={{ marginRight: '1.6rem' }}
                >
                  <svg className='project__icon'>
                    <use href='icons/symbol-defs.svg#icon-github' />
                  </svg>
                </a>
                <a
                  href='https://github.com/AbyssDark/ATM'
                  target='_blank'
                  rel='noreferrer'
                >
                  <svg className='project__icon'>
                    <use href='icons/symbol-defs.svg#icon-external-link' />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className='project__right'>
            <img
              className='project__img'
              src='https://res.cloudinary.com/dwztvzdvn/image/upload/v1688704424/jgilyjrhb67xtk4lt7ga.png'
              alt='Atm demo'
            />
          </div>
        </section>
      </LazyLoad>

      {/* --------------------------------------------------- for Mobiles ----------------------------------------------------------------- */}

      <ul className='projectResp__list'>
        <li className='projectResp__items projectResp__items1'>
          <div className='projectResp__card'>
            <div className='projectResp__cardTop'>
              <svg className='projectResp__cardFolder'>
                <use href='icons/symbol-defs.svg#icon-folder' />
              </svg>
              <div className='projectResp__cardLink'>
                <a
                  href='https://github.com/AbyssDark/Angular'
                  target='_blank'
                  rel='noreferrer'
                  style={{ marginRight: '1.6rem' }}
                >
                  <svg className='projectResp__icon'>
                    <use href='icons/symbol-defs.svg#icon-github' />
                  </svg>
                </a>
                <a
                  href='https://github.com/AbyssDark/Angular'
                  target='_blank'
                  rel='noreferrer'
                >
                  <svg className='projectResp__icon'>
                    <use href='icons/symbol-defs.svg#icon-external-link' />
                  </svg>
                </a>
              </div>
            </div>
            <div className='projectResp__cardBody'>
              <div className='projectResp__cardBodyHeading'>E-Commerce Project</div>
              <p className='projectResp__cardBodyDescription'>
              Welcome to E-Commerce Project! As students, I understand the
                importance of convenience and affordability. My platform aims to
                provide you with a seamless online shopping experience, offering
                a wide range of products specifically curated for students. From
                textbooks and stationery to electronics and fashion, we have it
                all at student-friendly prices. With a user-friendly interface
                and secure payment options, shopping has never been easier. We
                prioritize customer satisfaction and are always ready to assist
                you with any queries or concerns.
              </p>{' '}
            </div>
            <div className='projectResp__cardFooter'>
              <div className='projectResp__tags'>
                {' '}
                Angular &nbsp; SQL &nbsp; HTML &nbsp; CSS &nbsp; TypeScript
              </div>
            </div>
          </div>
        </li>
        <li className='projectResp__items  projectResp__items2'>
          <div className='projectResp__card'>
            <div className='projectResp__cardTop'>
              <svg className='projectResp__cardFolder'>
                <use href='icons/symbol-defs.svg#icon-folder' />
              </svg>
              <div className='projectResp__cardLink'>
                <a
                  href='https://github.com/AbyssDark/ATM'
                  target='_blank'
                  rel='noreferrer'
                  style={{ marginRight: '1.6rem' }}
                >
                  <svg className='projectResp__icon'>
                    <use href='icons/symbol-defs.svg#icon-github' />
                  </svg>
                </a>
                <a
                  href='https://github.com/AbyssDark/ATM'
                  target='_blank'
                  rel='noreferrer'
                >
                  <svg className='projectResp__icon'>
                    <use href='icons/symbol-defs.svg#icon-external-link' />
                  </svg>
                </a>
              </div>
            </div>
            <div className='projectResp__cardBody'>
              <div className='projectResp__cardBodyHeading'>
               ATM Management
              </div>
              <p className='projectResp__cardBodyDescription'>
              Welcome to our ATM Project! As students, I understand the
                importance of managing finances and gaining practical knowledge
                about banking systems. Our project aims to provide you with a
                hands-on experience of using an ATM machine. Through this demo,
                you will learn how to withdraw cash, check your balance, and
                perform other basic banking transactions. We have created a
                user-friendly interface that simulates the functionalities of a
                real ATM machine. This project will equip you with the necessary
                skills to navigate banking systems confidently.
              </p>
            </div>
            <div className='projectResp__cardFooter'>
              <div className='projectResp__tags'>
                {' '}
                Java &nbsp; SQL
              </div>
            </div>
          </div>
        </li>
      </ul>
      <span className='sectiontag'>&lt;/div&gt;</span>
    </div>
  );
};

export default Project;
