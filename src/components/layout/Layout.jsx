import css from "./Layout.module.css";
import Loader from "../loader/Loader";
import  Navigation from "../navigation/Navigation";
import { Suspense } from "react";

export default function Layout ({ children }) {
    return (
        <div className={css.container}>
            <header className={css.mainNav}>
                <Navigation />
                <Suspense fallback={<Loader />}>
                    {children}
                </Suspense>
            </header>
        </div>
    )
}