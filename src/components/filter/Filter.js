import React, { Component } from 'react';

class Filter extends Component {
    constructor(props) {
        super(props);
        this.filterHandlerChild = this.filterHandlerChild.bind(this);
        this.checkHandlerChild = this.checkHandlerChild.bind(this);
    }

    filterHandlerChild (ev) {
        this.props.filterHandler(ev)
    }

    checkHandlerChild (eve) {
        this.props.checkHandler(eve)
    }

    render() {
        return (
            <form className="form">
                <label htmlFor="search">Search for a show</label>
                <input
                    className="form__inputText"
                    type="text"
                    id="search"
                    placeholder="Family Guy"
                    onChange={this.filterHandlerChild}
                    value={this.props.inputText}
                />
                <label htmlFor="running-filter">
                <input
                    className="form_inputCheck"
                    type="checkbox"
                    id="running-filter"
                    checked={this.props.isRunningOnly === true ? true : false}
                    onChange={this.checkHandlerChild}
                />
                Show only currently running shows
                </label>
            </form>
        );
    }
}

export default Filter;