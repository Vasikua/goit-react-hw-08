import { Field, Form, Formik } from 'formik';
import * as Yup from "yup";
import css from './RegistrationForm.module.css';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { toast } from 'react-hot-toast';
 
const UserSchema = Yup.object().shape({
  name: Yup.string().min(3, "Must be at least 3 characters").required("Username is required"),
  email: Yup.string().email("Invalid email format").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});


export default function RegistrationForm() {
    const dispatch = useDispatch();
     const handleSubmit = (values, actions) => {
         dispatch(register(values)).unwrap().then(() => {
             toast.success('Account created');
         }).catch((error) => {
             console.log(error.message);
         }         
     ) 
     actions.resetForm();
    }

    return ( <div className={css.wrapper}>
        <Formik   initialValues={{
            name: "",
            email: "", 
            password:"",
        }}
            validationSchema={UserSchema}
            onSubmit={handleSubmit}>
            <Form className={css.form} autoComplete='false'>
                <div className={css.group}>
                    <label className={css.label} >
                        Username
                        <Field type="text" name="name"  className={css.field} />
                    </label>
                </div>
                <div className={css.group}>
                    <label className={css.label} >
                        Email
                        <Field type="email" name="email" className={css.field}/>
                    </label>
                </div>
                <div className={css.group}>
                    <label className={css.label}>
                        Password
                        <Field type="password" name="password" className={css.field}/>
                    </label>
                </div>
                <button className={css.submit} type='submit'>Registration</button>
        </Form>
        </Formik>
        </div>
    );
} 
