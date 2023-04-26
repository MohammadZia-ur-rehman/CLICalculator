class DivideByZero extends Error {
    constructor(message: string) {
        super(message);
        this.name = "DivideByZero";
    }
}

export default DivideByZero;
