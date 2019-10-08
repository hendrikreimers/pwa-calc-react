export default class Calculator {

    /**
     * Class Constructor
     *
     * @param parent
     */
    constructor(parent) {
        // Save the APP Parent Object
        this.parent = parent;

        // Start init
        this.initialize();
    }

    /**
     * Initializes class
     *
     */
    initialize() {
        // Define the operator function set
        this.operatorFunctionSet = {
            '*': (a, b) => a * b,
            '/': (a, b) => a / b,
            '+': (a, b) => a + b,
            '-': (a, b) => a - b,
            '%': (a, b) => (a / 100) * b
        }

        // Set the value buffer
        this.data = {};
        this.data.valueBuffer = 0;
    }

    /**
     * add a number to the result state of the app
     *
     * @param number
     */
    addNumber(number) {
        // attach to the state the number
        this.parent.setState({
            result: parseFloat(this.parent.state.result + '' + number).toString()
        });
    }

    /**
     * Handles an operator sign (Plus [+], Minus [-], Percentage [%], ...)
     *
     * @param operatorSign
     */
    handleOperator(operatorSign) {
        switch ( operatorSign ) {

            case ',':
                this.parent.setState({
                    result: this.parent.state.result + '.'
                });
                break;

            case '+':
            case '-':
            case '*':
            case '/':
                this.handlePrevOperator();

                this.data.valueBuffer = this.parent.state.result;

                this.parent.setState({
                    result: 0,
                    operator: operatorSign
                });

                break;

            case '%':
                // Change percentage to floating number
                const percentInFloatNumber = (parseFloat(this.data.valueBuffer) / 100) * parseFloat(this.parent.state.result);

                // Switch current value from percent to floating number
                this.parent.setState({
                    result: percentInFloatNumber
                });

                break;

            default:
                break;
        }
    }

    /**
     * Fires the previous operator, which is still in the buffer but not fired
     * because the user needs to place the second part (numbers)
     *
     */
    handlePrevOperator() {
        if ( (this.parent.state.operator !== null) && (this.parent.state.operator !== '%') ) {
            // Get the current values
            const prevVal = parseFloat(this.data.valueBuffer),
                  curVal  = parseFloat(this.parent.state.result);

            // Calculate
            const calculatedResult = parseFloat(this.operatorFunctionSet[this.parent.state.operator](prevVal, curVal));

            // Set new state
            this.parent.setState({
                result: calculatedResult,
                operator: null
            });

            // Reset buffer
            this.data.valueBuffer = 0;
        }
    }

    /**
     * Handles an action sign (Clear [C], Result [=], ...)
     *
     * @param actionSign
     */
    handleAction(actionSign) {
        switch ( actionSign ) {
            case 'C':
                this.handlePrevAction();

                this.data.valueBuffer = 0;

                this.parent.setState({
                    result: 0,
                    operator: null
                });

                break;

            case '+/-':
                this.parent.setState({
                    result: parseFloat(this.parent.state.result * -1)
                });

                break;

            case '=':
                this.handlePrevAction();
                break;
            default:
                break;
        }
    }

    /**
     * Fires the previous action, which is still in the buffer but not fired
     * because the user needs to place the second part (numbers)
     *
     */
    handlePrevAction() {
        this.handlePrevOperator();
    }

}