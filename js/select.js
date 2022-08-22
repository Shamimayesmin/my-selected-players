
 const playerArray = [];

 function displayName(player){
    
    const tableBody = document.getElementById('total-players');
    
    tableBody.innerHTML = '';

    for(let i = 0 ; i < player.length ; i++){
        // console.log(cartArray[i].productName,cartArray[i].productPrice);

        const name = playerArray[i].playersName;



    //     var buttons = document.getElementsByTagName('button');
    // for(let i=0;i<buttons.length;i++){

    //     buttons[i].addEventListener('click', function(event){
    //         event.target.disabled = true;
    //         // event.target.setAttribute('disabled',true);       

    //     });

    
    //     if(playerArray.length > 5){
    //         alert('You cant add more players');
    //         return;
    //     }
         
    // }

        const tr = document.createElement('tr');

        // ${variable name}
        tr.innerHTML = `
        <th>${i + 1}</th>
        <td>${name}</td>
        
        `;
        tableBody.appendChild(tr);

        // console.log(tableBody)

    }

 }
   


function addToSelect(element){
    const playersName = element.parentNode.parentNode.children[0].innerText;
    
    
        var buttons = document.getElementsByTagName('button');
    for(let i=0;i<buttons.length;i++){

        buttons[i].addEventListener('click', function(event){
            event.target.disabled = true;
            // event.target.setAttribute('disabled',true);       

        });

    
        if(playerArray.length > 4){
            alert('You cant add more players');
            return;
        }
         
    }



    const playersObj = {
        playersName: playersName,
        
    }
    playerArray.push(playersObj)

    // console.log(playerArray)
    //  console.log(playerArray.length);

    // document.getElementById('total-players').innerText = playerArray.length

    displayName(playerArray);
}



