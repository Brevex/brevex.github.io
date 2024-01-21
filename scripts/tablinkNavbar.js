function openPage(pageName) 
{
  const tabcontent = document.getElementsByClassName("tabContent");

  Array.from(tabcontent).forEach((tab) => {

    tab.classList.add("hidden"); 
  });

  const pageElement = document.getElementById(pageName);

  if (pageElement) 
  { 
    pageElement.classList.remove("hidden"); 
  }
}

document.addEventListener('DOMContentLoaded', () => {

  const defaultOpenElement = document.getElementById("defaultOpen");

  if (defaultOpenElement) 
  { 
    defaultOpenElement.click(); 
  }
});