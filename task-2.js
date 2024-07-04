const developers = [
  {
    name: "Vee",
    laptops: [
      "Dell"
    ],
    phones: [
      "Samsung",
      "Xiaomi"
    ],
    computerSetups: [
      {
        brand: "Lenovo",
        monitors: 1,
        keyboards: 1,
        mice: 1,
        speakers: 1
      }
    ]
  },
  {
    name: "Katlego",
    laptops: [
      "HP",
      "Samsung"
    ],
    phones: [
      "Apple",
      "Samsung",
      "Tecno",
      "Samsung"
    ],
    computerSetups: [
      {
        brand: "Lenovo",
        monitors: 2,
        keyboards: 1,
        mice: 1,
        speakers: 2
      }, 
      {
        brand: "Dell",
        monitors: 1,
        keyboards: 1,
        mice: 1,
        speakers: 1
      }
    ]
  },
  {
    name: "Rethabile",
    laptops: [
      "Samsung"
    ],
    phones: [
      "Samsung",
      "Huawei",
      "Poco"
    ],
    computerSetups: [
      {
        brand: "Asus",
        monitors: 1,
        keyboards: 1,
        mice: 1,
        speakers: 1
      }, 
      {
        brand: "Acer",
        monitors: 1,
        keyboards: 1,
        mice: 1,
        speakers: 2
      }
    ]
  },
  {
    name: "Gift",
    laptops: [],
    phones: [
      "Samsung"
    ],
    computerSetups: [
      {
        brand: "Acer",
        monitors: 3,
        keyboards: 1,
        mice: 1,
        speakers: 2
      }, 
      {
        brand: "HP",
        monitors: 2,
        keyboards: 1,
        mice: 1,
        speakers: 2
      }
    ]
  },
  {
    name: "Thokozile",
    laptops: [
      "Lenovo"
    ],
    phones: [
      "Apple"
    ],
    computerSetups: [
      {
        brand: "Dell",
        monitors: 1,
        keyboards: 1,
        mice: 1,
        speakers: 2
      }, 
      {
        brand: "Asus",
        monitors: 1,
        keyboards: 0
        ,
        mice: 1,
        speakers: 1
      }, 
      {
        brand: "Dell",
        monitors: 1,
        keyboards: 1,
        mice: 1,
        speakers: 1
      }
    ]
  }
]

//Developers names
const developersNames = developers.map(developers => developers.name);
console.log(developersNames);

//Total number of phones
const phones = developers.reduce((total,numberOfphone) => total + numberOfphone.length,0); //To revisit
console.log("The total number of phone that the all the developers have are: ", phones);

//Incomplete setups
let incompleteSetups = 0;

for (const developer of developers) {
  for (const setup of developer.computerSetups) {
    if (setup.mice === 0 ||
        setup.keyboards === 0 ||
        setup.speakers === 0 ||
        setup.monitors === 0) {
      incompleteSetups++;
   
    }
  }
}

console.log("The number of incomplete computer setups:", incompleteSetups);

//Trusted brands
function getMostTrustedPhoneBrand(developers) {

  let aPhones = [];
  for (let i = 0; i < developers.length; i++) {
    let developer = developers[i];
    for (let j = 0; j < developer.phones.length; j++) {
      aPhones.push(developer.phones[j]);
    }
  }


  let countBrandPhones = {};
  for (let k = 0; k < aPhones.length; k++) {
    let phone = aPhones[k];
    if (countBrandPhones[phone]) {
      countBrandPhones[phone]++;
    } else {
      countBrandPhones[phone] = 1;
    }
  }


  let mostTrustedPhoneBrand = "";
  let mCount = 0;
  for (let brand in countBrandPhones) {
    if (countBrandPhones[brand] > mCount) {
      mCount = countBrandPhones[brand];
      mostTrustedPhoneBrand = brand;
    }
  }

  return mostTrustedPhoneBrand;
}


