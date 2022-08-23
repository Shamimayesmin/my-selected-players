





document.getElementById('btn-calculate').addEventListener('click', function(){
    const perPlayerCost = allInputField('player-cost-field');

    if(isNaN(perPlayerCost)){
        alert('enter valid input');
        return;
    }
    if(perPlayerCost<0){
        alert('nagetive input found');
        return;
    }




    // const elementId = getTextFieldById('total-players')
    const nodeList = document.querySelectorAll("tr");
    const array = nodeList.length;

    const fivePlayerCost = perPlayerCost * array;

    const previousExpenses = getTextFieldById('total-player-exps');
    
    // console.log(totalExpenses)
    const newTotalExpenses = previousExpenses + fivePlayerCost

    setTextElementById('total-player-exps',newTotalExpenses)
})



document.getElementById('btn-total').addEventListener('click',function(){
    const managerField = allInputField('manager-field');
    // console.log(managerField)

    const coachField = allInputField('coach-field');
    const sumOfIputField = managerField + coachField;

    if(isNaN(managerField) || isNaN(coachField)){
        alert('enter valid input');
        return;
    }
    if(managerField < 0 || coachField < 0 ){
        alert('nagetive input');
        return;
    }

    // console.log(sumOfIputField)
    const previousExpenses = getTextFieldById('total-player-exps')
    const newExp = sumOfIputField + previousExpenses;

    const previousTotalCost = getTextFieldById('total-cost');
    
    const totalCost = newExp + previousTotalCost;
    setTextElementById('total-cost',totalCost)

})