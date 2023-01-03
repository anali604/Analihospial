//LOCAL function
function popup(message)  {
    alert(message);
}  // what is pooup is given in my inner html code (message is called the argument)
function expandRoles() {
    var expandParagraph = ('Voluptatum distinctio velit commodi ducimus fugit aspernatur nisi molestias praesentium, a enim at maxime corporis maiores culpa atque corrupti repellendus laborum deserunt iure tempora harum dolores id consequatur! Obcaecati exercitationem earum est sapiente quaerat recusandae sit dolores dolorum natus, a itaque, optio asperiores, inventore tempore officia ullam tenetur eligendi labore praesentium. Labore veniam exercitationem soluta repellat voluptas dolorum voluptatum nobis molestiae eos numquam accusantium, suscipit repudiandae minima aliquid possimus praesentium quaerat eligendi aut officia commodi. Corrupti iste tenetur rem consequuntur quasi fuga, harum officiis minima obcaecati corporis hic ab temporibus molestias perspiciatis!');
    document.getElementById('rolesparagraph').innerHTML = expandParagraph;
} 
// can you use the above code to make dropdown list or note? YES
function listType()  {
    var MyList = (' <ol><li>manager</li><li>Consultant</li><li>ceo</li></ol>')
    document.getElementById('box').innerHTML = MyLise;
}
//the assigning function "listType" is written in my html file as "onclick()"
// IF YOU WANT AN IMAGE OR TEXT TO DISAPPEAR IN YOU WEB PAGE, DO THE CODE BELOW

/*function MakeimageUnvisible()  {
    document.getElementsById('image').ClassName = "hidden";
}*/

//INCREASING FONT SIZE OR DECREASING
function MakeBig()  {
    document.getElementsById('text') .className +='big';
}
///SWAPPING IMAGES
function ChangeImage()  {
    document.getElementById('SwapImage') .src='ICUPIC.png';
}
// getting show and hide 
function popHide() {
    document.getElementById('testingjs').style.display = "none";
}
function popShow()  { 
    document.getElementById('testingjs').style.display = "block";
}
function ShowMenubar()  {
    document.getElementById('MenubarShow').style.display = "flex"
}
function HideMenubar()  {
    document.getElementById('MenubarShow').style.display = "none"
}