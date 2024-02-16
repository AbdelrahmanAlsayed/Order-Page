import { useEffect, useRef, useState } from "react";
import styles from "./Registration.module.css";
import { useAppContext } from "../context/AppContext";
import PropTypes from 'prop-types';

function PhoneInput(props) {
    const { countries, handleInputChange } = useAppContext();
    const imgRef = useRef();
    const optionsRef = useRef();
    const codeRef = useRef();
    const [isOptionsVisible, setOptionsVisible] = useState(false);
    const Greece = countries.find((country) => country.name.common === "Greece");

    function showFlagAndCode(imgURL, code) {
        imgRef.current.src = imgURL;
        codeRef.current.innerHTML = code;
        setOptionsVisible(!isOptionsVisible);
    }

    function toggleDisplayAllFlags() {
        setOptionsVisible(!isOptionsVisible);
    }

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


    return (
        <div className={styles.inputGroup}>
            <div className={styles.preInputGroupPhone}>
                <img src={Greece?.flags.svg} alt="Greece Flag" title="Greece Flag" className={styles.flag} ref={imgRef} onClick={toggleDisplayAllFlags} />
                <span ref={codeRef}>+30</span>
                <div className={styles.options} ref={optionsRef} style={{ display: isOptionsVisible ? 'block' : 'none' }}>
                    {
                        countries.map((country) => (
                            <div key={country.name.common} className={styles.option} onClick={() => showFlagAndCode(country.flags.svg, country.idd.root + country.idd?.suffixes?.slice(0, 1) || "")} title={country.name.common}>
                                <img className={styles.flagSmall} src={country.flags.svg} alt={country.name.common} />
                                <span className={styles.countryName}>{country.idd.root + country.idd?.suffixes?.slice(0, 1) || ""} </span>
                            </div>
                        ))
                    }
                </div>
                <input className={styles.input} name={props.name} type="text" onChange={handleInputChange} />
            </div>
        </div>
    );
}

PhoneInput.propTypes = {
    name: PropTypes.string.isRequired,
};

export default PhoneInput;
