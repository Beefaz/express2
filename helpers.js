export const validateStringLength = (string, min, max) => {
  return string.length >= min && string.length <= max;
}

export const validateEmailStr = (emailstr) =>
  String(emailstr)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

export const validatePassword = (string) => string.match(/\d+/g);

const registrationResponses = {
  failedNames: 'Vardas ir pavardė negali būti trumpesni nei 3 ir ilgesi nei 200 simbolių.',
  failedEmail: 'El. pašto adresas negali būti trumpesnis nei 5 ir ilgesnis nei 50 simbolių arba netinkamas pašto formatas.',
  failedPass: 'Slaptažodis privalo turėti bent vieną skaičių ir turi būti ne trumpesnis nei 8 ir ne ilgesnis nei 16 simbolių.',
  noDataReceived: 'Negauti registracijos duomenys.',
  success: 'Sveikiname sėkmingai prisiregistravus platformoje'
};
export const validateRegistrationResponse = ({name, last_name, email, password}) => {
  const {failedNames, noDataReceived, failedEmail, failedPass, success} = registrationResponses;
  if (!name || !last_name || !email || !password) return noDataReceived;
  if (!validateStringLength(name, 3, 200) || !validateStringLength(last_name, 3, 200)) return failedNames;
  if (!validateStringLength(email, 5, 50) || !validateEmailStr(email)) return failedEmail;
  if (!validatePassword(password) || !validateStringLength(password, 8, 16)) return failedPass;
  return success;
};

const loginResponses = {
  failed: 'Neteisingi prisijungimo duomenys',
  noDataReceived: 'Negavome jokių duomenų, bandykite dar kartą.',
  success: 'Sveikiname sėkmingai prisijungus',
}

export const validateLoginResponse = ({email, password}) => {
  const {success, failed, noDataReceived} = loginResponses;
  if (!email || !password) return noDataReceived;
  if (email === 'admin@vcs.lt' && password === 'Github12') return success;
  return failed;
};

export const renderNews = (adblock = '') => {
  if (adblock !== '') adblock = `<div>${adblock} ad block</div><br/>`;
  return `${adblock}<div>News1</div><br><div>News2</div><br/><div>News3</div>`
}
