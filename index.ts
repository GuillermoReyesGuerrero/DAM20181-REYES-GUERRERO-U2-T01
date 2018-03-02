interface Person{
    name:string;
    email:string;
    salary:string;
    active:boolean;
}

var people=Array<Person>();

function createPeople():void{
    let newPerson:any;
    for(let i=0; i<10; i++){
        newPerson={
            name:`Guillermo${i}`,
            email:`i${i}@gmail.com`,
            salary:(i+10000),
            active: i%2==0?true:false
        }
        people.push(newPerson);
    }
    
}

function printPerson():void{
    var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    people.forEach(element =>{
        if(element.active===true && EMAIL_REGEXP.test(element.email)) console.log(element)
    });
}
createPeople();
printPerson();