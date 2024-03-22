import React, {JSX} from 'react';
import {PlayButtonProps} from "@/shared/UIKit/PlayButton/PlayButton.props";
import PlayButtonLarge from './PlayButtonLarge.svg'
import PlayButtonSmall from './PlayButtonSmall.svg'
import styles from './PlayButton.module.css'
import cn from 'classnames'

const PlayButton = ({size, className, ...props}: PlayButtonProps): JSX.Element => {
    return (
        <button className={cn(styles.playButton, className, {
            [styles.large]: size === 'large',
            [styles.small]: size === 'small'
        })} {...props}>
            {
                size === 'large' ? <PlayButtonLarge/> : <PlayButtonSmall/>
            }
        </button>
    );
};

export default PlayButton;