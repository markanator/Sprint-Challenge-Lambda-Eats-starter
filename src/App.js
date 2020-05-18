import React, {useState} from "react";

import {Route} from 'react-router-dom';
import Form from './components/Form';
import Homepage from './components/Homepage';
import NavBar from './components/NavBar';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const App = () => {

    const [modal,
        setModal] = useState(false);

    const toggle = () => {
        setModal(!modal);
    };

    return (
        <div>
            <header>
                <NavBar/>
            </header>

            <Route exact path='/'>
                <Homepage modalTog={toggle}/>
                <Modal isOpen={modal} toggle={toggle} className="Order">
          <ModalHeader toggle={toggle}>Order Form!</ModalHeader>
          <ModalBody>
            <Form action={toggle} />
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
            </Route>
            <Route exact path='/pizza'>
                <Form/>
            </Route>
        </div>
    );
};
export default App;
