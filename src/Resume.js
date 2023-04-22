import React, { useState } from 'react';
import ProfileSummary from './ProfileSummary';
import WorkExperience from './WorkExperience';
import Education from './Education';
import Projects from './Projects';
import ExtraDetails from './ExtraDetails';
import axios from 'axios';
import {saveAs} from 'file-saver';


function Resume() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        mobileNumber: '',
        linkedInLink: '',
        address: '',
        proSummary: '',
        school: '',
        qualifications: '',
        startDate: '',
        endDate: '',
        eSummary: '',
        organization: '',
        position: '',
        sDuration: '',
        eDuration: '',
        description: '',
        sOrganization: '',
        sPosition: '',
        ssDuration: '',
        eeDuration: '',
        sDescription: '',
        projectTitle:'',
        github:'',
        project:'',
        sProjectTitle:'',
        sGithub:'',
        sProject:'',
        tProject:'',
        tProjectTitle:'',
        tGithub:'',
        fSkill:'',
        sSkill:'',
        tSkill:'',
        foSkill:'',
        fiSkill:'',
        siSkill:'',
        fInterest:'',
        sInterest:'',
        tInterest:'',
        foInterest:'',
        fiInterest:'',
        siInterest:''
      });

      const [currentStep, setCurrentStep] = useState(1);

      const handleNextStep = () => {
        setCurrentStep(currentStep + 1);
      };
    
      const handlePreviousStep = () => {
        setCurrentStep(currentStep - 1);
      };

      const handleFormSubmit = async (e) => {
        e.preventDefault();
        try{
          await axios.post("http://localhost:8000/resume",formData)
          .then (res => {
            const resumeHtml = res.data;
            const newWindow = window.open();
            newWindow.document.write(resumeHtml);
            newWindow.document.close();
          })
          .catch (e => {
            console.log (e);
          });
        }
        catch(e){
            console.log(e)
          }
      };

      const downloadPDF= async (e) => {
        e.preventDefault();
        try{
          await axios.post("http://localhost:8000/download",formData
          , 
          { responseType: 'arraybuffer' }
          )
            .then(res => {
              const blob = new Blob([res.data], { type: 'application/pdf' });
              saveAs(blob, 'Resume.pdf');
            })
            .catch(error => {
              console.error(error);
            });
        }
        catch(e){
          console.log(e)
        }

      };

  return (
    <form onSubmit={handleFormSubmit}>
    {currentStep === 1 && (
      <ProfileSummary
        formData={formData}
        setFormData={setFormData}
        handleNextStep={handleNextStep}
      />
    )}
    {currentStep === 2 && (
      <Education
        formData={formData}
        setFormData={setFormData}
        handleNextStep={handleNextStep}
        handlePreviousStep={handlePreviousStep}
      />
    )}
    {currentStep === 3 && (
      <WorkExperience
        formData={formData}
        setFormData={setFormData}
        handleNextStep={handleNextStep}
        handlePreviousStep={handlePreviousStep}
      />
    )}
    {currentStep === 4 && (
      <Projects
        formData={formData}
        setFormData={setFormData}
        handleNextStep={handleNextStep}
        handlePreviousStep={handlePreviousStep}
      />
    )}
    {currentStep === 5 && (
      <ExtraDetails
        formData={formData}
        setFormData={setFormData}
        downloadPDF={downloadPDF}
        handleFormSubmit={handleFormSubmit}
        handlePreviousStep={handlePreviousStep}
      />
    )}
  </form>
  );
}
export default Resume;