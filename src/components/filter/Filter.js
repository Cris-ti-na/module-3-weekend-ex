import React, { Component } from 'react';

class Filter extends Component {
    constructor(props) {
        super(props);
        this.filterHandlerChild = this.filterHandlerChild.bind(this);
    }

    filterHandlerChild (ev) {
        this.props.filterHandler(ev)
    }

    render() {
        return (
            <form>
                <label htmlFor="search">Search for a show</label>
                <input
                    type="text"
                    id="search"
                    placeholder="Family Guy"
                    onChange={this.filterHandlerChild}
                    value={this.props.inputText}
                />
                <label htmlFor="running-filter">
                <input
                    type="checkbox"
                    id="running-filter"
                    checked={this.props.isRunningOnly === true ? true : false}
                    onChange={this.isRunningHandlerChild}
                />
                Show only currently running shows
                </label>
            </form>
        );
    }
}

export default Filter;