dropDownElement.addEventListener('change', () => {
    const oriel = document.querySelector('.oriel')
    const systemObject = systemInfo[dropDownElement.value];
    const configurationsObject = systemObject.configurations;

    try{
        resetDefault(configurationDropdown)
        populateConfigurations(configurationsObject)
        //check if system has oriel property
        if (configurationsObject.oriel){
            oriel.style.display = 'inline';
        } 
        else {
            oriel.style.display = 'none';
        }

        document.querySelector('.calculation-result').textContent = "";
        document.querySelector('.widthClearOpMessage').textContent = "";
        document.querySelector('.heightClearOpMessage').textContent =  "";
        document.querySelector('.meet-egress').textContent = "";
        ventHeightTextbox.textContent = "";
        document.getElementById('unit-width').value = "";
        document.getElementById('unit-height').value = "";

    } catch(e) {
        console.log(e)
    }

    // //show the minimun width for the selected system
    // document.querySelector('span').textContent = `Min. ${minSystemWidth}"`;
})

orielCheckbox.addEventListener('change', () => {   
    if (orielCheckbox.checked){
        ventHeightTextbox.disabled = false;
    }
    else {
        ventHeightTextbox.disabled = true;
    }
})

calculateButton.addEventListener('click', () => {
    const [widthClearOp, heightClearOp, area] = areaCalculation();
    console.log(area);
    if (!area){
        document.querySelector('.widthClearOpMessage').textContent = (widthClearOp < 32) ?  
        `Does not meet accessibility. Width Clear Opening: ${widthClearOp}" is less than 32"`
        :`Meets accessibility. Clear Opening: W ${widthClearOp}" x H ${heightClearOp}`;
         }

    else if(area > 5.7 & widthClearOp >= 20 & heightClearOp >= 24 ){
        document.querySelector('.calculation-result').textContent = `Egress Area is: ${area}sqft`
        document.querySelector('.widthClearOpMessage').textContent = `Width Clear Opening: ${widthClearOp}"`
        document.querySelector('.heightClearOpMessage').textContent = `Height Clear Opening: ${heightClearOp}"`
        document.querySelector('.meet-egress').textContent = 'Compliance with Egress'
        document.querySelector('.meet-egress').style.color = 'green';
        }

    else {
        document.querySelector('.calculation-result').textContent = (area < 5.7) ? `Egress Area is ${area}sqft which is less than 5.7sqft`:`Egress Area is: ${area}sqft`;
        document.querySelector('.widthClearOpMessage').textContent = (widthClearOp < 20) ? `Width Clear Opening is ${widthClearOp}" which is less than 20"`: `Width Clear Opening is ${widthClearOp}"`
        document.querySelector('.heightClearOpMessage').textContent = (heightClearOp < 24) ? `Height Clear Opening is ${heightClearOp}" which is less than 24"`:`Height Clear Opening: ${heightClearOp}"`
        document.querySelector(".meet-egress").textContent = 'NON Compliance with Egress'
        document.querySelector('.meet-egress').style.color = 'red';
       }  
       
    document.querySelector('.calculation-result').style.color = (area < 5.7) ? 'red':'green';
    document.querySelector('.widthClearOpMessage').style.color = (widthClearOp < 20) ? 'red':'green';        
    document.querySelector('.heightClearOpMessage').style.color = (heightClearOp < 24) ? 'red':'green';
    
})



