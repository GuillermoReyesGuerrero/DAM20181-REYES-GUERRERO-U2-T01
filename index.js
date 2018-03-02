var people = Array();
function createPeople() {
    var newPerson;
    for (var i = 0; i < 10; i++) {
        newPerson = {
            name: "Guillermo" + i,
            email: "i" + i + "@gmail.com",
            salary: (i + 10000),
            active: i % 2 == 0 ? true : false
        };
        people.push(newPerson);
    }
}
function printPerson() {
    var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    people.forEach(function (element) {
        if (element.active === true && EMAIL_REGEXP.test(element.email))
            console.log(element);
    });
}
createPeople();
printPerson();
