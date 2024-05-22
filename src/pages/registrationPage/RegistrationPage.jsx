import css from './RegistrationPage.module.css'
import RegistrationForm from "../../components/registrationForm/RegistrationForm";

export default function RegistrationPage() {
    return <div className={css.container}>
        <h2 className={css.title}>Registration new account</h2>
        <RegistrationForm />
       </div>
 
}