import { FaUser, FaPhoneAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import {deleteContact} from "../../redux/contacts/operations";
import css from './Contact.module.css';

export default function Contact({data: {id, name, number }}) {
     const dispatch = useDispatch();
    const handleDelete = () => {
          dispatch(deleteContact(id));
    }
    return (
        <>
        <div className={css.container}>    
        <div className={css.contact}>
            <FaUser  size = {20}/>
            <p className={css.text}>{name}</p>
        </div>
        <div className={css.contact}>
            <FaPhoneAlt size={20}/>
            <p className={css.text}>{number}</p>
        </div>
        </div>
                
        <button
                className={css.deleteBtn}
                onClick={handleDelete}>
            Delete
        </button>
    </>
    )

    
}