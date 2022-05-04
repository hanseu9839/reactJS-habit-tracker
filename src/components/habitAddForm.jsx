import React, { PureComponent } from "react";

class HabitaddForm extends PureComponent {
  formRef = React.createRef();
  inputRef = React.createRef();
  onSubmit = (event) => {
    event.preventDefault();
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    //this.inputRef.current.value = '';
    this.formRef.current.reset();
  };
  render() {
    console.log("habitAdd");
    return (
      <form className="add-form" onSubmit={this.onSubmit}>
        <input
          ref={this.inputRef}
          type="text"
          class="add-input"
          placeholder="Habit"
        ></input>
        <button className="add-button">Add</button>
      </form>
    );
  }
}

export default HabitaddForm;