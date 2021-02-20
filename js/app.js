function ParseUserData(){
    var UserDay = document.querySelector("#Day").value;

    var UserMonth = document.querySelector("#Month").value;

    const UserYear = document.querySelector("#Year").value;

    const UserHours = document.querySelector("#Hours").value;
    
    const UserMinutes = document.querySelector("#Minutes").value;

    const UserSeconds = document.querySelector("#Seconds").value;

    createDate(UserDay,UserMonth,UserYear,UserHours,UserMinutes,UserSeconds);
}

function createDate(UserDay,UserMonth,UserYear,UserHours,UserMinutes,UserSeconds){
  
        console.clear();
 
        UserMonth-=1;

        let lastDay = GetLastDayOfMonth(UserYear,UserMonth); 

       
        if(UserDay > lastDay)
        UserDay = lastDay;

        const anyDate = new Date(UserYear,UserMonth,UserDay,UserHours,UserMinutes,UserSeconds); 
  
        console.log(anyDate.toLocaleString()); 
}

function GetLastDayOfMonth(year,month){

    let date = new Date(year, month + 1, 0);
    return date.getDate();
}