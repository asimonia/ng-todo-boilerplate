"use strict";

app.factory("ItemStorage", ($http, FBCreds) =>  {
    let items = [];

    let getItemList = () => {
        return new Promise( (resolve, reject) => {
           $http.get(`${FBCreds.URL}/items.json`)
           .success( (itemObject) => {
                let itemCollection = itemObject;
                Object.keys(itemCollection).forEach( (key) => {
                    itemCollection[key].id = key;
                    items.push(itemCollection[key]);
                });
                resolve(items);
           })
            .error( (error) => {
                reject(error);
            });
        });
    };

    let postNewItem = (newTask) => {
   		//items.push(newTask);
    };

    return {getItemList, postNewItem};
});