
import css from './ContactForm.module.css';
import * as Yup from "yup";
import { ErrorMessage,Field,Form, Formik } from "formik";
import { useDispatch } from 'react-redux';
import { useId } from 'react';
import { addContact } from '../../redux/contacts/operations';

 
const UserSchema =Yup.object().shape({
  name: Yup.string().min(3, "must be at least 3 chars").required("Is required"),
  number: Yup.number().positive().min(9, "must be at least 9").required("Is required"),
  });

export default function ContactForm() {
    const dispatch = useDispatch();
     const nameId = useId();
     const numberId = useId();  
     const addCont = (values, actions) => {
          dispatch(addContact(values))
          actions.resetForm();
        }
    return (
        <Formik initialValues={{
            name: "",
            number: "",
        }}
            validationSchema={UserSchema}
            onSubmit={addCont}>
            <Form className={css.form}>
                <div className={css.group}>
                    <label htmlFor={nameId}>Name</label>
                    <Field type="text" name="name" id={nameId} />
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