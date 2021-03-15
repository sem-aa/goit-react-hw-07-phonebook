import React from "react";
import { connect } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import s from "./Phonebook.module.css";
import fadeStyles from "./fadePhonebook.module.css";
import { contactsOperations, contactsSelectors } from "../../redux";

class Phonebook extends React.Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    const { contacts, onDeleteContact } = this.props;

    return (
      <TransitionGroup component="ul">
        {contacts.map(({ id, name, number }) => (
          <CSSTransition classNames={fadeStyles} key={id} timeout={500}>
            <li className={s.conctact}>
              <p className={s.name}>{name}</p>
              <p className={s.number}>{number}</p>
              <button className={s.button} onClick={() => onDeleteContact(id)}>
                Delete
              </button>
            </li>
          </CSSTransition>
        ))}
      </TransitionGroup>
    );
  }
}

// function Phonebook({ contacts, onDeleteContact }) {
//   return (
//     <TransitionGroup component="ul">
//       {contacts.map(({ id, name, number }) => (
//         <CSSTransition classNames={fadeStyles} key={id} timeout={500}>
//           <li className={s.conctact}>
//             <p className={s.name}>{name}</p>
//             <p className={s.number}>{number}</p>
//             <button className={s.button} onClick={() => onDeleteContact(id)}>
//               Delete
//             </button>
//           </li>
//         </CSSTransition>
//       ))}
//     </TransitionGroup>
//   );
// }

const mapStateToProps = (state) => ({
  contacts: contactsSelectors.getVisibleContact(state),
});

const mapDispatchToProps = (dispatch) => ({
  onDeleteContact: (id) => dispatch(contactsOperations.deleteContact(id)),
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Phonebook);
