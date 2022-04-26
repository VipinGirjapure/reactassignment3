import React from "react";
// import "App.css";


class Form2 extends React.Component {
  render() {
    return (
      <div>
        <h1>Employee Feedback Data</h1>
        <div className="showBox">
          {this.props.users.map((value) => {
            return (
              <div className="smallShowBox">
                <br />
                Name : {value.name} |  Department : {value.department} | Rating :  {value.rating}
              </div>
            );
          })}
        </div>
        <br />
        <button className="button" onClick={this.props.updateComponent}>
          Go Back
        </button>
      </div>
    );
  }
}
export default Form2;
