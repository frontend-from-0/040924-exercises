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
  { name: 'Dilek', phone: '0 224 555 88 77', email: 'xyz@yahoo.com' },
  { name: 'Ali', phone: '0 225 555 88 77', email: 'xds@yahoo.com' },
  { name: 'Ayşe', phone: '0 224 555 88 55', email: 'sdf@yahoo.com' },
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
  for (const contact of contactList) {
    if (uppercaseMode) {
      console.log(
        `NAME: ${contact.name}, PHONE:${contact.phone}, EMAIL:${contact.email}`
      );
      continue;
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
  for (const contact of contactList) {
    if (contact.name === name) {
      return contact;
    }
  }
  return null;
}

function addContact(name, phone, email, contactList) {
  if (findContact(name, contactList)) {
    console.warn('The contact already exist');
    return;
  }

  contactList.push({ name, phone, email });
  console.log(`Contact added successfully.`);

  const contactListLengthPrev = contactList.length;
  contactList.push({
    name,
    phone,
    email,
  });
  const contactListLengthNew = contactList.length;

  if (contactListLengthPrev < contactListLengthNew) {
    console.log('Contact added successfully.');
  } else {
    console.log('An error occurred when adding a contact.');
  }

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator
  // contactListLengthPrev < contactListLengthNew
  //   ? console.log("Contact added successfully.")
  //   : console.log("An error occured when adding a contact.");
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
      `Name: ${contact.name}, Phone: ${contact.phone}, Email: ${contact.email}`
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
  const isContactFound = findContact(name, contactList);

  if (!isContactFound) {
    console.log(`No contact found with the name: ${name}`);
    return;
  }

  for (const contact of contactList) {
    if (contact.name === name) {
      contact.phone = newPhone;
      contact.email = newEmail;
      console.log(`"Contact ${name} updated successfully.`);
    }
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
  const index = contactList.findIndex((contact) => contact.name === name);

  if (index !== -1) {
    contactList.splice(index, 1);
    console.log('Contact removed successfully.');
    return;
  } else {
    console.log(`No contact was found with name: ${name}`);
  }
}

/*
-----------------------------------------------------------
  STEP 7: Testing Our Functions
-----------------------------------------------------------
Below are some sample function calls to demonstrate the
Contact Book in action.
*/

console.log('Initial contact list:');
displayAllContacts(contacts);

console.log('\nAdding a new contact: Charlie');
addContact('Charlie', '777-777-7777', 'charlie@example.com', contacts);
displayAllContacts(contacts);

console.log('\nAdding a new contact: Charlie');
addContact('Charlie', '777-777-7777', 'charlie@example.com', contacts);
displayAllContacts(contacts);

console.log("\nViewing Charlie's contact:");
viewContact('Charlie', contacts);

console.log("\nUpdating Charlie's contact:");
updateContact('Charlie', '999-999-9999', 'charlie@updated.com', contacts);
viewContact('Charlie', contacts);

console.log('\nRemoving Charlie:');
removeContact('Charlie', contacts);
displayAllContacts(contacts);

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
