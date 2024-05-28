import Contact from '../contact/Contact';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import {selectFilteredContacts}  from "../../redux/contacts/selectors"

export default function ContactList() {
       const contacts = useSelector(selectFilteredContacts);
    console.log('contact list data',contacts);
    return (
        <ul className={css.list}>
            {contacts.map(contact =>( 
                <li className={css.item} key={contact.id}>
                    < Contact data={contact}/>
                </li>
            ))
            }
        </ul>
    )
    
}