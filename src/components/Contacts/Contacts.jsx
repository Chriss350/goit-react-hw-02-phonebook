import { ContactList } from 'components/ContactList/ContactList';
import PropTypes from 'prop-types';

export const Contacts = ({ contactsArr, remove }) => {
  return (
    <table className="table table-hover">
      <thead>
        <tr className="text-center">
          <th scope="col" className="col-md-5">
            Name
          </th>
          <th scope="col" className="col-ms-5">
            Phone
          </th>
          <th scope="col" className="col-md-2">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <ContactList contacts={contactsArr} removeContact={remove} />
      </tbody>
    </table>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.array,
  remove: PropTypes.func,
};
