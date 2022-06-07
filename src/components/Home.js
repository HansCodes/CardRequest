import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import { Card, CardTitle, CardText } from 'reactstrap';

export class Home extends Component {
  static displayName = Home.name;

  render () {
      return (
          <div style={{ backgroundColor: 'green', height: 200, padding:100 }}>
            <CardText>
                <Form onSubmit={this.handleSubmit} inline>
                      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                          <Label for="exampleEmail" className="mr-sm-2" style={{ color: 'white' }}>Email</Label>
                        <Input type="email" name="username" id="exampleEmail" placeholder="something@idk.cool" />
                    </FormGroup>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label for="examplePassword" className="mr-sm-2" style={{ color: 'white' }}>Password</Label>
                        <Input type="password" name="password" id="examplePassword" placeholder="don't tell!" />
                    </FormGroup>
                    <Button>Submit</Button>
                </Form>
            </CardText>
       
      </div>
    );
  }
}
