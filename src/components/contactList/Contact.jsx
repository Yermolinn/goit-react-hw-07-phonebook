import PropTypes from 'prop-types';
import css from './ContactList.module.css';

export const Contact = ({ name, phone }) => {
  return (
    <div className={css.itemContainer}>
      <p className={css.text}>{`${name}: ${phone}`}</p>
    </div>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
