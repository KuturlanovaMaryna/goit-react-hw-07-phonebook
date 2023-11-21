import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import Search from './Search/Search';
import ContactList from './ContactList/ContactList';
import css from './App.module.css';

const App = () => {
  return (
    <div className={css.appContainer}>
      <h1 className={css.titleText}>Phone book</h1>
      <ContactForm />
      <p className={css.searchText}>Find contacts by name</p>
      <Search />
      <ContactList />
    </div>
  );
};

export default App;
