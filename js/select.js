
 const playerArray = []


 function displayName(player){
    let totalPlayers = 0;
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

        console.log(tableBody)

    }


    // const tr = document.createElement('tr');
    // tr.innerHTML =`
    //     <th></th>
    //     <td>Total Price</td>
    //     <td>${totalPrice}</td>
        
    // `;
    // tableBody.appendChild(tr);
 }













function addToSelect(element){
    const playersName = element.parentNode.parentNode.children[0].innerText;

    console.log(playersName)


    const playersObj = {
        playersName: playersName,
        
    }
    playerArray.push(playersObj)

    // console.log(playerArray)
    //  console.log(playerArray.length);

    displayName(playerArray);
}