import React, {JSX} from 'react';
import styles from './Footer.module.css'
import {FooterProps} from "@/components/semantic/Footer/Footer.props";
import cn from 'classnames'

const Footer = ({className, ...props}: FooterProps): JSX.Element => {
    return (
        <footer className={cn(styles.footer, className)} {...props}>
            footer
        </footer>
    );
};

export default Footer;