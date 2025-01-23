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

const contacts = [
  { name: "Dilek", phone: "0 224 555 88 77", email: "xyz@yahoo.com" },
  { name: "Ali", phone: "0 225 555 88 77", email: "xds@yahoo.com" },
  { name: "Ayşe", phone: "0 224 555 88 55", email: "sdf@yahoo.com" },
];

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

function displayAllContacts(contactList, uppercaseMode = false) {
  for (const contact of contactList) {
    if (uppercaseMode) {
      console.log(
        `NAME: ${contact.name}, PHONE:${contact.phone}, EMAIL:${contact.email}`
      );
    } else {
      console.log(
        `name: ${contact.name}, phone:${contact.phone}, email:${contact.email}`
      );
    }
  }
}

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

function findContact(name, contactList) {
  return contactList.find(contact => contact.name === name);
}

function addContact(newName, newPhone, newEmail, contactList) {
  const existingContact = findContact(newName, contactList);
  if (existingContact) {
    console.warn("The contact already exists.");
    return;
  }

  contactList.push({
    name: newName,
    phone: newPhone,
    email: newEmail,
  });

  console.log("Contact added successfully.");
}

/*
-----------------------------------------------------------
  STEP 4: View a Contact by Name
-----------------------------------------------------------
Function: viewContact(name)
- Loops over 'contacts' to find one matching 'name'.
- Logs the contact info if found.
- Otherwise, logs: "No contact found with the name: <name>"
*/

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

/*
-----------------------------------------------------------
  STEP 5: Update a Contact
-----------------------------------------------------------
Function: updateContact(name, newPhone, newEmail)
- Finds the contact by name and updates phone + email.
- Logs "Contact updated successfully." if found.
- Otherwise, logs: "No contact found with the name: <name>"
*/

function updateContact(name, newPhone, newEmail, contactList) {
  const contact = findContact(name, contactList);
  if (contact) {
    contact.phone = newPhone;
    contact.email = newEmail;
    console.log(`Contact with name "${name}" updated successfully.`);
  } else {
    console.log(`No contact found with the name: "${name}".`);
  }
}

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

function removeContact(name, contactList) {
  const contact = findContact(name, contactList);
  if (contact) {
    const index = contactList.indexOf(contact);
    contactList.splice(index, 1);
    console.log(`Contact with name "${name}" removed successfully.`);
  } else {
    console.log(`No contact found with the name: "${name}".`);
  }
}

/*
-----------------------------------------------------------
  STEP 7: Testing Our Functions
-----------------------------------------------------------
Below are some sample function calls to demonstrate the 
Contact Book in action.
*/

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

console.log("\nUpdating Charlie's contact:");
updateContact("Charlie", "999-999-9999", "charlie@updated.com", contacts);
displayAllContacts(contacts);

console.log("\nRemoving Charlie:");
removeContact("Charlie", contacts);
displayAllContacts(contacts);

console.log("\nTrying to remove a non-existent contact:");
removeContact("Bob", contacts);