import { Field, Form, Formik } from 'formik';
// import * as Yup from "yup";
import css from './LoginForm.module.css';
import { toast } from 'react-hot-toast'
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';

// const UserSchema = Yup.object().shape({
//   username: Yup.string().min(3, "must be at least 3 chars").required("Is required"),
//   number: Yup.number().positive().required("Is required"),
//   });

export default function LogInForm() {
     
    const dispatch = useDispatch();
    const handleSubmit = (values, actions) => {
        dispatch(logIn(values))
            .unwrap()
            .then(response => {
                console.log(response);
                toast.success("Success!!");
            }).catch(error => {
                console.log(error);
                toast.error("Somthing went wrong ")
            }); 
     actions.resetForm();

    }
    return (
        <Formik   initialValues={{
            email:"", 
            password:"",
        }}
            // validationSchema={UserSchema}
            onSubmit={handleSubmit}>
            <Form className={css.form} autoComplete='false'>
                <div className={css.group}>
                    <label className={css.label} >
                        Email
                        <Field type="email" name="email"  className={css.field}/>
                    </label>
                </div>
                <div className={css.group}>
                    <label className={css.label}>
                        Password
                        <Field type="password" name="password"  className={css.field}/>
                    </label>
                </div>
                <button className={css.submit} type='submit'>Log In</button>
        </Form>
        </Formik>
    );
} 
