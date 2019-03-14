import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      wordsCounter: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      wordsCounter: e.target.value
        .trim()
        .replace(/[\W]+/g, " ")
        .replace(/([a-z]+)\b[.,]/g, "")
        .replace(/[^a-z\d\s]+/gi, "")
        .split(" ")
        .filter(x => {
          return x !== "";
        })
    });
  }

  render() {
    if (this.state.wordsCounter.length >= 200) {
      var style = {
        color: "red"
      };
    }

    return (
      <div>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
        />
        <form className="shadow p-3 mb-5 bg-white rounded">
          <textarea
            type="text"
            name="wordsHolder"
            placeholder="Type words..."
            onChange={this.handleChange}
          />
          <p style={style}>Word count: {this.state.wordsCounter.length}</p>
        </form>
      </div>
    );
  }
}

export default Form;
