const filterOutOdds = (...args) => args.filter(num => num % 2 === 0);

const findMin = (...args) => Math.min(...args);

const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });

const doubleAndReturnArgs = (arg, ...restArgs) => [...arg, ...restArgs.map(val => val * 2)];

const removeRandom = (items) => {
    let randIdx = Math.floor(Math.random() * items.length);
    return [...items.slice(0, randIdx), ...items.slice(randIdx + 1)];
}

const extend = (array1, array2) => [...array1, ...array2];

const addKeyVal = (obj, key, val) => {
    let resObj = { ...obj };
    resObj[key] = val;
    return resObj;
}

const removeKey = (obj, key) => {
    let resObj = { ...obj };
    delete resObj[key];
    return resObj;
}

const combine = (obj1, obj2) => ({ ...obj1, ...obj2 });

const update = (obj, key, val) => {
    let resObj = { ...obj };
    resObj[key] = val;
    return resObj;
} //Same as addKeyVal right?