// 1. Update Profile Name
document.getElementById('update-name').addEventListener('click', function () {
  document.getElementById('profile-name').textContent = 'Jane Smith';
});

// 2. Update Profile Image
document.getElementById('update-image').addEventListener('click', function () {
  const profilePic = document.getElementById('profile-pic');
  profilePic.src =
    'https://images.unsplash.com/photo-1580894895938-bd31a62ed8ba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxzb2Z0d2FyZSUyMGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D';
  profilePic.alt = 'Profile Picture';
});

// 3. Change Theme
document.getElementById('change-theme').addEventListener('click', function () {
  const card = document.querySelector('.profile-card');
  card.classList.toggle('theme-blue');
});

// 4. Toggle Description
document.getElementById('toggle-desc').addEventListener('click', function () {
  let desc = document.getElementById('profile-desc');
  desc.classList.toggle('hidden');
});

// 5. Add Social Media Link
document.getElementById('add-social').addEventListener('click', function (e) {
  e.preventDefault();

  const url = document.getElementById('social-input').value.trim();

  if (!url) {
    alert('Please enter a social media link!');
    return;
  }

  const listItem = document.createElement('li');
  const link = document.createElement('a');

  link.href = url;
  link.textContent = url;
  link.target = '_blank';

  listItem.appendChild(link);
  document.getElementById('social-list').appendChild(listItem);

  document.getElementById('social-input').value = '';
});

// 6. Add a New Skill
document.getElementById('add-skill').addEventListener('click', function () {
  let skillList = document.getElementById('skills-list');
  let newSkill = document.createElement('li');
  newSkill.textContent = 'CSS';
  skillList.appendChild(newSkill);
});