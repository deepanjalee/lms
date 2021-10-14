export function capitalizeFirst(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
}

export function getTodayDate(){
    var today = new Date();

    var dd = String(today.getDate()).padStart(2,"0");
    var mm = String(today.getMonth()).padStart(2,"0");
    var yyyy = String(today.getFullYear());

    today = mm + "/" + dd + "/" + yyyy;
     
    return today;
}