const date = new Date()
const year = date.getFullYear();

function setUpForm() {
  document.getElementById("project_submit").addEventListener("mouseover", function() {
    let project = document.getElementById("project_name").value;
    let name = document.getElementById("name").value;
    let pages = document.getElementById("pages").value;
    let details = document.getElementById("details").value;
    if (name == "") {
      document.getElementById("project_submit").setAttribute("href", "#name");
    } else if (project == "") {
      document.getElementById("project_submit").setAttribute("href", "#project_name");
    } else if (parseInt(pages) < 1 || parseInt(pages).toString() != pages) {
      document.getElementById("project_submit").setAttribute("href", "#pages");
    } else if (details == "") {
      document.getElementById("project_submit").setAttribute("href", "#details");
    } else {
      document.getElementById("project_submit").setAttribute("href", encodeURI("mailto:info@createdbykalen.com?subject=Website Inquiry: " + project + "&body=" + "Hi, this is " + name + "! I'm looking into creating a website for my project " + project + ", and would like a quote. My website should have " + pages + " unique page" + (pages > 1 && "s" || "") + ", but further details are explained below.\n\n" + details));
      document.getElementById("project_submit").setAttribute("target", "_blank");
      return;
    }
    document.getElementById("project_submit").setAttribute("target", "_self");
  });
}

var currentProject = 0;

function setProject() {
  let image = document.getElementById("projects").children[1].children[1].children[0];
  let title = document.getElementById("projects").children[1].children[1].children[1].children[0].children[0];
  let date = document.getElementById("projects").children[1].children[1].children[1].children[0].children[1];
  let description = document.getElementById("projects").children[1].children[1].children[1].children[0].children[2];
  let links = document.getElementById("projects").children[1].children[1].children[1].children[1];

  image.setAttribute("src", "Pictures/Projects/" + projects[currentProject].img);
  title.innerText = projects[currentProject].title;
  date.innerText = projects[currentProject].date;
  description.innerText = projects[currentProject].description;

  links.innerHTML = ""
  if (projects[currentProject].url) {
    if (links.innerHTML != "") links.innerHTML += " - ";
    links.innerHTML += "<a href=\"" + projects[currentProject].url + "\" target=\"_blank\" class=\"link\">Website</a>";
  }
  if (projects[currentProject].github) {
    if (links.innerHTML != "") links.innerHTML += " - ";
    links.innerHTML += "<a href=\"" + projects[currentProject].github + "\" target=\"_blank\" class=\"link\">GitHub</a>";
  }
  if (projects[currentProject].demo) {
    if (links.innerHTML != "") links.innerHTML += " - ";
    links.innerHTML += "<a href=\"" + projects[currentProject].demo + "\" target=\"_blank\" class=\"link\">Demo</a>";
  }
}

function nextProject() {
  if (currentProject == projects.length - 1) {
    currentProject = 0;
  } else {
    currentProject += 1;
  }
  setProject();
}

function lastProject() {
  if (currentProject == 0) {
    currentProject = projects.length - 1;
  } else {
    currentProject -= 1;
  }
  setProject();
}

async function fStringAnim() {
  let text = document.getElementById("f_year");
  text.innerText = "{year - 2019} years";
  await sleep(500);
  text.innerText = "{yea - 2019} years";
  await sleep(100);
  text.innerText = "{ye - 2019} years";
  await sleep(100);
  text.innerText = "{ye - 2019} years";
  await sleep(100);
  text.innerText = "{y - 2019} years";
  await sleep(100);
  text.innerText = "{ - 2019} years";
  await sleep(100);
  text.innerText = "{" + year.toString()[0] +  " - 2019} years";
  await sleep(100);
  text.innerText = "{" + year.toString()[0] + year.toString()[1] +  " - 2019} years";
  await sleep(100);
  text.innerText = "{" + year.toString()[0] + year.toString()[1] + year.toString()[2] +  " - 2019} years";
  await sleep(100);
  text.innerText = "{" + year.toString()[0] + year.toString()[1] + year.toString()[2] + year.toString()[3] +  " - 2019} years";
  await sleep(500);
  text.innerTextt = "{" + year.toString()[0] + year.toString()[1] + year.toString()[2] + year.toString()[3] +  " - 201} years";
  await sleep(100);
  text.innerText = "{" + year.toString()[0] + year.toString()[1] + year.toString()[2] + year.toString()[3] +  " - 20} years";
  await sleep(100);
  text.innerText = "{" + year.toString()[0] + year.toString()[1] + year.toString()[2] + year.toString()[3] +  " - 2} years";
  await sleep(100);
  text.innerText = "{" + year.toString()[0] + year.toString()[1] + year.toString()[2] + year.toString()[3] +  " - } years";
  await sleep(100);
  text.innerText = "{" + year.toString()[0] + year.toString()[1] + year.toString()[2] + year.toString()[3] +  " -} years";
  await sleep(100);
  text.innerText = "{" + year.toString()[0] + year.toString()[1] + year.toString()[2] + year.toString()[3] +  " } years";
  await sleep(100);
  text.innerText = "{" + year.toString()[0] + year.toString()[1] + year.toString()[2] + year.toString()[3] +  "} years";
  await sleep(100);
  text.innerText = "{" + year.toString()[0] + year.toString()[1] + year.toString()[2] +  "} years";
  await sleep(100);
  text.innerText = "{" + year.toString()[0] + year.toString()[1] +  "} years";
  await sleep(100);
  text.innerText = "{" + year.toString()[0] +  "} years";
  await sleep(100);
  text.innerText = "{" + "} years";
  let yearNum = ""
  for (let i = 0; i < (year-2019).toString().length; i++) {
    await sleep(100);
    yearNum += (year-2019).toString()[i];
    document.getElementById("f_year").innerText = "{" + yearNum +  "} years";
  }
  await sleep(500);
  document.getElementById("f_year").innerText = "{" + (year-2019).toString() +  " years";
  await sleep(100);
  document.getElementById("f_year").innerText = (year-2019).toString() +  " years";
}

window.onload = async function() {
  setUpForm();
  setProject();
  await fStringAnim();
  document.getElementById("f_year").addEventListener("mouseover", function() {
    document.getElementById("f_year").innerText = "{year - 2019} years";
  });
  document.getElementById("f_year").addEventListener("mouseout", function() {
    document.getElementById("f_year").innerText = (year-2019).toString() +  " years";
  });
}

function sleep(milliseconds) {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
}
