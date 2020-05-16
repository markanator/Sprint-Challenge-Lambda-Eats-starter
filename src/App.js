import React from "react";

import { Route} from 'react-router-dom';
import Form from './components/Form';
import Homepage from './components/Homepage';
import NavBar from './components/NavBar';

const App = () => {
    return (
        <div>
            <header>
              <NavBar />
            </header>
            
            <Route exact path='/'>
                <Homepage/>
            </Route>
            <Route exact path='/pizza'>
                <Form/>
            </Route>
        </div>
    );
};
export default App;
