
export default function Validation(formData) {

    const errors = {};

    const phonePattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    const emailPattern = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
    const namePattern = /([a-zA-Z0-9_\s]+)/;
    const cardNumber = /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;

    if (formData.studentPhone == "") {
        errors.studentPhone = "Student Phone is empty"
    }
    else if (!phonePattern.test(formData.studentPhone)) {
        errors.studentPhone = "student Phone is not valid"
    }

    if (formData.parentPhone == "") {
        errors.parentPhone = "Parent Phone is empty"
    }
    else if (!phonePattern.test(formData.parentPhone)) {
        errors.parentPhone = "Parent Phone is not valid"
    }

    if (formData.email == "") {
        errors.email = "Email is empty"
    }
    else if (!emailPattern.test(formData.email)) {
        errors.email = "Email is not valid"
    }

    if (formData.name == "") {
        errors.name = "Name is empty"
    }
    else if (!namePattern.test(formData.name)) {
        errors.name = "Name is not valid"
    }


    if (formData.address == "") {
        errors.address = "Address is empty"
    }
    if (formData.nr == "") {
        errors.nr = "Nr is empty"
    }
    if (formData.code == "") {
        errors.code = "Code is empty"
    }
    if (formData.city == "") {
        errors.city = "City is empty"
    }
    if (formData.country == "") {
        errors.country = "Country is empty"
    }
    if (formData.cardHolder == "") {
        errors.cardHolder = "Card Holder is empty"
    }

    if (formData.cardNumber == "") {
        errors.cardNumber = "Card Number is empty"
    }
    else if (!cardNumber.test(formData.cardNumber)) {
        errors.cardNumber = "Card Number is not valid"
    }

    if (!formData.terms) {
        errors.terms = "Confirm that you have read the terms and conditions"
    }  
    
    return errors;
}