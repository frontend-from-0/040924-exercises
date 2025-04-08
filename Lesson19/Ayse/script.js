// 1. Update Profile Name
document.getElementById('update-name').addEventListener('click', function () {
  document.getElementById('profile-name').textContent = 'Jane Smith';
});

// 2. Update Profile Image
document.getElementById('update-image').addEventListener('click', function () {
  document.getElementById('profile-pic').src =
    'https://images.unsplash.com/photo-1580894895938-bd31a62ed8ba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxzb2Z0d2FyZSUyMGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D';
});

// 3. Change Theme
document.getElementById('change-theme').addEventListener('click', function () {
  let card = document.querySelector('.profile-card');
  if (card.style.background === '#add8e6') {
    card.style.background = '#fff';
  } else {
    card.style.background = '#add8e6';
  }
});

// 4. Toggle Description
document.getElementById('toggle-desc').addEventListener('click', function () {
  let desc = document.getElementById('profile-desc');
  if (desc.style.display === 'none') {
    desc.style.display = 'block';
  } else {
    desc.style.display = 'none';
  }
});

// 5. Add Social Media Link
document.getElementById('add-social').addEventListener('click', function () {
  let ul = document.getElementById('social-list');
  let li = document.createElement('li');
  let a = document.createElement('a');

  a.href = 'https://twitter.com/example';
  a.textContent = 'Twitter Profile';
  a.target = '_blank';

  li.appendChild(a);
  ul.appendChild(li);
});

// 6. Add a New Skill
document.getElementById('add-skill').addEventListener('click', function () {
  let skillList = document.getElementById('skills-list');
  let newSkill = document.createElement('li');
  newSkill.textContent = 'CSS';
  skillList.appendChild(newSkill);
});
