
// 1. Update Profile Name

const updateName = document.getElementById("update-name");
const profileName = document.getElementById("profile-name");
const h2 = document.getElementById("profile-name");



updateName.addEventListener("click", () => {

  if (profileName.tagName.toLocaleLowerCase() === "input") return;

  const currentName = profileName.textContent;

  const input = document.createElement("input");
  input.classList.add("input");
  input.type = "text";
  input.value = currentName;
  input.id = "profile-name";
  profileName.replaceWith(input);
  updateName.textContent = "Save";


  updateName.addEventListener("click", function saveHandler() {
    const newName = input.value.trim() || currentName;
    h2.id = "profile-name";
    h2.textContent = newName;

    input.replaceWith(h2);

    updateName.textContent = "Update Name";


    updateName.removeEventListener("click", saveHandler);

  });

});




// 2. Update Profile Image

const updatePic = document.getElementById("update-image");
const profilePic = document.getElementById("profile-pic");


updatePic.addEventListener("click", () => {

  const fileInput = document.createElement("input");
  fileInput.type = "file";
  fileInput.accept = "image/*";
  fileInput.id = "file-input";

  fileInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        profilePic.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  });

  fileInput.click();

});

// 3. Change Theme


const changeThemeButton = document.getElementById("change-theme");
const themeOptions = document.querySelector(".theme-options");
const themeButtons = document.querySelectorAll(".theme-btn");
const container = document.querySelector(".container");

changeThemeButton.addEventListener("click", () => {
  themeOptions.style.display = "block";
  changeThemeButton.style.display = "none";
});


themeButtons.forEach(button => {
  button.addEventListener("click", (e) => {
    const selectedTheme = e.target.classList[1].split('-')[0];
    container.classList.remove("light-theme", "dark-theme", "blue-theme");
    container.classList.add(`${selectedTheme}-theme`);


    themeOptions.style.display = "none";
    changeThemeButton.style.display = "block";
  });
});





// 4. Toggle Description

const toggleDescription = document.getElementById("toggle-desc");
const profileDesc = document.getElementById("profile-desc");

toggleDescription.addEventListener("click", () => {

  if (profileDesc.style.display === "none") {
    toggleDescription.textContent = "Toggle Description";
    profileDesc.style.display = "block";

  } else {
    toggleDescription.textContent = "Show Description";
    profileDesc.style.display = "none";
  }



});



// 5. Add Social Media Link

const addSocialBtn = document.getElementById("add-social");
const socialList = document.getElementById("social-list");


addSocialBtn.addEventListener("click", () => {


  const listItem = document.createElement("li");


  const inputSocial = document.createElement("input");
  inputSocial.type = "text";
  inputSocial.placeholder = "Enter Social Media Link";
  inputSocial.classList.add("input");

  listItem.appendChild(inputSocial);
  socialList.appendChild(listItem);
  inputSocial.focus();


  inputSocial.addEventListener("blur", convertToLink);
  inputSocial.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      convertToLink();
    }
  });

  function convertToLink() {
    const socialMedia = inputSocial.value.trim();
    if (inputSocial) {
      const link = document.createElement("a");

      link.classList.add("social-link"); // a etiketine böyle bir class ismi verdim fakat stil uygulanmadı sebebini anlayamadım o yüzden stili direkt a etiketi üzerinden verdim

      link.href = socialMedia;
      link.textContent = socialMedia;
      link.target = "_blank";


      const titleSocial = document.createElement("h3");
      titleSocial.appendChild(link);

      listItem.innerText = "";
      listItem.appendChild(titleSocial);
    } else {
      listItem.remove();
    }
  }



});

// 6. Add a New Skill


const addSkillBtn = document.getElementById("add-skill");
const skillList = document.getElementById("skills-list");

addSkillBtn.addEventListener("click", () => {
  const skillItem = document.createElement("li");
  const inputSkill = document.createElement("input");
  inputSkill.type = "text";
  inputSkill.placeholder = "Enter a new skill";
  inputSkill.classList.add("input");
  skillItem.classList.add("li");

  skillItem.appendChild(inputSkill);
  skillList.appendChild(skillItem);
  inputSkill.focus();

  inputSkill.addEventListener("blur", addNewSkill);
  inputSkill.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addNewSkill();
    }
  });

  function addNewSkill() {
    const newSkill = inputSkill.value.trim();

    if (newSkill) {
      skillItem.innerHTML = newSkill;
    } else {
      skillItem.remove();
    }
  }
});
