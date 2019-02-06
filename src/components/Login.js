import React, { Component } from 'react';
import { Form, Button, Container, Row, Col, Image } from 'react-bootstrap';
import StorageService from './../storage/StorageService';
import history from './../helper/history';
import { connect } from 'react-redux';
import { userActions ,alertActions } from './../actions';
class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: { email: '', password: '' },
            errors: {}
        };
        const { dispatch } = this.props;
        history.listen((location, action) => {
            dispatch(alertActions.clear());
        });

        if (StorageService.getLogin() !== null) {
            history.push('/dashboard')
        }
        this.props.dispatch(userActions.logout());
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        document.title = "Login | ReactJS";
    }
    handleChange = (field, e) => {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({ fields });
        this.handleValidation();
    }

    handleValidation = () => {
        let fields = this.state.fields;
        // eslint-disable-next-line no-useless-escape
        let emailField = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        let errors = {};
        let formIsValid = true;

        if (fields["email"].trim().length === 0) {
            formIsValid = false;
            errors["email"] = "Cannot be empty";
        } else if (fields["email"].trim().length !== 0 && emailField.test(fields["email"].trim()) === false) {
            formIsValid =
                errors["email"] = "Email id is invalid";
        }

        if (fields["password"].trim().length === 0) {
            formIsValid = false;
            errors["password"] = "Cannot be empty";
        }
        this.setState({ errors: errors });
        return formIsValid;
    };
    handleSubmit = (e) => {
        e.preventDefault();
        const { dispatch } = this.props;
        history.listen((location, action) => {
            dispatch(alertActions.clear());
        });
        if (this.handleValidation() === true) {
            dispatch(userActions.login(this.state.fields));
        }
    }
    render() {
        const { alert } = this.props;
        const { loading } = this.props;
        return (
            <>
                <Container className="padd-50" >
                    <Row>
                        <Col className="col-md-6 mx-auto">
                            <h1 className="text-center">Login</h1>
                            <Form onSubmit={this.handleSubmit}>
                                {alert.message &&
                                    <div className={`alert ${alert.type}`}>{alert.message}</div>
                                }
                                <div className={(this.state.errors['invalid'] !== void 0 && this.state.errors['invalid'].length) ? "invalid-feedback d-block" : ""}>{this.state.errors["invalid"]}</div>
                                <Form.Group controlId="formBasicEmail" >
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" value={this.state.fields["email"]} onChange={this.handleChange.bind(this, "email")} />
                                    <div className={(this.state.errors['email'] !== void 0 && this.state.errors['email'].length) ? "invalid-feedback d-block" : ""}>{this.state.errors["email"]}</div>
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                </Form.Text>
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" autoComplete="false" placeholder="Password" value={this.state.fields["password"]}
                                        onChange={this.handleChange.bind(this, "password")} />
                                    <div className="invalid-feedback">{this.state.errors["password"]}</div>
                                    <div className={(this.state.errors['password'] !== void 0 && this.state.errors['password'].length) ? "invalid-feedback d-block" : ""}>{this.state.errors["password"]}</div>
                                </Form.Group>

                                <Button variant="primary" type="submit" >Submit </Button>
                                {loading!==void 0 && <Image className="ml-3" src='data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=='></Image>}
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

function mapStateToProps(state) {
    const { alert } = state;
    const { loading } = state.users;
    return {
        alert,
        loading
    };
}
export default connect(mapStateToProps)(LoginForm)
