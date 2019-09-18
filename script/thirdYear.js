function loadThirdYear(){
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
                                    <h6 class="subjectCode">SENG 31212 <span style="color: red"></span> </h6>  
                                    <p class="subjectName">Software Quality</p>
                                </div>
                                <div class="col-3" style="padding: 15px">
                                    <select class="form-control" id="SENG 31212" name="marks" onchange="addSubject('SENG 31212',2,value)">
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
                                    <h6 class="subjectCode">SENG 31222</h6>
                                    <p class="subjectName">Information Security</p>
                                </div>
                                <div class="col-3" style="padding: 15px">
                                    <select class="form-control" id="SENG 31222" name="marks" onchange="addSubject('SENG 31222',2,value)">
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
                                    <h6 class="subjectCode">SENG 31232</h6>
                                    <p class="subjectName">Software Project Management</p>
                                </div>
                                <div class="col-3" style="padding: 15px">
                                    <select class="form-control" id="SENG 31232" name="marks" onchange="addSubject('SENG 31232',2,value)">
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
                                    <h6 class="subjectCode">SENG 31242 <span style="color: red"></span> </h6>  
                                    <p class="subjectName">System Design Project</p>
                                </div>
                                <div class="col-3" style="padding: 15px">
                                    <select class="form-control" id="SENG 31242" name="marks" onchange="addSubject('SENG 31242',2,value)">
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
                                    <h6 class="subjectCode">SENG 31252</h6>
                                    <p class="subjectName">Professional Practices</p>
                                </div>
                                <div class="col-3" style="padding: 15px">
                                    <select class="form-control" id="SENG 31252" name="marks" onchange="addSubject('SENG 31252',2,value)">
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
                                    <h6 class="subjectCode">SENG 31262</h6>
                                    <p class="subjectName">Research Methods</p>
                                </div>
                                <div class="col-3" style="padding: 15px">
                                    <select class="form-control" id="SENG 31262" name="marks" onchange="addSubject('SENG 31262',2,value)">
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
                                    <h6 class="subjectCode">SENG 34222</h6>
                                    <p class="subjectName">Software Process</p>
                                </div>
                                <div class="col-3" style="padding: 15px">
                                    <select class="form-control" id="SENG 34222" name="marks" onchange="addSubject('SENG 34222',2,value)">
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
                                    <h6 class="subjectCode">SENG 31282<span style="color: red"> Optional</span> </h6>  
                                    <p class="subjectName">Computer Network Management</p>
                                </div>
                                <div class="col-3" style="padding: 15px">
                                    <select class="form-control" id="SENG 31282" name="marks" onchange="addSubject('SENG 31282',2,value)">
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
                                    <h6 class="subjectCode">SENG 31272 <span style="color: red"> Optional</span></h6>
                                    <p class="subjectName">Internet of Things</p>
                                </div>
                                <div class="col-3" style="padding: 15px">
                                    <select class="form-control" id="SENG 31272" name="marks" onchange="addSubject('SENG 31272',2,value)">
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
                                    <h6 class="subjectCode">SENG 31292 <span style="color: red"> Optional</span></h6>
                                    <p class="subjectName">Enterprise Information Systems</p>
                                </div>
                                <div class="col-3" style="padding: 15px">
                                    <select class="form-control" id="SENG 31292" name="marks" onchange="addSubject('SENG 31292',2,value)">
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
                                    <h6 class="subjectCode">SENG 31313 <span style="color: blue">Net</span> </h6>  
                                    <p class="subjectName">Advanced Web Applications Development</p>
                                </div>
                                <div class="col-3" style="padding: 15px">
                                    <select class="form-control" id="SENG 31313" name="marks" onchange="addSubject('SENG 31313',3,value)">
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
                                    <h6 class="subjectCode">SENG 31323 <span style="color: blue">Mobil</span></h6>
                                    <p class="subjectName">Mobile Computing Technologies</p>
                                </div>
                                <div class="col-3" style="padding: 15px">
                                    <select class="form-control" id="SENG 31323" name="marks" onchange="addSubject('SENG 31323',3,value)">
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
                                    <h6 class="subjectCode">SENG 31333 <span style="color: blue">Data</span> </h6>  
                                    <p class="subjectName">Business Intelligence and Management Support Systems</p>
                                </div>
                                <div class="col-3" style="padding: 15px">
                                    <select class="form-control" id="SENG 31333" name="marks" onchange="addSubject('SENG 31333',3,value)">
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
                                    <h6 class="subjectCode">SENG 31343 <span style="color: blue">Health</span></h6>
                                    <p class="subjectName">Health Information Management</p>
                                </div>
                                <div class="col-3" style="padding: 15px">
                                    <select class="form-control" id="SENG 31343" name="marks" onchange="addSubject('SENG 31343',3,value)">
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
                                    <h6 class="subjectCode">SENG 31353 <span style="color: blue">Gaming</span> </h6>  
                                    <p class="subjectName">Game Development Technology</p>
                                </div>
                                <div class="col-3" style="padding: 15px">
                                    <select class="form-control" id="SENG 31353" name="marks" onchange="addSubject('SENG 31353',3,value)">
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
                                    <h6 class="subjectCode">SENG 31363 <span style="color: blue">Business</span></h6>
                                    <p class="subjectName">Business Systems Modelling and Optimization</p>
                                </div>
                                <div class="col-3" style="padding: 15px">
                                    <select class="form-control" id="SENG 31363" name="marks" onchange="addSubject('SENG 31363',3,value)">
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
                                    <h6 class="subjectCode">SENG 34213<span style="color: red"></span> </h6>  
                                    <p class="subjectName">Systems Development Project</p>
                                </div>
                                <div class="col-3" style="padding: 15px">
                                    <select class="form-control" id="SENG 34213" name="marks" onchange="addSubject('SENG 34213',3,value)">
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
                                    <h6 class="subjectCode">SENG 32216</h6>
                                    <p class="subjectName">Internship</p>
                                </div>
                                <div class="col-3" style="padding: 15px">
                                    <select class="form-control" id="SENG 32216" name="marks" onchange="addSubject('SENG 32216',6,value)">
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
    load(3);
}
