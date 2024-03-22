'use client'
import React, {JSX} from 'react';
import logoClient1 from '../../../public/images/clients/client-logo-1.png'
import logoClient2 from '../../../public/images/clients/client-logo-2.png'
import logoClient3 from '../../../public/images/clients/client-logo-3.png'
import logoClient4 from '../../../public/images/clients/client-logo-4.png'
import logoClient5 from '../../../public/images/clients/client-logo-5.png'
import logoClient6 from '../../../public/images/clients/client-logo-6.png'
import styles from './Clients.module.css'
import Image from "next/image";

const Clients = (): JSX.Element => {
    return (
        <div className={styles.clientsContainer}>
            <Image src={logoClient1} alt={'image'} width={120} height={64} className={styles.image}/>
            <Image src={logoClient2} alt={'image'} width={120} height={64} className={styles.image}/>
            <Image src={logoClient3} alt={'image'} width={120} height={64} className={styles.image}/>
            <Image src={logoClient4} alt={'image'} width={120} height={64} className={styles.image}/>
            <Image src={logoClient5} alt={'image'} width={120} height={64} className={styles.image}/>
            <Image src={logoClient6} alt={'image'} width={120} height={64} className={styles.image}/>
        </div>
    );
};

export default Clients;