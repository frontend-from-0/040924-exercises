// 1. Update Profile Name
document.getElementById('update-name').addEventListener('click', function () {
  // TODO: Select the element with ID "profile-name" and change its text content to "Jane Smith"
  const newName = document.getElementById('profile-name');
  newName.textContent = 'Jane Smith';
});

// 2. Update Profile Image
document.getElementById('update-image').addEventListener('click', function () {
  // TODO: Select the profile picture (ID "profile-pic") and update its "src" attribute to a new image URL (e.g., "new-profile.jpg")
  const newProfilePic = document.getElementById('profile-pic');
  newProfilePic.src = 'new-profile.jpg';
});

// 3. Change Theme
document.getElementById('change-theme').addEventListener('click', function () {
  // TODO: Toggle the background color of the ".profile-card" between white (#fff) and lightblue (#add8e6)
  const profileCard = document.querySelector('.profile-card');
  profileCard.classList.toggle('theme-blue');
});

// 4. Toggle Description
document.getElementById('toggle-desc').addEventListener('click', function () {
  // TODO: Toggle the display property of the element with ID "profile-desc" between "none" and its default display.
  const profileDesc = document.getElementById('profile-desc');
  if (profileDesc.style.display === 'none') {
    profileDesc.style.display = '';
  } else {
    profileDesc.style.display = 'none';
  }
});

// 5. Add Social Media Link
document.getElementById('add-social').addEventListener('click', function () {
  // TODO: Dynamically create a new list item containing a link to a social media profile (e.g., "https://twitter.com/example")
  // Append it to the unordered list with ID "social-list"
  const socialList = document.getElementById('social-list');
  const listItem = document.createElement('li');
  const link = document.createElement('a');

  link.href = 'https://twitter.com/example';
  link.textContent = 'Twitter Profile';
  link.target = '_blank';

  listItem.appendChild(link);
  socialList.appendChild(listItem);
});

// 6. Add a New Skill
document.getElementById('add-skill').addEventListener('click', function () {
  // TODO: Create a new list item with a skill (e.g., "CSS") and append it to the skills list (ID "skills-list")
  const skillsList = document.getElementById('skills-list');
  const listItem = document.createElement('li');

  listItem.textContent = 'CSS';

  skillsList.appendChild(listItem);
});
