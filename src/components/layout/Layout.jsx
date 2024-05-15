import css from "./Layout.module.css";
import Loader from "../loader/Loader";
import AppBar from "../appBar/AppBar"
import { Toaster } from "react-hot-toast";
import { Suspense } from "react";

export default function Layout ({ children }) {
    return (
        <div className={css.container}>
            <header className={css.mainNav}>
                <AppBar />
                <Suspense fallback={<Loader />}>
                    {children}
                    <Toaster position='Top-center' reverseOrder={ false} />
                </Suspense>
            </header>
        </div>
    )
}