import React from "react";
import s from "./App.module.css";
import Form from "./copmonents/Form/Form";
import Phonebook from "./copmonents/Phonebook/Phonebook";
import Filter from "./copmonents/Filter/Filter";
import Logo from "./copmonents/Logo/Logo";

const App = () => {
  return (
    <div className={s.App}>
      <Logo />
      <Form />
      <h2 className={s.title}>Contacts</h2>
      <Filter />
      <Phonebook />
    </div>
  );
};

export default App;

// Local storage без библиотеки Redux Toolkit
// componentDidMount() {
//   const parseContacts = JSON.parse(localStorage.getItem("contacts"));
//   if (parseContacts.length !== 0) {
//     this.setState({ contacts: parseContacts });
//   } else {
//     this.setState({
//       contacts: [
//         { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//         { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//         { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//         { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
//       ],
//     });
//   }
// }

// componentDidUpdate(prevProps, prevState) {
//   if (this.state.contacts !== prevState.contacts) {
//     localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
//   }
// }
