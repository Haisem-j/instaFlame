import React from "react";

class CreatePicture extends React.Component {
  render() {
    return (
      <div className="hero has-background-light custom-border-top is-fullheight">
        <div className="custom-container-create-post">
          <div className="custom-create-post">
          <h1 class="title" style={{textAlign: "center"}}>Upload Image</h1>
            <form action="http://localhost:5000/api/user/upload" method="POST" encType="multipart/form-data">
              <fieldset>
                <div class="field">
                  <label class="label">Description</label>
                  <div class="control">
                    <textarea
                      class="textarea"
                      placeholder="Enter description here..."
                      name="description"
                    ></textarea>
                  </div>
                </div>
                <div class="file" style={{marginBottom: "15px"}}>
                  <label class="file-label">
                    <input class="file-input" type="file" name="file" id="file" />
                    <span class="file-cta">
                      <span class="file-icon">
                        <i class="fas fa-upload"></i>
                      </span>
                      <span class="file-label">Choose a file…</span>
                    </span>
                  </label>
                </div>
                <div class="field is-grouped" style={{justifyContent: "center"}}>
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

export default CreatePicture;
