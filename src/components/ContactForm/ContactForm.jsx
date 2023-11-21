import React, { useState } from 'react';
import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { createNewUser } from 'redux/phone.reduser';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { nanoid } from 'nanoid';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(state => state.phoneStore.contacts);

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleNumberChange = e => {
    setNumber(e.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const contact = {
      name,
      number,
    };

    if (
      contacts.some(
        item => item.name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      Notify.warning(`${contact.name} is alredy in your contacts`);
      return;
    }
    const newContact = {
      ...contact,
      id: nanoid(),
    };
    dispatch(createNewUser(newContact));
    setName('');
    setNumber('');
  };

  return (
    <form className={css.contactForm} onSubmit={handleSubmit}>
      <label>
        <p>Name:</p>
        <input
          className={css.inputName}
          type="text"
          value={name}
          onChange={handleNameChange}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        <p>Number:</p>
        <input
          className={css.inputNumber}
          type="tel"
          value={number}
          onChange={handleNumberChange}
          name="number"
          pattern="\+?\d{1,4}?[.\-\s]?\(?\d{1,3}?\)?[.\-\s]?\d{1,4}[.\-\s]?\d{1,4}[.\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit" className={css.addBtn}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;