function removeDuplicate(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let found = false;

        for (let j = 0; j < result.length; j++) {
            if (result[j] === arr[i]) {
                found = true;
                break;
            }
        }

        if (found === false) {
            result.push(arr[i]);
        }
    }

    return result;
}