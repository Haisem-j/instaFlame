import React from "react";
import HeaderProfile from "./HeaderProfile";
import { connect } from "react-redux";
import Post from "./Post";
class Profile extends React.Component {
  async componentDidMount() {
    let name = this.props.location.pathname.split("/");

    try {
      let response = await fetch(
        `http://localhost:5000/api/posts/profile/${name[2]}`,
        {
          method: "GET",
          headers: {
            "auth-token": this.props.setToken
          }
        }
      );
      let final = await response.json();

      this.setState({
        posts: final,
        name: name[2]
      });
    } catch (err) {
      console.log(err);
    }
  }

  renderPosts() {
    if (this.state === null) {
      return <div>LOOOOADING......</div>;
    } else {
      return this.state.posts.map(post => {
        return <Post key={post.imageId} post={post.imageId} name={this.state.name} history={this.props.history}/>;
      });
    }
  }
  render() {
    if (this.state === null) {
      return <div>LOOOOADING......</div>;
    } else {
      return (
        <section className="section has-background-light custom-border-top">
          <div className="custom-body-center">
            <HeaderProfile posts={this.state.posts.length} name={this.state.name}/>
            <section className="section custom-border-top">
              <div className="columns is-multiline">{this.renderPosts()}</div>
            </section>
          </div>
        </section>
      );
    }
  }
}

const mapStateToProps = state => {
  return state;
};
export default connect(mapStateToProps, null)(Profile);
