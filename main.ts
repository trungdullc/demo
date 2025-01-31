let displayName: string = "Jess's standing desk";
let inventoryType : string= "furniture";
let trackingNumber: string = "FD123455";
let createDate: Date = new Date();
let originalCost = 425 as number;                       // using as on RHS
// Note: use any type to make act like JS

// function getInventoryItem(trackingNumber: string): object {
    function getInventoryItem(trackingNumber: string): {
        displayName: string;
        inventoryType: string;
        trackingNumber: string;
        createDate: Date;
        originalCost: number;
    } {
    return null;
}

function saveInventoryItem(item) {

}

let inventoryItem = getInventoryItem(trackingNumber);

inventoryItem.createDate = new Date();

saveInventoryItem(inventoryItem);