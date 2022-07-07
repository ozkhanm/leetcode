/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var complexNumberMultiply = function(num1, num2) {
    let result = "";
    let [real1, img1] = num1.split("+");
    let [real2, img2] = num2.split("+");

    const x1 = real1 * real2;
    const x2 = real1 * parseInt(img2);
    const x3 = parseInt(img1) * real2;
    const x4 = parseInt(img1) * parseInt(img2) * -1;
    const realSum = x1 + x4;
    const imgSum = x2 + x3 + "i";

    result = realSum + "+" + imgSum;

    return result;
};