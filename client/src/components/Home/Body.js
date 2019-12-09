import React from "react";
import Card from './Card';
import Modal from '../Modal'
class Body extends React.Component {
  render() {
    return (
      <section className="section has-background-light custom-border-top">
        <Modal />
        <div className="columns custom-body-center">
          <div class="column is-10">
            <div className="container">
              <Card />
              <Card />
              <Card />
            </div>
          </div>
          <div class="column">
            <div className="menu">
              <article className="media center">
                <figure className="media-left">
                  <span class="image is-48x48 ">
                    <img
                      className="is-rounded"
                      src="https://previews.123rf.com/images/alphaspirit/alphaspirit1504/alphaspirit150400118/38665682-simple-young-man-face-smiling-and-optimistic.jpg"
                      alt="man smiling"
                    />
                  </span>
                </figure>
                <div class="media-content" style={{ width: "105px" }}>
                  <div class="content">
                    <p className="is-size-6" style={{margin: "0px"}}><strong>Haisem Jemal</strong></p>
                    <p className="is-size-7">Toronto</p>
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

export default Body;
