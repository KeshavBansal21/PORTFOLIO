import "./intro.css";
import Me from "../../img/me.png";
import React, { useContext, useEffect, useReducer, useState } from "react";
import Counter from "../Counter/Counter";
import { connect } from "react-redux";
import IntroReview from "../IntroReview/IntroReview";
import Description from "../desciption/description";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { ThemeContext } from "../../context";

const Intro = (props) => {
  const storeIntroduction = useSelector((store) => store.introduction);
  const dispatch = useDispatch();

  const storeSetIntroduction = (introduction) => {
    dispatch({
      type: "ADD_INTRO",
      payload: introduction,
    });
  };

  const storeUpdateIntroduction = (introduction) => {
    dispatch({
      type: "UPDATE_INTRO",
      payload: introduction,
    });
  };

  const [isLoader, setLoader] = useState(true);
  const initFormState = {
    intro: "",
    name: "",
    desc: "",
  };

  const [introduction, setIntroduction] = useState(initFormState);

  useEffect(() => {
    setTimeout(() => {
      cb(false);
    }, 2000);
  }, []);

  const cb = (arg) => {
    setLoader(arg);
  };

  const onSubmit = async (e) => {
    let keys = Object.keys(storeIntroduction);
    if (keys.length == 0) {
      storeSetIntroduction(introduction);
    } else {
      storeUpdateIntroduction(introduction);
    }
  };
  const onchange = (event) => {
    var key = event.target.name;
    var val = event.target.value;
    setIntroduction({ ...introduction, [key]: val });
  };

  useEffect(() => {
    storeUpdateIntroduction(introduction);
  }, [introduction]);

  useEffect(() => {
    let keys = Object.keys(storeIntroduction);
    if (keys.length != 0) {
      setIntroduction(storeIntroduction);
    }
  }, []);

  const getKeyValue = (key) => {
    if (introduction && introduction[key]) {
      return introduction[key];
    }
    return "";
  };
  const theme = useContext(ThemeContext);
  const darkMode   =  theme.state.darkMode;
  return isLoader ? (
    <h1>...Loading</h1>
  ) : (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">
            <input
              type="text"
              name={"intro"}
              onChange={onchange}
              placeholder={"Your Name  , Write Here"}
              value={getKeyValue("intro")}
            />
          </h2>
          <Counter />
          <h1 className="i-name"></h1>

          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">UI/UX Designer</div>
              <div className="i-title-item">Data Structures and Algorithms</div>
              <div className="i-title-item">Writer</div>
              <div className="i-title-item">Content Creator</div>
            </div>
          </div>
          <input
            type="text"
            name={"desc"}
            onChange={onchange}
            placeholder={"Your Introduction  , Write here"}
            value={getKeyValue("desc")}
          />
          {/* <button onClick={onSubmit} className="button">
            Submit
          </button> */}
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Me} alt="" className="i-img" ></img>
        <IntroReview className={"i-img"}></IntroReview>
        <Description className={"i-desc"}></Description>
      </div>
    </div>
  );
};

// function mapStatetoProps(store) {
//   return {
//     introduction: store.introduction,
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     setIntroduction: (obj) => {
//       dispatch({
//         type: "ADD_INTRO",
//         payload: obj,
//       });
//     },
//     updateIntroduction: (obj) => {
//       dispatch({
//         type: "UPDATE_INTRO",
//         payload: obj,
//       });
//     },
//   };
// }

// export default connect(mapStatetoProps, mapDispatchToProps)(Intro);
export default Intro;
