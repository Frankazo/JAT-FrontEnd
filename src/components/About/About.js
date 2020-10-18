import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class About extends Component {
  constructor() {
    super();

  }

  render() {
    return (
      <div className="row">
        <div className="col-sm-10 col-md-8 mx-auto mt-5 text-justify">
          <h3>About</h3>
          <p>
            Minim aute Lorem reprehenderit sunt cillum tempor eu enim. Qui do dolor laborum quis dolore mollit magna reprehenderit officia do ut. Ad proident veniam cillum officia sunt dolore dolor incididunt id reprehenderit. Irure elit do Lorem consectetur non reprehenderit.
          </p>
          <p>
            Proident cupidatat esse Lorem duis sit ex voluptate exercitation consequat quis nostrud sint. Nulla incididunt pariatur proident enim exercitation qui minim id pariatur esse enim laborum labore sunt. Laboris ullamco aute ad officia labore culpa. Mollit nulla laborum adipisicing sint ipsum nulla non dolore elit. Et proident irure aliqua pariatur reprehenderit et consectetur est incididunt pariatur do sint.
          </p>
          <p>
            Sit excepteur dolor do officia consectetur veniam velit incididunt incididunt in officia. Enim veniam irure sint do consectetur dolore culpa laborum. Commodo irure elit officia ipsum cupidatat irure. Reprehenderit exercitation id qui aliquip amet. Nostrud est sint do nisi magna Lorem ex laboris dolore. Deserunt magna dolore nostrud adipisicing elit id commodo ullamco eiusmod magna reprehenderit anim occaecat sint. Adipisicing id laborum culpa duis Lorem et duis in dolor fugiat culpa labore esse.
          </p>
        </div>
      </div>
    );
  }
}

export default withRouter(About);
