import React from "react";
import List from "./FeedbackLists";

class Form extends React.Component {
  state = {
    name: "",
    department: "",
    rating: "",
    showForm: true
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addEmployeeHandler(this.state);
    this.setState({
      name: "",
      department: "",
      rating: "",
      showForm: !this.state.showForm
    });
  };

  handleGoBack = () => {
    this.setState({
      showForm: !this.state.showForm
    });
  };

  render() {
    return (
      <div className="Form">
        {this.state.showForm ? (
          <div className="form-wrapper">
            <h1>EMPLOYEE FEEDBACK FORM</h1>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label className="label-text" htmlFor="name">
                  Name:{" "}
                </label>
                <input
                  type="text"
                  id="name"
                  className="blanks"
                  name="name"
                  value={this.state.name}
                  required
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label className="label-text" htmlFor="department">
                  Department:{" "}
                </label>
                <input
                  type="text"
                  id="department"
                  className="blanks"
                  name="department"
                  value={this.state.department}
                  required
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label className="label-text" htmlFor="rating">
                  Rating:{" "}
                </label>
                <input
                  type="number"
                  id="rating"
                  className="blanks"
                  name="rating"
                  value={this.state.rating}
                  required
                  onChange={this.handleChange}
                />
              </div>
              <button type="submit" className="submit">
                Submit
              </button>
            </form>
          </div>
        ) : (
          <List employees={this.props.employees} goBack={this.handleGoBack} />
        )}
      </div>
    );
  }
}

export default Form;
