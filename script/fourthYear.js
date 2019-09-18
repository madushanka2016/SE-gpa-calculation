function loadFourthYear(){
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
                                    <h6 class="subjectCode">SENG 41212 <span style="color: red"></span> </h6>  
                                    <p class="subjectName">Software Evolution</p>
                                </div>
                                <div class="col-3" style="padding: 15px">
                                    <select class="form-control" id="SENG 41212" name="marks" onchange="addSubject('SENG 41212',2,value)">
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
                                    <h6 class="subjectCode">SENG 41222</h6>
                                    <p class="subjectName">Software Metrics and Measurements</p>
                                </div>
                                <div class="col-3" style="padding: 15px">
                                    <select class="form-control" id="SENG 41222" name="marks" onchange="addSubject('SENG 41222',2,value)">
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
                                    <h6 class="subjectCode">SENG 41233</h6>
                                    <p class="subjectName">Digital Image Processing</p>
                                </div>
                                <div class="col-3" style="padding: 15px">
                                    <select class="form-control" id="SENG 41233" name="marks" onchange="addSubject('SENG 41233',3,value)">
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
                                    <h6 class="subjectCode">SENG 41242<span style="color: red"></span> </h6>  
                                    <p class="subjectName">Advanced Databases</p>
                                </div>
                                <div class="col-3" style="padding: 15px">
                                    <select class="form-control" id="SENG 41242" name="marks" onchange="addSubject('SENG 41242',2,value)">
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
                                    <h6 class="subjectCode">SENG 41252</h6>
                                    <p class="subjectName">Advanced Computer Networks</p>
                                </div>
                                <div class="col-3" style="padding: 15px">
                                    <select class="form-control" id="SENG 41252" name="marks" onchange="addSubject('SENG 41252',2,value)">
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
                                    <h6 class="subjectCode">SENG 41262</h6>
                                    <p class="subjectName">Speech Interfaces</p>
                                </div>
                                <div class="col-3" style="padding: 15px">
                                    <select class="form-control" id="SENG 41262" name="marks" onchange="addSubject('SENG 41262',2,value)">
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
                                    <h6 class="subjectCode">SENG 41272<span style="color: red"></span> </h6>  
                                    <p class="subjectName">Formal Methods</p>
                                </div>
                                <div class="col-3" style="padding: 15px">
                                    <select class="form-control" id="SENG 41272" name="marks" onchange="addSubject('SENG 41272',2,value)">
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
                                    <h6 class="subjectCode">SENG 41283<span style="color: red"></span> </h6>  
                                    <p class="subjectName">Distributed and Cloud Computing</p>
                                </div>
                                <div class="col-3" style="padding: 15px">
                                    <select class="form-control" id="SENG 41283" name="marks" onchange="addSubject('SENG 41283',3,value)">
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
                                    <h6 class="subjectCode">SENG 41293<span style="color: red"></span> </h6>  
                                    <p class="subjectName">Mobile Web Application Development</p>
                                </div>
                                <div class="col-3" style="padding: 15px">
                                    <select class="form-control" id="SENG 41293" name="marks" onchange="addSubject('SENG 41293',3,value)">
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
                                    <h6 class="subjectCode">SENG 41303<span style="color: red"></span> </h6>  
                                    <p class="subjectName">Big Data Infrastructure</p>
                                </div>
                                <div class="col-3" style="padding: 15px">
                                    <select class="form-control" id="SENG 41303" name="marks" onchange="addSubject('SENG 41303',3,value)">
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
                                    <h6 class="subjectCode">SENG 41313<span style="color: red"></span> </h6>  
                                    <p class="subjectName">Health Information Systems Design and Development</p>
                                </div>
                                <div class="col-3" style="padding: 15px">
                                    <select class="form-control" id="SENG 41313" name="marks" onchange="addSubject('SENG 41313',3,value)">
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
                                    <h6 class="subjectCode">SENG 41323<span style="color: red"></span> </h6>  
                                    <p class="subjectName">Games Design, Artwork, and Programming</p>
                                </div>
                                <div class="col-3" style="padding: 15px">
                                    <select class="form-control" id="SENG 41323" name="marks" onchange="addSubject('SENG 41323',3,value)">
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
                                    <h6 class="subjectCode">SENG 41333<span style="color: red"></span> </h6>  
                                    <p class="subjectName">Computer Based Operations Management</p>
                                </div>
                                <div class="col-3" style="padding: 15px">
                                    <select class="form-control" id="SENG 41333" name="marks" onchange="addSubject('SENG 41333',3,value)">
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
                                    <h6 class="subjectCode">SENG 42212<span style="color: red"></span> </h6>  
                                    <p class="subjectName">Software Safety and Reliability</p>
                                </div>
                                <div class="col-3" style="padding: 15px">
                                    <select class="form-control" id="SENG 42212" name="marks" onchange="addSubject('SENG 42212',2,value)">
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
                                    <h6 class="subjectCode">SENG 43216</h6>
                                    <p class="subjectName">Software Engineering Research Project</p>
                                </div>
                                <div class="col-3" style="padding: 15px">
                                    <select class="form-control" id="SENG 43216" name="marks" onchange="addSubject('SENG 43216',6,value)">
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
                                    <h6 class="subjectCode">SENG 42222</h6>
                                    <p class="subjectName">Usability Engineering</p>
                                </div>
                                <div class="col-3" style="padding: 15px">
                                    <select class="form-control" id="SENG 42222" name="marks" onchange="addSubject('SENG 42222',2,value)">
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
                                    <h6 class="subjectCode">SENG 42232<span style="color: red"></span> </h6>  
                                    <p class="subjectName">Software Management</p>
                                </div>
                                <div class="col-3" style="padding: 15px">
                                    <select class="form-control" id="SENG 42232" name="marks" onchange="addSubject('SENG 42232',2,value)">
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
                                    <h6 class="subjectCode">SENG 42242</h6>
                                    <p class="subjectName">Machine Learning</p>
                                </div>
                                <div class="col-3" style="padding: 15px">
                                    <select class="form-control" id="SENG 42242" name="marks" onchange="addSubject('SENG 42242',2,value)">
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
                                    <h6 class="subjectCode">SENG 42252</h6>
                                    <p class="subjectName">Computer Graphics</p>
                                </div>
                                <div class="col-3" style="padding: 15px">
                                    <select class="form-control" id="SENG 42252" name="marks" onchange="addSubject('SENG 42252',2,value)">
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
                                    <h6 class="subjectCode">SENG 42273<span style="color: red"></span> </h6>  
                                    <p class="subjectName">Semantic Web and Ontological Engineering</p>
                                </div>
                                <div class="col-3" style="padding: 15px">
                                    <select class="form-control" id="SENG 42273" name="marks" onchange="addSubject('SENG 42273',3,value)">
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
                                    <h6 class="subjectCode">SENG 42283<span style="color: red"></span> </h6>  
                                    <p class="subjectName">Mobile Networks</p>
                                </div>
                                <div class="col-3" style="padding: 15px">
                                    <select class="form-control" id="SENG 42283" name="marks" onchange="addSubject('SENG 42283',3,value)">
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
                                    <h6 class="subjectCode">SENG 42293<span style="color: red"></span> </h6>  
                                    <p class="subjectName">Big Data Analytics</p>
                                </div>
                                <div class="col-3" style="padding: 15px">
                                    <select class="form-control" id="SENG 42293" name="marks" onchange="addSubject('SENG 42293',3,value)">
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
                                    <h6 class="subjectCode">SENG 42303<span style="color: red"></span> </h6>  
                                    <p class="subjectName">Medical Imaging and Biomedial Signal Processing</p>
                                </div>
                                <div class="col-3" style="padding: 15px">
                                    <select class="form-control" id="SENG 42303" name="marks" onchange="addSubject('SENG 42303',3,value)">
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
                                    <h6 class="subjectCode">SENG 42313<span style="color: red"></span> </h6>  
                                    <p class="subjectName">Advanced Topics in Game Design and Animation</p>
                                </div>
                                <div class="col-3" style="padding: 15px">
                                    <select class="form-control" id="SENG 42313" name="marks" onchange="addSubject('SENG 42313',3,value)">
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
                                    <h6 class="subjectCode">SENG 42323<span style="color: red"></span> </h6>  
                                    <p class="subjectName">Business Process Engineering</p>
                                </div>
                                <div class="col-3" style="padding: 15px">
                                    <select class="form-control" id="SENG 42323" name="marks" onchange="addSubject('SENG 42323',3,value)">
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
    load(4);
}
