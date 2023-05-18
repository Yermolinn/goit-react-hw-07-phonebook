import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import toast from 'react-hot-toast';
import { selectIsLoading, selectError } from './redux/selectors';
import { fetchContacts } from './redux/operations';
import { Section } from './section/Section';
import { ContactForm } from 'components/contactForm/ContactForm';
import { ContactList } from './contactList/ContactList';
import { Filter } from './filter/Filter';
import { Loader } from './Loader/Loader';

export const App = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
    if (error) {
      toast.error(error);
    }
  }, [dispatch, error]);

  return (
    <div>
      {isLoading && <Loader />}
      <Section title={'Phonebook'}>
        <ContactForm />
      </Section>
      <Section title={'Contacts:'}>
        <Filter />
        {!isLoading && !error && <ContactList />}
        <Toaster />
      </Section>
    </div>
  );
};
