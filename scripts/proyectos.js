

function getDataExample() {
  fetch('../proyectos.json')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      renderProjects(data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}

async function getDataExampleAsync() {
  try {
    const response = await fetch('../proyectos.json');
    const data = await response.json();
    console.log(data);
    renderProjects(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}






function renderProjects(projects) {
  const projectList = document.getElementById('proyectos-list');
  projectList.innerHTML = '';

  projects.forEach(project => {
    const li = document.createElement('li');
    li.classList.add('card');
    // li.innerHTML = `
    //   <h2>${project.title}</h2>
    //   <p>${project.description}</p>
    // `;
    li.innerHTML = createProjectCard(project);
    projectList.appendChild(li);
  });
}

function createProjectCard(project) {
  return `
    <${project.title.tag}>${project.title.text}</${project.title.tag}>
    <${project.description.tag}>${project.description.text}</${project.description.tag}>
  `;
}


function render(content) {
  const element = document.createElement('div');
  element.innerHTML = content;
  document.body.appendChild(element);
}

function getContent() {
  fetch('../content.txt')
    .then(response => response.text())
    .then(data => {
      console.log(data);
      render(data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}

getContent();
