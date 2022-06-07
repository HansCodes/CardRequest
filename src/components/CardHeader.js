import React, { Component } from 'react';
import { CardImg, FormGroup } from 'reactstrap';
import { Card, CardTitle, CardText } from 'reactstrap';
import { Alert } from 'reactstrap';
import { Row, Col } from 'reactstrap';

export default class CardHeader extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Card style={{ border: 0, marginTop:0, paddingTop: 1, height: 100 }}>
                    <CardImg
                        src="https://mojidelano.com/wp-content/uploads/2017/01/heritage-bank-logo.jpg"
                        alt="HB Logo"
                        style={{ height: 100, width: 100, border: 0, marginLeft:14}}
                    />
                    {/*<CardImg src="https://b2b.partcommunity.com/community/public/group/e3/08/0a/2152e4662f227f8af9438195ea97ab27.png" alt="HB Logo" style={{ height: 100, width: 100, border: 0 }} />*/}
                </Card>
                                                    
            </div>
        );
    }
}
