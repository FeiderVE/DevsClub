let listMenu = document.querySelectorAll('.list_button_options');

listMenu.forEach(foodElement => {
    foodElement.addEventListener('click' , () => {
        
        foodElement.classList.toggle('arrow');

        let height = 0;
        let menu = foodElement.nextElementSibling;

        if(menu.clientHeight == "0") {
            height=menu.scrollHeight;
        }

        menu.style.height =`${height}px`
    })
}
    ) 