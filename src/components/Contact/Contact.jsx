import "./contact.scss";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useRef } from "react";
import emailjs from "emailjs-com";
const Contact = () => {
  const formRef = useRef();
//   const [done , setdone]

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formRef.current)
    emailjs
      .sendForm(
        "service_la607ex",
        "template_86xk46f",
        formRef.current,
        "RceHuKCgyenn9MhM8"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img className="c-icon" src={Phone} alt=""></img>
              +91 98762 181 11
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt=""></img>
              contact@lama.dev
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt=""></img>
              245 King Street, Touterie Victoria 8520 Australia
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="user_name"></input>
            <input
              type="text"
              placeholder="Subject"
              name="user_subject"
            ></input>
            <input type="text" placeholder="Email" name="user_email"></input>
            <textarea rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
