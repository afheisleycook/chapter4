function range(start, step, max) {
    /*
    this function generates a number list from start to step with the optional step
     */
    let nums = [];
    for (let i = start; i <= max; i++) {
        nums.push(i);
        if (step != null) {
            nums.push(i += step);

        }
    }
    return nums;
}


let myarry = range(1, 10);
console.log(myarry);