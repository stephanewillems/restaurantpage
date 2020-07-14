import {pageLoad , getList as menuList} from './pageLoad';
import {home} from './home';
import {clearContent} from './clear';
import {images} from './images';
import {contact} from './contact';
import {menu} from './menu';

pageLoad();



const sideMenu = () =>{
     
        let list = menuList();
        let menuItems = document.querySelectorAll('ul>li');
        
        menuItems.forEach((items)=>{
            items.addEventListener('click', clickEvent);

        });

        function clickEvent(e){
             e.stopPropagation();
                if(e.target.className === 'home'){
                    clearContent();
                    home();
                }
                if(e.target.className === 'menu'){
                    clearContent();
                    menu();
                }
                if(e.target.className === 'images'){
                    clearContent();
                    images();
                }
                if(e.target.className === 'contact'){
                    clearContent();
                    contact();
                }

                
             
            } 
          
            

        } 












sideMenu();