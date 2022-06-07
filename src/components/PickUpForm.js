import React, { Component } from 'react';
import { Container, Card,Row, Col, CardTitle, CardBody, CardFooter } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import CardHeader from './CardHeader'
export class PickUpForm extends Component {
   // static displayName = Home.name;
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            formData: { // set up default form values
                accountno:"",
                title: "",
                email:"",
                firstName: "",                
                middleName: "",
                lastName:"",               
                gender:"",
                phoneno: "",
                address1:"",
                city:"",
                state:"",                
                branch: "",               
                agreement: "",
                deliverytype: "",
                cardtype:""               
                
                            },
            errors: {},
        }
    }

    handleChange = event => {
        const { formData } = this.state;
        debugger

        this.setState({
            formData: {
                ...formData, // leave other values unchanged
                [event.target.name]: event.target.value, // update the changed value
            }
        });
    }

    async handleSubmit(event) {
        event.preventDefault();

        const { formData, errors } = this.state;
        const { accountno,city,state, title, middleName, email, firstName, lastName, branch, address1, agreement, deliverytype, phoneno, gender } = formData;
        if(!event.target.agreement.checked){
            alert("Kindly agree to t/c by checking the checkbox below");
            return;
        }
        if (accountno.length != 10 ) { // changed comparison to _less_ than
            this.setState({ // update errors using setState -- never directly modify a component's state
                errors: {
                    ...errors,
                    accountno: "account number must be 10 characters",
                }
            });
            return;
        }

        debugger

        let res = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var testmyEmail = res.test(email);
        if (!testmyEmail) { // changed comparison to _less_ than
            this.setState({ // update errors using setState -- never directly modify a component's state
                errors: {
                    ...errors,
                    email: "Invalid email address",
                }
            });
            return;
        }
      
        if( deliverytype == "Home" &&
         (firstName == null || lastName == null || phoneno == null || address1 == null || city == null || state == null || agreement == null))
         {
             alert("All fields are important and must agree!");
         };
         
         if( deliverytype == "PickUp" && branch == null)
         {
             alert("you need to choose a pickup branch");
         }
        alert("Submitted successfully for" + " " + firstName);
        document.getElementById("lastname").value = "";
        document.getElementById("firstname").value = "";
        document.getElementById("phoneno").value = "";
        document.getElementById("accountno").value = "";
        document.getElementById("email").value = "";
        
       
        //if (email.) { // changed comparison to _less_ than
        //    this.setState({ // update errors using setState -- never directly modify a component's state
        //        errors: {
        //            ...errors,
        //            accountno: "account number must be 10 characters",
        //        }
        //    });
        //}

        // const creds = { email, password }

        // if (creds.email && creds.password) { // objects are never falsey, so we need to check each field directly
            // this.props.signUp(creds);
            // this.props.history.push('/');

        // }
    }

    render() {
        return (
            <div>
                <CardHeader />
                <Container style={{ marginBottom: 20 }}>
                    <Card>
                        <CardFooter style={{ textAlign: 'center', color: 'green', textAlign: 'center' }}> <p style={{ height: 10 }}><h4>Request For Card</h4></p></CardFooter>
                        <CardBody>
                            <p style={{ textAlign: 'center', color: 'green' }}>Request for Cards is easy, it only takes a few steps</p>
                            <form onSubmit={this.handleSubmit} style={{ color: 'green' }}>
                                <Row>
                                    <Col sm="4">
                                        <Label for="accountNo">Account number</Label>
                                        {this.state.errors.accountno &&
                                            //display an error here
                                            <h6 style={{ color: 'red' }}>{this.state.errors.accountno}</h6>
                                        }
                                        <Input type="number" name="accountno" id="accountno" value={this.state.formData.accountno} onChange={this.handleChange} />
                                    </Col>
                                    <Col sm="4">
                                        <FormGroup>
                                            <Label for="Title">Title</Label>
                                            <Input type="select" name="title" id="title" value={this.state.formData.title} onChange={this.handleChange}>
                                                <option>Select title </option>
                                                <option value = 'Dr.'>Dr.</option>
                                                <option value = 'Mr.'>Mr.</option>
                                                <option value = 'Mrs.'>Mrs.</option>
                                                <option value='Engr.'>Engr.</option>
                                            </Input>
                                        </FormGroup>
                                    </Col>
                                    <Col sm="4">
                                        <Label for="Email">Email address</Label> {this.state.errors.email &&
                                            //display an error here
                                            <h6 style={{ color: 'red' }}>{this.state.errors.email}</h6>
                                        }
                                        <Input type="text" name="email" id="email" value={this.state.formData.email} onChange={this.handleChange} />
                                    </Col>                                   
                                </Row>
                                <Row>
                                    <Col sm="4">
                                        <Label for="FirstName">First name</Label>
                                        <Input type="text" name="firstName" id="firstname" value={this.state.formData.firstName} onChange={this.handleChange} />
                                    </Col>
                                    <Col sm="4">
                                        <Label for="FirstName">Middle name</Label>
                                        <Input type="text" name="middleName" id="middlename" value={this.state.formData.middleName} onChange={this.handleChange} />
                                    </Col>
                                    <Col sm="4">
                                        <FormGroup>
                                            <Label for="LastName">Last name</Label>
                                            <Input type="text" name="lastName" id="lastname" value={this.state.formData.lastName} onChange={this.handleChange}/>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm="4">
                                        <Row>
                                        <Col sm="6">
                                        <Label for="Gender">Gender</Label>
                                        <Input type="select" name="gender" id="gender" value={this.state.formData.deliverytype} onChange={this.handleChange}>
                                        <option>Select gender</option>
                                            <option value="male">Male</option>
                                            <option value='female'>Female</option>
                                        </Input>
                                        </Col>
                                        <Col sm="6">
                                        <Label for="Gender" style={{color:'darkorange'}}>Choose card type</Label>
                                        <Input type="select" name="cardtype" id="cardtype" value={this.state.formData.deliverytype} onChange={this.handleChange}>
                                         <option>Card type </option>
                                            <option value="Verve">Verve</option>
                                            <option value='MasterCard'>Master Card</option>
                                        </Input>
                                        </Col>
                                        </Row>
                                        
                                     </Col>
                                    <Col sm="4">                                       
                                        <FormGroup>
                                            <Label for="PhoneNumber">Phone number</Label>
                                            <Input type="text" name="phoneno" id="phoneno" value={this.state.formData.phoneno} onChange={this.handleChange} />
                                        </FormGroup>
                                    </Col>
                                    <Col sm="4">
                                        <FormGroup>
                                            <Label for="DeliveryType">Delivery type</Label>
                                            <Input type="select" name="deliverytype" id="deliverytype" value={this.state.formData.deliverytype} onChange={this.handleChange}>
                                                <option>Select your delivery type</option>
                                                <option value="home">Home</option>
                                                <option value='branch'>Pick up</option>
                                            </Input>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row> 
                                    <Col sm="4" style={{ display: (this.state.formData.deliverytype == 'home') ? 'block' : 'none' }}>
                                        <FormGroup>
                                            <Label for="address1">Address 1</Label>
                                            <Input type="text" name="address1" id="address1" value={this.state.formData.address1} onChange={this.handleChange} />
                                        </FormGroup>
                                    </Col>
                                    <Col sm="4" style={{ display: (this.state.formData.deliverytype == 'home') ? 'block' : 'none' }}>
                                        <FormGroup>
                                            <Label for="City">City</Label>
                                            <Input type="text" name="city" id="city" value={this.state.formData.city} onChange={this.handleChange} />
                                        </FormGroup>
                                    </Col>
                                    <Col sm="4" style={{ marginBottom: 0, display: (this.state.formData.deliverytype == 'home') ? 'block' : 'none' }}>
                                        <FormGroup>
                                            <Label for="state">State</Label>
                                            <Input type="text" name="state" id="state" value={this.state.formData.state} onChange={this.handleChange} />                                           
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row style={{ marginBottom: 0, display: (this.state.formData.deliverytype == 'home') ? 'none' : 'block' }}>
                                    <Col sm="4"></Col>
                                    <Col sm="4">
                                        <FormGroup>
                                            <Label for="branch">Bank branches</Label>
                                            <Input type="select" name="branch" id="branch">
                                                <option>Select your pick up branch</option>
                                                <option value="59">28/29 OTIGBA STREET IKEJA. LAGOS.</option>
                                                <option value="60">3 BEACH ROAD BY AHMADU BELLO WAY JOS</option>
                                                <option value="61">343 NNEBISI ROAD ASABA</option>
                                                <option value="62">52 ENUGU-ONITSHA EXPR ROAD NKPOR</option>
                                                <option value="63">50 IWEKA ROAD ONITSHA</option>
                                            </Input>
                                        </FormGroup>
                                    </Col>
                                    <Col sm="4"></Col>
                                                              
                                </Row>
                                <Row >
                                    <Col sm="4">
                                        <input type="checkbox" name="agreement" id="agreement" />&nbsp;
                                        <label for="agreement" style={{color:'red'}}> I agree to all Terms & Conditions</label>
                                    </Col>
                                    <Col sm="4"></Col>
                                </Row>
                                <Row >
                                    <Col xs="6" sm="4"></Col>
                                    <Col sm="4"><Button color="success" size="lg" style={{ margin: 5 }} active>Submit Request</Button>{' '}</Col>
                                    <Col sm="4"></Col>
                                </Row>
                            </form>
                        </CardBody>
                        <CardFooter style={{ backgroundColor: 'green', color: 'white', textAlign: 'center' }}> ATM Card Request is available to customers in Nigeria</CardFooter>
                    </Card>
                   
                </Container>
            </div>
        );
    }
}
