import React from "react";

class Card extends React.Component {
  render() {
    return (
      <div class="card custom-card-bottom">
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-32x32">
                <img
                  class="is-rounded"
                  src="https://bulma.io/images/placeholders/96x96.png"
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-size-6">John Smith</p>
            </div>
          </div>
          <div class="card-image">
            <figure class="image is-4by3">
              <img
                src="https://bulma.io/images/placeholders/1280x960.png"
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div class="media-content">
            <span class="icon is-size-4 icon-padding">
              <i class="fas fa-heart"></i>
            </span>
            <span class="icon is-size-4 icon-padding">
              <i class="far fa-comment"></i>
            </span>
          </div>
          <p class="subtitle is-size-7 p-margin">7 likes</p>
          <div class="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            nec iaculis mauris. <a>@bulmaio</a>.<a href="#">#css</a>{" "}
            <a href="#">#responsive</a>
            <br />
            <p class="subtitle is-size-7">3 hours ago</p>
          </div>
        </div>
        <footer class="card-footer">
          <input class="input" type="text" style={{border:"none"}} placeholder="Add a comment..." />
        </footer>
      </div>
    );
  }
}

export default Card;
