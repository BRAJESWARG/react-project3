import React from "react";

const List = (props) => {
  const { employees, goBack } = props;

  return (
    <div className="user-data">
      <h1>EMPLOYEE FEEDBACK DATA</h1>
      <div className="user-info-container">
        {employees.map((employee, index) => {
          return (
            <div className="user-info" key={index}>
              <h3>
                Name : {employee.name} | Department : {employee.department} |
                Rating : {employee.rating}
              </h3>
            </div>
          );
        })}
      </div>
      <div>
        <button onClick={() => goBack()} className="submit">
          Go Back
        </button>
      </div>
    </div>
  );
};

export default List;
