module.exports = {
    add: function (a, b) {
        if (arguments.length < 2)
            throw 'Arguments missing.';
        if (typeof a === 'string')
            throw 'a String is not a valid number [arg 0].';
        if (typeof b === 'string')
            throw 'a String is not a valid number [arg 1].';
        if (isNaN(a) || a === null)
            throw `"${a}" is not a valid number [arg 0].`;
        if (isNaN(b) || b === null)
            throw `"${b}" is not a valid number [arg 1].`;
        return a + b;
    }
}