function load(year){
    console.log(subjectDetails);
    for(var index in subjectDetails){
        if(subjectDetails[index].year === year){
            document.getElementById(index).selectedIndex = subjectDetails[index].optionIndex;
        }
    }
}