import React from 'react'
import closeIcon from "../Images/Svgs/closeIcon.svg";
import required from "../Images/Pngs/required.png";
export default function QuestionForm({ closeFunc }) {
    return (
        <div className="questionForm flex">
        <form action="" className="flex">
          <div className="closeIcon" onClick={closeFunc}>
            <img width="12" src={closeIcon} alt="" />
          </div>
          <div className="formTitle flex">
            <h2>Ask a question</h2>
            <p>If you have any questions, you can ask us via the form below.</p>
          </div>
          <div className="formGroup">
          <div className="firstInput">
            <input type="text" name="name" id="" required />
            <span class="floatingLabel">Name</span>
          </div>

          <div className="secondInput">
            <input type="text" name="surname" id="" required />
            <span class="floatingLabel">Surname</span>
          </div>
        </div>
        <div className="formGroupSingle">
          <input
            type="email"
            className="required"
            name="email"
            id=""
            required
          />
          {/* <input type="email" name="email" id="" /> */}

          {/* Required img */}
          <img width="25" src={required} alt="" />
          <span class="floatingLabel requiredLabel">Email Address</span>
          {/* <span class="floatingLabel ">Email Address</span> */}
        </div>
        {/* Error message  */}
        <small className="err flex">This field is required.</small>
        <small className="emailPrivacy flex">
          Don't worry, we will not share it with anyone without your permission.
        </small>
        <div className="formGroup">
          <div className="firstInput">
            <input type="text" name="role" id="" required />
            <span class="floatingLabel">Your Role</span>
          </div>
          <div className="secondInput">
            <input type="text" name="country" id="" required />
            <span class="floatingLabel">Country</span>
          </div>
        </div>
        <div className="formGroup textareaLabel">
          <textarea
            name="question"
            id=""
            cols="30"
            rows="10"
            required
          ></textarea>
          <span class="floatingLabel">Question</span>
        </div>
        <div className="formButton">
          <div className="privacy">
            <label class="privacyCheck">
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
            <small>
              I accept <a href="#">privacy policy</a>
            </small>
          </div>

          {/* Missing privacy design */}

          {/* <div className="privacy">
            <label class="privacyCheck">
              <input type="checkbox" />
              <span class="checkmark checkErr"></span>
            </label>
            <small className="privacyErr">
              I accept <span className="privacyErr">privacy policy</span>
            </small>
          </div> */}

          <input type="submit" value="Send my question" />
        </div>
        <div className="successMessage">
          <div className="messageContent">
            <p>Successfully sent</p>
            <p>We will get back to you as soon as possible.</p>
          </div>
        </div>

        {/* <div className="errMessage">
          <div className="messageContent">
            <p>Something went wrong</p>
            <p>Internal error.</p>
          </div>
        </div> */}
      </form>
    </div>
  );
}
