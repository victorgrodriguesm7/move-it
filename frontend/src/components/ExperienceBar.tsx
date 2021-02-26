import styles from '../styles/components/ExperienceBar.module.css';

interface ExperienceBarProps {
    currentExp: number;
    maxExp: number;
}

export function ExperienceBar({currentExp, maxExp}: ExperienceBarProps){
    let { currentExp, maxExp } = props;
    let percentage = (currentExp * 100) / maxExp;
    
    return (
        <header className={styles.experienceBar}>
            <span>0 xp</span>
            <div>
                <div style={{width: `${percentage}%`}}></div>
                <span className={styles.currentExperience} style={{left: `${percentage}%`}}>{currentExp} exp</span>
            </div>
            <span>600 xp</span>
        </header>
    );
}