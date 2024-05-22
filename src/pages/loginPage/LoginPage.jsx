import css from "./LoginPage.module.css"
import LogInForm from "../../components/loginForm/LoginForm";

export default function LoginPage() {
    return(
    
    <div className={css.wrapper}> 
            <h3 className={css.title}>Please log in</h3>
            <LogInForm />
    </div>
    )
}