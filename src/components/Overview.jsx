import { useState } from "react";
import { useAppContext } from "../context/AppContext";
import styles from "./Overview.module.css";


function Overview() {
    const { selectedValue, handleValidation, errors, terms, setTerms } = useAppContext();
    const [selectedMonths, setSelectedMonths] = useState(6);
    const [isPayInAdvance, setIsPayInAdvance] = useState(false);

    const regularPrice = 29.60;
    let discountPercentage = selectedMonths;
    discountPercentage = selectedMonths === 6 ? 4 : selectedMonths;

    if (isPayInAdvance) {
        discountPercentage += 5;
    }

    const price = regularPrice - regularPrice * discountPercentage / 100;
    let discountValue = (regularPrice - price) * selectedValue;
    const totalPN = price * selectedValue;

    const handleMonthClick = (months) => {
        setSelectedMonths(months);
    };

    const handleCheckboxChange = (event) => {
        setIsPayInAdvance(event.target.checked);
    };
    const handleCheckboxOfTerms = (event) => {
        if (event.target.checked) {
            setTerms(true);
        }
        else {
            setTerms(false);
        }
    };

    return (
        <div className={styles.bg}>
            <div className={`container ${styles.overview}`}>
                <h1 className={styles.mainHeading}>ORDER OVERVIEW</h1>
                <div className={styles.months}>
                    <p onClick={() => handleMonthClick(6)} className={selectedMonths === 6 ? styles.selected : ''}>6 MONTHS</p>
                    <p onClick={() => handleMonthClick(9)} className={selectedMonths === 9 ? styles.selected : ''}>9 MONTHS</p>
                    <p onClick={() => handleMonthClick(12)} className={selectedMonths === 12 ? styles.selected : ''}>12 MONTHS</p>
                    <p onClick={() => handleMonthClick(18)} className={selectedMonths === 18 ? styles.selected : ''}>18 MONTHS</p>
                    <p onClick={() => handleMonthClick(24)} className={selectedMonths === 24 ? styles.selected : ''}>24 MONTHS</p>
                    <p onClick={() => handleMonthClick(36)} className={selectedMonths === 36 ? styles.selected : ''}>36 MONTHS</p>
                </div>
                <div className={styles.formGroup}>
                    <label className={`${styles.togglerWrapper} ${styles.style1}`}>
                        <input type="checkbox" id="discount" onChange={handleCheckboxChange} />
                        <div className={styles.togglerSlider}>
                            <div className={styles.togglerKnob}></div>
                        </div>
                    </label>
                    <label className={styles.discountLabel} htmlFor="discount"> Pay in advance - EXTRA 5% DISCOUNT</label>
                </div>
                <div className={styles.group}>
                    <p>NUMBER OF SESSIONS P.M.</p>
                    <span>{selectedValue}</span>
                </div>
                <div className={styles.group}>
                    <p>REGULAR PRICE</p>
                    <span> <s>{regularPrice}</s> €</span>
                </div>
                <div className={styles.group}>
                    <p>YOUR PRICE</p>
                    <span>{price.toFixed(2)} €</span>
                </div>
                <div className={styles.groupS}>
                    <p>DISCOUNT {discountPercentage} %</p>
                    <span>- {discountValue.toFixed(2)} €</span>
                </div>
                <div className={styles.line} />
                <div className={styles.group}>
                    <p>Setup fee</p>
                    <span className={styles.oddColor}>0.00 €</span>
                </div>
                <div className={styles.group}>
                    <p>TOTAL P.M.</p>
                    <span className={styles.oddColor}> {totalPN.toFixed(2)} €</span>
                </div>
                <div className={styles.terms}>
                    <input type="checkbox" id="termsAndConditions" onChange={handleCheckboxOfTerms} />
                    <label className={styles.termsParagrph} htmlFor="termsAndConditions">
                        I accept the <span>Terms & Conditions</span> and understand my <span> right of withdrawal </span>
                        as well as the circumstances that lead to a repeal of the same.<br />
                        {!terms && <p className="errorMsg">{errors.terms}</p>}
                    </label>
                </div>
                <button className={styles.orderButton} onClick={handleValidation} >
                    Order Now
                </button>
            </div>
        </div>
    )
}

export default Overview