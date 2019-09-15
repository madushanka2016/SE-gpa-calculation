var subjectDetails = [];
var gpa = "---";
function addSubject(subjectCode,subjectCredit,subjectGPV){
    let GPV = parseFloat(subjectGPV);
    let optionIndex = document.getElementById(subjectCode).selectedIndex;
    let year = parseInt(subjectCode.charAt(5));
    if(subjectGPV !== "none"){
        var creditDetails ={
            "credit":subjectCredit,
            "gpv": GPV,
            "optionIndex": optionIndex,
            "year": year
        }
        subjectDetails[subjectCode] = creditDetails;
        
    }else{
        delete subjectDetails[subjectCode];
    }
    
    calculateGPA();
    showGPA();
}
function calculateGPA(){
    var totalGPV=0;
    var totalCredit=0;
    for(var index in subjectDetails){
        let totalGpvByCredit=subjectDetails[index].gpv*subjectDetails[index].credit;
        totalGPV+=parseFloat(totalGpvByCredit.toFixed(4));
        totalCredit+=subjectDetails[index].credit;
    }
    if(totalCredit !== 0){
        gpa = (totalGPV/totalCredit).toFixed(4);
        showClass(gpa);
    }else{
        gpa = "---";
    }
    console.log(totalGPV);
    console.log(totalCredit);
    console.log(gpa);
}
function showGPA(){
    var gpaLabel = document.getElementById("gpa");
    gpaLabel.innerHTML = `<h1>`+gpa+`</h1>`
}
function showClass(gpa){
    var gpaStatus = document.getElementById("gpaStatus");
    if(gpa>=3.7){
        gpaStatus.innerHTML = "<p>You have 1st class</p>"
    }else if(gpa>=3.3){
        gpaStatus.innerHTML = "<p>You have 2nd upper class</p>"
    }else if(gpa>=3.0){
        gpaStatus.innerHTML = "<p>You have 2nd lower class</p>"
    }else if(gpa>=2.0){
        gpaStatus.innerHTML = "<p>You have general</p>"
    }else{
        gpaStatus.innerHTML = "<p>You are not qulified for degree</p>"
    }
}

function noOfResult(){
    
}