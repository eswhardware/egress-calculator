// const systemInfo = require('scripts/data.js');
const dropDownElement = document.getElementById('sistemas');
const configurationDropdown = document.getElementById('configurations')
const orielCheckbox = document.getElementById('oriel-checkbox');
const ventHeightTextbox = document.getElementById('vent-height');
const calculateButton = document.querySelector('button');
const highSillCheckbox = document.getElementById('highsill-checkbox')
const newCalculationButton = document.querySelector('#newCalculation')

function populateDropdown() {
    for (let system of Object.keys(systemInfo)){
    let option = document.createElement('option');
    option.textContent = `${system} - ${systemInfo[system].systemType}`;
    option.value = system;
    dropDownElement.appendChild(option);
    }
}

function populateConfigurations(configurationsObject) {
    // configurationDropdown.reset();
    for (let configuration of Object.keys(configurationsObject)){
        if (configuration !== 'oriel'){
            let option = document.createElement('option')
            option.textContent = `${configuration}`
            option.value = `${configuration}`
            configurationDropdown.appendChild(option);
        }
    }
}

function resetDefault(htmlElement){
    while (htmlElement.length > 0){
        htmlElement.remove(0)
    }
}

function test(){
    newCalculationButton.disabled = true;
    calculateButton.disabled = false;
}