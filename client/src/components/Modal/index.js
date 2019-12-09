import React from "react";

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.modalOff = this.modalOff.bind(this);

    this.state = {
      modalState: true
    };
  }
  modalOff(tar) {
    this.setState({
      modalState: false
    });
  }
  render() {
    return (
      <div class={this.state.modalState === true ? "modal is-active" : "modal"}>
        <div class="modal-background"></div>
        <div class="modal-content">
          <p class="image is-4by3">
            <img
              src="https://bulma.io/images/placeholders/1280x960.png"
              alt=""
            />
          </p>
        </div>
        <button
          class="modal-close is-large"
          aria-label="close"
          onClick={this.modalOff}
        ></button>
      </div>
    );
  }
}

export default Modal;
