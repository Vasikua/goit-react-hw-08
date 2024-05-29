import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { refreshUser } from './redux/auth/operations';
import  Layout  from './components/layout/Layout';
import Loader from "./components/loader/Loader";
import { selectIsRefreshing } from './redux/auth/selectors';
import  RestrictedRoute  from './components/RestrictedRoute';
import PrivateRoute from './components/PrivateRoute';

const NotFoundPage = lazy(() => import('./pages/notFoundPage/NotFoundPage'));
const RegistrationPage = lazy(() => import('./pages/registrationPage/RegistrationPage'));
const LogInPage = lazy(() => import('./pages/loginPage/LoginPage'));
const HomePage = lazy(() => import('./pages/homePage/HomePage'));
const ContactsPage = lazy(() => import('./pages/contactsPage/ContactsPage'));

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  
  useEffect(() => {
    dispatch(refreshUser());
  },[dispatch])
  return (<> {  isRefreshing ? (<p> Wait your data is refreshing...</p >) : 
    (<Layout>
      <Suspense fallback={<Loader />}>
        <Routes>
            <Route
              path='/'
              element={
                <HomePage />} />
            <Route
              path='/contacts'
              element={
                <PrivateRoute component={<ContactsPage />} redirectTo="/login" />} />
            <Route
              path='/login'
              element={
                <RestrictedRoute component={< LogInPage />} redirectTo="/contacts" />} 
            />
            <Route
              path='/register'
              element={<RestrictedRoute component={<RegistrationPage />} redirectTo="/" />} 
            />
        <Route path="*" element={<NotFoundPage />} />
        </Routes>
        </Suspense>
    </Layout>)}
  </>)
}



