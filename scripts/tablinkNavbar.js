function openPage(pageName) 
{
  const tabcontent = document.getElementsByClassName("sectionContent");
  const tablinks = document.getElementsByClassName("tablink");

  Array.from(tabcontent).forEach(tab => {
      tab.classList.add("hidden");
  });

  Array.from(tablinks).forEach(tab => {
      tab.classList.remove("active");
  });

  const pageElement = document.getElementById(pageName);
  if (pageElement) 
  {
      pageElement.classList.remove("hidden");
  }

  const activeTab = Array.from(tablinks).find(tab => tab.getAttribute('onclick').includes(pageName));
  if (activeTab) 
  {
      activeTab.classList.add("active");
  }
}

document.addEventListener('DOMContentLoaded', () => {

  const defaultOpenElement = document.getElementById("defaultOpen");

  if (defaultOpenElement) 
  { 
    defaultOpenElement.click(); 
  }
});