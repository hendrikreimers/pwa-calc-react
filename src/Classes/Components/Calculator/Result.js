import React from 'react';
import Row from '../Grid/Row';
import Column from "../Grid/Column";

/**
 * Component: Result Field
 */
export default class Result extends React.Component {

    /**
     * Render function not written shorthand
     *
     * @returns {*}
     */
    render() {
        return (

            <Row maxHeight="2">
                <Column size="12" bgColor="dark" additionalClassName="txt-white result">
                    <span className="align-bottom" id="value">{this.props.value}</span>
                </Column>
            </Row>

        );
    }
}