const mostTrustedPhoneBrand = getMostTrustedPhoneBrand(developers);
console.log("Most trusted phone brand:", mostTrustedPhoneBrand);

//Developers who do have phones
let developersWOPhones = developers.filter(developer => developer.phones.length === 0).length;
console.log("The number of developers whoout phones:", developersWOPhones);

//Developers who do have phones
const developersWithoutLaptops = developers.filter(developer => developer.laptops.length === 0).length;
console.log("The number of developers who do not have a laptop:", developersWithoutLaptops);

//Developers who do no have computer set ups
const developerswithnosetups = developers.filter(developer => developer.computerSetups.length === 0).length;
console.log("Developers who do not have Computer set ups:", developerswithnosetups);


//count Gadgets  
function countGadgets(developer) {
  let totalGadgets = developer.laptops.length + developer.phones.length;
  for (const setup of developer.computerSetups) {
    totalGadgets += setup.monitors + setup.keyboards + setup.mice + setup.speakers;
  }
  return totalGadgets;
}

let mostGadgets = { name: "", totalGadgets: 0, gadgets: [] };

for (const developer of developers) {
  const currentTotal = countGadgets(developer);
  if (currentTotal > mostGadgets.totalGadgets) {
    mostGadgets = {
      name: developer.name,
      totalGadgets: currentTotal,
      gadgets: [...developer.laptops, ...developer.phones],
    };
    developer.computerSetups.forEach(setup => {
      mostGadgets.gadgets.push({
        type: "Computer Setup",
        monitors: setup.monitors,
        keyboards: setup.keyboards,
        mice: setup.mice,
        speakers: setup.speakers,
      });
    });
  }
}

console.log(`Developer with the most gadgets: ${mostGadgets.name}`);
console.log("Gadgets:");
console.log(mostGadgets.gadgets);


//Developers with most phones
let most = { name: "", phones: [] };

for (const developer of developers) {
  const phoneCount = developer.phones.length;
  if (phoneCount > most.phones.length) {
    most = { name: developer.name, phones: [...developer.phones] };
  }
}

if (most.phones.length === 0) {
  console.log("No developer has any phones listed in the data.");
} else {
  console.log(`Developer with the most phones: ${most.name}`);
  console.log(`Phones: ${most.phones}`);
  
}

let mostC = { name: "", computerSetups: [] };

for (const developer of developers) {
  const setupCount = developer.computerSetups.length;
  if (setupCount > mostC.computerSetups.length) {
    mostC = { name: developer.name, computerSetups: [...developer.computerSetups] };
  }
}

if (mostC.computerSetups.length === 0) {
  console.log("No developer has any computer setups listed in the data.");
} else {
  console.log(`Developer with the most computer setups: ${mostC.name}`);
  console.log("Computer Setups:");
  console.log(mostC.computerSetups);
}

//Developers with the mos monitors
let mostSetups = { name: "", computerSetups: [] };
let mostMonitors = { name: "", totalMonitors: 0 };

for (const developer of developers) {
  const setupCount = developer.computerSetups.length;
  const totalMonitors = developer.computerSetups.reduce((sum, setup) => sum + setup.monitors, 0);

  // Check for most setups
  if (setupCount > mostSetups.computerSetups.length) {
    mostSetups = { name: developer.name, computerSetups: [...developer.computerSetups] };
  }

  // Check for most monitors 
  if (totalMonitors > mostMonitors.totalMonitors) {
    mostMonitors = { name: developer.name, totalMonitors };
  }
}

if (mostSetups.computerSetups.length === 0) {
  console.log("No developer has any computer setups listed in the data.");
} else {
  console.log(`Developer with the most computer setups: ${mostSetups.name}`);
  console.log("Computer Setups:");
  console.log(mostSetups.computerSetups);
}

console.log(`Developer with the most monitors: ${mostMonitors.name}`);
console.log("Total monitor count:", mostMonitors.totalMonitors);
