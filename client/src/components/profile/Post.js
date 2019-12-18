import React from "react";
import { connect } from "react-redux";

class Post extends React.Component {
  deletePost = async () => {
    try {
      let response = await fetch(
        `http://localhost:5000/api/posts/del/${this.props.post}`,
        {
          method: "POST",
          headers: {
            "auth-token": this.props.setToken
          }
        }
      );
      await response.json();
      this.props.history.push('/home');
    } catch (err) {
      console.log(err);
    }
  };

  render() {

    if (this.props.name === this.props.getUser) {
      return (
        <div className="column is-one-third" style={{ marginTop: "-20px" }} >
          <figure className="image is-1x1">
            <div
              className="x-logo delete is-medium"
              onClick={this.deletePost}
            ></div>
            <img
              src={`http://localhost:5000/api/posts/${this.props.post}`}
              alt="Placeholder"
            />
          </figure>
        </div>
      );
    } else {
      return (
        <div className="column is-one-third">
          <figure className="image is-1x1">
            <img
              src={`http://localhost:5000/api/posts/${this.props.post}`}
              alt="Placeholder"
            />
          </figure>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(Post);
