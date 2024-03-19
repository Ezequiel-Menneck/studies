new Promise((resolveOuter) => {
    resolveOuter(
        new Promise((resolveInner) => {
            setTimeout(resolveInner, 1000);
        })
    )
})


const myPromise = new Promise((resolve, reject) => {
    resolve("foo");
});

const myResolve = (a) => console.log(a)

myPromise.then(myResolve, "s")


const myPromise2 = (j) => new Promise((a, b) => {
    a(j)
})

myPromise2("test").then(e => console.log(e))
