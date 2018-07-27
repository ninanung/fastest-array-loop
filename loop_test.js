const forLoop = function(array, string) {
    console.log("for loop start");
    for(let i = 0; i < array.length; i++) {
        if(array[i] === string) {
            return null;
        }
    }
    console.log("for loop finished");
}

const forEachLoop = function(array, string) {
    console.log("forEach loop start");
    array.forEach(function(item) {
        if(item === string) {
            return null;
        }
    });
    console.log("forEach loop finished");
}

const mapLopp = function(array, string) {
    console.log("map loop start");
    array.map(function(item) {
        if(item === string) {
            return null;
        }
    });
    console.log("map loop finished");
}

const whileLoop = function(array, string) {
    console.log("while loop start");
    let i = 0;
    while(i < array.length) {
        if(array[i] === string) {
            return null;
        }
        i++;
    }
    console.log("while loop finished");
}

const indexOfLoop = function(array, string) {
    console.log("indexOf loop start");
    array.indexOf(string);
    console.log("indexOf loop finished");
}

const filterLoop = function(array, string) {
    console.log("filter loop start")
    array.filter(function(item) {
        return item === string;
    });
    console.log("filter loop finished");
}

const reduceLoop = function(array, string) {
    console.log("reduce loop start");
    array.reduce(function(pre, item) {
        return item === string;
    });
    console.log("reduce loop finished");
}

const makeArray = function(num) {
    const array = [];
    for(let i = 0; i < num; i++) {
        const string = i.toString();
        array.push(string);
    }
    return array;
}

const timeCheck = function(test, array, string) {
    const startTime =  new Date().getTime();
    test(array, string);
    const endTime = new Date().getTime();
    let res = endTime - startTime;
    res = res / 1000 + res % 1000;
    console.log(res);
    console.log("");
}

console.log("Loop test start");
console.log("");
const testArray = makeArray(100000);
const nothing = "nothing";
const match = "10000"
console.log("number of array :" + testArray.length);
console.log("");

timeCheck(forLoop, testArray, nothing, false);
timeCheck(forEachLoop,testArray, nothing, false);
timeCheck(whileLoop, testArray, nothing, false);
timeCheck(mapLopp, testArray, nothing, false);
timeCheck(indexOfLoop, testArray, nothing, false);
timeCheck(reduceLoop, testArray, nothing, false);
timeCheck(filterLoop, testArray, nothing, false);