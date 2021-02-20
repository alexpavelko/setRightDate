function ParseUserData(){
    var UserDay = document.querySelector("#Day").value;

    var UserMonth = document.querySelector("#Month").value;

    const UserYear = document.querySelector("#Year").value;

    const UserHours = document.querySelector("#Hours").value;
    
    const UserMinutes = document.querySelector("#Minutes").value;

    const UserSeconds = document.querySelector("#Seconds").value;
}

function GetLastDayOfMonth(year,month){

    let date = new Date(year, month + 1, 0);
    return date.getDate();
}