import React from 'react'
import point from "../Images/Svgs/points.svg";
import quote from "../Images/Svgs/quote.svg";
export default function Qualifications() {
    return (
        <div>
{/*This component contains the qualifications, Requirements, Experience, and Achievements*/}
<div className="qualifications">
      <div className="wholeQualifications">
        <div className="singleQualification title flex">
          <h2>Qualifications</h2>
        </div>
        <div className="singleQualification flex">
          <img width="13" src={point} alt="points" />
          <div className="qualificationDetails">
            <p>MB, ChB, College of Medicine</p>
            <p>Baghdad University, Iraq</p>
          </div>
        </div>
        <div className="singleQualification flex">
          <img width="13" src={point} alt="points" />
          <div className="qualificationDetails">
            <p>FRC S I, Fellowship of the Royal College of Surgeon</p>{" "}
            <p>Ireland</p>
          </div>
        </div>
        <div className="singleQualification flex">
          <img width="13" src={point} alt="points" />
          <div className="qualificationDetails">
            <p>ATLS Certificate (Advanced Trauma Life Support )</p>{" "}
          </div>
        </div>
        <div className="singleQualification flex">
          <img width="13" src={point} alt="points" />
          <div className="qualificationDetails">
            <p>ACLS Certificate (Advanced Cardiac Life Support )</p>{" "}
          </div>
        </div>
      </div>

      <div className="wholeSectionUnderQ flex">
        <div className="wholeRegistration">
          <div className="singleQualification title flex">
            <h2>Registration</h2>
          </div>
          <div className="singleQualification flex">
            <img width="13" src={point} alt="points" />
            <div className="qualificationDetails">
              <p>Full registration with the GMC</p>
              <p>United Kingdom</p>
            </div>
          </div>
        </div>

        <div className="wholeQualifications">
          <div className="wholeExperience ">
            <div className="singleQualification title flex">
              <h2>Experience</h2>
            </div>
          </div>
          <div className="singleQualification flex">
            <img width="13" src={point} alt="points" />
            <div className="qualificationDetails">
              <p>Consultant & Head of ER Department</p>
              <p>25+ years</p>
            </div>
          </div>
        </div>
      </div>
      <div className="wholeAchievments">
        <div className="singleQualification title flex">
          <h2>Achievments</h2>
        </div>
        <div className="quote flex">
          <img width="50" src={quote} alt="" />
          <p>
            During my roles and over the years, I have drastically increased the
            operating efficiency of the <span>ER departments</span> I have
            worked in. These changes include :
          </p>
        </div>
        <div className="singleQualification flex">
          <img width="13" src={point} alt="points" />
          <div className="qualificationDetails">
            <p>
              Increasing the department to include pediatric, obstetrics and
              gynaecology. To do this, we increased the team from{" "}
              <span>10</span> to <span>50 </span>
              doctors.
            </p>
          </div>
        </div>
        <div className="singleQualification flex">
          <img width="13" src={point} alt="points" />
          <div className="qualificationDetails">
            <p>
              CI increased the patients seen per day from <span>80</span> to{" "}
              <span>over 1000</span> and have decreased the waiting time to
              around 5 min.
            </p>
          </div>
        </div>
      </div>
    </div>
        </div>
    )
}
