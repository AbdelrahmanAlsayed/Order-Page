import Registration from './Registration'
import Overview from './Overview';
import styles from "./Home.module.css";

function Home() {
    return (
        <div className={styles.bg}>
            <div className="container">
                <div className={styles.content}>
                    <Registration />
                    <Overview />
                </div>
            </div>
        </div>
    )
}

export default Home