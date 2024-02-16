import React, {JSX} from 'react';
import styles from './Footer.module.css'
import {FooterProps} from "@/components/semantic/Footer/Footer.props";
import cn from 'classnames'
import Logo from '../../../../public/images/logo.svg'
import Ptag from "@/components/ui/Ptag/Ptag";
import Facebook from '../../../images/svg/FacebookIcon.svg'
import In from '../../../images/svg/Linked-In.svg'
import Twitter from '../../../images/svg/Twitter.svg'
import Instagram from '../../../images/svg/Instagram.svg'
import Htag from "@/components/ui/HTag/Htag";
import Link from "next/link";
import Phone from '../../../images/svg/iPhone.svg'
import Mail from '../../../images/svg/Mail.svg'
import Input from "@/components/ui/Input/Input";
import award1 from '../../../images/footer/award1.jpg'
import award2 from '../../../images/footer/award2.jpg'
import award3 from '../../../images/footer/award3.jpg'
import award4 from '../../../images/footer/award4.jpg'
import Heart from '../../../images/svg/heart.svg'
import Image from "next/image";
import BtnTopContainer from "@/components/ui/btnTop/BtnTop";

const Footer = ({className, ...props}: FooterProps): JSX.Element => {
    return (
        <footer className={cn(styles.footer, className)} {...props}>
            <div className={styles.footerBox}>
                <div className={styles.footerContent}>
                    <div className={styles.footerContentGrid}>
                        <div className={styles.footerContentGrid1}>
                            <Logo/>
                            <Ptag type={'muchSmall'} className={styles.ptag}>
                                Createx SEO Agency is a full-service digital marketing
                                agency. We help businesses make more money through a wealth
                                of performance data and market research. We create science-based
                                SEO strategies to empower our clients.
                            </Ptag>
                            <div className={styles.socials}>
                                <Facebook/>
                                <In/>
                                <Twitter/>
                                <Instagram/>
                            </div>
                        </div>
                        <div className={styles.footerContentGrid1}>
                            <Htag type={'h3Footer'} id={'footerTitle1'}>
                                COMPANY
                            </Htag>
                            <div className={styles.companyAttr}>
                                <Link className={styles.companyItem} href={'/about'}>About us</Link>
                                <Link className={styles.companyItem} href={'/caseStudies'}>Case Studies</Link>
                                <Link className={styles.companyItem} href={'/blog'}>Blog</Link>
                                <Link className={styles.companyItem} href={'/careers'}>Careers</Link>
                                <Link className={styles.companyItem} href={'/contacts'}>Contacts</Link>
                            </div>
                        </div>
                        <div className={styles.footerContentGrid1}>
                            <Htag type={'h3Footer'} id={'footerTitle2'}>
                                SERVICES
                            </Htag>
                            <div className={styles.servicesAttr}>
                                <Link className={styles.servicesItem} href={'/socials'}>Social Media</Link>
                                <Link className={styles.servicesItem} href={'/seo'}>SEO</Link>
                                <Link className={styles.servicesItem} href={'/research'}>Research</Link>
                                <Link className={styles.servicesItem} href={'/contents'}>Content & PR</Link>
                                <Link className={styles.servicesItem} href={'/traffic'}>Payed Traffic</Link>
                            </div>
                        </div>
                        <div className={styles.footerContentGrid1}>
                            <Htag type={'h3Footer'} id={'footerTitle3'}>
                                CONTACT US
                            </Htag>
                            <div className={styles.contactsAttr}>
                                <div className={styles.contactsIphone}>
                                    <Phone/>
                                    <p className={styles.phoneNumber}>(405) 555-0128</p>
                                </div>
                                <div className={styles.contactsMail}>
                                    <Mail/>
                                    <p className={styles.mailText}>hello@createx.com</p>
                                </div>
                            </div>
                        </div>
                        <div className={cn(styles.footerContentGrid1, styles.signUp)}>
                            <Htag type={'h3Footer'} id={'footerTitle4'}>
                                SIGN UP TO OUR NEWSLETTER
                            </Htag>
                            <Input
                                placeholder={'Email address'}
                                inputSize={'small'}
                                state={'default'}
                                type={'emailFromFooter'}
                                theme={'dark'}
                                className={styles.footerInput}
                            />
                           <p className={styles.footerPtag}>
                               *Subscribe to our newsletter to receive communications and early updates from Createx SEO Agency.
                           </p>
                        </div>
                    </div>
                </div>
                <span className={styles.line}></span>
                <div className={styles.underFooter}>
                    <div className={styles.awards}>
                        <Image src={award1} alt={'ClutchCompany'}/>
                        <Image src={award2} alt={'GoodFilms'}/>
                        <Image src={award3} alt={'GooglePartner'}/>
                        <Image src={award4} alt={'HubSpot'}/>
                    </div>
                    <BtnTopContainer/>
                </div>
            </div>
            <div className={styles.copyright}>
                <div className={styles.copyrightContent}>
                    <p>© All rights reserved.Made with <Heart/> by Createx Studio </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;