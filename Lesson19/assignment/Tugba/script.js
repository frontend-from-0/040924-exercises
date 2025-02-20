// 1. Update Profile Name
document.getElementById('update-name').addEventListener('click', function () {
  // TODO: Select the element with ID "profile-name" and change its text content to "Jane Smith"

  let nameElement = document.getElementById('profile-name');

  nameElement.textContent = 'Jane Smith';
});

//console.log(nameElement);

2; //Update Profile Image
document.getElementById('update-image').addEventListener('click', function () {
  // TODO: Select the profile picture (ID "profile-pic") and update its "src" attribute to a new image URL (e.g., "new-profile.jpg")

  let profilePicElement = document.getElementById('profile-pic');

  profilePicElement.src =
    'https://images.unsplash.com/photo-1739481152766-5658f44147f6?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8A%3D%3D';

  profilePicElement.alt = 'Updated profile picture from Unsplash';
});

// 3. Change Theme
document.getElementById('change-theme').addEventListener('click', function () {
  // TODO: Toggle the background color of the ".profile-card" between white (#fff) and lightblue (#add8e6)

  let profileCardElement = document.querySelector('.profile-card');
  profileCardElement.classList.toggle('lightblue-theme');
});

4; // Toggle Description
document.getElementById('toggle-desc').addEventListener('click', function () {
  // TODO: Toggle the display property of the element with ID "profile-desc" between "none" and its default display.

  let descriptionElement = document.getElementById('profile-desc');

  let currentDisplay = descriptionElement.style.display;

  if (currentDisplay === 'block' || currentDisplay === '') {
    descriptionElement.style.display = 'none'; // Gizle
  } else {
    descriptionElement.style.display = 'block'; // Göster
  }
});

// 5. Add Social Media Link
document.getElementById('add-social').addEventListener('click', function () {
  // TODO: Dynamically create a new list item containing a link to a social media profile (e.g., "https://twitter.com/example")
  // Append it to the unordered list with ID "social-list"

  let socialListElement = document.getElementById('social-list');

  let newSocialLinkElement = document.createElement('li');

  let newLink = document.createElement('a');
  newLink.href = 'https://twitter.com/example';
  newLink.textContent = 'Twitter Profile';

  newSocialLinkElement.appendChild(newLink);

  socialListElement.appendChild(newSocialLinkElement);
});

// 6. Add a New Skill
document.getElementById('add-skill').addEventListener('click', function () {
  // TODO: Create a new list item with a skill (e.g., "CSS") and append it to the skills list (ID "skills-list")

  let skillsListElement = document.getElementById('skills-list');

  let newSkillElement = document.createElement('li');

  newSkillElement.textContent = 'CSS';

  skillsListElement.appendChild(newSkillElement);
});
