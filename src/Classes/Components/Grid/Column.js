import React from 'react';

export default class Column extends React.Component {
    constructor(probs) {
        super(probs);

        this.data = {};
        this.data.className = 'col-' + this.props.size + ' bg-' + this.props.bgColor + ' ' + this.props.additionalClassName;
    }

    render() {
        return (
            <div className={this.data.className}>
                {this.props.children}
            </div>
        );
    }
}
