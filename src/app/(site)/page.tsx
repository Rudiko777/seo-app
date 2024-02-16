import React, {JSX} from "react";
import Button from "@/components/ui/Button/Button";
import Htag from "@/components/ui/HTag/Htag";
import PlayButton from "@/components/ui/PlayButton/PlayButton";
import Input from "@/components/ui/Input/Input";
import {withMainLayout} from "@/layouts/MainLayout/MainLayout";
import {getAllPosts, Post, PostFastAPI} from "@/services/post";
import styles from './page.module.css'
import award1 from '../../images/info/award1.png'
import award2 from '../../images/info/award2.png'
import award3 from '../../images/info/award3.png'
import award4 from '../../images/info/award4.png'
import Ptag from "@/components/ui/Ptag/Ptag";
import Award from "@/components/screen/award/Award";
import Checkbox from "@/components/ui/Checkbox/Checkbox";
import CompoundComponentTabs from "@/components/ui/Tabs/Tabs";
import Switch from "@/components/ui/Switch/Switch";
import Clients from "@/components/screen/clients/Clients";
import shape from '../../images/about/shape.png'
import collective from '../../images/about/collective.png'
import Image from "next/image";
import RadioProvider from "@/components/ui/RadioBtn/RadioBtn";
import test from '../../images/slider/image.jpg'
import CaseStudiesSlider from "@/components/screen/caseStudiesSlider/CaseStudiesSlider";
import Engagement from "@/components/ui/achives/FeatureFigure";


async function Home(): Promise<JSX.Element> {
    const posts: Post[] = await getAllPosts()

    return (
        <main className={styles.main}>
            <section className={styles.info}>
                <Ptag type={'large'} className={styles.pText}>
                    Createx SEO Agency is a full-service digital marketing agency.
                    We help businesses make more money through a wealth of performance
                    data and market research. We create science-based SEO strategies to empower our clients.
                </Ptag>
                <div className={styles.infoAward}>
                    <Award imageLink={award1} >
                        Top SEO Companies 2020 by Clutch
                    </Award>
                    <Award imageLink={award2} >
                        Top Digital Marketing Agency 2019 by UpCity
                    </Award>
                    <Award imageLink={award3} >
                        Official Member 2020 by Forbes Agency Council
                    </Award>
                    <Award imageLink={award4} >
                        Top SEO Companies 2020 by Top Developers
                    </Award>
                </div>
            </section>
            <section className={styles.clients}>
                <Clients/>
            </section>
            <section className={styles.about}>
                <Image src={shape} alt={'shape'} className={styles.aboutShape}/>
                <div className={styles.aboutInfo}>
                    <Htag type={'h2-main'}>
                        Createx Agency
                    </Htag>
                    <Ptag type={'medium'} className={styles.aboutInfoP}>
                        Lacus ac mollis vitae viverra. Tincidunt est, feugiat montes, viverra ullamcorper mi dui, nulla pharetra. Sapien urna nullam elit diam mauris orci. Volutpat quam tempus justo, aliquam. Tortor ultrices mattis eget orci eu nisi sed augue odio. Et senectus risus, pharetra, tristique libero. Dolor risus ac quam dictum mattis ultrices laoreet sapien. Feugiat lacus, suscipit eu sociis et quis hendrerit. Cras at ac magna ultricies orci.
                    </Ptag>
                    <Button appearance={'primary'} size={'medium'}>
                        More about us
                    </Button>
                </div>
                <Image src={collective} alt={'collective'}/>
            </section>
            <div className={styles.box4}>
                <RadioProvider/>
                <Checkbox type={'unchecked'} id={'happy'}>
                    Login
                </Checkbox>
                <Switch type={'inActive'}>
                    Some text
                </Switch>
                <Button appearance={'primary'} size={'big'} isArrow>
                    Regular Button
                </Button>
                <Button appearance={'ghost'} size={'medium'} isArrow>
                    Regular Button
                </Button>
                <Button appearance={'primary'} size={'small'} isArrow>
                    Regular Button
                </Button>
                <Htag type={'h2-services'}>
                    13122313123
                </Htag>
                <PlayButton size={'small'}/>
                <PlayButton size={'large'}/>
                <div className={styles.div}>
                    fwfmjnfvjfsj
                </div>
                <Input placeholder={'Placeholder'} inputSize={'large'} state={'default'} label={'Email'} type={'text'} theme={'light'} hint={''}/>
                <Input placeholder={'Placeholder'} inputSize={'medium'} state={'default'} label={'Email'} type={'text'} theme={'light'} hint={''}/>
                <Input placeholder={'Placeholder'} inputSize={'small'} state={'default'} label={'Email'} type={'text'} theme={'light'} hint={''}/>
                <Htag type={'h2-main'}>
                    Posts
                </Htag>
                <CompoundComponentTabs/>
                <div>
                    {posts.map((item: Post) => <div key={item.id}>{item.title}</div>)}
                </div>
                <Image src={test} alt={'dsad'} className={styles.test}/>
            </div>
            <div className={styles.box5}>5</div>
            <div className={styles.cta}>
                <div className={styles.ctaContent}>
                    <Htag type={'h2-main'}>
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        Read our clients' case studies
                    </Htag>
                    <CaseStudiesSlider/>
                </div>
            </div>
            <div className={styles.box7}>
                <Engagement percent={90} title={'my title'} color={'orange'}/>
            </div>
            <div className={styles.caseStudies}>8</div>
            <div className={styles.box9}>9</div>
            <div className={styles.box10}>10</div>
            <div className={styles.box11}>11</div>
            <div className={styles.box12}>12</div>
        </main>
    )
}

export default withMainLayout(Home);