document.addEventListener("DOMContentLoaded", function ()
{
    let toggle = true; 
    const text = document.querySelector(".secWord");

    const textLoad = () => {

        if (toggle) 
        {
            text.textContent = "a software developer";
        } 
        else 
        {
            text.textContent = "addicted to coffee";
        }
        toggle = !toggle;
    };

    textLoad();
    setInterval(textLoad, 4000); 
});