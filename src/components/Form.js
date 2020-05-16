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

function Form() {
    const [formData,
        setFormData] = useState({
        pName: '',
        size: '',
        pepperoni: false,
        sausage: false,
        canadianBacon: false,
        spicyItalianBacon: false,
        grilledChicken: false,
        specialIns: ''
    });

    const inputChange = e => {
        e.persist();
        console.log("input changed!");
        // Lets us solve checked vs data
        let value = e.target.type === "checkbox"
            ? e.target.checked
            : e.target.value;
        // sets the key to proper value
        setFormData({
            ...formData,
            [e.target.name]: value
        });
    };

    const InputToppings = e => {
        e.persist();
        console.log("topping changed!");
        setFormData({
            ...formData,
            [e.target.name]: e.target.checked
        });
    };

    const formSubmit = e => {
        e.preventDefault();
        console.log("form submitted!");
    };

    return (
        <div className='order-form'>
            <div className='order-hero'>
                <h3>Build Your Own Pizza!</h3>
                <img
                    className="order-hero-img"
                    src="https://i.imgur.com/PO3Yj2w.jpg?1"
                    alt="custom pizza"/>
            </div>
            <form onSubmit={formSubmit} className='myForm'>
                {/* NAME INPUT */}
                <FormGroup>
                    <Label htmlFor="pName">Name your Custom Pizza!</Label>
                    <FormText>Required.</FormText>
                    <Input
                        type="text"
                        name="pName"
                        id="pName"
                        placeholder="Friday Sauce Boss!"
                        value={formData.pName}
                        onChange={inputChange}/> {/* {errorsState.pName.length >= 0? (<p className="error">{errorsState.pName}</p>): null} */}

                    {/* Size Group */}
                    <FormGroup>
                        <Label htmlFor="size">Choice of Size</Label>
                        <FormText>Required.
                        </FormText>
                        <CustomInput
                            type="select"
                            name="size"
                            id="size"
                            value={formData.size}
                            onChange={inputChange}>
                            <option value="small">Small</option>
                            <option value="medium">Medium</option>
                            <option value="large">Large</option>
                            <option value="xLarge">Supersize (XL)</option>
                        </CustomInput>
                    </FormGroup>

                    {/*  TOPPINGS GROUP */}
                    <FormGroup>
                        <legend>
                            Add Toppings:
                        </legend>
                        <Row>
                            <Col xs='6'>
                                <FormGroup check>
                                    <Label check>
                                        <Input
                                            type='checkbox'
                                            name="pepperoni"
                                            id="pepperoni"
                                            checked={formData.pepperoni}
                                            onChange={InputToppings}/>
                                        Pepperoni
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input
                                            type="checkbox"
                                            id="sausage"
                                            name="sausage"
                                            checked={formData.sausage}
                                            onChange={InputToppings}/>
                                        Sausage
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input
                                            type="checkbox"
                                            id="canadianBacon"
                                            name="canadianBacon"
                                            checked={formData.canadianBacon}
                                            onChange={InputToppings}/>
                                        Canadaian Bacon
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input
                                            type="checkbox"
                                            id="spicyItalianBacon"
                                            name="spicyItalianBacon"
                                            checked={formData.spicyItalianBacon}
                                            onChange={InputToppings}/>
                                        Spicy Italian Sausage
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input
                                            type="checkbox"
                                            id="grilledChicken"
                                            name="grilledChicken"
                                            checked={formData.grilledChicken}
                                            onChange={InputToppings}/>
                                        Grilled Chicken
                                    </Label>
                                </FormGroup>
                            </Col>
                        </Row>
                    </FormGroup>
                    <FormGroup>
                        <legend>Special Instructions</legend>
                        <label>
                            <Input
                                type="textarea"
                                name="specialIns"
                                id="specialIns"
                                placeholder="Anything else you'd like to add?"
                                value={formData.specialIns}
                                onChange={inputChange}/>
                        </label>
                    </FormGroup>

                    <Button
                        color="primary"
                        disabled={formData.specialIns.length === 0
                        ? true
                        : false}>
                        Place Order!
                    </Button>
                </FormGroup>
            </form>
        </div>
    );
}

export default Form;