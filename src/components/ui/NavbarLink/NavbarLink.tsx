'use client'
import React, {JSX, useEffect, useState} from 'react';
import styles from './NavbarLink.module.css'
import Link from "next/link";
import {NavbarLinkProps} from "@/components/ui/NavbarLink/NavbarLink.props";
import {usePathname, useSearchParams} from "next/navigation";
import cn from 'classnames'

const NavbarLink = ({children, href, ...props}: NavbarLinkProps): JSX.Element => {
    const[active, setActive] = useState<boolean>(false)
    const pathname = usePathname()
    const searchParams = useSearchParams()

    useEffect(() => {
        const url = `${pathname}${searchParams}`
        if(url.includes(href)){
            setActive(!active)
        }
    }, [pathname, searchParams])


    return (
        <Link className={cn(styles.link, {
            [styles.active]: active
        })} href={`/${href}`} {...props}>
            {children}
        </Link>
    );
};

export default NavbarLink;