import {JSX} from "react";
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

            <div className={styles.box2}>
                <Checkbox type={'checked'} id={'happy'}>
                    urfhuhfhu3f
                </Checkbox>
                <Button appearance={'primary'} size={'big'} isArrow>
                Regular Button
                </Button>
                <Button appearance={'ghost'} size={'medium'} isArrow>
                    Regular Button
                </Button>
                <Button appearance={'primary'} size={'small'} isArrow>
                    Regular Button
                </Button>
                <Htag type={'h2-services'} id={'21313'}>
                    13122313123
                </Htag>
                <PlayButton size={'small'}/>
                <PlayButton size={'large'}/>
                <div className={styles.div}>
                    fwfmjnfvjfsj
                </div>
                <Input placeholder={'Placeholder'} inputSize={'large'} state={'default'} label={'Email'} type={'text'} theme={'dark'} hint={''}/>
                <Input placeholder={'Placeholder'} inputSize={'medium'} state={'default'} label={'Email'} type={'text'} theme={'dark'} hint={''}/>
                <Input placeholder={'Placeholder'} inputSize={'small'} state={'default'} label={'Email'} type={'text'} theme={'dark'} hint={''}/>
                <Htag type={'h2-main'} id={'1'}>
                    Posts
                </Htag>
                <div>
                    {posts.map((item: Post) => <div key={item.id}>{item.title}</div>)}
                </div></div>
            <div className={styles.box3}>3</div>
            <div className={styles.box4}>4</div>
            <div className={styles.box5}>5</div>
            <div className={styles.cta}>6</div>
            <div className={styles.box7}>7</div>
            <div className={styles.caseStudies}>8</div>
            <div className={styles.box9}>9</div>
            <div className={styles.box10}>10</div>
            <div className={styles.box11}>11</div>
            <div className={styles.box12}>12</div>
        </main>
    )
}

export default withMainLayout(Home);