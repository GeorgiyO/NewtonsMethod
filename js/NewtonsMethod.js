class NewtonsMethod {

    precision; //точность конечного ответа
    derivativePrecision; //точность производной
    f;

    prevGuess = 0;

    update(vars) {
        vars.f();
        if (Number.isNaN(vars.precision) || Number.isNaN(vars.derivativePrecision)) throw new NumberFormatError;


        this.precision = vars.precision;
        this.derivativePrecision = vars.derivativePrecision;
        this.f = vars.f;
    }

    derivative(f) {
        let h = this.derivativePrecision;
        return function(x) { return (f(x + h) - f(x - h)) / (2 * h); };
    }

    getResult(guess) {
        if (guess === null || guess === undefined)
            guess = 0;

        if (Math.abs(this.prevGuess - guess) > this.precision) {
            this.prevGuess = guess;
            let approx = guess - (this.f(guess) / this.derivative(this.f)(guess));

            console.log("текущее приближение: " + guess);
            console.log("значение функции в приближении: " + this.f(guess));
            console.log("значение производной функции в приближении: " + this.derivative(this.f)(guess));
            console.log("следующее приближение: " + approx);
            console.log('\n');

            return this.getResult(approx);
        } else {
            return guess;
        }
    }
}

class NumberFormatError extends Error {
    constructor(msg) {
        super(msg);
        this.name = "NumberFormatError";
    }
}