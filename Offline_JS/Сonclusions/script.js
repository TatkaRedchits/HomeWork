var gender = ["male", "female"]
var place = ["home", "cinema", "pub", "cafe", "hotel", "hospital"];

function Person(firstName, lastName, gender) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
}

Person.prototype = {
    location: new Location('street', null),
    walkTo: function(location) {
      this.location.visitors.splice(this.location.visitors.indexOf(this), 1);
      this.location = location;
      this.location.visitors.push(this);
  }
}

function Location(name, owner) {
    this.name = name;
    this.owner = owner;
    this.visitors = [];
}

function randomIndex(n) {
    return Math.floor(Math.random() * n);
};

var people = [];
for (var i = 0; i < 30; i++) {
    var person = new Person(base[randomIndex(50)]["Default Contact First name"], base[randomIndex(50)]["Default Contact Last name"], gender[randomIndex(2)]);
    people.push(person); 
}

var locations = [];
for (var i = 0; i < 10; i++) {
    var peopleLocation = new Location(place[randomIndex(6)], people[randomIndex(100)]);
    locations.push(peopleLocation);
}

for (var i = 0; i < 30; i++) {
    people[i].walkTo(locations[randomIndex(10)]);
}
console.log(people);
console.log(locations);

for (var i = 0; i < locations.length; i++) {
    if (locations[i].visitors.length === 1 && locations[i].visitors.indexOf(locations[i].owner) !== -1) {
        console.log(locations[i].owner.firstName + 'Find friends! You are so lonely!');
        continue;
    }

    if (locations[i].name === "hospital" ) {
        var visitorsInHospital = '';
        for (var j = 0; j < locations[i].visitors.length; j++) {
            visitorsInHospital += locations[i].visitors[j].firstName + ' ';
        }
        console.log(visitorsInHospital + ' visited somebody in hospital' );
        continue;
    }

    if (locations[i].visitors.length == 2) {
        if (locations[i].visitors[0].gender === locations[i].visitors[1].gender) {
            console.log('They have a date at ' + locations[i].name + ' ' + locations[i].visitors[0].firstName + '  ' + locations[i].visitors[1].firstName);
        } else {
            console.log('Guys, you are gay?! It\'s look like you have a date at ' + locations[i].name + ' ' + locations[i].visitors[0].firstName + '  ' + locations[i].visitors[1].firstName);
        }
    } 

    if (locations[i].visitors.length > 2) {
        var genderMark = '';
        var equalGender = true;
        var partyVisitors = '';

        for (var j = 0; j < locations[i].visitors.length; j++) {
            if (genderMark === '') {
                genderMark = locations[i].visitors[j].gender;
            } else if (genderMark !== locations[i].visitors[j].gender) {
                equalGender = false;
            }
            partyVisitors += locations[i].visitors[j].firstName + ' ';
        }

        if (equalGender) {
            if (genderMark === "male") {
                console.log(partyVisitors + ' have the stag-party in ' + locations[i].name);
            } else {
                console.log(partyVisitors + ' have the hen-party in ' + locations[i].name);
            }
        } else {
            console.log(partyVisitors + ' are celebrating their friend\'s birthday ' + locations[i].name);
        }
    }
}