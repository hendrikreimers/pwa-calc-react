import React from 'react';
import Result from './Classes/Components/Calculator/Result';
import KeyPad from './Classes/Components/Calculator/KeyPad';
import Calculator from "./Classes/Utility/Calculator";

// Import (S)CSS
import 'bootstrap/dist/css/bootstrap.css';
import './Resources/Scss/App.scss';

// Init class instance holder
let CalculatorUtility = null;

/**
 * APP: Calculator
 */
export default class App extends React.Component {
    /**
     * Component Constructor
     */
    constructor() {
        // Call parent constructor
        super();

        // Init Calculator class
        CalculatorUtility = new Calculator(this);

        // Set default state values
        this.state = {
            result: 0,
            operator: null
        }
    }

    /**
     * Main Click handler function
     *
     * @param btn
     * @param payload
     */
    onClickHandle = (btn,payload) => {
        switch ( payload.type ) {

            case 'op':
                CalculatorUtility.handleOperator(payload.action);
                break;

            case 'act':
                CalculatorUtility.handleAction(payload.action);
                break;

            case 'val':
                CalculatorUtility.addNumber(payload.action);
                break;

            default:
                break;
        }
    };

    /**
     * Render function
     *
     * @returns {*}
     */
    render = () => (

        <div id="calc" className="container-fluid max-height">
            <Result value={this.state.result} />
            <KeyPad onClick={this.onClickHandle} />
        </div>

    )
}