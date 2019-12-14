import React from "react";

class Card extends React.Component {
  render() {
    const { post } = this.props;
    return (
      <div className="card custom-card-bottom">
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-32x32">
                <img
                  className="is-rounded"
                  src="https://bulma.io/images/placeholders/96x96.png"
                  alt="Placeholder"

                />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-size-6">{post.profileId}</p>
            </div>
          </div>
          <div className="card-image">
            <figure className="image is-4by3">
              <img
                src={`http://localhost:5000/api/posts/${post.imageId}`}
                alt="Placeholder"
              />
            </figure>
          </div>
          <div className="media-content">
            <span className="icon is-size-4 icon-padding">
              <i className="fas fa-heart"></i>
            </span>
            <span className="icon is-size-4 icon-padding">
              <i className="far fa-comment"></i>
            </span>
          </div>
          <p className="subtitle is-size-7 p-margin">{post.likes} likes</p>
          <div className="content">{post.desc}</div>
        </div>
        <footer className="card-footer">
          <input
            className="input"
            type="text"
            style={{ border: "none" }}
            placeholder="Add a comment..."
          />
        </footer>
      </div>
    );
  }
}

export default Card;
