import React from "react";
import Card from "./Card";
import { connect } from "react-redux";

class Body extends React.Component {
  async componentDidMount() {

    try {
      let response = await fetch("http://localhost:5000/api/posts", {
        method: "GET",
        headers: {
          "auth-token": this.props.setToken
        }
      });
      let final = await response.json();
      console.log(final);
      this.setState({
        posts: final
      });
      this.renderProfile();

    } catch (err) {
      console.log(err);
    }
  }

  renderCards() {
    if (this.state === null) {
      return <div>LOOOOADING......</div>;
    } else {
      return this.state.posts.map(post => {
        return <Card key={post.imageId} post={post} />;
      });
    }
  }

  renderProfile = async () => {
    if (this.state === null) {
    } else {
      try {
        let response = await fetch("http://localhost:5000/api/auth/user", {
          method: "GET",
          headers: {
            "auth-token": this.props.setToken
          }
        });
        let final = await response.json();
        this.setState({
          username: final.username
        });
      } catch (err) {
        console.log(err);
      }
    }
  };

  render() {
    if (this.state === null) {
      return <div>LOOOOADING......</div>;
    } else {
      return (
        <section className="section has-background-light custom-border-top">
          <div className="columns custom-body-center">
            <div className="column is-10">
              <div className="container">{this.renderCards()}</div>
            </div>
            <div className="column">
              <div className="menu">
                <article className="media center">
                  <figure className="media-left">
                    <span className="image is-48x48 ">
                      <img
                        className="is-rounded"
                        src="https://previews.123rf.com/images/alphaspirit/alphaspirit1504/alphaspirit150400118/38665682-simple-young-man-face-smiling-and-optimistic.jpg"
                        alt="man smiling"
                      />
                    </span>
                  </figure>
                  <div className="media-content" style={{ width: "105px" }}>
                    <div className="content">
                      <p className="is-size-6" style={{ margin: "0px" }}>
                        <strong>{this.state.username}</strong>
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
      );
    }
  }
}

const mapStateToProps = state => {
  return state;
};
export default connect(mapStateToProps, null)(Body);
