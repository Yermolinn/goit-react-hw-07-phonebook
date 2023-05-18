import { Contact } from './Contact';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../redux/operations';
import { selectFiltredContacts } from 'components/redux/selectors';
import css from './ContactList.module.css';

export const ContactList = () => {
  const filtredContacts = useSelector(selectFiltredContacts);
  const dispatch = useDispatch();

  return (
    <ul>
      {filtredContacts.map(({ id, name, phone }) => {
        return (
          <li className={css.item} key={id}>
            <Contact name={name} phone={phone} />
            <button
              className={css.button}
              type="button"
              onClick={() => dispatch(deleteContact(id))}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
