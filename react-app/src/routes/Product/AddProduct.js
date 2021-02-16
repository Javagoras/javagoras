import React, { Component } from 'react';
import { Header, Form } from 'semantic-ui-react';

export class AddProduct extends Component {
  static displayName = AddProduct.name;
  state = {
    firstName: '',
    lastName: '',
  };

  handleInputChange = (e, { name, value }) => this.setState({ [name]: value });

  handleSubmit = () => {
    const { name, email } = this.state;

    this.setState({ submittedName: name, submittedEmail: email });
  };

  render() {
    const { firstName, lastName } = this.state;

    return (
      <div>
        <Header as='h1'>Add Product</Header>
        <p>Proceed to add your new product:</p>
        <Form>
          <Form.Group widths='equal'>
            <Form.Input fluid label='First name' placeholder='First name' name='firstName' onChange={this.handleInputChange} value={firstName}/>
            <Form.Input fluid label='Last name' placeholder='Last name' name='lastName' onChange={this.handleInputChange}  value={lastName}/>
          </Form.Group>
          <Form.Checkbox label='I agree to the Terms and Conditions' />
        </Form>
      </div>
    );
  }
}
