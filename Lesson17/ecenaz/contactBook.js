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

function displayAllContacts(contactList, uppercaseMode) {
  for (const contact of contacts) {
    if (uppercaseMode) {
      console.log(
        `NAME: ${contact.name}, PHONE:${contact.phone}, EMAIL:${contact.email}`,
      );
      continue;
    } else {
      console.log(
        `name: ${contact.name}, phone:${contact.phone}, email:${contact.email}`,
      );
    }
  }
}

console.log("Initial contact list:");
displayAllContacts(contacts);

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

console.log("\nAdding a new contact: Charlie");
addContact("Charlie", "777-777-7777", "charlie@example.com", contacts);
displayAllContacts(contacts);

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
console.log("\nViewing Bob's contact:");
viewContact("Bob", contacts);

/*
-----------------------------------------------------------
  STEP 5: Update a Contact
-----------------------------------------------------------
Function: updateContact(name, newPhone, newEmail)
- Finds the contact by name and updates phone + email.
- Logs "Contact updated successfully." if found.
- Otherwise, logs: "No contact found with the name: <name>"
*/

function updateContact(name, newPhone, newEmail, contactList, findContact) {
  const isContactFound = findContact(contacts, contactList);

  for (const contact of contactList) {
    if (contact.name === name) {
      contact.phone = newPhone; contact.email = newEmail;

      console.log(`Contact updated successfully: ${name}`);
      return;
    }
  }

  if (!isContactFound) {
    console.log(`No contact found with the name: ${name}`);
    return;
  }

}
// console.log("\nUpdating Bob's contact:");
// updateContact("Bob", "999-999-9999", "bob@updated.com");
// viewContact("Bob");

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
function removeContact(name, contacts, addContact, findContact) {
  let index = false;

  for (const contact in contacts) {
    if (contacts === name) {
      contacts.splice(index, 1);
      found = true;
      console.log("Contact removed successfully.");
    }
  }

  if (false === name) {
    console.log("No contact found with the name: ${name}");
  }
}
/*
-----------------------------------------------------------
  STEP 7: Testing Our Functions
-----------------------------------------------------------
Below are some sample function calls to demonstrate the 
Contact Book in action.
*/





console.log("\nAdding a new contact: Charlie");
console.log("\nAdding a new contact: ecenaz");
addContact("Charlie", "777-777-7777", "charlie@example.com", contacts);
addContact("Ecenaz", "012-345-678", "ece@example.com", contacts);
displayAllContacts(contacts);

console.log("\nViewing Bob's contact:");
viewContact("Bob", contacts);



// console.log("\nUpdating Bob's contact:");
// updateContact("Bob", "999-999-9999", "bob@updated.com");
// viewContact("Bob");

console.log("\nRemoving Alice:");
removeContact("Alice",contacts);


displayAllContacts();

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
