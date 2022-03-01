
import { connect } from "react-redux";
import IntroReview from "../IntroReview/IntroReview";
import "./description.css";

const Description = (props)=>{
    console.log(props);
    return(
        <div className={props.className}>
            {props.introduction.desc}
        </div>
    )
}


const mapStateToProps = (store)=>{
    return{
        introduction:store.introduction ,
    }
}

export default connect(mapStateToProps)(Description);