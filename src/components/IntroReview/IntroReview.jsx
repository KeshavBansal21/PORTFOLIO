import { connect } from "react-redux";
import "./IntroReview.css";

const IntroReview = (props) => {
  // console.log(props)
  return (
    <>
      <h2 className="i-intro1">
        <div className={props.className}>{props.introduction.intro}</div>
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
