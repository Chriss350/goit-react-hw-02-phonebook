import PropTypes from 'prop-types';
import css from './/style.module.css';

export const ContactList = ({ contacts, removeContact }) => {
  return (
    <>
      {contacts.map(({ id, name, number, i }) => (
        <tr key={id} className="text-center">
          <td>{name}</td>
          <td>{number}</td>
          <td>
            <i
              className={`${css.color} fa-solid fa-trash`}
              onClick={() => removeContact(id)}
            ></i>
          </td>
        </tr>
      ))}
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
  removeContact: PropTypes.func,
};
