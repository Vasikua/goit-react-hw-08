import css from "./ContactsPage.module.css";
import ContactList from "../../components/contactList/ContactList";
import ContactForm from "../../components/contactForm/ContactForm";
import SearchBox from "../../components/searchBox/SearchBox";
import { useEffect } from "react";
import{fetchContacts} from "../../redux/contacts/operations"
import { useDispatch } from "react-redux";
export default function ContactsPage() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);
    return (<div className={css.wrapper}>
         
        <h2 className={css.title}>Your contact list </h2>
        <div className={css.wrapperForm}>
            <ContactForm />
            <SearchBox />
            </div>
            <ContactList />
        </div>
    )

}