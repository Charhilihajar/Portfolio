
const form = document.getElementById('form');
const ihrname = document.getElementById('ihrname');
const email = document.getElementById('email');
const telefon = document.getElementById('telefon');
const nachricht = document.getElementById('nachricht');

form.addEventListener('submit', e => {
  e.preventDefault();
  validateInputs();
})


const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success');
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
  const ihrnameValue = ihrname.value.trim();
  const emailValue = email.value.trim();
  const telefonValue = telefon.value.trim();
  const nachrichtValue = nachricht.value.trim();

  if (ihrnameValue === '') {
    setError(ihrname, 'Ihr Name ist erforderlich');
  } else {
    setSuccess(ihrname);
  }

  if (emailValue === '') {
    setError(email, 'E-Mail ist erforderlich');
  } else if (!isValidEmail(emailValue)) {
    setError(email, 'Geben Sie eine gültige E-Mail Adresse an');
  } else {
    setSuccess(email);
  }

  if (telefonValue === '') {
    setError(telefon, 'Ihre Telefonnummer ist erforderlich');
  } else if (telefonValue.length < 13) {
    setError(telefon, 'Die Telefonnummer muss aus mindestens 13 Zeichen bestehen.');
  } else {
    setSuccess(telefon);
  }

  if (nachrichtValue === '') {
    setError(nachricht, 'Füllen Sie bitte das Feld aus');
  } else {
    setSuccess(nachricht);
  }
};














