// const myNumber = [1,2,3,4,5,6,7,8,9]
// const newNum = myNumber.map((num)=> num* 10)
//                        .map((num)=> num+1)
//                        .filter((num)=> num>65)
// console.log(newNum);


//******** reduce funtion ************//
// const myNum =[1,2,3]
// const total = myNum.reduce(function (acc,curval){
//     console.log(`accumulater:${acc} and current value is ${curval}`);
    
//     return acc+curval   
// }, 0)// intial value is declared here , which is used by the or taken by the accumulater as the initial value 
// console.log(total);

const mynum=[1,2,3]
const mytotal= mynum.reduce((acc,curr)=> {return acc+curr}, 0)
console.log(mytotal);

const shoppingcart =[
    {
        item: "js course",
        price: 2999
    },
    {
        item: "DBMS course",
        price: 299
    },
    {
        item: "SQL course",
        price: 99
    },
    {
        item: "PYHTON course",
        price: 299
    },
    {
        item: "C++ course",
        price: 99
    },
    {
        item: "C course",
        price: 999
    },
]

const pricetopay =shoppingcart.reduce((acc,item) => acc + item.price, 0 )
console.log(pricetopay);










