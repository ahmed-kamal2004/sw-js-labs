const incrementCountNotWorking = (count) => {
    if (count < 0) {
        console.log("count is invalid", count);
        return;
    }
    setTimeout(() => {
        console.log("increment count by database query", ++count);
    }, 1000);

    return count;
};

// as you can see this code did not behave as expected
let Count = 2;
newCount = 0
// incrementCountNotWorking(Count);




const incrementCountPromise = (count) => {
    //TODO: add some code to use promise to do the same functionality and return the count after modification, [2 Marks]
    //TODO: handle invalid data [1 Mark]
    return new Promise(
        (resolve, reject) => {
            if (count >= 0) {
                resolve(count, " Promise");
            }
            else {
                reject(count);
            }
        }
    )
};

const resolve_promise = (count, prefix) => {
    return new Promise(
        (resolver, reject) => {
            setTimeout(() => {
                console.log("increment count by database query" + prefix, ++count);
                resolver(count);
            }, 1000);

        }
    )
}
const reject_promise = (count) => {
    return new Promise(
        (resolve, reject) => {
            console.log("count is invalid", count);
        }
    )
}
//TODO: call incrementCountPromise(initCount) in proper way to console log the returned count after modification  and to catch any errors[1 Mark]


//TODO: How many parameters should this function take
const incrementCountCallBack = (resolve, reject, printer, count) => {
    //TODO: add some code to use the callBack function to do the same functionality and return the count after modification, [2 Marks]
    //TODO: handle invalid data [1 Mark]

    setTimeout(() => {
        if (count >= 0) {
            resolve(count, " Callback")
                .then((count) => printer(count));
        }
        else {
            reject(count);
        }
    }, 1000);
};

//TODO: call incrementCountCallBack(?,?,?) in proper way to console log the returned count after modification and to catch any errors  [1 Mark

const incrementCountAwait = async (count) => {
    //Handle error [1 Mark]
    //[HINT]: use the promise from incrementCountPromise [1 Mark]
    //[NOTE]: you do not have to return any value console log here

    if (count >= 0) {
        count_after_increment = await resolve_promise(count, " Async");
        console.log(count_after_increment)
    }
    else {
        _ = await reject_promise(count);
    }
};

printer = (count) => {
    console.log(count);
}



incrementCountPromise(Count)
    .then((data) => resolve_promise(data, " Promise"))
    .then((output) => {
        Count = output
        console.log(Count)
    })
    .catch((data) => reject_promise(data))

incrementCountCallBack(resolve_promise, reject_promise, printer, Count)

incrementCountAwait(Count);