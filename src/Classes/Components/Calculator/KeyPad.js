import React from 'react';
import Row from '../Grid/Row';
import Button from './Button';

/**
 * Component: KEYPAD
 */
export default class KeyPad extends React.Component {

    /**
     * Render function written shorthand and wrapped
     * with an empty tag, because it must a return a single one in JSX
     *
     * @returns {*}
     */
    render = () => (<>

        <Row maxHeight="1">
            <Button onClick={this.props.onClick} bgColor="gray" type="act" action="C" text="C" />
            <Button onClick={this.props.onClick} bgColor="gray" type="act" action="+/-" text="&plusmn;" />
            <Button onClick={this.props.onClick} bgColor="gray" type="op" action="%" text="%" />
            <Button onClick={this.props.onClick} bgColor="orange" type="op" action="/" text="&divide;" />
        </Row>
        <Row maxHeight="1">
            <Button onClick={this.props.onClick} bgColor="lightgray" type="val" action="7" text="7" />
            <Button onClick={this.props.onClick} bgColor="lightgray" type="val" action="8" text="8" />
            <Button onClick={this.props.onClick} bgColor="lightgray" type="val" action="9" text="9" />
            <Button onClick={this.props.onClick} bgColor="orange" type="op" action="*" text="&times;" />
        </Row>
        <Row maxHeight="1">
            <Button onClick={this.props.onClick} bgColor="lightgray" type="val" action="4" text="4" />
            <Button onClick={this.props.onClick} bgColor="lightgray" type="val" action="5" text="5" />
            <Button onClick={this.props.onClick} bgColor="lightgray" type="val" action="6" text="6" />
            <Button onClick={this.props.onClick} bgColor="orange" type="op" action="-" text="&minus;" />
        </Row>
        <Row maxHeight="1">
            <Button onClick={this.props.onClick} bgColor="lightgray" type="val" action="1" text="1" />
            <Button onClick={this.props.onClick} bgColor="lightgray" type="val" action="2" text="2" />
            <Button onClick={this.props.onClick} bgColor="lightgray" type="val" action="3" text="3" />
            <Button onClick={this.props.onClick} bgColor="orange" type="op" action="+" text="+" />
        </Row>
        <Row maxHeight="1">
            <Button onClick={this.props.onClick} bgColor="lightgray" type="val" action="0" text="0" />
            <Button onClick={this.props.onClick} bgColor="lightgray" type="op" action="," text="&#44;" />
            <Button onClick={this.props.onClick} bgColor="orange" type="act" action="=" text="=" />
        </Row>

    </>);
}