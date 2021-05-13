import React from 'react'
import closeIcon from "../Images/Svgs/closeIcon.svg";
export default function QuestionForm() {
    return (
        <div className="questionForm flex">
        <form action="" className="flex">
          <div className="closeIcon">
            <img width="15" src={closeIcon} alt="" />
          </div>
          <div className="formTitle flex">
            <h2>Ask a question</h2>
            <p>If you have any questions, you can ask us via the form below.</p>
          </div>
          <div className="formGroup">
            <input type="text" name="name" id="" placeholder="Name" />
            <input type="text" name="surname" id="" placeholder="Surname" />
          </div>
          <div className="formGroupSingle">
            <input type="email" name="email" id="" placeholder="Email Address" />
          </div>
          <div className="formGroup">
            <input type="text" name="name" id="" placeholder="Your Role" />
            <input type="text" name="surname" id="" placeholder="Country" />
          </div>
          <div className="formGroup">
            <textarea
              name="question"
              id=""
              cols="30"
              rows="10"
              placeholder="Name"
            ></textarea>
          </div>
          <div className="formButton">
            <small>
              I accept <span>privacy policy</span>
            </small>
            <input type="submit" value="Send my questoin" />
          </div>
        </form>
      </div>
    )
}
