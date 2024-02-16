
import styles from "./Registration.module.css";
import firstPayment from "../assets/firstPyment.svg";
import seconedPayment from "../assets/seconedPayment.svg";
import PhoneInput from "./PhoneInput";
import { useAppContext } from "../context/AppContext";

function Registration() {
    const { selectedValue, handleSelectChange,
        handleInputChange, errors } = useAppContext();

    return (
        <div className={styles.bg}>
            <form className={`container ${styles.form}`} method="post">
                <div className={styles.registration}>
                    <h1 className={styles.mainHeading}>Registration & Booking at GoStudent</h1>
                    <div className={styles.subHeading}>The leading platform for online tutoring.</div>
                    <div className={styles.formGroup}>
                        <label htmlFor="studentNumber">
                            LOGIN PHONE NUMBER
                            <span> (preferably the student&#39;s) </span>
                        </label>
                        <PhoneInput name="studentPhone" />
                        {errors.studentPhone && <p className="errorMsg">{errors.studentPhone}</p>}
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="parentNumber">
                            CONTACT PHONE NUMBER
                            <span> (preferably the parent&#39;s) </span>
                        </label>
                        <PhoneInput name="parentPhone" />
                        {errors.parentPhone && <p className="errorMsg">{errors.parentPhone}</p>}
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="emailAddress">
                            CONTACT EMAIL ADDRESS
                            <span> (preferably the parent&#39;s) </span>
                        </label>
                        <div className={styles.inputGroup}>
                            <div className={styles.preInputGroup}>
                                <input className={styles.input} type="email" onChange={handleInputChange} name="email" id="emailAddress" />
                            </div>
                        </div>
                        {errors.email && <p className="errorMsg">{errors.email}</p>}
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="contactName">
                            CONTACT NAME
                        </label>
                        <div className={styles.inputGroup}>
                            <div className={styles.preInputGroup}>
                                <input className={styles.input} type="text" onChange={handleInputChange} name="name" id="contactName" />
                            </div>
                        </div>
                        {errors.name && <p className="errorMsg">{errors.name}</p>}
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="billingAddress">
                            BILLING ADDRESS
                        </label>
                        <div className={styles.inputGroup}>
                            <div className={styles.preInputGroupS}>
                                <input className={styles.input} name="address" type="text" onChange={handleInputChange} id="billingAddress" placeholder="Address" />
                                <input className={styles.input} name="nr" type="text" onChange={handleInputChange} placeholder="Nr" />
                            </div>
                            {errors.address && <p className="errorMsg">{errors.address}</p>}
                            {errors.nr && <p className="errorMsg">{errors.nr}</p>}
                        </div>
                    </div>
                    <div className={styles.inputGroup}>
                        <div className={styles.preInputGroupS}>
                            <input className={styles.input} onChange={handleInputChange} name="code" type="text" placeholder="Postal Code" />
                            <input className={styles.input} onChange={handleInputChange} name="city" type="text" placeholder="city" />
                            <input className={styles.input} onChange={handleInputChange} name="country" type="text" placeholder="country" />
                        </div>
                        {errors.code && <p className="errorMsg">{errors.code}</p>}
                        {errors.city && <p className="errorMsg">{errors.city}</p>}
                        {errors.country && <p className="errorMsg">{errors.country}</p>}
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="monthlySessions">MONTHLY SESSIONS</label>
                        <select name="monthlySessions" id="monthlySessions" className={styles.specialInput} defaultValue={selectedValue} onChange={handleSelectChange}>
                            <option value="4">4 sessions</option>
                            <option value="8">8 sessions</option>
                            <option value="12">12 sessions</option>
                            <option value="16">16 sessions</option>
                            <option value="20">20 sessions</option>
                            <option value="32">32 sessions</option>
                            <option value="40">40 sessions</option>
                        </select>
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="paymentMethods">SELECT PAYMENT METHOD</label>
                        <label htmlFor="firstPayment" className={styles.payment} >
                            <input type="radio" name="paymentMethod" id="firstPayment" value="firstPayment" />
                            <img src={firstPayment} alt="first payment method" />
                        </label>
                        <label htmlFor="secondPayment" className={styles.payment} >
                            <input type="radio" name="paymentMethod" id="secondPayment" value="secondPayment" defaultChecked />
                            <img src={seconedPayment} alt="second payment method" />
                        </label>
                        <div className="payment-content">
                            <input className={styles.specialInput} onChange={handleInputChange} name="cardHolder" type="text" placeholder="Card Holder" />
                            {errors.cardHolder && <p className="errorMsg">{errors.cardHolder}</p>}
                            <input className={styles.specialInput} onChange={handleInputChange} name="cardNumber" type="text" placeholder="Card Number" />
                            {errors.cardNumber && <p className="errorMsg">{errors.cardNumber}</p>}
                        </div>
                    </div>
                    <div className={styles.lastMsg}>100% secure payment. All data is encrypted.</div>
                </div>
            </form>
        </div>
    )
}

export default Registration;

