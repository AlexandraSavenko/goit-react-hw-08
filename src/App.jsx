import ContactList from "./components/ContactList/ContactList";
import "./App.css";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import { fetchContacts } from "./redux/contacts/contactsOps";
import { useDispatch, useSelector } from "react-redux";
import AppBar from "./components/AppBar/AppBar";
import { useEffect } from "react";
import Loader from "./components/Loader/Loader";
import { Route, Routes } from "react-router-dom";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import HomePage from "./pages/HomePage/HomePage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";

function App() {
  const loading = useSelector((state) => state.contacts.isLoading);
  const error = useSelector((state) => state.contacts.error);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <AppBar />
      {/* <div className="container">
        <h1 className="mainTitle">Phonebook</h1>
        
        <ContactForm />

        <SearchBox />
        {loading && <Loader />}
        {error && <p>Sorry, something went wrong</p>}
        <ContactList />
      </div> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
    </div>
  );
}

export default App;
