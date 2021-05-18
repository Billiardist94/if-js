//----------------5.0.----------------
const obj1 = {
    a: 'a',
    b: {
        a: 'a',
        b: 'b',
        c: {
            a: 1,
        },
    },
};
const obj2 = {
    b: {
        c: {
            a: 1,
        },
        b: 'b',
        a: 'a',
    },
    a: 'a',
};
const obj3 = {
    a: {
        c: {
            a: 'a',
        },
        b: 'b',
        a: 'a',
    },
    b: 'b',
};

const deepEqual = function (obj1, obj2) {
    if (obj1 === obj2) {
        return true;
    }
    else {
        if (Object.keys(obj1).length !== Object.keys(obj2).length) {
            return false;
        }
        for (let prop in obj1) {
            if (!obj2.hasOwnProperty(prop)) {
                return false;
            }
            if (obj1[prop].valueOf() !== obj2[prop].valueOf()) {
                if (! deepEqual(obj1[prop], obj2[prop])) {
                    return false;
                }
            }
        }
    }
    return true;
}
console.log(deepEqual(obj1, obj2))
console.log(deepEqual(obj1, obj3))