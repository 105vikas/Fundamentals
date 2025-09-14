// all, allSettled, any and race

// promise all -> it will handle multiple api call or promises ( fail fast )

// Promise.all([p1,p2,p3])

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "foo");
});

Promise.all([promise1, promise2, promise3]).then((values) => {
    console.log(values);
});

// p1->3s
// p2->2s
// p3->1s
// it will wait all of theam to finish 
// as soon as any of promise get reject it will through error, it don't wait for other promise to complete
// once the promise is create then it will don't cancle 
// Promise result=> [val1,val2,val3]


// Promise.allsetteled([p1,p2,p3])
// if any promise get rejected it don't exicute it wait for all promise to setteled
// it will give the [ val1, err2, val3] if any promise rejected it send error to that response

// Promise.race([p1, p2, p3 ]) as soon as first promise is setteled it will give the result of that promise
// (val2)  or (error)

// Promise.any([p1,p2,p3 ])  it will wait for the promise that will going to resolve first then it return the values & If all the api is fail then it send AggregateError & send it send the list 
//AggregateError