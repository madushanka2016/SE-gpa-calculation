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