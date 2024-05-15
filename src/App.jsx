import { Routes, Route } from 'react-router-dom';
import  Layout  from './components/layout/Layout';
import { lazy } from "react";
const NotFoundPage =     lazy(() => import('./pages/notFoundPage/NotFoundPage'));
const RegistrationPage = lazy(() => import('./pages/registrationPage/RegistrationPage'));
const LogInPage =        lazy(() => import('./pages/logInPage/LogInPage'));
const HomePage =         lazy(() => import('./pages/homePage/HomePage'));
const ContactsPage =     lazy(() => import('./pages/contactsPage/ContactsPage'))

export default function App() {

  return (
    <Layout>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/contacts' element={<ContactsPage />} />
        <Route path='/logIn' element={<LogInPage />} />
        <Route path='/registration' element={<RegistrationPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  )
}