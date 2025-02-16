// 1. Update Profile Name
document.getElementById('update-name').addEventListener('click', function() {
  // TODO: Select the element with ID "profile-name" and change its text content to "Jane Smith"
document.getElementById("profile-name").textContent = "Jane Smith";

});
  
// 2. Update Profile Image
document.getElementById('update-image').addEventListener('click', function() {
  // TODO: Select the profile picture (ID "profile-pic") and update its "src" attribute to a new image URL (e.g., "new-profile.jpg")
  document.getElementById("profile-pic").src = "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
});

// 3. Change Theme ---------------TEKRAR BAK----------------- 
document.getElementById('change-theme').addEventListener('click', function() {
  // TODO: Toggle the background color of the ".profile-card" between white (#fff) and lightblue (#add8e6)
  document.querySelector(".profile-card").style.backgroundColor = "#add8e6";

});
  // 4. Toggle Description
  document.getElementById('toggle-desc').addEventListener('click', function() {
    // TODO: Toggle the display property of the element with ID "profile-desc" between "none" and its default display.
    const profileDesc = document.getElementById("profile-desc");
    if (profileDesc.style.display === "none"){
      document.getElementById("profile-desc").textContent = "";
    }else{
      document.getElementById("profile-desc").textContent = "none";
    }
  });

// 5. Add Social Media Link
document.getElementById('add-social').addEventListener('click', function() {
  // TODO: Dynamically create a new list item containing a link to a social media profile (e.g., "https://twitter.com/example")
  // Append it to the unordered list with ID "social-list"
  let ul = document.getElementById("social-list");
    let li = document.createElement("li"); 
    let link = document.createElement("a");
    link.textContent = "Visit X"; 
    link.href = "www.x.com";
    li.appendChild(link);
    ul.appendChild(li);
});

// 6. Add a New Skill
document.getElementById('add-skill').addEventListener('click', function() {
  // TODO: Create a new list item with a skill (e.g., "CSS") and append it to the skills list (ID "skills-list")
  let ul = document.getElementById("skills-list");
    let li = document.createElement("li"); 
    let link = document.createElement("a");
    link.textContent = "CSS"; 
    li.appendChild(link);
    ul.appendChild(li);
});

