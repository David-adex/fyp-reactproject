//import and define needed dependencies
const express = require('express')
const cors = require('cors')
const ejs = require('ejs');
const User =require('./config')
const path = require('path');
const puppeteer = require('puppeteer');
const bcrypt = require('bcrypt');
const saltRounds = 10; // number of rounds of hashing
const salt = bcrypt.genSaltSync(saltRounds);
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true }))
app.use(cors())
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get("/",cors(),(req, res)=>{

})

app.post('/', async (req, res) => {
    const {email,password}=req.body
    try {
      // Finds user by email
      const user = await User.findOne({ email:email })
      // Checks if password is correct
      const isPasswordCorrect = await bcrypt.compare(password, user.password);

      // Checks if user exists
      if (user && isPasswordCorrect){
        res.json("exists")
      }
      else {
        res.json("notexist")
      }

    } catch (err) {
      res.json('notexist')
    }
  })

app.post('/signup', async (req, res) => {
    const {email,password}=req.body
    const hashedPassword = await bcrypt.hash(password, salt);
    const data={
        email: email,
        password: hashedPassword
    }
    try {
      // Finds user by email
        const check = await User.findOne({ email:email });
        if (check){
            res.json("exists")
        }
        else{
            res.json("notexist")
            await User.insertMany([data])
        }
    
    } catch (err) {
        res.json('notexist')
    }
})

app.post('/resume', async (req, res) => {
  const {firstName,lastName,email,mobileNumber,linkedInLink,address,proSummary,school,qualifications,startDate,endDate,eSummary,
  organization,position,sDuration,eDuration,description,sOrganization,sPosition,ssDuration,eeDuration,sDescription,projectTitle,github,
  project,sProjectTitle,sGithub,sProject,tProject,tProjectTitle,tGithub,fSkill,sSkill,tSkill,foSkill,fiSkill,siSkill,fInterest,sInterest,
  tInterest,foInterest,fiInterest,siInterest}=req.body  

  const resumeData = {
    firstName,
    lastName,
    email,mobileNumber,linkedInLink,address,proSummary,school,qualifications,startDate,endDate,eSummary,
    organization,position,sDuration,eDuration,description,sOrganization,sPosition,ssDuration,eeDuration,sDescription,projectTitle,github,
    project,sProjectTitle,sGithub,sProject,tProject,tProjectTitle,tGithub,fSkill,sSkill,tSkill,foSkill,fiSkill,siSkill,fInterest,sInterest,
    tInterest,foInterest,fiInterest,siInterest
  };

  try{
    //sends the resume for viewing to the client
    res.render('template', {resumeData});
  }
  catch (err) {
    res.json('failed')
  }

})

app.post('/download', async (req, res) => {
  const {firstName,lastName,email,mobileNumber,linkedInLink,address,proSummary,school,qualifications,startDate,endDate,eSummary,
  organization,position,sDuration,eDuration,description,sOrganization,sPosition,ssDuration,eeDuration,sDescription,projectTitle,github,
  project,sProjectTitle,sGithub,sProject,tProject,tProjectTitle,tGithub,fSkill,sSkill,tSkill,foSkill,fiSkill,siSkill,fInterest,sInterest,
  tInterest,foInterest,fiInterest,siInterest}=req.body  

  const resumeData = {
    firstName,
    lastName,
    email,mobileNumber,linkedInLink,address,proSummary,school,qualifications,startDate,endDate,eSummary,
    organization,position,sDuration,eDuration,description,sOrganization,sPosition,ssDuration,eeDuration,sDescription,projectTitle,github,
    project,sProjectTitle,sGithub,sProject,tProject,tProjectTitle,tGithub,fSkill,sSkill,tSkill,foSkill,fiSkill,siSkill,fInterest,sInterest,
    tInterest,foInterest,fiInterest,siInterest
  };
  try{
    const renderedHtml = await ejs.renderFile(path.join(__dirname, 'views', 'template.ejs'), { resumeData });
    
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Setting the content of the page to the rendered HTML
    await page.setContent(renderedHtml);

    // Generates a PDF from the page
    const pdfBuffer = await page.pdf({ format: 'A4', orientation: 'portrait', // Page orientation
    border: {
      top: '20mm',
      right: '20mm',
      bottom: '20mm',
      left: '20mm'
    }, // Page borders
    paginationOffset: 1, // Pagination offset
    footer: {
      height: '10mm',
      contents: {
        default: '<span style="color: #444; font-size: 10px;">Page <span>{{page}}</span> of <span>{{pages}}</span></span>', // Footer contents
      }
    }});

    // Closes the browser instance
    await browser.close();

    // Sends the PDF as a download to the client side
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=resume.pdf');
    res.send(pdfBuffer);
  }
  catch (err) {
    res.json('failed')
  }

})

app.listen(8000, ()=>{
    console.log("port connected");
})
