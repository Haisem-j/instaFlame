import React from "react";
import { connect } from "react-redux";

class CreatePicture extends React.Component {

  descHandle = (e) =>{
    this.setState({desc: e.target.value})
  }
  mySubmitHandler = async event => {
    event.preventDefault();
    try {
      let file = event.target.file;
      const formData = new FormData();
      formData.append("file", file.files[0]);
      formData.append('desc', this.state.desc)

      let response = await fetch("http://localhost:5000/api/posts/upload", {
        method: "POST",
        headers: {
          "auth-token": this.props.setToken,
        },
        body: formData
      });

      let result = await response.json();
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };
  render() {
    return (
      <div className="hero has-background-light custom-border-top is-fullheight">
        <div className="custom-container-create-post">
          <div className="custom-create-post">
            <h1 class="title" style={{ textAlign: "center" }}>
              Upload Image
            </h1>
            <form onSubmit={this.mySubmitHandler}>
              <fieldset>
                <div class="field">
                  <label class="label">Description</label>
                  <div class="control">
                    <textarea
                      class="textarea"
                      placeholder="Enter description here..."
                      name="description"
                      onChange={this.descHandle}
                    ></textarea>
                  </div>
                </div>
                <div class="file" style={{ marginBottom: "15px" }}>
                  <label class="file-label">
                    <input
                      class="file-input"
                      type="file"
                      name="file"
                      id="file"
                    />
                    <span class="file-cta">
                      <span class="file-icon">
                        <i class="fas fa-upload"></i>
                      </span>
                      <span class="file-label">Choose a file…</span>
                    </span>
                  </label>
                </div>
                <div
                  class="field is-grouped"
                  style={{ justifyContent: "center" }}
                >
                  <div class="control">
                    <button class="button is-link">Submit</button>
                  </div>
                  <div class="control">
                    <button class="button is-link is-light">Cancel</button>
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

