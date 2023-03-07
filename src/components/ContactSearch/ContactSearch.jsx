import PropTypes from 'prop-types';

import Form from 'react-bootstrap/Form';
import { nanoid } from 'nanoid';

export const ContactSearch = ({ search }) => {
  const searchInputId = nanoid();
  return (
    <Form className="form-inline my-2 my-lg-0">
      <Form.Control
        type="text"
        onChange={search}
        id={searchInputId}
        onKeyPress={e => {
          e.key === 'Enter' && e.preventDefault();
        }}
        placeholder="Search..."
      />
    </Form>
  );
};

ContactSearch.propTypes = {
  search: PropTypes.func,
};
