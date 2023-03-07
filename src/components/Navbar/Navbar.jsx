import { ContactSearch } from 'components/ContactSearch/ContactSearch';
import { Component } from 'react';

export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/">
            PhoneBook
          </a>
          <ContactSearch search={this.props.search} />
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {};
