
 const playerArray = [];

 function displayName(player){
    
    const tableBody = document.getElementById('total-players');
    
    tableBody.innerHTML = '';

    for(let i = 0 ; i < player.length ; i++){
        // console.log(cartArray[i].productName,cartArray[i].productPrice);

        const name = playerArray[i].playersName;


        const tr = document.createElement('tr');

        // ${variable name}
        tr.innerHTML = `
        <th>${i + 1}</th>
        <td>${name}</td>
        
        `;
        tableBody.appendChild(tr);

    }

 }
   


function addToSelect(element){
    const playersName = element.parentNode.parentNode.children[0].innerText;
    
    element.disabled = true;
    if(playerArray.length > 4){
            alert('You cant add more than five players');
            return;
        }

    const playersObj = {
        playersName: playersName,
        
    }
    playerArray.push(playersObj)

    document.getElementById('player-number').innerText = playerArray.length

    displayName(playerArray);
}



