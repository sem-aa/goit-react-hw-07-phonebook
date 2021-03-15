import React from "react";
import s from "./Form.module.css";
import contactsOperations from "../../redux/contacts-operations";
import { CSSTransition } from "react-transition-group";
import fadeStyle from "../fade/fade.module.css";
import { connect } from "react-redux";
import { contactsSelectors } from "../../redux";

class Form extends React.Component {
  state = {
    name: "",
    number: "",
    doubleContact: false,
    message: "",
  };

  changeInput = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  addContact = (event) => {
    event.preventDefault();
    if (this.state.name === "" && this.state.number === "") {
      this.setState({
        message: "Введите имя и номер контакта",
        doubleContact: true,
      });
      console.log(this.props.contacts);
      setTimeout(
        () => this.setState({ message: "", doubleContact: false }),
        3000
      );
      return;
    }
    if (this.props.contacts.find(({ name }) => name === this.state.name)) {
      this.setState({
        message: `Контакт с именем ${this.state.name} уже существует`,
        doubleContact: true,
      });
      setTimeout(
        () => {
          this.setState({ message: "", doubleContact: false });
          this.reset();
        },

        3000
      );
      return;
    }
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    const { name, number, doubleContact, message } = this.state;
    return (
      <div>
        <CSSTransition
          in={doubleContact}
          classNames={fadeStyle}
          timeout={500}
          unmountOnExit
        >
          <p className={s.alert}>{message}</p>
        </CSSTransition>

        <form className={s.mainForm} onSubmit={this.addContact}>
          <label className={s.name}>
            Name{" "}
            <input
              className={s.inputName}
              name="name"
              type="text"
              value={name}
              onChange={this.changeInput}
            />
          </label>
          <label className={s.number}>
            Number{" "}
            <input
              className={s.inputNumber}
              name="number"
              type="text"
              value={number}
              onChange={this.changeInput}
            />
          </label>
          <br></br>
          <button className={s.addContact} type="submit">
            Add Contact
          </button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  contacts: contactsSelectors.getAllContacts(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (data) => dispatch(contactsOperations.addContact(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
