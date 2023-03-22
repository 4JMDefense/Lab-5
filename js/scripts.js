let c1 = {code: "ACIT 1620", name: "Web Fundamental Technologies"};
let c2 = {code:"ORGB 1100", name:"Organizational Behaviour"};
let c3 = {code:"ACIT 1630", name:"Database Management Systems"};
const courseList = [c1,c2,c3]




let response

do{ response = prompt("What is your first name?") 

}while(isNaN(response) == true)


for (let i = 0; i < courseList.length; i++){
    if(courseList[i].code.includes(response)){
        console.log(`yes I am taking the course: ${courseList[i].name}`);
        break;
    }
    else{
        courseList.push(response);
    }

}



// for (let i = 0; i < courseList.length; i++){
//     if(courseList.includes(response)){
//         console.log("Yes I am taking the course")
//     }
// }

