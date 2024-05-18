import { Routes, Route } from 'react-router-dom';
import  Layout  from './components/layout/Layout';
import { lazy, Suspense } from "react";
import Loader from "./components/loader/Loader";

const NotFoundPage = lazy(() => import('./pages/notFoundPage/NotFoundPage'));
const RegistrationForm = lazy(() => import('./pages/registrationForm/RegistrationForm'));
const LogInForm = lazy(() => import('./pages/loginForm/LoginForm'));
const HomePage = lazy(() => import('./pages/homePage/HomePage'));
const ContactsPage = lazy(() => import('./pages/contactsPage/ContactsPage'))

export default function App() {

  return (
    <Layout>
      <Suspense fallback = {<Loader/>}>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/contacts' element={<ContactsPage />} />
        <Route path='/logIn' element={<LogInForm />} />
        <Route path='/registration' element={<RegistrationForm />} />
        <Route path="*" element={<NotFoundPage />} />
        </Routes>
        </Suspense>
    </Layout>
  )
}



