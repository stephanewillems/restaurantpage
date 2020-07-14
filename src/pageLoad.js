
const pageLoad = () =>{
    //Cache Doem
    let content = document.querySelector('.content');


    //Create elements
    let divgrid = document.createElement('div');
    divgrid.classList.add('grid-container');
    content.appendChild(divgrid);
    
    let divSidebar = document.createElement('div');
    divSidebar.classList.add('SideBar','bgimg');
    divgrid.appendChild(divSidebar);

    let divLogo = document.createElement('div');
    divLogo.classList.add('Logo');
    divSidebar.appendChild(divLogo);

    let logoText = document.createElement('p');
    let text = document.createTextNode('S');
    logoText.appendChild(text);
    divLogo.appendChild(logoText);

    let divSideMenu = document.createElement('div');
    divSideMenu.classList.add('side-menu');
    divSidebar.appendChild(divSideMenu);


    let ulSM = document.createElement('ul');
    let menuItemsBar = getList();
    for(let i = 0; i<menuItemsBar.length;i+=1){
        let li = document.createElement('li');
        li.classList.add((menuItemsBar[i]).toLocaleLowerCase());
        let text = document.createTextNode(menuItemsBar[i]);
        li.appendChild(text);
        ulSM.appendChild(li);

    }
    divSideMenu.appendChild(ulSM);


    let divTextBlock = document.createElement('div');
    divTextBlock.classList.add('text');
    divgrid.appendChild(divTextBlock);

  /*   let headerText = document.createElement('h1');
    let htext = document.createTextNode("header header");
    headerText.appendChild(htext);
    divTextBlock.appendChild(headerText);

    let paraText = document.createElement('p');
    let text2 = document.createTextNode("lorem ipsum");
    paraText.appendChild(text2);
    divTextBlock.appendChild(paraText); */

}

function getList(){
    let menuItemsBar = ["Home", "Menu", "Images", "Contact"];
    return menuItemsBar;
}

export { pageLoad, getList }