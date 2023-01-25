console.log('person1: shows ticket')
console.log('person2: shows ticket')

const promiseWifeBringingTicks = new Promise((resolve, reject) =>   {
    setTimeout(() => {
        resolve('ticket')
    }, 3000)

})

//promiseWifeBringingTicks.then((t) => {
//    console.log(`person3: shows ${t}`)
//})

const getPopcorn = promiseWifeBringingTicks.then((t) => {
    console.log('wife: I have the ticks')
    console.log('husband: we should go in')
    console.log('wife: no I am hungry')
    return new Promise((resolve, reject) => {
        resolve(`${t} popcorn`)
    })
})

getPopcorn.then((t) => console.log(t))

const getButter = getPopcorn.then((t) => {
    console.log('husband: I got popcorn')
    console.log('husband: we should go in')
    console.log('wife: I need butter on my popcorn')
    return new Promise((resolve, reject) => {
        resolve(`${t} butter`)
    })
})

getButter.then((t) => console.log(t))

const getColdDrinks = getButter.then((t) => {
    console.log('husband: I got cold Drinks')
    console.log('husband: we should go in')
    console.log('wife: I need butter on my cold Drinks')
    return new Promise((resolve, reject) => {
        resolve(`${t} coldDrinks`)
    })
})

getColdDrinks.then((t) => console.log(t))

// const preMovie = async () => 'preMovie';

const preMovie = async () => {
    const promiseWifeBringingTicks = new Promise((resolve, reject) => {
        setTimeout(() => resolve('ticket'), 3000)
    })


const addPopcorn = new Promise((resolve, reject) => resolve(`popcorn`))
const getCandy = new Promise((resolve, reject) => resolve(`candy`))
const getCoke = new Promise((resolve, reject) => resolve(`coke`))

let ticket
try {
ticket = await promiseWifeBringingTicks
}catch(e)   {
    ticket = 'sad face'
}
// let [popcorn, candy, coke] = await Promise.all([addPopcorn, getCandy, getCoke]);
// console.log(`${popcorn}, ${candy}, ${coke}`)

return ticket
}

const testUserForm = async () => {
    const loadUserForm = new Promise((resolve, reject) => {
        setTimeout(() => resolve('page loaded'), 3000)
    })

    const enterUserName = new Promise((resolve, reject) => {
        setTimeout(() => reject('user entered'), 3000)
    })

    const verifyUserDetails = () => {

    }
    await loadUserForm
    await enterUserName
    const testResult = verifyUserDetails()
    return testResult
}

preMovie().then((m) => console.log(`person3: shows ${m}`))

console.log('person4: shows ticket')
console.log('person5: shows ticket')
