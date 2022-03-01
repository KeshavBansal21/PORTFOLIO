import "./intro.css";
import Me from "../../img/me.png";
import React, { useEffect, useState } from "react";
import Counter from "../Counter/Counter";
import { connect } from "react-redux";
import IntroReview from "../IntroReview/IntroReview";
import Description from "../desciption/description";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

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
            value={getKeyValue("desc")}
          />
          {/* <p className="i-desc">
            I design and develop services for customers of all sizes,
            specializing in creating stylish, modern websites, web services and
            online stores.
            {introduction.desc}
          </p> */}
          <button onClick={onSubmit} className="button">
            Submit
          </button>
        </div>
        <svg
          width="75"
          height="75"
          viewBox="0 0 75 75"
          fill="none"
          stroke="black"
          className="i-scroll"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="scroll">
            <path
              id="Vector"
              d="M40.5 15L34.5 9L28.5 15"
              stroke-width="3"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Vector_2"
              d="M28.5 24L34.5 30L40.5 24"
              stroke-width="3"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <g id="Group">
              <path
                id="Vector_3"
                d="M9 37.5H60"
                stroke-width="3"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <path
              id="Vector_4"
              d="M34.5 27V9"
              stroke-width="2.9895"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <g id="Group_2">
              <path
                id="Vector_5"
                d="M9 27C9 12.918 20.418 1.5 34.5 1.5C48.5859 1.5 60 12.918 60 27C60 29.8906 60 45.1094 60 48C60 62.082 48.5859 73.5 34.5 73.5C20.418 73.5 9 62.082 9 48C9 45.1094 9 29.8906 9 27Z"
                stroke-width="3"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </g>
        </svg>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Me} alt="" className="i-img"></img>
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
