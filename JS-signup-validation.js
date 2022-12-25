const form = document.getElementById('form');
const emri = document.getElementById('emri');
const mbiemri = document.getElementById('mbiemri');
const nrTelefonit = document.getElementById('nrTelefonit');
const email = document.getElementById('email');
const qyteti = document.getElementById('qyteti');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const data = document.getElementById('data');
const adresa = document.getElementById('adresa');
const mosha = document.getElementById('mosha');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const emriValue = emri.value.trim();
    const mbiemriValue = mbiemri.value.trim();
    const nrTelefonitValue = nrTelefonit.value.trim();
    const emailValue = email.value.trim();
    const qytetiValue = qyteti.value.trim();
    const dataValue = data.value.trim();
    const adresaValue = adresa.value.trim();
    const moshaValue = mosha.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(emriValue === '') {
        setError(emri, 'Name is required');
    } else {
        setSuccess(emri);
    }

    if(mbiemriValue === '') {
        setError(mbiemri, 'Surname is required');
    } else {
        setSuccess(mbiemri);
    }
    
    if(nrTelefonitValue === '') {
        setError(nrTelefonit, 'Phone number is required');
    } else {
        setSuccess(nrTelefonit);
    }

    if(qytetiValue === '') {
        setError(qyteti, 'City is required');
    } else {
        setSuccess(qyteti);
    }

    if(dataValue === '') {
        setError(data, 'Date of birth is required');
    } else {
        setSuccess(data);
    }

    if(adresaValue === '') {
        setError(adresa, 'Address is required');
    } else {
        setSuccess(adresa);
    }

    if(moshaValue === '') {
        setError(mosha, 'Age is required');
    }else if (moshaValue < 18 ) {
        setError(mosha, 'Age must be at least 18 over.')
    } else {
        setSuccess(mosha);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 character.')
    } else {
        setSuccess(password);
    }

    if(password2Value === '') {
        setError(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords doesn't match");
    } else {
        setSuccess(password2);
    }

};
