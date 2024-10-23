//[ no,district,+ve cases,death rate,curred rate,1st dose vaccine,2nd dose vaccine]
covid_data = [
    [1,'Ernakulam',34000,2000,23000,20000,2000],
    [2,'Idukki',14000,3000,25000,30000,1000],
    [3,'Thrissur',24000,4000,33000,24000,2500],
    [4,'Pathanamthitta',20000,2000,45000,22000,1500],
    [5,'Kozhikode',44000,5000,12000,21000,500],
    [6,'Palakkad',12000,1000,20000,23000,3400],
    [7,'Kottayam',27000,1500,27000,14000,1000],
    [8,'Kollam',14000,2500,25000,18000,2700]

]

//1. district having Highest +ve case 

console.log(`highest case:, ${ covid_data.reduce((a,b)=>a[2]>b[2]?a:b)} `);
//

const data=covid_data.reduce((a,b)=>a[2]>b[2]?a:b)
console.log(`highest case: ${data[1]}`);


//2. district having Highest 1st dose vaccine

const dose = covid_data.reduce((a,b)=>a[5]>b[5]?a:b)
console.log(`highest 1st dose vaccine: ${dose[5]}`)

//3. district having lowest death rate
const death = covid_data.reduce((a,b)=>a[3]<b[3]?a:b)
console.log(`lowest death rate:${death[3]}`);


//4. sort data with +ve case in descending order
console.log(`+ve case in descending order`);
const desc=covid_data.sort((a,b)=>b[2]-a[2]).forEach(a => console.log(a[1]));



//5. is district with +ve cases > 15000


console.log(`+ve case >15000: ${covid_data.some((a)=>a[2]>15000)?"yes":"no"}`);


//6. sort data with 1st dose vaccine

console.log(`1st dose vaccine `)
const sort1st = covid_data.sort((a,b)=>a[5]-b[5]).forEach(a=>console.log(a[5])
)

//7. Print Thrissur details
console.log(`Thrissur details:`)
    
const datas=covid_data.find(a=>a[1]=="Thrissur")
// console.log(`name:${datas[1]},
//     +ve case:${datas[2]},
//     death rate:${datas[3]},
//     current rate:${datas[4]}`);

console.log(datas);


//8. Print total number of positive cases
console.log(`total number of positive cases: ${covid_data.map(item=>item[2]).reduce((a,b)=>a+b)
}`);


//9. Print total number of curred cases
console.log(`total number of cured cases: ${covid_data.map(item=>item[4]).reduce((a,b)=>a+b)}`);


//10. Print curred cases in Idukki
const idukki=covid_data.find(a=>a[1]=="Idukki")
console.log(`curred case in idukki:${idukki[4]}`);
