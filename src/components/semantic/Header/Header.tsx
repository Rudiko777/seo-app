import React, {JSX} from 'react';
import styles from './Header.module.css'
import {HeaderProps} from "@/components/semantic/Header/Header.props";
import cn from 'classnames'
import Logo from '../../../../public/images/logo.svg'
import Link from "next/link";
import Button from "@/components/ui/Button/Button";
import NavbarLink from "@/components/ui/NavbarLink/NavbarLink";

const Header = ({className, ...props}: HeaderProps): JSX.Element => {
    return (
        <header className={cn(styles.header, className)} {...props}>
            <Link className={styles.logo} href={'/'}>
                <Logo/>
            </Link>
            <nav className={styles.navbar}>
                <NavbarLink href={'services'}>Services</NavbarLink>
                <NavbarLink href={'caseStudies'}>Case Studies</NavbarLink>
                <NavbarLink href={'aboutUs'}>About Us</NavbarLink>
                <NavbarLink href={'blog'}>Blog</NavbarLink>
                <NavbarLink href={'contacts'}>Contacts</NavbarLink>
            </nav>
            <Button className={styles.button} appearance={'primary'} size={'big'}>
                Talk to a human
            </Button>
        </header>
    );
};

export default Header;