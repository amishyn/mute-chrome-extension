'use strict';

console.log('\'Allo \'Allo! Popup');


chrome.tabs.getSelected(null, function(tab){
    chrome.tabs.executeScript(tab.id, {code: "(new View()).render()"}, function(response) {

    });
});
