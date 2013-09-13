// http://osherove.com/tdd-kata-1/
function add(numberString) {
    var customDelimiter, numberArray, sum;
    var regExpString = '(,|\n|customDelimiter)';

    if (_hasCustomDelimiter(numberString)) {
        customDelimiter = _getCustomDelimiter(numberString);
        regExpString    = regExpString.replace('customDelimiter', customDelimiter);
        numberString    = _clearDelimiterPartFromString(numberString);
    }

    numberArray = _splitNumberStringByRegExpString(numberString, regExpString);
    
    if (_containsNegativeNumber(numberArray)) {
        throw new Error("Negatives not allowed: " + _getNegativeNumbersAsString(numberArray)); 
    } 
    if (_containsNumberBiggerThan(1000, numberArray)) {
        numberArray = _removeNumbersBiggerThan(1000, numberArray); 
    }

    return _sum(numberArray); 
}

function _hasCustomDelimiter(string) {
    return string.substr(0,2) === '//' ? true : false;
}

function _getCustomDelimiter(string) {
    var endOfDelimiter    = string.indexOf('\n');
    var lengthOfDelimiter = endOfDelimiter - 2; 
    return string.substr(2,lengthOfDelimiter); 
}

function _clearDelimiterPartFromString(string) {
    var startOfNumberString = string.indexOf('\n') + 1;
    return string.substr(startOfNumberString);
}

function _splitNumberStringByRegExpString(numberString, regExpString) {
    var escapedRegExpString = regExpString.replace(/(\*|\+|\?|\.|\\|\^|\$)/g, '\\$&');
    return numberString.split(new RegExp(escapedRegExpString, "g"));
}

function _sum(numberArray) {
    var sum = 0;
    for (var i = 0; i < numberArray.length; i++) {
        sum += parseInt(numberArray[i]) || 0;
    }
    return sum;
}

function _containsNegativeNumber(numberArray) {
    return _getNegativeNumbersAsString(numberArray).length > 0 ? true : false;
}

function _getNegativeNumbersAsString(numberArray) {
    var negativeNumbers = [];
    for (var i = 0; i < numberArray.length; i++) {
        if (numberArray[i] < 0) {
            negativeNumbers.push(numberArray[i]);
        } 
    }
    return negativeNumbers.join(',');
}

function _containsNumberBiggerThan(number, numberArray) {
    return _removeNumbersBiggerThan(number, numberArray).length > 0 ? true : false; 
}

function _removeNumbersBiggerThan(number, numberArray) {
    var filteredNumberArray = [];
    for (var i = 0; i < numberArray.length; i++) {
        if (numberArray[i] <= number) {
            filteredNumberArray.push(numberArray[i]);
        }
    }
    return filteredNumberArray;
}
