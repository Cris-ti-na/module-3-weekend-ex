import React from "react";
import Show from "../show/Show.js";
import './ShowList.css';

class ShowList extends React.Component {
    constructor({list}) {
        super(list);
        this.shows = list;
    }

    render() {
        return(
            <ul class="show-list">
                {this.shows.map((show) => <li class="show-list-item">
                    <Show
                        key={show.id}
                        image={show.image}
                        name={show.name.original}
                        rating={show.rating.average}
                        status={show.status}
                    />
                </li>)}
            </ul>
        );
    }
}

export default ShowList;
