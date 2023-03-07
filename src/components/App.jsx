import { nanoid } from 'nanoid';
import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Contacts } from './Contacts/Contacts';
import { Navbar } from './Navbar/Navbar';
import 'react-notifications/lib/notifications.css';
import {
  NotificationContainer,
  NotificationManager,
} from 'react-notifications';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  addContact = ({ name, number }) => {
    const { contacts } = this.state;
    const contact = { id: nanoid(), name, number };
    contacts.some(el => el.name === name)
      ? NotificationManager.error(
          `${name} is already on the contacts list`,
          '',
          2500,
          () => {
            alert('callback');
          }
        )
      : this.setState(({ contacts }) => ({
          contacts: [contact, ...contacts],
        }));
  };

  getContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  };

  searchContacts = e => {
    e.preventDefault();

    const value = e.target.value.toLowerCase();
    this.setState({ filter: value });
  };

  removeContact = id => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    return (
      <>
        <Navbar search={this.searchContacts} />
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <ContactForm onSubmit={this.addContact} />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 mx-auto mt-5">
              <Contacts
                contactsArr={this.getContacts()}
                remove={this.removeContact}
              />
            </div>
          </div>
        </div>
        <NotificationContainer />
      </>
    );
  }
}
