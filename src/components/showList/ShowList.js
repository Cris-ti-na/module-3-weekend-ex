import React from "react";
import Show from "../show/Show.js";

const altImage =
  "https://via.placeholder.com/210x295/ffffff/666666/?text=TV-SHOW";
const altRating = "no rating";

class ShowList extends React.Component {
  render() {
    console.log(this.props);
    return (
      <ul className="show__list">
        {this.props.showList.map((item) => (
          <Show
            key={item.show.id}
            id={item.show.id}
            image={item.show.image?.original ?? altImage}
            name={item.show.name}
            rating={item.show.rating?.average ?? altRating}
            status={item.show.status}
          />
        ))}
      </ul>
    );
  }
}

export default ShowList;
