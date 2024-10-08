fetchdata = (count) => {
    return new Promise(
        (resolver, reject) => {
            setTimeout(
                () => {
                    if (count >= 0) {
                        resolver(count);
                    }
                    else {
                        reject(count);
                    }
                }, 2000
            )
        }
    )
}



resolver_data = (count) => {
    return new Promise(
        (resolver, reject) => {
            setTimeout(
                () => {
                    console.log("increment count and by database query", count++);
                    resolver(count);
                }, 1000
            )
        }
    )
}

reject_data = (count) => {
    return new Promise(
        (resolver, reject) => {
            setTimeout(
                () => {
                    console.log("count is invalid", count);
                }, 1000
            )
        }
    )
}


x = -9
fetchdata(x).
    then((data) => resolver_data(data))
    .then((data) => {
        console.log(data);
    })
    .catch((data) => {
        reject_data(data);
    }
    )

x = 10
fetchdata(x).
    then((data) => resolver_data(data))
    .then((data) => {
        console.log(data);
    })
    .catch((data) => {
        reject_data(data);
    }
    )
