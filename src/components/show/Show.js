import React from "react";

class Show extends React.Component {
    constructor({id, image, name, rating, status}) {
        super({id, image, name, rating, status});
        this.key = id;
        this.image = image;
        this.name = name;
        this.rating = rating;
        this.status = status;
    }

    render() {
        return(
            <li class="show__list-item" key={this.key}>
                <div className="show__container">
                    <div className="show__imgdiv">
                        <img className="show__imgdiv-img" src={this.image} alt={this.name} title={this.name} />
                    </div>
                    <header className="show-header">
                        <h2 className="show-header-title">{this.name}</h2>
                    </header>
                    <footer className="show-footer">
                        <p className="show-footer-rating">{this.rating}</p>
                        <p className="show-footer-status">{this.status}</p>
                    </footer>
                </div>
            </li>
        );
    }
}

export default Show;