'use strict'

function cashier(sum, coins) {
    const sorted = Array.from(coins).sort((a, b) => b - a)

    const _cashier = cached(function (sum, coins) {
        const _coins = Array.from(coins)
        const current = _coins[0]
        let results = []

        if (current < sum) {
            const diff = sum - current
            results = results.concat(_cashier(diff, _coins).map((r) => [current].concat(r)))
        } else if (current === sum) {
            results.push([current])
        } 

        if (_coins.length > 1) {
            results = results.concat(_cashier(sum, Array.from(_coins).slice(1)))
        }

        return results
    })

    return _cashier(sum, sorted)
}

function cached(func) {
    return function() {
        const store = {}
        const hash = JSON.stringify(arguments)

        if (store[hash] === undefined) {
            store[hash] = func.apply(this, arguments)
        }

        return store[hash]
    }
}

const sTime = process.hrtime()
console.log(cashier(3, [1, 2]))
console.log(cashier(4, [1, 2, 3]))
console.log(cashier(6, [1, 2, 3]))
const diff = process.hrtime(sTime)
console.log('Took: ', (diff[0] * 1e9 + diff[1]) / 1e6)
