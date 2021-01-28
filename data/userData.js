export default class userData {
    //class constructor
    constructor() {
        let userBoatData = []   //sets userBoatData to equal an empty object
        this.loadAsync()    //loads from async and saves it to 'userBoatData'
    }

    //async storage interaction
    loadAsync() {
        //loads data from async storage to 'userBoatData'
    }
    saveAsync() {
        //saves 'userBoatData' to async storage
    }

    //setter:
    newData(boatData) {
        /*check if boat already exists
        if it does exist -> call update boat
        if it does not exist -> call create new boat */
    }
    updateBoat(boatData) {
        //updates the object sharing the name with 'boatData' in 'userBoatData'
        this.saveAsync();   //saves data to async once 'userBoatDa has been updated
    }
    createNewBoat(boatData){
        //adds 'boatData' object to 'userBoatData' then saves 'userBoatData' to async storage
        //push 'boatData' to 'userBoatData' in this format?
        userBoatData = userBoatData.push("BOAT NAME" : {
            "Fleet" : null,
            "SailNums" : [],
            "Helms" : [],
            "Crews" : [],
        });
        
        this.saveAsync();   //saves data to async once 'userBoatDa has been updated
    }
    
    //Getters:
    getBoatNames(){
        //returns an array of all boat names stored in userBoatData
    }
    getBoatSailNums(boat){
        //returns an array of sail numbers used for selected boat stored in 'boatUserData'
    }
    getBoatHelms(boat){
        //returns an array of helms of that boat stored in 'boatUserData'
    }
    getBoatCrews(boat){
        //returns array of crews stored for that boat in 'boatUserData'
    }
}