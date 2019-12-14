import React from "react";
import HeaderProfile from "./HeaderProfile";
import Post from "./Post";
class Profile extends React.Component {

  componentDidMount(){
    let name = this.props.location.pathname.split('/');
    console.log(name[2]);
  }
  render() {

    return (
      <section className="section has-background-light custom-border-top">
        <div className="custom-body-center">
          <HeaderProfile />
          <section className="section custom-border-top">
            <div className="columns is-multiline">
              <Post />
              <Post />
              <Post />
              <Post />
              <Post />
              <Post />
            </div>
          </section>
        </div>
      </section>
    );
  }
}

export default Profile;
