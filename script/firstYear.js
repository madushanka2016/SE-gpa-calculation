function loadFirstYear(){
    show.innerHTML = `
            <div class="row">
                <div class="col-lg-6 col-md-12">
                    <div>
                        <h1 style="margin-left: 30%;">First Sem</h1>
                    </div>
                    <div class="border border-success" style="padding: 0px 20px 0px 20px;
                        margin: 10px 20px 10px 20px;
                        border-radius: 25px">
                        <form action="">
                            <div class="row">
                                <div class="col-8">
                                    <h6 class="subjectCode">SENG 11223 <span style="color: red"></span> </h6>  
                                    <p class="subjectName">Programming Concepts</p>
                                </div>
                                <div class="col-3" style="padding: 15px">
                                    <select class="form-control" id="SENG 11223" name="marks" onchange="addSubject('SENG 11223',3,value)">
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
                                    <h6 class="subjectCode">SENG 11213</h6>
                                    <p class="subjectName">Fundamentals Of Computing</p>
                                </div>
                                <div class="col-3" style="padding: 15px">
                                    <select class="form-control" id="SENG 11213" name="marks" onchange="addSubject('SENG 11213',3,value)">
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
                                    <h6 class="subjectCode">SENG 11232</h6>
                                    <p class="subjectName">Engineering Foundation</p>
                                </div>
                                <div class="col-3" style="padding: 15px">
                                    <select class="form-control" id="SENG 11232" name="marks" onchange="addSubject('SENG 11232',2,value)">
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
                                    <h6 class="subjectCode">SENG 11243 <span style="color: red"></span> </h6>  
                                    <p class="subjectName">Statistics</p>
                                </div>
                                <div class="col-3" style="padding: 15px">
                                    <select class="form-control" id="SENG 11243" name="marks" onchange="addSubject('SENG 11243',3,value)">
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
                                    <h6 class="subjectCode">PMAT 11212</h6>
                                    <p class="subjectName">Discreet Mathematicd For Computing I</p>
                                </div>
                                <div class="col-3" style="padding: 15px">
                                    <select class="form-control" id="PMAT 11212" name="marks" onchange="addSubject('PMAT 11212',2,value)">
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
                                    <h6 class="subjectCode">DELT 11212</h6>
                                    <p class="subjectName">English For Profrssionals</p>
                                </div>
                                <div class="col-3" style="padding: 15px">
                                    <select class="form-control" id="DELT 11212" name="marks" onchange="addSubject('DELT 11212',2,value)">
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
                <div class="col-lg-6 col-md-12">
                    <div>
                        <h1 style="margin-left: 30%;">Second Sem</h1>
                    </div>
                    <div class="border border-success" style="padding: 0px 20px 0px 20px;
                        margin: 10px 20px 10px 20px;
                        border-radius: 25px">
                        <form action="">
                            <div class="row">
                                <div class="col-8">
                                    <h6 class="subjectCode">SENG 12213<span style="color: red"></span> </h6>  
                                    <p class="subjectName">Data Structures And Algorithms</p>
                                </div>
                                <div class="col-3" style="padding: 15px">
                                    <select class="form-control" id="SENG 12213" name="marks" onchange="addSubject('SENG 12213',3,value)">
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
                                    <h6 class="subjectCode">SENG 12223</h6>
                                    <p class="subjectName">Database Design And Development</p>
                                </div>
                                <div class="col-3" style="padding: 15px">
                                    <select class="form-control" id="SENG 12223" name="marks" onchange="addSubject('SENG 12223',3,value)">
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
                                    <h6 class="subjectCode">SENG 12233</h6>
                                    <p class="subjectName">Object Oriented Programming</p>
                                </div>
                                <div class="col-3" style="padding: 15px">
                                    <select class="form-control" id="SENG 12233" name="marks" onchange="addSubject('SENG 12233',3,value)">
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
                                    <h6 class="subjectCode">SENG 12242<span style="color: red"></span> </h6>  
                                    <p class="subjectName">Management For Software Engineering I</p>
                                </div>
                                <div class="col-3" style="padding: 15px">
                                    <select class="form-control" id="SENG 12242" name="marks" onchange="addSubject('SENG 12242',2,value)">
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
                                    <h6 class="subjectCode">PMAT 12212</h6>
                                    <p class="subjectName">Discreet Mathematics For Computing II</p>
                                </div>
                                <div class="col-3" style="padding: 15px">
                                    <select class="form-control" id="PMAT 12212" name="marks" onchange="addSubject('PMAT 12212',2,value)">
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
                                    <h6 class="subjectCode">DELT 12312</h6>
                                    <p class="subjectName">Communication Skills For Professionals</p>
                                </div>
                                <div class="col-3" style="padding: 15px">
                                    <select class="form-control" id="DELT 12312" name="marks" onchange="addSubject('DELT 12312',2,value)">
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
    load(1);
}
