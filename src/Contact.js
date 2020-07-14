const contact = () =>{

console.log("contact");

   let divTextBlock = document.querySelector('.text');

   let headerText = document.createElement('h1');
    let htext = document.createTextNode("CONTACT");
    headerText.appendChild(htext);
    divTextBlock.appendChild(headerText);

    let paraText = document.createElement('p');
    let text2 = document.createTextNode("lorem ipsum");
    paraText.appendChild(text2);
    divTextBlock.appendChild(paraText);







}


export { contact } 