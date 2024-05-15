import Contact from '../contact/Contact';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import {selectFilteredContacts}  from "../../redux/selectors"

export default function ContactList() {
       const tasks = useSelector(selectFilteredContacts);
    
    return (
        <ul className={css.list}>
            {tasks.map(user =>( 
                <li className={css.item} key={user.id}>
                    < Contact data={user}/>
                </li>
            ))
            }
        </ul>
    )
    
}