function areaCalculation(){
    // const dropDownElement = document.getElementById('sistemas');
    const systemObject = systemInfo[dropDownElement.value];
    console.log(systemObject)
    const width = document.getElementById('unit-width').value;
    const height = document.getElementById('unit-height').value;
    const ventHeight = ventHeightTextbox.value;
    const configuration = systemObject.configurations[configurationDropdown.value];
    console.log(configuration)
    const widthClearOp = ((width/configuration.widthDivider) - configuration.widthDiscount).toPrecision(4);
    const heightClearOp = ((height/configuration.heightDivider) - configuration.heightDiscount).toPrecision(4);
    let egressArea = 0;
    if (systemObject.accessibility){
        console.log([widthClearOp, heightClearOp])
        return [widthClearOp, heightClearOp];
    }

    else if(orielCheckbox.checked && configurationDropdown.value==='standardSill'){
        let orielVent = (ventHeight - systemObject.configurations.oriel.sSillDiscount).toPrecision(4);
        egressArea = (widthClearOp * (orielVent))/144;
        egressArea = egressArea.toPrecision(4);
        console.log(widthClearOp)
        console.log(ventHeight - systemObject.configurations.oriel.sSillDiscount)
        return [widthClearOp, orielVent, egressArea]

    } else if (orielCheckbox.checked && configurationDropdown.value!=='standardSill'){
        let orielVent = (ventHeight - systemObject.configurations.oriel.hSillDiscount).toPrecision(4);
        egressArea = (widthClearOp * (orielVent))/144;
        egressArea = egressArea.toPrecision(4);
        console.log(widthClearOp)
        console.log(ventHeight - systemObject.configurations.oriel.hSillDiscount)
        return [widthClearOp, orielVent, egressArea]

    }
    else {
        egressArea = (widthClearOp * heightClearOp)/144;
        egressArea = egressArea.toPrecision(4);
        console.log(widthClearOp)
        console.log(heightClearOp)
    }
    
    return [widthClearOp, heightClearOp, egressArea];
    
   
}






