class DivideByZero extends Error {
    constructor(message) {
        super(message);
        this.name = "DivideByZero";
    }
}
export default DivideByZero;
