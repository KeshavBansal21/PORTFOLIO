import { connect  } from "react-redux";
import "./IntroReview.css";
import { useState } from "react";
const IntroReview = (props) => {
  // console.log(props)
  const [initname , setName] =useState("Keshav Bansal");
  return (
    <>
      <h2 className="i-intro1">
        <div className={props.className}>{!props.introduction.intro?initname:props.introduction.intro}</div>
      </h2>
    </>
  );
};

const mapStateToProps = (store) => {
  return {
    introduction: store.introduction,
  };
};

export default connect(mapStateToProps)(IntroReview);
