import React from 'react';
import IMAGES from '@components/images/images';
import Image from 'next/image';
import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <div className="card my-8">
      <div className={`flex justify-content-center align-items-center gap-8`}>
        <div className="col-12 md:col-2 text-center">
          <a
            href="https://fintual.cl"
            target="_blank"
            className="textCenter"
            rel="noreferrer"
          >
            <Image src={IMAGES.logo_fintual} alt="Logo" />
          </a>
        </div>
        <div className="col-12 md:col-2 text-center">
          <a
            href="https://fintualist.com/chile/"
            target="_blank"
            className="textCenter"
            rel="noreferrer"
          >
            <Image src={IMAGES.logo_fintualist} alt="Logo" />
          </a>
        </div>
      </div>
      <div className="card mt-6">
        <div className={`flex flex-column align-items-center`}>
          <div className="col-12 md:col-4 text-center | text-xl font-semibold">
            Hecho con <span className={`text-red-600 ${styles.heart}`}>❤</span>{' '}
            en la FIN
          </div>
          <div className="col-12 md:col-4 text-center">Puerto Natales</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
