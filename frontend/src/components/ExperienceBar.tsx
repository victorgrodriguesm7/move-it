import { useContext } from 'react';
import { challengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ExperienceBar.module.css';


export function ExperienceBar(){
    let { currentExperience, experienceToNextLevel } = useContext(challengesContext);
    let percentageToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;
    
    return (
        <header className={styles.experienceBar}>
            <span>0 xp</span>
            <div>
                <div style={{width: `${percentageToNextLevel}%`}}></div>
                <span className={styles.currentExperience} style={{left: `${percentageToNextLevel}%`}}>
                    {currentExperience} exp
                </span>
            </div>
            <span>{experienceToNextLevel} xp</span>
        </header>
    );
}