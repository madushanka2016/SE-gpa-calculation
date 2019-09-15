var seconYeatSubjectDetails = [
    ["sub 1","SENG 21211",1],
    ["sub 2","SENG 77777",7],
];
console.log("MA "+seconYeatSubjectDetails[0][1]+"sa");
function loadThirdYear(){
    var le = 2;
    var htm = 3;
    var ss =seconYeatSubjectDetails[1][1] ;
    for (var i=0;i<le;i++) {
        htm += `
                <div class="border border-success" style="padding: 0px 20px 0px 20px;
                margin: 10px 20px 10px 20px;
                border-radius: 25px">
                    <form action="">
                        <div class="row">
                            <div class="col-8">
                                <h6 class="subjectCode">`+ seconYeatSubjectDetails[i][1]+ ` <span style="color: red">C</span> </h6>  
                                <p class="subjectName">`+seconYeatSubjectDetails[i][0]+`</p>
                            </div>
                            <div class="col-3" style="padding: 15px">
                                <select class="form-control" id="SENG 11223" name="marks" onchange="addSubject(`+ss+`,3,value)">
                                    <option value="none">--</option>
                                    <option value=4.0>A+</option>
                                    <option value=4.0>A</option>
                                    <option value=3.7>A-</option>
                                    <option value=3.3>B+</option>
                                    <option value=3.0>B</option>
                                    <option value=2.7>B-</option>
                                    <option value=2.3>C+</option>
                                    <option value=2.0>C</option>
                                    <option value=1.7>C-</option>
                                    <option value=1.3>D+</option>
                                    <option value=1.0>D</option>
                                    <option value=0.7>D-</option>
                                </select>
                            </div>
                        </div>
                    </form>
                </div>
        `;
        console.log(htm);
    }
    
    show.innerHTML = htm;
}