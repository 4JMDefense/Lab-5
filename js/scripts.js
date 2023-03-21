const courseList = [{code: "ACIT 1620", name: "Web Fundamental Technologies"},
                    {code:"ORGB 1100", name:"Organizational Behaviour"},
                    {code:"ACIT 1630", name:"Database Management Systems"}];

var response




do{ response = prompt("Enter 4-digit course code")

}while(isNaN(response) == true)


for (let i = 0; i < courseList.length; i++){
    if(courseList.includes(response)){
        console.log("YES")
    }
}


// for (let i = 0; i < courseList.length; i++){
//     if(courseList.includes(response)){
//         console.log("Yes I am taking the course")
//     }
// }

