////////////////////////////// CONTACT BOOK //////////////////////////////
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
function findContact(name, contactList) {
  return contactList.find(contact => contact.name === name) || null;
}


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
  },
  { name: 'Charlie',
    phone: '111-111-1111',
    email: 'bcharlie@gmail.com' }
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

function displayAllContacts(contactList){

  for(let contact of contactList){
    console.log(`Name: ${contact.name}, Phone: ${contact.phone}, Email: ${contact.email}`);
  }
}
displayAllContacts(contacts);

console.log('Method-2');

function displayAllContactsUppercase(contactList, uppercaseMode){
  for (const contact of contactList){
    if(uppercaseMode){
      console.log(`NAME: ${contact.name}, PHONE: ${contact.phone}, EMAIL: ${contact.email}`,);
      continue;
    }else{
      console.log(`name: ${contact.name}, phone: ${contact.phone}, email: ${contact.email}`,);
    }
  }
}
displayAllContactsUppercase(contacts, true);
displayAllContactsUppercase(contacts, false);

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

function findContact(name, contactList) {
  return contactList.find(contact => contact.name === name);
}

function addContact(name, phone, email, contactList) {
  const existingContact = findContact(name, contactList);

  if (existingContact) {
    console.warn('The contact already exists');
    return;
  }

  contactList.push({ name, phone, email });
  console.log('Contact added successfully');
}

addContact("Charlie", "333-333-3333", "charlie@gmail.com", contacts);
addContact("Alice", "111-111-1111", "alice_new@gmail.com", contacts);
console.log(contacts);


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

function viewContact(name, contactList) {

  const contact = findContact(name, contactList);

  if (contact) {
    console.log(
      `name: ${contact.name}, phone: ${contact.phone}, email: ${contact.email}`
    );
  } else {
    console.log(`No contact found with the name: ${name}`);
  }
}

viewContact('Alice', contacts);
viewContact('Charlie', contacts);

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


function updateContact(name, newPhone, newEmail, contactList) {
  const contact = findContact(name, contactList);

  if (contact) {
    contact.phone = newPhone;
    contact.email = newEmail;
    console.log(`Contact updated successfully.`);
  } else {
    console.log(`No contact found with the name: ${name}`);
  }
}

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

function removeContact(name, contactList) {
  const contactIndex = contactList.findIndex(contact => contact.name === name);

  if (contactIndex !== -1) {
    contactList.splice(contactIndex, 1);
    console.log(`Contact removed successfully.`);
  }else {
    console.log(`No contact found with the name: ${name}`);
  }
}
removeContact(`Alice`, contacts);
removeContact(`Charlie`, contacts);

/*
-----------------------------------------------------------
  STEP 7: Testing Our Functions
-----------------------------------------------------------
Below are some sample function calls to demonstrate the
Contact Book in action.
*/
console.log('STEP 7: Testing Our Functions');

console.log("Initial contact list:");
displayAllContacts(contacts);

console.log("\nAdding a new contact: Charlie");
addContact("Charlie", "777-777-7777", "charlie@example.com", contacts);
displayAllContacts(contacts);

console.log("\nTrying to add Charlie again:");
addContact("Charlie", "777-777-7777", "charlie@example.com", contacts);
displayAllContacts(contacts);

console.log("\nViewing Bob's contact:");
viewContact("Bob", contacts);

console.log("\nViewing Charlie's contact:");
viewContact("Charlie", contacts);



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