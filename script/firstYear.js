function loadFirstYear(){
    show.innerHTML = `
            <div class="row">
                <div class="col">
                    <div class="border border-success" style="padding: 0px 20px 0px 20px;
                        margin: 10px 20px 10px 20px;
                        border-radius: 25px">
                        <form action="">
                            <div class="row">
                                <div class="col-8">
                                    <h6 style="padding: 10px 0px 0px 0px">SENG 11223 <span style="color: red">C</span> </h6>  
                                    <p style="padding: 0px 0px 0px 0px">Programming Concepts</p>
                                </div>
                                <div class="col-3" style="padding: 15px">
                                    <select class="form-control" id="subjectMarks" name="marks" onchange="addSubject('SENG 11223',3,value)">
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
                    <div class="border border-success" style="padding: 0px 20px 0px 20px;
                        margin: 10px 20px 10px 20px;
                        border-radius: 25px">
                        <form action="">
                            <div class="row">
                                <div class="col-8">
                                    <h6 style="padding: 10px 0px 0px 0px">SENG 11213</h6>
                                    <p style="padding: 0px 0px 0px 0px">Fundamentals Of Computing</p>
                                </div>
                                <div class="col-3" style="padding: 15px">
                                    <select class="form-control" id="subjectMarks" name="marks" onchange="addSubject('SENG 11213',3,value)">
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
                    <div class="border border-success" style="padding: 0px 20px 0px 20px;
                        margin: 10px 20px 10px 20px;
                        border-radius: 25px">
                        <form action="">
                            <div class="row">
                                <div class="col-8">
                                    <h6 style="padding: 10px 0px 0px 0px">SENG 11232</h6>
                                    <p style="padding: 0px 0px 0px 0px">Engineering Foundation</p>
                                </div>
                                <div class="col-3" style="padding: 15px">
                                    <select class="form-control" id="subjectMarks" name="marks" onchange="addSubject('SENG 11232',2,value)">
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
                    <div class="border border-success" style="padding: 0px 20px 0px 20px;
                        margin: 10px 20px 10px 20px;
                        border-radius: 25px">
                        <form action="">
                            <div class="row">
                                <div class="col-8">
                                    <h6 style="padding: 10px 0px 0px 0px">SENG 11243 <span style="color: red">C</span> </h6>  
                                    <p style="padding: 0px 0px 0px 0px">Statistics</p>
                                </div>
                                <div class="col-3" style="padding: 15px">
                                    <select class="form-control" id="subjectMarks" name="marks" onchange="addSubject('SENG 11243',3,value)">
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
                    <div class="border border-success" style="padding: 0px 20px 0px 20px;
                        margin: 10px 20px 10px 20px;
                        border-radius: 25px">
                        <form action="">
                            <div class="row">
                                <div class="col-8">
                                    <h6 style="padding: 10px 0px 0px 0px">PMAT 11212</h6>
                                    <p style="padding: 0px 0px 0px 0px">Discreet Mathematicd For Computing I</p>
                                </div>
                                <div class="col-3" style="padding: 15px">
                                    <select class="form-control" id="subjectMarks" name="marks" onchange="addSubject('PMAT 11212',2,value)">
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
                    <div class="border border-success" style="padding: 0px 20px 0px 20px;
                        margin: 10px 20px 10px 20px;
                        border-radius: 25px">
                        <form action="">
                            <div class="row">
                                <div class="col-8">
                                    <h6 style="padding: 10px 0px 0px 0px">DELT 11212</h6>
                                    <p style="padding: 0px 0px 0px 0px">English For Profrssionals</p>
                                </div>
                                <div class="col-3" style="padding: 15px">
                                    <select class="form-control" id="subjectMarks" name="marks" onchange="addSubject('DELT 11212',2,value)">
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
                </div>
                
            </div>
    `
}