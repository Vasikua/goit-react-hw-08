
import css from './ContactForm.module.css';
import * as Yup from "yup";
import { ErrorMessage,Field,Form, Formik } from "formik";
import { useDispatch } from 'react-redux';
import { useId } from 'react';
import{addContact} from '../../redux/contactsOps'

 
const UserSchema =Yup.object().shape({
  username: Yup.string().min(3, "must be at least 3 chars").required("Is required"),
  number: Yup.number().positive().required("Is required"),
  });

export default function ContactForm() {
    const dispatch = useDispatch();
       
    const addCont = (values, actions) => {
        const newContact = {
        name: values.username.trim(),
        number: values.number,
        
        }
        dispatch(addContact(newContact))
        actions.resetForm();

    }
    const usernameId = useId();
    const numberId = useId();


    return (
        <Formik initialValues={{
            username: "",
            number: "",
        }}
            validationSchema={UserSchema}
            onSubmit={addCont}>
            <Form className={css.form}>
                <div className={css.group}>
                    <label htmlFor={usernameId}>Name</label>
                    <Field type="text" name="username" id={usernameId} />
                    <ErrorMessage name="username" component={"span"}/>
                </div>
                <div className={css.group}>
                    <label htmlFor={numberId} >number</label>
                    <Field type="number" name="number" id={numberId} />
                    <ErrorMessage name="number" component={"span"}/>
                </div>
                <button className={css.submit} type='submit'>Add contact</button>
        </Form>
        </Formik>
    );
} 