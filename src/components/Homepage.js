import React from 'react';
import '../App.css';

import { Button } from 'reactstrap';

function Homepage(props) {
  return (
    <div className="Homepage text-center">
      <div className="Hero">
        <h1 className="display-4">
          Your favorite food, delivered while coding!
        </h1>
        <br />
        <Button color="primary" size="lg" onClick={props.derp}>
          Order Now!
        </Button>
      </div>
    </div>
  );
}

export default Homepage;
