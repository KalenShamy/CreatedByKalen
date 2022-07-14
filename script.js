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

async function setProject() {
  let sProject = currentProject.toString();
  let image = document.getElementById("projects").children[1].children[1].children[0];
  let title = document.getElementById("projects").children[1].children[1].children[1].children[0].children[0];
  let date = document.getElementById("projects").children[1].children[1].children[1].children[0].children[1];
  let description = document.getElementById("projects").children[1].children[1].children[1].children[0].children[2];
  let links = document.getElementById("projects").children[1].children[1].children[1].children[1];

  while (document.getElementById("projects").style.opacity == 0) await sleep(50);

  image.setAttribute("src", "Pictures/Projects/" + projects[currentProject].img);
  title.innerText = projects[currentProject].title;
  date.innerText = projects[currentProject].date;

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

  description.innerText = "";
  let wasSpace = false;
  for (let i = 0; i < projects[currentProject].description.length; i++) {
    if (sProject != currentProject) break;
    if (wasSpace) {
      description.innerText += " " + projects[currentProject].description[i];
      wasSpace = false;
    } else if (projects[currentProject].description[i] == " ") {
      wasSpace = true;
      continue;
    } else {
      description.innerText += projects[currentProject].description[i];
    }
    await sleep(10);
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

function setUpSlideshowHover() {
  let slide = document.getElementById("projects").children[1].children[1];
  slide.info = slide.getBoundingClientRect();
  let image = document.getElementById("projects").children[1].children[1].children[0];
  image.imageSize = function() {
    let size = image.width < image.height && image.width || image.height;
    image.width = size;
    image.height = size;
  }
  image.imageSize();
  let slidePadding = 25;
  document.addEventListener("mousemove", function(event) {
    if (!window.matchMedia('(pointer:fine)').matches) return;
    let x = event.clientX;
    let y = event.clientY;
    if (slide.info.x-slidePadding < x && slide.info.y-slidePadding < y && slide.info.x+slide.info.width+slidePadding > x && slide.info.y+slide.info.height+slidePadding > y) {
      let fractionX = 2*(x-(slide.info.x+slide.info.width/2))/slide.info.width;
      let fractionY = -2*(y-(slide.info.y+slide.info.height/2))/slide.info.height;
      let effect = Math.abs(fractionX) < Math.abs(fractionY) && Math.abs(fractionX) || Math.abs(fractionY);
      let flatDirection = Math.sign(-(x-(slide.info.x+slide.info.width/2))*(y-(slide.info.y+slide.info.height/2)));
      slide.style.transform = "rotate3d(" + fractionY + ", " + fractionX + ", " + effect*flatDirection*0.125 + ", " + 10*effect + "deg)";
      slide.style.background = "radial-gradient(circle, rgba(255,255,255,0.075) 0%, rgba(0,0,0,0) 45%) no-repeat, rgba(200,225,255,0.125) repeat";
    } else if (slide.style.transform != "") {
      slide.style.transform = "";
      slide.style.background = "";
    }
    slide.style.backgroundPositionX = x-(slide.info.x+slide.info.width/2) + "px";
    slide.style.backgroundPositionY = y-(slide.info.y+slide.info.height/2) + "px";
  });
  document.addEventListener("scroll", function() {
    slide.style.transition = "0";
    slide.style.transform = "";
    slide.style.transition = "";
    slide.info = slide.getBoundingClientRect();
    image.imageSize();
  });
  window.addEventListener("resize", function() {
    slide.style.transition = "0";
    slide.style.transform = "";
    slide.style.transition = "";
    slide.info = slide.getBoundingClientRect();
    image.imageSize();
  });
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

function inFrame(element) {
    let height = window.innerHeight < window.outerHeight && window.innerHeight || window.outerHeight;
    let y = element.getBoundingClientRect().y;
    return height > y;
}

async function sectionLoad() {
  for (let i = 0; i < document.getElementsByTagName("section").length; i++) {
    if (inFrame(document.getElementsByTagName("section")[i]) && document.getElementsByTagName("section")[i].style.opacity != 1) {
      await sleep(250);
      document.getElementsByTagName("section")[i].style.opacity = 1;
      await sleep(500);
    }
  }
}

async function setUpSections() {
  sectionLoad();
  document.addEventListener("scroll", sectionLoad);
}

window.onload = async function() {
  setUpForm();
  setProject();
  setUpSections();
  setUpSlideshowHover();
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
