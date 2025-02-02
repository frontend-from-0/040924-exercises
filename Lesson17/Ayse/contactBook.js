/*
===========================================================
  SIMPLE CONTACT BOOK APPLICATION
===========================================================
In this project, you'll create a Contact Book to store and
manage basic info: name, phone, and email.

You'll practice:
1. Arrays and objects
2. Loops (for, for-of, findIndex, etc.)
3. Conditionals (if-else)
4. Basic CRUD (Create, Read, Update, Delete) functionality

Below is a step-by-step guide, with sample code and
comments explaining what each section does. Run this file
in Node.js or in your browser's console to see the output.
*/

/*
-----------------------------------------------------------
  STEP 1: Setup and Initial Data
-----------------------------------------------------------
1. Create an array named 'contacts' with a few initial
   sample contacts.
2. Each contact is an object with 'name', 'phone', and
   'email' properties.
*/
console.log('STEP-1: Setup and Initial Data');

let contacts = [
  {
    name: 'Alice',
    phone: '123-456-7890',
    email: 'alice@gmail.com'
  },
  {
    name: 'Anton',
    phone: '123-456-7899',
    email: 'anton@gmail.com'
  },
  {
    name: 'Bob',
    phone: '222-222-2222',
    email: 'bob@gmail.com'
  }
];
console.log(contacts);

/*
-----------------------------------------------------------
  STEP 2: Display All Contacts
-----------------------------------------------------------
Function: displayAllContacts()
- Loops over the 'contacts' array.
- Logs a descriptive string for each contact.

Example output:
  Name: Alice, Phone: 123-456-7890, Email: alice@example.com
*/
console.log('STEP 2: Display All Contacts');
console.log('Method-1');

function displayAllContacts(){
  console.log('Contact List:');
  console.log("===================");

  for(let contact of contacts){
    console.log(`Name: ${contact.name}, Phone: ${contact.phone}, Email: ${contact.email}`);
  }
}
displayAllContacts();

console.log('Method-2');

function displayAllContacts2(contactList, uppercaseMode){
  for (const contact of contactList){
    if(uppercaseMode){
      console.log(`NAME: ${contact.name}, PHONE: ${contact.phone}, EMAIL: ${contact.email}`,);
      continue;
    }else{
      console.log(`name: ${contact.name}, phone: ${contact.phone}, email: ${contact.email}`,);
    }
  }
}
displayAllContacts2(contacts, true);
displayAllContacts2(contacts, false);

/*
-----------------------------------------------------------
  STEP 3: Add a New Contact
-----------------------------------------------------------
Function: addContact(name, phone, email)
- Creates a new contact object and pushes it into 'contacts'.
- Checks if a contact with the same name already
  exists before adding. If found, logs a warning and returns.
- Logs "Contact added successfully." if everything is good.
*/
console.log('STEP 3: Add a New Contact');


let contacts3 = [
  { name: 'Alice', phone: '123-456-7890', email: 'alice@gmail.com' },
  { name: 'Anton', phone: '123-456-7899', email: 'anton@gmail.com' },
  { name: 'Bob', phone: '222-222-2222', email: 'bob@gmail.com' }
];

function addContact (name, phone, email) {

  for (let contact of contacts3) {
    if (contact.name === name) {
      console.warn('The contact already exists');
      return;
    }
    }
    const newContact = {name, phone, email};
    contacts3.push(newContact);
    console.log('Contact added successfully');
  }

  addContact("Charlie", "333-333-3333", "charlie@gmail.com");
  addContact("Alice", "111-111-1111", "alice_new@gmail.com");
  console.log(contacts3);
  //I examined the code below and compared it with my own code.

/*
function addContact(newName, newPhone, newEmail, contactList) {
  for (let i = 0; i < contactList.length; i++) {
    if (newName === contactList[i].name) {
      console.warn("The contact already exist");
      return;
    }
  }
  const contactListLengthPrev = contactList.length;
  contactList.push({
    name: newName,
    phone: newPhone,
    email: newEmail,
  });
  const contactListLengthNew = contactList.length;

  if (contactListLengthPrev < contactListLengthNew) {
    console.log("Contact added successfully.");
  } else {
    console.log("An error occured when adding a contact.");
  }

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator
  // contactListLengthPrev < contactListLengthNew
  //   ? console.log("Contact added successfully.")
  //   : console.log("An error occured when adding a contact.");
}
*/
/*
-----------------------------------------------------------
  STEP 4: View a Contact by Name
-----------------------------------------------------------
Function: viewContact(name)
- Loops over 'contacts' to find one matching 'name'.
- Logs the contact info if found.
- Otherwise, logs: "No contact found with the name: <name>"
*/

console.log('STEP 4: View a Contact by Name');

let contacts4 = [
  { name: 'Alice', phone: '123-456-7890', email: 'alice@gmail.com' },
  { name: 'Anton', phone: '123-456-7899', email: 'anton@gmail.com' },
  { name: 'Bob', phone: '222-222-2222', email: 'bob@gmail.com' }
];

