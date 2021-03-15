import React from "react";
import s from "./Filter.module.css";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import fadeStyle from "../fade/fade.module.css";
import { contactsSelectors, changeFilter } from "../../redux";
const Filter = ({ value, onChange, contacts }) => {
  return (
    <>
      <CSSTransition
        in={contacts.length > 1}
        classNames={fadeStyle}
        timeout={500}
        unmountOnExit
      >
        <label className={s.find}>
          Find number
          <input
            className={s.inputFind}
            type="text"
            value={value}
            onChange={onChange}
          ></input>
        </label>
      </CSSTransition>
    </>
  );
};

const mapStateToProps = (state) => ({
  value: contactsSelectors.getFilter(state),
  contacts: contactsSelectors.getAllContacts(state),
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (e) => dispatch(changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
