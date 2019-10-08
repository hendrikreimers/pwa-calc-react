import React from 'react';

/**
 * Component: BUTTON
 */
export default class Button extends React.Component {
    /**
     * Component Constructor
     *
     * @param probs
     */
    constructor(probs) {
        super(probs);

        // define some generated constants
        const color = ( this.props.bgColor === 'orange' ) ? 'orange txt-white' : this.props.bgColor,
              size  = ( this.props.action === '0' ) ? '6' : '3';

        // Bind some new data, we don't need this as a state
        this.data = {};
        this.data.className = 'btn col-' + size + ' bg-' + color;

        // bind this to the click handlers
        this.handleClick = this.handleClick.bind(this);
    }

    /**
     * Click Event Handler
     *
     * @param e
     */
    handleClick = e => {
        // Prevent any other default click handling
        e.preventDefault();
        e.stopPropagation();

        // pass the event to the parent component
        // IMPORTANT: use .currentTarget not .target or you get the <span> on clicking on it
        this.props.onClick(e.currentTarget, e.currentTarget.dataset);
    };

    /**
     * Render function written shorthand
     *
     * @returns {*}
     */
    render = () => (

        <div onClick={this.handleClick} className={this.data.className} data-type={this.props.type} data-action={this.props.action}>
            <span className="align-middle">{this.props.text}</span>
        </div>

    )
}
