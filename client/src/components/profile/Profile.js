import React from "react";
import HeaderProfile from "./HeaderProfile";
import Post from "./Post";
import Modal from '../Modal/index'
class Profile extends React.Component {
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
        <Modal />
      </section>
    );
  }
}

export default Profile;
