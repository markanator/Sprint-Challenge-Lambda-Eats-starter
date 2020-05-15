import React, {useState} from 'react';

import '../App.css'

import {
    CustomInput,
    Row,
    Col,
    FormGroup,
    Label,
    Input,
    FormText,
    Button
  } from 'reactstrap';

function Form () {
    const [formData, setFormData] = useState({
        pName:'',
        size:'',
        pepperoni: false,
        sausage: false,
        canadianBacon: false,
        spicyItalianBacon: false,
        grilledChicken: false,
        specialIns: ''
    });



    return (
        <div className='order-form'>
            <div className='order-hero'>
                <h3>Build Your Own Pizza!</h3>
                <img
                className="order-hero-img"
                src="https://i.imgur.com/PO3Yj2w.jpg?1"
                alt="custom pizza"
                />
            </div>
            <p>FORM GOES HERE!</p>
        </div>
    );
}

export default Form;