const menu = () =>{

console.log("menu");

   let divTextBlock = document.querySelector('.text');

   let headerText = document.createElement('h1');
    let htext = document.createTextNode("Menu");
    headerText.appendChild(htext);
    divTextBlock.appendChild(headerText);

    let paraText = document.createElement('p');
    let text2 = document.createTextNode("lorem ipsum");
    paraText.appendChild(text2);
    divTextBlock.appendChild(paraText);







}


export { menu } 