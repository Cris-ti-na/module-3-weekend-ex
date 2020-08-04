import React from "react";
import './Show.css';

class Show extends React.Component {
    constructor({image, name, rating, status}) {
        super({image, name, rating, status});
        this.image = image;
        this.name = name;
        this.rating = rating;
        this.status = status;
    }

    render() {
        return(
            <div className="show">
                <div className="show-image">
                    <img src={this.image} alt={this.name} title={this.name} />
                </div>
                <header className="show-header">
                    <h2 className="show-header-title">{this.name}</h2>
                </header>
                <footer className="show-footer">
                    <p className="show-footer-rating">{this.rating}</p>
                    <p className="show-footer-status">{this.status}</p>
                </footer>
            </div>
        );
    }
}

export default Show;