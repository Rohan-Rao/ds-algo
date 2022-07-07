function checkLengthDiff(str1, str2) {
    return Math.abs(str1.length - str2.length);
}

function getZeroFilledArr(arrLength) {
    const arr = new Array(arrLength);

    return arr.map(() => 0);
}

function oneAway(str1, str2) {
    const lengthDiff = checkLengthDiff(str1, str2);
    if( lengthDiff > 1) {
        return false;
    }

    let replaceCharCount = 0;
    if(lengthDiff === 0) {
        for (let i=0; i<str1.length; i++) {
            if(str1[i] !== str2[i]) {
                replaceCharCount += 1;
            }
            if (replaceCharCount > 1) {
                return false;
            }
        }
        return true;
    } else {
        const frequencyCountTable = getZeroFilledArr(256);
        let diffCount = 0;
        for (let i=0; i<str1.length; i++) {
            const charCode = str1.charCodeAt[i];
            frequencyCountTable[charCode] += 1; 
        }

        for (let i=0; i<str2.length; i++) {
            const charCode = str2.charCodeAt[i];
            frequencyCountTable[charCode] -= 1;
        }

        for(let i=0; i<frequencyCountTable.length; i++) {
            diffCount += Math.abs(frequencyCountTable[i]);

            if(diffCount > 1) {
                return false
            }
        }
        return true;
    }
}

console.log(oneAway('abbc', 'ab'));