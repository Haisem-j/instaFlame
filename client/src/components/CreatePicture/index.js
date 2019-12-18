import React from "react";
import { connect } from "react-redux";

class CreatePicture extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      works: false
    };
  }
  descHandle = e => {
    this.setState({ desc: e.target.value });
  };


  mySubmitHandler = async event => {
    event.preventDefault();
    try {
      let file = event.target.file;
      const formData = new FormData();
      formData.append("file", file.files[0]);
      formData.append("desc", this.state.desc);

      let response = await fetch("http://localhost:5000/api/posts/upload", {
        method: "POST",
        headers: {
          "auth-token": this.props.setToken
        },
        body: formData
      });

      await response.json();
      this.setState({
        works: true
      });
    } catch (err) {
      console.log(err);
    }
  };

  uploadSuccess() {
    if(this.state.works === true){
      return(
      <div className="notification is-success" style={{ textAlign: "center" }}> Image Successfully Uploaded!! </div>
      );
    }else{
      return(
        <div></div>
      )
    }
  }
  render() {
    return (
      <div className="hero has-background-light custom-border-top is-fullheight">
        <div className="custom-container-create-post">
          <div className="custom-create-post">
            <h1 className="title" style={{ textAlign: "center" }}>
              Upload Image
            </h1>
            {this.uploadSuccess()}
            <form onSubmit={this.mySubmitHandler}>
              <fieldset>
                <div className="field">
                  <label className="label">Description</label>
                  <div className="control">
                    <textarea
                      className="textarea"
                      placeholder="Enter description here..."
                      name="description"
                      onChange={this.descHandle}
                    ></textarea>
                  </div>
                </div>
                <div className="file" style={{ marginBottom: "15px" }}>
                  <label className="file-label">
                    <input
                      className="file-input"
                      type="file"
                      name="file"
                      id="file"
                    />
                    <span className="file-cta">
                      <span className="file-icon">
                        <i className="fas fa-upload"></i>
                      </span>
                      <span className="file-label">Choose a file…</span>
                    </span>
                  </label>
                </div>
                <div
                  className="field is-grouped"
                  style={{ justifyContent: "center" }}
                >
                  <div className="control">
                    <button className="button is-link">Submit</button>
                  </div>
                  <div className="control">
                    <button className="button is-link is-light">Cancel</button>
                  </div>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};
export default connect(mapStateToProps, null)(CreatePicture);
