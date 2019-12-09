import React from "react";

class HeaderProfile extends React.Component {
  render() {
    return (
      <div class="columns">
        <div class="column is-one-third">
          <figure class="image is-128x128 center-container">
            <img
              class="is-rounded"
              src="https://bulma.io/images/placeholders/96x96.png"
              alt="Placeholder image"
            />
          </figure>
        </div>
        <div class="column">
          <div class="media-content">
            <article class="media custom-profile-margin">
              <figure class="media-left">
                <h1 class="title">__jemal</h1>
              </figure>
              <div class="media-content">
                <button className="button">Edit Profile</button>
              </div>
            </article>
            <h2 class="subtitle-5 custom-followers">
              <span>2 posts</span> <span>0 followers</span>{" "}
              <span>0 following</span>
            </h2>
            <h1 className="title is-6 is-spaced">Toronto</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderProfile;
