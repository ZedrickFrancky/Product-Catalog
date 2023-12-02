fetch('item_dark.json')
.then(response => response.json())
.then(data => {
let displayOutput = "";
for (const item of data) {
displayOutput += `
   <div id="itemscon">  
   <img src="${item.images}" id="itemsimg">
   <p id="itemsname">${item.name}</p>
   <p id="itemsdes">${item.description}</p>
   <p id="itemvalue">${item.price_php}</p>
   </div>
   
  `;
}
document.querySelector("#items").innerHTML = displayOutput;
document.querySelectorAll('#itemscon').forEach(item => {
  item.addEventListener('click', openPopup);
});
});

function openPopup() {
document.getElementById('popup').style.display = 'flex';
}

function closePopup() {
document.getElementById('popup').style.display = 'none';
}
