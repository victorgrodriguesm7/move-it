import styles from '../styles/components/Profile.module.css';

export default function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/victorgrodriguesm7.png" alt="Victor G. Rodrigues"/>
            <div>
                <strong>Victor G. Rodrigues</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level 1
                </p>
            </div>
        </div>
    );
}