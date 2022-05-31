
function newItem(){

//javascript
//1. Adding a new item to the list of items:
   /*let li = document.createElement("li");
   let inputValue = document.getElementById("input").value;
   let text = document.createTextNode(inputValue);
   li.appendChild(text);

   if (inputValue === '') {
     alert("You must write something!");
   } else {
     let list = document.querySelector('#list');
     list.appendChild(li);
   }*/

//jQuery
   let li = $('<li></li>');
   let inputValue = $('#input').val();
   li.append(inputValue);

   if (inputValue === '') {
     alert("You must write something!");
   } else {
     $('#list').append(li);
   }

 //2. Crossing out an item from the list of items:
 //javascript
   /*function crossOut() {
 		li.classList.toggle("strike");
 	}*/

//jQuery
  function crossOut(){
    li.toggleClass("strike");
  }

  //javascript
 	//li.addEventListener("dblclick",crossOut);

  //jQuery
  li.on("dblclick", function crossOut() {
		li.toggleClass("strike");
	});

 //3(i). Adding the delete button "X":
 //javascript
   /*let deleteButton = document.createElement("deleteButton");
 	deleteButton.appendChild(document.createTextNode("X"));
 	li.appendChild(deleteButton);

 	deleteButton.addEventListener("click", deleteListItem);*/

  //jQuery
  let deleteButton = $('<deleteButton></deleteButton');
  deleteButton.append(document.createTextNode('X'));
  li.append(deleteButton);

 //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
 //javascript
   /*function deleteListItem(){
 		li.classList.add("delete")
 	}*/

  //jQuery
  deleteButton.on("click", deleteListItem);
  function deleteListItem(){
    li.addClass("delete");
  }

 // 4. Reordering the items:
   $('#list').sortable();

}









// If you get stuck, you can look below for the jQuery code. However, try yourself to convert the vanilla JS code provided to jQuery first.








  /*
// jQuery Code
//1. Adding a new item to the list:

  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(inputValue);

  if (inputValue === '') {
    alert("You must write something!");
  } else {
    $('#list').append(li);
  }
//2. Crossing an item out:
  function crossOut() {
		li.toggleClass("strike");
	}

	li.on("dblclick", function crossOut() {
		li.toggleClass("strike");
	});
//3. Adding a delete button
  let deleteButton = $('<deleteButton></deleteButton>');
  deleteButton.append(document.createTextNode('X'));
  li.append(deleteButton);

//   deleteButton.on("click", deleteListItem);
//   function deleteListItem(){
// 		li.addClass("delete")
// 	}
   $('#list').sortable();
*/
