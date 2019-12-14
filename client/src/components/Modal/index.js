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
      <div className={this.state.modalState === true ? "modal is-active" : "modal"}>
        <div className="modal-background"></div>
        <div className="modal-content">
          <p className="image is-4by3">
            <img
              src="https://bulma.io/images/placeholders/1280x960.png"
              alt="bulma logo"
            />
          </p>
        </div>
        <button
          className="modal-close is-large"
          aria-label="close"
          onClick={this.modalOff}
        ></button>
      </div>
    );
  }
}

export default Modal;
