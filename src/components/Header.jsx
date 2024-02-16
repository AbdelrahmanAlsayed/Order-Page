import { useAppContext } from "../context/AppContext"
import logoImg from "../assets/goStudentLogo.svg";
import styles from "./Header.module.css";
import { useEffect, useRef, useState } from "react";


function Header() {
    const { countries } = useAppContext();
    const imgRef = useRef();
    const optionsRef = useRef();
    const [isOptionsVisible, setOptionsVisible] = useState(false);
    const englandFlag = countries.find((country) => country.name.common === "United Kingdom");

    const handleClickOutside = (event) => {
        if (
            imgRef.current &&
            !imgRef.current.contains(event.target) &&
            optionsRef.current &&
            !optionsRef.current.contains(event.target)
        ) {
            setOptionsVisible(false);
        }
    };
    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        // Cleanup: Remove click event listener on component unmount
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    function showFlag(imgURL) {
        imgRef.current.src = imgURL;
        setOptionsVisible(!isOptionsVisible);
    }
    function toggleDisplayAllFlags() {
        setOptionsVisible(!isOptionsVisible);
    }

    return (
        <div className={styles.bg}>
            <header className={`${styles.header} container`}>
                <img src={logoImg} alt="go student logo" />
                <div className={styles.countries}>
                    <h5>All advantages</h5>
                    <img src={englandFlag?.flags.svg} alt="England Flag" title="England Flag" className={styles.flag} ref={imgRef} onClick={toggleDisplayAllFlags} />
                    <div className={styles.options} ref={optionsRef} style={{ display: isOptionsVisible ? 'block' : 'none' }}>
                        {
                            countries.map((country) => (
                                <div key={country.name.common} className={styles.option} onClick={() => showFlag(country.flags.svg)} title={country.name.common}>
                                    <img className={styles.flagSmall} src={country.flags.svg} alt={country.name.common} />
                                    <span className={styles.countryName}>{country.name.common.slice(0, 12)}</span>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header