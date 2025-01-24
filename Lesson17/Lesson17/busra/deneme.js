


document.addEventListener('DOMContentLoaded', function () {

  
  let contactList = [];

  const form = document.getElementById('contactForm');
  const addPersonButton = document.getElementById('add-contact-button');
  const seeAllPerson = document.getElementById('seeAllPerson');
  const resultTable = document.getElementById('resultTable');
  const tableBody = resultTable ? resultTable.querySelector('tbody') : null;

  function addContact(form) {
    if (!form) return null; // form undefinedsa null verir

    const name = form.name.value.trim();
    const phone = form.phone.value.trim();
    const email = form.email.value.trim();

    if (!name || !phone || !email) {
      alert('Lütfen tüm alanları doldurun!');
      return null;
    }

    return { name, phone, email };
  }


  

  if (addPersonButton) {
    addPersonButton.addEventListener('click', (e) => {
      e.preventDefault(); //click dinleyicisi koyduk ve sayfanın yenilenmesini engelledik

      const newContact = addContact(form); // kişi ekleme fonk çağır

      if (newContact) {   //eğer nesne boş değilse
        contactList.push(newContact); //objeyi diziye push et
        form.reset();
      }

      console.log(contactList); //kontrol amaçlı ekledim
    });
  } else {
    console.error('add-contact-button not found!');
  }



  function displayAllContacts() {
    if (!tableBody) return; //debugging için eklendi

    tableBody.innerHTML = '';

    if (contactList.length === 0) {
      resultTable.style.display = 'none';
      alert('Henüz kişi eklenmedi!');
      return;
    }

    contactList.forEach((contact, index) => {
      if (!contact) return; //debugging
      const row = document.createElement('tr');

      const nameCell = document.createElement('td');
      nameCell.textContent = contact.name;
      row.appendChild(nameCell);

      const phoneCell = document.createElement('td');
      phoneCell.textContent = contact.phone;
      row.appendChild(phoneCell);

      const emailCell = document.createElement('td');
      emailCell.textContent = contact.email;
      row.appendChild(emailCell);

      const actionsCell = document.createElement('td');

      const editButton = document.createElement('button');
      editButton.textContent = 'Edit';
      editButton.classList.add('btn', 'btn-edit');
      editButton.addEventListener('click', () => editContact(index));
      actionsCell.appendChild(editButton);

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.classList.add('btn', 'btn-delete');
      deleteButton.addEventListener('click', () => deleteContact(index));
      actionsCell.appendChild(deleteButton);

      row.appendChild(actionsCell);
      tableBody.appendChild(row);
    });

    resultTable.style.display = 'table';
  }

  function editContact(index) {
    const contact = contactList[index];
    if (!contact) return;

    form.name.value = contact.name;
    form.phone.value = contact.phone;
    form.email.value = contact.email;

    addPersonButton.textContent = 'Update';
    addPersonButton.onclick = function (e) {
      e.preventDefault();
      contactList[index] = addContact(form);
      form.reset();
      addPersonButton.textContent = 'Add Contact';
      addPersonButton.onclick = null;
      displayAllContacts();
    };
  }

  function deleteContact(index) {
    if (confirm('Bu kişiyi silmek istediğinizden emin misiniz?')) {
      contactList.splice(index, 1);
      displayAllContacts();
    }
  }

  if (seeAllPerson) {
    seeAllPerson.addEventListener('click', displayAllContacts);
  } else {
    console.error('seeAllPerson not found!');
  }
});
