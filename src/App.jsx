import ContactList from "./components/ContactList/ContactList";
import "./App.css";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import { fetchContacts } from "./redux/contacts/operations";
import { useDispatch, useSelector } from "react-redux";
import AppBar from "./components/AppBar/AppBar";
import { lazy, Suspense, useEffect } from "react";
import Loader from "./components/Loader/Loader";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
// import ContactsPage from "./pages/ContactsPage/ContactsPage";
// import HomePage from "./pages/HomePage/HomePage";
// import RegisterPage from "./pages/RegisterPage/RegisterPage";
// import LoginPage from "./pages/LoginPage/LoginPage";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage/RegisterPage"));
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage/ContactsPage"));
function App() {
  const loading = useSelector((state) => state.contacts.isLoading);
  const error = useSelector((state) => state.contacts.error);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <Layout>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
          </Routes>
        </Suspense>
      </Layout>
    </div>
  );
}

export default App;
