document.getElementById('coffeeForm').addEventListener('submit', function(event){
  event.preventDefault();
  
  const getValueById = function(id){
  return document.getElementById(id).value;
  };
  const coffeeName = getValueById('coffee_name');
  const coffeeSort = getValueById('coffee_sort');
  const coffeeRoasting = document.querySelector('input[name="coffee_roasting"]:checked').value;
  const coffeeImg = getValueById('coffee_img');
  const coffeePrice = getValueById('coffee_price');
  const coffeeDescription = getValueById('coffee_description');
  
  const tableRow = document.createElement('tr');
  tableRow.innerHTML =
  `<td>${coffeeName}</td>       
  <td>${coffeeSort}</td>       
  <td>${coffeeRoasting}</td>       
  <td><img src="${coffeeImg}" alt="${coffeeName}" style="width:50px;height:50px;"></td>       
  <td>${coffeePrice}</td>       
  <td>${coffeeDescription}</td> `;
  
  document.getElementById('coffeeTableBody').appendChild(tableRow);
  });