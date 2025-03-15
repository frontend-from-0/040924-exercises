// 1. Update Profile Name
document.getElementById('update-name').addEventListener('click', function () {
  // TODO: Select the element with ID "profile-name" and change its text content to "Jane Smith"
  const element = document.getElementById('profile-name');
  element.textContent = 'Meow Smith';
});

// 2. Update Profile Image
document.getElementById('update-image').addEventListener('click', function () {
  // TODO: Select the profile picture (ID "profile-pic") and update its "src" attribute to a new image URL (e.g., "new-profile.jpg")
  const profilePic = document.getElementById('profile-pic');
  profilePic.src =
    'https://images.unsplash.com/photo-1561948955-570b270e7c36?q=80&w=1501&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
});

// 3. Change Theme
const profileCards = document.getElementsByClassName('profile-card');

document.getElementById('change-theme').addEventListener('click', function () {
  // Toggle the background color of the ".profile-card" between white (#fff) and lightblue (#add8e6)
  for (let i = 0; i < profileCards.length; i++) {
    profileCards[i].classList.toggle('bg-blue');
  }
});

// 4. Toggle Description
document.getElementById('toggle-desc').addEventListener('click', function () {
  // TODO: Toggle the display property of the element with ID "profile-desc" between "none" and its default display.
  const profileDesc = document.getElementById('profile-desc');
  if (profileDesc.style.display === 'none') {
    profileDesc.style.display = 'block'; // Показываем элемент
  } else {
    profileDesc.style.display = 'none'; // Скрываем элемент
  }
});

// 5. Add Social Media Link
document.getElementById('add-social').addEventListener('click', function () {
  // TODO: Dynamically create a new list item containing a link to a social media profile (e.g., "https://twitter.com/example")
  // Append it to the unordered list with ID "social-list"
  const socialList = document.getElementById('social-list');
  const newLink = document.createElement('li');
  socialList.appendChild(newLink);
  newLink.textContent = 'https://twitter.com/example';
});

// 6. Add a New Skill
document.getElementById('add-skill').addEventListener('click', function () {
  // TODO: Create a new list item with a skill (e.g., "CSS") and append it to the skills list (ID "skills-list")
  const skillsList = document.getElementById('skills-list');
  const newSkill = document.createElement('li');
  skillsList.appendChild(newSkill);
  newSkill.textContent = 'CSS';
});
