<<<<<<< HEAD
// console.log()

const host = {
    name: "Roget",
    occupation: "creator of Roget's Thesaurus",
    saySpecs () {
        console.log(`My name is ${this.name}. My occupation is ${this.occupation}`)
    },
};

console.log(host);
// host.saySpecs();
=======
const host = {
    name: 'Sharon',
    occupation: 'Owner of Westworld Park',
    saySpecs() {
        console.log(`My name is ${host.name}. My occupation is ${host.occupation}`)
    }
};
host.saySpecs();
>>>>>>> b2c4f80e74a9e4e260e47473d2057c5d453acf3b

class BasicHost {
    constructor(name, occupation) {
        this.name = name;
<<<<<<< HEAD
        this.occupation = occupation;
    }	
}

const host1 = new BasicHost("Roget", "creator of Roget's Thesaurus"); 

// console.log(host1);

const host2 = new BasicHost("Jon", "Software Engineer");

// console.log(host2);

BasicHost.prototype.saySpecs = function () {
    console.log(`My name is ${this.name}. My occupation is ${this.occupation}`);
};

host1.saySpecs();
console.log(host1)

// const newHost = new BasicHost("Alison", "User researcher") 

// BasicHost.prototype.answer = "I have an answer"

const names = [
    "Laila", "Jack", "Harley", "Hertha", "Darren", "Jolene", 
"Loura", "Lona", "Davida", "Reena", "Leland", "Ta", "Jen", 
"Linn", "Roslyn", "Margorie", "Rafaela", "Romona", "Shanel", "Stan"
];

const occupations = [
    "Clerical assistant", "Leaflet distributor", "Landowner",
"Special constable", "Anaesthetist", "Park-keeper", "Butler",
"Choreographer", "Blacksmith", "Chef", "Legal secretary",
"Song writer", "Librarian", "Landscape gardener"
   ];

const hostArray = [];

const randomName = names[Math.floor(Math.random() * names.length)];

// const randName = Math.random

// console.log(names[0])

// console.log(Math.random(names));

for(let i = 0; i <= 100; i++) {
    // console.log(Math.floor(Math.random(names)
    hostArray.push(Math.random(names) * names.len);
};

// hostArray.push(new BasicHost());

// console.log(hostArray);

// const GreetTheWorld = () =>{
//     for(let i = 0 ; i < 100; i++ ) {
//         hostArray.push(new BasicHost())
//       }
//     }
//     console.log(hostArray)
=======
        this.occupation = occupation
    }
}
const host1 = new BasicHost('Shelley', 'Speech Pathologist');
console.log(host1);

const host2 = new BasicHost('Ashley', 'PA');
console.log(host2);

BasicHost.prototype.saySpecs = function () {console.log(`My name is ${this.name}. My occupation is ${this.occupation}`)};

const host3 = new BasicHost('Gus', 'Pastor');
const host4 = new BasicHost('Esther', 'Lawyer');
console.log(host3);
console.log(host4);
host3.saySpecs();

//////////////////////
// Populate the world with hosts
//////////////////////

const names = ["Laila", "Jack", "Harley", "Hertha", "Darren", "Jolene", 
"Loura", "Lona", "Davida", "Reena", "Leland", "Ta", "Jen", 
"Linn", "Roslyn", "Margorie", "Rafaela", "Romona", "Shanel", "Stan"];

const occupations = ["Clerical assistant", "Leaflet distributor", "Landowner",
"Special constable", "Anaesthetist", "Park-keeper", "Butler",
"Choreographer", "Blacksmith", "Chef", "Legal secretary",
"Song writer", "Librarian", "Landscape gardener"]

let hostArray = [];

for (let i = 1; i < 100; i++) {
    hostArray.push(new BasicHost(names[Math.floor(Math.random()*names.length)], occupations[Math.floor(Math.random()*occupations.length)]));
}
console.log(hostArray);
hostArray[55].saySpecs();
>>>>>>> b2c4f80e74a9e4e260e47473d2057c5d453acf3b
