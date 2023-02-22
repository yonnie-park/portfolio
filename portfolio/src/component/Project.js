import "../style/Project.css"
import DYE from "../images/DYE.png"
export default function Project(){
    return(
        <div className="project__container">
            <div className="project">
                <div className="project__circles">
                    <div className="project__circle1"></div>
                    <div className="project__circle2"></div>
                    <div className="project__circle3"></div>
                </div>
                <div className="project__thumbnail">
                    <img className="project__img" alt="img" src={DYE}/>
                </div>
            </div>

            <div className="project__title">
                <h2>DID You Eat?</h2>
            </div>
        </div>
    )
}