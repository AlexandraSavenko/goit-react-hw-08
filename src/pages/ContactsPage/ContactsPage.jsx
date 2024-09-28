import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactList from "../../components/ContactList/ContactList";
import { selectIsLoading } from "../../redux/contacts/selectors";
import Loader from "../../components/Loader/Loader";
import { fetchContacts } from "../../redux/contacts/operations";

export default function ContactsPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts);
  }, [dispatch]);
  const loading = useSelector(selectIsLoading);
  return (
    <div>
      <div>{loading && <Loader />}</div>
      <h2>ContactsPage:</h2>
      <ContactList />
    </div>
  );
}
