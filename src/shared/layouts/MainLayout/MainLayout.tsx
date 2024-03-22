import React, {FunctionComponent, JSX} from 'react';
import {MainLayoutProps} from "@/shared/layouts/MainLayout/MainLayout.props";
import Footer from "@/widgets/Footer/Footer";
import styles from './MainLayout.module.css'
import TitleSeoApp from "@/widgets/TitleSeoApp/TitleSeoApp";


const MainLayout = ({children}: MainLayoutProps): JSX.Element => {
    return (
        <div className={styles.wrapper}>
            <TitleSeoApp className={styles.titleSeoApp}/>
            <div className={styles.mainWrapper}>
                {children}
            </div>
            <Footer className={styles.footer}/>
        </div>
    );
};

export const withMainLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
    return function withMainLayoutComponent(props: T): JSX.Element{
        return (
            <MainLayout>
                <Component {...props}/>
            </MainLayout>
        )
    }
}