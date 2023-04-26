var eOperation;
(function (eOperation) {
    eOperation[eOperation["ADD"] = 0] = "ADD";
    eOperation[eOperation["SUBTRACT"] = 1] = "SUBTRACT";
    eOperation[eOperation["DIVIDE"] = 2] = "DIVIDE";
    eOperation[eOperation["MULTIPLY"] = 3] = "MULTIPLY";
    eOperation[eOperation["POWER"] = 4] = "POWER";
    eOperation[eOperation["MODULUS"] = 5] = "MODULUS";
    eOperation[eOperation["DEFAULT"] = 6] = "DEFAULT";
})(eOperation || (eOperation = {}));
export default eOperation;
