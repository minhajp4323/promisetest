const p1 = new Promise((resolve, reject)=>{
    // setTimeout(()=>resolve("P1 SUCCESS"), 2000)
    setTimeout(()=>reject("P1 Fail"), 2000)
})


const p2 = new Promise((resolve, reject)=>{
    // setTimeout(()=>resolve("P2 SUCCESS"), 3000)
    setTimeout(()=>reject("P2 Fail"), 1000)
    
})


const p3 = new Promise((resolve, reject)=>{
    // setTimeout(()=>resolve("P3 SUCCESS"), 2000)
    setTimeout(()=>reject("P3 Fail"), 3000)
})

// Promise.all([p1, p2, p3])   //wait for all others tofinish//error if rejected anyone// othervise we get an array of values
// Promise.allSettled([p1, p2, p3]) //will give us all the result. also error as an array of object
// Promise.race([p1, p2, p3]) //return the status of 1st settled promise alway
Promise.any([p1, p2, p3]) //first settled success based on time. when all promises rejected. it will be aggrigate error

.then(res => {
    console.log(res);
})
.catch((err)=>{
    console.error(err);
    console.log(err.errors)
})
