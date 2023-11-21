
import { createSlice } from "@reduxjs/toolkit";

const phoneBookContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const initialState = {
    contacts: JSON.parse(window.localStorage.getItem('contacts')) ?? phoneBookContacts,
    
};


const contactsSlice = createSlice({
  // Ім'я слайсу
  name: "contacts",
  // Початковий стан редюсера слайсу
  initialState,
  // Об'єкт редюсерів
  reducers: {
      createNewUser(state, action) {
          // state.contacts = [...state.contacts, action.payload] 
          state.contacts.push(action.payload)
    },
      deleteUser(state, action) {
        state.contacts = state.contacts.filter(user => user.id !== action.payload)
    },
    
  },
});

// Генератори екшенів
export const { createNewUser, deleteUser } = contactsSlice.actions;
// Редюсер слайсуtasksSlice
export const contactsReducer = contactsSlice.reducer;



// const initialState = {
//     contacts: JSON.parse(window.localStorage.getItem('contacts')) ?? phoneBookContacts,
    
// };

// export const phoneReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'contacts/createUser': {
//             return {
//                 ...state,
//                 contacts: [...state.contacts, action.payload]
//             }
//         }
//         case 'contacts/deleteUser': {
//             return {
//                 ...state,
//                 contacts: state.contacts.filter(user => user.id !== action.payload)
//             }
//         }
            
          
//         default:
  
//     }
//     return state;
// }

// export const createNewUser = (payload) => {
//      return {
//         type: 'contacts/createUser',
//         payload,
//             }
// }

// export const deleteUser = (payload) => {
//     return {
//         type: 'contacts/deleteUser',
//         payload,
//       };
    
// }