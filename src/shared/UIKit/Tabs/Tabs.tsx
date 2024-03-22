'use client'
import React, {
    JSX,
    useCallback,
    useMemo,
    useState
} from 'react';
import styles from './Tabs.module.css'
import {ITabsContext, TabProps, TabsProps} from "@/shared/UIKit/Tabs/Tabs.props";
import cn from 'classnames'
import {usePathname} from "next/navigation";
import {useTabs} from "@/features/hooks/useTabs";

export const TabsContext = React.createContext<ITabsContext | undefined>(
    undefined
);

const Tabs = ({children}: TabsProps): JSX.Element => {
    const [activeTab, setActiveTab] = useState('')

    const switchTab = useCallback((title: string) => {
        setActiveTab((prevState: string) => {
            return activeTab === title ? '' : title
        })
    }, [])

    const memoizedContextValue = useMemo(() => ({
            activeTab,
            switchTab
        }),
        [activeTab, setActiveTab],
    );

    const location: string = usePathname();
    const isCaseStudies = location.includes('CaseStudies')

    return (
        <div>
            <TabsContext.Provider value={memoizedContextValue}>
                <div className={isCaseStudies ? styles.tabContainerStudies : styles.tabContainerServices}>
                    {children}
                </div>
            </TabsContext.Provider>
        </div>
    );
};

Tabs.Tab = function TabElement ({title, className, ...props}: TabProps): JSX.Element{
    const {activeTab, switchTab}  = useTabs()

    return(
        <button className={cn(styles.TabElement, className, {
            [styles.TabElementActive]: activeTab === title
        })} {...props} onClick={() => switchTab(title)}>
            {title}
        </button>
    )
}

const CompoundComponentTabs = () => {
    const [serviceElements, setServicesElements] = useState([
        {id: 1, content: 'Social Media'},
        {id: 2, content: 'SEO'},
        {id: 3, content: 'Research'},
        {id: 4, content: 'Content & PR'},
        {id: 5, content: 'Payed Traffic'}
    ])
    const [caseStudies, setCaseStudies] = useState([
        {id: 1, content: 'All case studies'},
        {id: 2, content: 'Social Media'},
        {id: 3, content: 'SEO'},
        {id: 4, content: 'Research'},
        {id: 5, content: 'Content & PR'},
        {id: 6, content: 'Payed Traffic'}
    ])

    const location: string = usePathname();

    return(
        <Tabs>
            {location.includes('CaseStudies') ? caseStudies.map((el) => {
                return <Tabs.Tab title={el.content} key={el.id}/>
            }) : serviceElements.map((el) => {
                return <Tabs.Tab title={el.content} key={el.id}/>
            })}
        </Tabs>
    )
}

export default CompoundComponentTabs;