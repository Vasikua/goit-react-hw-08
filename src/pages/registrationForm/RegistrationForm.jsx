import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from "yup";
import css from './RegistrationPage.module.css';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
const UserSchema =Yup.object().shape({
  username: Yup.string().min(3, "must be at least 3 chars").required("Is required"),
  number: Yup.number().positive().required("Is required"),
  });

export default function RegistrationForm() {
    const dispatch = useDispatch();
     const handleSubmit = (values, actions) => {
     dispatch(register(values)); 
     actions.resetForm();

    }
    return (
        <Formik   initialValues={{
            username: "",
            email: "", 
            password:"",
        }}
            validationSchema={UserSchema}
            onSubmit={handleSubmit}>
            <Form className={css.form} autoComplete='false'>
                <div className={css.group}>
                    <label >
                        Name
                        <Field type="text" name="username"  />
                        <ErrorMessage name="username" component={"span"}/>
                    </label>
                </div>
                <div className={css.group}>
                    <label >
                        Email
                        <Field type="email" name="email" />
                        <ErrorMessage name="email" component={"span"}/>
                    </label>
                </div>
                <div className={css.group}>
                    <label>
                        Password
                        <Field type="password" name="password"/>
                        <ErrorMessage name="password" component={"span"}/>
                    </label>
                </div>
                <button className={css.submit} type='submit'>Registration</button>
        </Form>
        </Formik>
    );
} 
