import React, { Component } from 'react';
import './ContactPage.scss';
import AOS from 'aos';
import { Button, Form, Message } from 'semantic-ui-react';

class ContactPage extends Component {
  state = { name: '', email: '', message: '' };
  handleChange = (e, { name, value }) => this.setState({ [name]: value });
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state);
    this.setState({
      name: '',
      email: '',
      message: '',
    });
    console.log(this.state);
  };

  componentDidMount() {
    AOS.init({
      duration: 1000,
    });
  }

  componentWillReceiveProps() {
    AOS.refresh();
  }

  render() {
    const { name, email, message } = this.state;
    return (
      <div className='Contact'>
        {/* <div className='about-section'>
          <div data-aos='fade-right' className='about-section mission'>
            <div className='about-heading'>Contact:</div>
            <p>
              Location: Generations AdventurePlex is located at{' '}
              <a
                target='_blank'
                rel='noopener noreferrer'
                style={{ fontSize: '1em' }}
                href='https://www.google.com/maps/place/1018+W+Edison+Rd,+Mishawaka,+IN+46545/@41.694734,-86.1981197,17z/data=!3m1!4b1!4m5!3m4!1s0x8816cd8b31e76335:0xcdabd144e62763e6!8m2!3d41.694734!4d-86.195931'
              >
                1018 W Edison Rd,{' '}
              </a>
              next to Cinemark Movies 14 .
            </p>
          </div>
        </div> */}
        <Form data-aos='fade-right' className='contact-form' size='large'>
          <Form.Group>
            <Form.Field required>
              <label>Name</label>
              <input
                type='text'
                onChange={this.handleChange}
                name='name'
                label='Name'
                placeholder='Name'
                width={8}
                value={name}
              />
            </Form.Field>
            <Form.Input
              onChange={this.handleChange}
              name='email'
              label='Email'
              placeholder='example@email.com'
              width={8}
              value={email}
            />
          </Form.Group>
          <Form.Group>
            <Form.Input
              onChange={this.handleChange}
              name='message'
              label='Message'
              placeholder='Message'
              width={16}
              value={message}
            />
          </Form.Group>{' '}
          <Button
            color='blue'
            size='large'
            type='submit'
            onClick={this.handleSubmit}
          >
            {' '}
            Submit
          </Button>{' '}
        </Form>
      </div>
    );
  }
}

export default ContactPage;
