import React from 'react';

export default class Row extends React.Component {
    constructor(probs) {
        super(probs);

        this.data = {};
        this.data.className = 'row max-height mh-' + this.props.maxHeight;
    }

    render() {
        return (
            <div className={this.data.className}>
                {this.props.children}
            </div>
        );
    }
}
