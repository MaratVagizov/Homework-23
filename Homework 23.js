let car = {
    name: 'Captiva',
    gearbox: 'auto',
    engine: 2.0,
    age: 7,
    is_working: true,
    tuning: ['discs', 'audio', 'hatch', 'windows'],
    tech_passport: {
        serries: 'TB',
        passport_number: 9379992
    },
}
let id = {
    region: 30,
    id_number: 777
}

let car_new = Object.assign(car, id)
let car_new_keys = Object.keys(car_new)
let cars_new_values = Object.values(car_new)
let keys_values_single = car_new_keys.concat(cars_new_values)

let types = {
    number: [],
    string: [],
    object: [],
    boolean: []
}

keys_values_single.filter(item => {
    if(typeof(item) === 'number') types.number.push(item)
    else if(typeof(item) === 'string') types.string.push(item)
    else if(typeof(item) === 'object') types.object.push(item)
    else if(typeof(item) === 'boolean') types.boolean.push(item)
})

console.log(car_new)
console.log(car_new_keys)
console.log(cars_new_values)
console.log(keys_values_single)
console.log(types)