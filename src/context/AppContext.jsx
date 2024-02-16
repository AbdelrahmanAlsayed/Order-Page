import { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Validation from '../components/Validation';


const AppContext = createContext();

function AppProvider({ children }) {
    const [countries, setCountries] = useState([]);
    const [selectedValue, setSelectedValue] = useState("8");
    const [terms, setTerms] = useState(false);
    const [errors, setErrors] = useState({});

    const handleSelectChange = (event) => {
        setSelectedValue(event.target.value);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://restcountries.com/v3.1/all");
                const data = await response.json();
                setCountries(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const [formData, setFormData] = useState({
        studentPhone: "",
        parentPhone: "",
        email: "",
        name: "",
        address: "",
        nr: "",
        code: "",
        city: "",
        country: "",
        cardHolder: "",
        cardNumber: "",
        terms: "",
    });

    const handleInputChange = (event) => {
        const newObj = { ...formData, [event.target.name]: event.target.value }
        setFormData(newObj);
    };

    const handleValidation = (event) => {
        event.preventDefault();
        setErrors(Validation(formData))
    }

    return (
        <AppContext.Provider value={{
            countries, selectedValue,
            handleSelectChange, handleInputChange, handleValidation, errors, terms, setTerms
        }}>
            {children}
        </AppContext.Provider>
    );
}

AppProvider.propTypes = {
    children: PropTypes.node.isRequired
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = () => {
    return useContext(AppContext);
};


export default AppProvider;