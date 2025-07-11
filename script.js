const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");
const submit = document.getElementById("submit-button")



submit.addEventListener("click", () => {


    //user input
    let inputDay = document.forms["myForm"]["fday"].value;
    let inputMonth = document.forms["myForm"]["fmonth"].value;
    let inputYear = document.forms["myForm"]["fyear"].value;
    
    //validation checks
    let validDay = false;
    let validMonth = false;
    let validYear = false;

    //resetting after input
    document.getElementById("day-error").innerHTML = "";
    document.getElementById("month-error").innerHTML = "";
    document.getElementById("year-error").innerHTML = "";
    
    


    //current date
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getUTCFullYear();

    //error messages
    let errorEmpty = "This field is required";
    let errorMonth = "Must be a valid month";
    let errorDay = "Must be a valid date";
    let errorYear = "Must be a year in the past";


    // Year Validation
    if(inputYear == ""){
        //display error message -> empty
        document.getElementById("year-error").innerHTML = errorEmpty;
        document.getElementById("year").style.borderColor = "hsl(0, 100%, 67%)";
        document.getElementById("year-error").style.color = "hsl(0, 100%, 67%)";
        validYear = false;

    }
    else if(inputYear > year || inputYear < 1){
        //invalid year
        validYear = false;
        document.getElementById("year-error").innerHTML = errorYear;
        document.getElementById("year").style.borderColor = "hsl(0, 100%, 67%)";
        document.getElementById("year-error").style.color = "hsl(0, 100%, 67%)";
    }
    else{
        validYear = true;
        document.getElementById("year").style.borderColor = "";
        document.getElementById("year-error").style.color = "";

    }

    // Month Validation
    if(inputMonth == "")
    {
        //display error message
        document.getElementById("month-error").innerHTML = errorEmpty;
        document.getElementById("month").style.borderColor = "hsl(0, 100%, 67%)";
        document.getElementById("month-error").style.color = "hsl(0, 100%, 67%)";
        validMonth = false;
    }
    else if(inputMonth < 1 || inputMonth > 12)
    {
        //invalid moth
        document.getElementById("month-error").innerHTML = errorMonth;
         document.getElementById("month").style.borderColor = "hsl(0, 100%, 67%)";
        document.getElementById("month-error").style.color = "hsl(0, 100%, 67%)";
        validMonth = false;
    }
    else{
        validMonth = true;
        document.getElementById("month").style.borderColor = "";
        document.getElementById("month-error").style.color = "";
        
    }

    //Day Validation
    if(inputDay == "")
    {
        //display error message
        document.getElementById("day-error").innerHTML = errorEmpty;
        document.getElementById("day").style.borderColor = "hsl(0, 100%, 67%)";
        document.getElementById("day-error").style.color = "hsl(0, 100%, 67%)";
        validDay = false;
    }
    else if(inputDay < 1 || inputDay > 31)
    {
        //invalid days
        document.getElementById("day-error").innerHTML = errorDay;
        document.getElementById("day").style.borderColor = "hsl(0, 100%, 67%)";
        document.getElementById("day-error").style.color = "hsl(0, 100%, 67%)";
        validDay = false;
    }
    else{
         document.getElementById("day").style.borderColor = "";
        document.getElementById("day-error").style.color = "";
        validDay = true;
    }

    if(validYear == true && validDay == true && validMonth == true)
    {
        document.getElementById("result-years").innerHTML = year - inputYear;
        document.getElementById("result-months").innerHTML = Math.abs(month - inputMonth);
        document.getElementById("result-days").innerHTML = Math.abs(day - inputDay);
        

    }
    


    return false;

});


