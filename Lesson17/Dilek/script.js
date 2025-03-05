// INITIAL DATA

const contacts = [
  { name: 'Dilek', phone: '0 224 555 88 77', email: 'xyz@yahoo.com' },
  { name: 'Ali', phone: '0 225 555 88 77', email: 'xds@yahoo.com' },
  { name: 'Ayşe', phone: '0 224 555 88 55', email: 'sdf@yahoo.com' },
];

// DISPLAY FUNCTION

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

// FIND FUNCTION

// Refactored 'viewContact' and 'addContact' functions so they use 'findContact' helper function
// Added searching by multiple fields
// used .includes() for the name check instead of strict ===

function findContact(name, phone, email, contactList) {
  for (let i = 0; i < contactList.length; i++) {
    if (
      (!name || contactList[i].name.includes(name)) &&
      (!phone || contactList[i].phone.includes(phone)) &&
      (!email || contactList[i].email.includes(email))
    ) {
      return contactList[i];
    }
  }
  return null;
}

console.log(findContact('Ayşe', '', '', contacts));

// VIEW FUNCTION

function viewContact(name, phone, email, contactList) {
  const contact = findContact(name, phone, email, contactList);
  if (contact) {
    console.log(
      `name: ${contact.name}, phone:${contact.phone}, email:${contact.email}`
    );
  } else {
    console.log(`No contact found with the given information.`);
  }
}

viewContact('', '0 225 555 88 77', '', contacts);

// ADD FUNCTION

function addContact(newName, newPhone, newEmail, contactList) {
  const contact = findContact(newName, newPhone, newEmail, contactList);
  if (contact) {
    console.warn('The contact already exist');
    return;
  } else {
    contactList.push({
      name: newName,
      phone: newPhone,
      email: newEmail,
    });
    console.log('Contact added successfully.');
  }
}

console.log('\nAdding a new contact: Charlie');
addContact('Charlie', '777-777-7777', 'charlie@example.com', contacts);
displayAllContacts(contacts);

// UPDATE FUNCTION

function updateContact(name, newPhone, newEmail, contactList) {
  const contact = findContact(name, '', '', contactList);
  if (contact) {
    contact.phone = newPhone;
    contact.email = newEmail;
    console.log('Contact updated successfully.');
  } else {
    console.log(`No contact found with the name: " + ${name}`);
  }
}

updateContact('Dilek', '0 224 555 66 77', 'dilek@gmail.com', contacts);
console.log(contacts);

// REMOVE FUNCTION

function removeContact(name, contactList) {
  for (let i = 0; i < contactList.length; i++) {
    if (name === contactList[i].name) {
      contactList.splice(i, 1);
      console.log('Contact removed successfully.');
      return;
    }
  }
  console.log('No contact found with the name: ' + name);
}

removeContact('Dilek', contacts);
console.log(contacts);

// ADDITIONAL- SORT FUNCTION

function sortContacts(contactList) {
  return contactList.sort((a, b) => a.name.localeCompare(b.name));
}

console.log(sortContacts(contacts));

// Testing Our Functions

console.log('Initial contact list:');
displayAllContacts(contacts);

console.log("\nViewing Bob's contact:");
viewContact('Bob', '', '', contacts);

console.log("\nViewing Charlie's contact:");
viewContact('Charlie', '', '', contacts);

console.log("\nUpdating Ayşe's contact:");
updateContact('Ayşe', '999-999-9999', 'ayse@updated.com', contacts);
displayAllContacts(contacts);
