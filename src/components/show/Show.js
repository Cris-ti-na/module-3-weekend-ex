import React from "react";

class Show extends React.Component {
  constructor(props) {
    super(props);
    this.key = props.id;
    this.image = props.image;
    this.name = props.name;
    this.rating = props.rating;
    this.status = props.status;
  }

  render() {
    const { image, name, rating, status } = this;
    return (
      <li className="show__list-item">
        <article className="show__container">
          <div className="show__imgdiv">
            <img
              className="show__imgdiv-img"
              src={image}
              alt={name}
              title={name}
            />
          </div>
          <header className="show-header">
            <h2 className="show-header-title">{name}</h2>
          </header>
          <footer className="show-footer">
            <p className="show-footer-rating">{rating}</p>
            <p className="show-footer-status">{status}</p>
          </footer>
        </article>
      </li>
    );
  }
}

export default Show;
