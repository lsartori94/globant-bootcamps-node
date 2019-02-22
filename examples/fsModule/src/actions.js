module.exports = {
    /**
     * @param {number[]} list
     */
    incrementValues: function(list) {
        const mapIncrement = val => Number(val) + 1;
        return list.map(mapIncrement);
    },
    /**
     * @param {string[]} list
     */
    callNames: function(list) {
        const mapCall = name => `Hello ${name}`;
        return list.map(mapCall);
    }
}