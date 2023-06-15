import { useState } from "react";

const RegistrationForm = () => {
const [email, setEmail] = useState('');
const [name, setName] = useState('');
const [password, setPassword] = useState('');

function nombre (nom) {
    setName(nom.target.value)
}

function emails (ema) {
    setEmail(ema.target.value)
}

function passwords (pass) {
    setPassword(pass.target.value)
}

return { 
    nombre,
    emails,
    passwords,
    name,
    password,
    email
}
}


export default RegistrationForm