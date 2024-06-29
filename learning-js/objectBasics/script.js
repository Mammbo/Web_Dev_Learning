// for this solution we are trying to triple all even numbers in an array and sum them. 

function sumOfTripledEvens(array) {
    return array
        .filter((num) => num % 2 === 0)
        .map((num) => num * 3)
        .reduce((total, currentItem) => total + currentItem);
}

//objects are great :)