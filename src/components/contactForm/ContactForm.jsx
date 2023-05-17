import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { addContacts } from '../redux/operations';
import { selectContacts } from '../redux/selectors';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { submitSchema } from '../../services/validationForm';

import css from './ContactForm.module.css';

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const onSubmit = useCallback(
    (values, action) => {
      const isIncluded = contacts.some(
        contact =>
          contact.name.toLowerCase() === values.name.toLowerCase().trim()
      );

      if (isIncluded) {
        action.resetForm();
        toast.error(`${values.name.trim()} is already in contacts`);
        return;
      }
      dispatch(
        addContacts({ name: values.name.trim(), phone: values.number.trim() })
      );

      action.resetForm();
    },
    [contacts, dispatch]
  );

  return (
    <div className={css.container}>
      <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={submitSchema}
        onSubmit={onSubmit}
      >
        <Form className={css.form}>
          <label className={css.label}>
            <span className={css.text}>Name</span>
            <Field className={css.input} type="text" name="name" />
            <ErrorMessage className={css.err} component="div" name="name" />
          </label>
          <label className={css.label}>
            <span className={css.text}>Number</span>
            <Field className={css.input} type="tel" name="number" />
            <ErrorMessage className={css.err} component="div" name="number" />
          </label>
          <button className={css.button} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};