function viewContact(name) {
  let found = false;

  for (let contact of contacts4) {
    if (contact.name === name) {
      console.log(`Name: ${contact.name}, Phone: ${contact.phone}, Email: ${contact.email}`);
      found = true;
      break;
    }
  }
  if (!found) {
    console.log(`No contact found with the name: ${name}`);
  }
}

viewContact('Alice');
viewContact('Charlie');
//I examined the code below and compared it with my own code.


/*
function viewContact(name, contactList) {
  let isContactFound = false;
  for (const contact of contactList) {
    if (name === contact.name) {
      console.log(
        `name: ${contact.name}, phone:${contact.phone}, email:${contact.email}`,
      );
      isContactFound = true;
    }
  }
  if (!isContactFound) {
    console.log(`No contact found with the name: ${name}`);
  }
}
*/
/*
-----------------------------------------------------------
  STEP 5: Update a Contact
-----------------------------------------------------------
Function: updateContact(name, newPhone, newEmail)
- Finds the contact by name and updates phone + email.
- Logs "Contact updated successfully." if found.
- Otherwise, logs: "No contact found with the name: <name>"
*/
console.log('STEP 5: Update a Contact');

function findContact(name, contactList) {
  for (const contact of contactList) {
    if (contact.name === name) {
      return contact;
    }
  }
  return null;
}

function updateContact(name, newPhone, newEmail, contactList) {
  const contact = findContact(name, contactList);
  if (contact) {
    contact.phone = newPhone;
    contact.email = newEmail;
    console.log(`Contact updated successfully.`);
  }else {
    console.log(`No contact found with the name: ${name}`);
  }
}

let contacts5 = [
  { name: 'Alice', phone: '123-456-7890', email: 'alice@gmail.com' },
  { name: 'Anton', phone: '123-456-7899', email: 'anton@gmail.com' },
  { name: 'Bob', phone: '222-222-2222', email: 'bob@gmail.com' }
];
updateContact("Alice", "555-555-5555", "alice_new@gmail.com", contacts);
updateContact("Charlie", "111-111-1111", "charlie@gmail.com", contacts);

/*
-----------------------------------------------------------
  STEP 6: Remove a Contact
-----------------------------------------------------------
Function: removeContact(name)
- Finds the index of the contact with 'name' using
  findIndex() or a loop.
- Splices it from the array if found.
- Logs "Contact removed successfully." if found.
- Otherwise, logs: "No contact found with the name: <name>"
*/
console.log(' STEP 6: Remove a Contact');

let contacts6 = [
  { name: 'Alice', phone: '123-456-7890', email: 'alice@gmail.com' },
  { name: 'Bob', phone: '222-222-2222', email: 'bob@gmail.com' }
];

function removeContact(name, contactList) {
  const contactIndex = contactList.findIndex(contact => contact.name === name);

  if (contactIndex !== -1) {
    contactList.splice(contactIndex, 1);
    console.log(`Contact removed successfully.`);
  }else {
    console.log(`No contact found with the name: ${name}`);
  }
}
removeContact(`Alice`, contacts6);
removeContact(`Charlie`, contacts6);

/*
-----------------------------------------------------------
  STEP 7: Testing Our Functions
-----------------------------------------------------------
Below are some sample function calls to demonstrate the
Contact Book in action.
*/
console.log('STEP 7: Testing Our Functions');

let contacts7 = [
  { name: 'Alice', phone: '123-456-7890', email: 'alice@gmail.com' },
  { name: 'Bob', phone: '222-222-2222', email: 'bob@gmail.com' },
  { name: 'Charlie', phone: '222-555-8888', email: 'charlie@gmail.com' }
];

addContact('Charlie', '333-333-3333', 'charlie@gmail.com', contacts7);

viewContact('Alice', contacts7);

updateContact('Bob', '444-444-4444', 'bob_new@gmail.com', contacts7);

removeContact('Charlie', contacts7);

displayAllContacts(contacts7);


/*
console.log("Initial contact list:");
displayAllContacts(contacts);

console.log("\nAdding a new contact: Charlie");
addContact("Charlie", "777-777-7777", "charlie@example.com", contacts);
displayAllContacts(contacts);

console.log("\nAdding a new contact: Charlie");
addContact("Charlie", "777-777-7777", "charlie@example.com", contacts);
displayAllContacts(contacts);

console.log("\nViewing Bob's contact:");
viewContact("Bob", contacts);

console.log("\nViewing Charlie's contact:");
viewContact("Charlie", contacts);

// console.log("\nUpdating Bob's contact:");
// updateContact("Bob", "999-999-9999", "bob@updated.com");
// viewContact("Bob");

// console.log("\nRemoving Alice:");
// removeContact("Alice");
// displayAllContacts();
*/
/*
-----------------------------------------------------------
  OPTIONAL ENHANCEMENTS:
-----------------------------------------------------------
1. Partial Name Search:
   - Instead of strict ===, use .includes() for the name check.
2. Sort Contacts:
   - Add a function to sort contacts alphabetically by name.
3. Search by multiple fields:
   - e.g., find a contact by phone number or email.
*/
