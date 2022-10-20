import React from 'react'
import styles from './Header.module.scss'

import { Button } from 'primereact/button'
import Image from 'next/image'
import developer_header from '@utils/images/developer_header.png';

const Header = () => {
  return (
    <section id={styles.header}>
      <ul className={styles.circles}>
        {[...Array(10)].map((i) => <li key={i} /> )}
      </ul>
      <div className={`col-12 md:col-6 ${styles.header__content}`}>
        <h1 className={styles.header__title}>(Título...)</h1>
        <p className={styles.header__description}>
          Praesent scelerisque lorem arcu, a scelerisque ante varius sit amet. Nunc condimentum   pellentesque arcu luctus eleifend. Phasellus accumsan porta volutpat. 
        </p>
        <Button label="Quiero registrarme en Paraffin" />
      </div>
      <div className={`col-12 md:col-6 xl:col-3 ${styles.header__image}`}>
        <Image src={developer_header} alt="Logo" id={styles.header__logo} />
      </div>
    </section>
  )
}

export default Header