import React from "react";
import useStyles from "./styles";
import logo from "../../images/presyonLogo.jpg";
import dryFitNeck from "../../assets/items/survey_p_1/dry-fit-v-neck.jpg";
import essentialLongSleeve from "../../assets/items/survey_p_1/essential-long-sleeve.jpg";
import alphaShorts from "../../assets/items/survey_p_2/alpha-shorts.jpg";
import dryFitSport from "../../assets/items/survey_p_2/dry-fit-sport.jpg";
import lotus from "../../assets/items/survey_p_3/lotus.jpg";
import lunarBamboo from "../../assets/items/survey_p_3/lunar-bamboo-bra.jpg";
import jetsetter from "../../assets/items/survey_p_4/jetsetter.jpg";
import seamless from "../../assets/items/survey_p_4/seamless.jpg";

import axios from "axios";

function Survey() {
    const classes = useStyles();

    const [count, setCount] = React.useState(1);
    const checkIndex = (index) => {
        axios.post(`https://presyontest-survey.herokuapp.com/survey/`, { key: index });
    }

    return (
        <div className={classes.surveyContainer}>
            <div className={classes.surveyLogoWrapper}>
                <img className={classes.surveyLogo} src={logo} alt="Logo" />
            </div>
            <div >
                {count === 1 ?
                    <div className={classes.survey1}>
                        <div onClick={() => setCount(2)} className={classes.survey1items}>
                            <span onClick={() => { checkIndex(1) }} className={classes.imgItem}>
                                <img className={classes.img} src={dryFitNeck} alt="Dry Fit V Neck" />
                                <h3>DRY FIT V NECK</h3>
                            </span>
                            <span onClick={() => { checkIndex(2) }} className={classes.imgItem}>
                                <img className={classes.img} src={essentialLongSleeve} alt="Seamless" />
                                <h3>ESSENTIAL LONG SLEEVE</h3>
                            </span>
                        </div>
                    </div>
                    : null}
                {
                    count === 2 ? <div className={classes.survey2}>
                        <div onClick={() => setCount(3)} className={classes.survey2items}>
                            <span onClick={() => { checkIndex(3) }} className={classes.imgItem}>
                                <img className={classes.img} src={alphaShorts} alt="Alpha shorts" />
                                <h3>ALPHA SHORTS</h3>
                            </span>
                            <span onClick={() => { checkIndex(4) }} className={classes.imgItem}>
                                <img className={classes.img} src={dryFitSport} alt="Dry Fit Sport" />
                                <h3>DRY FIT SPORT</h3>
                            </span>
                        </div>
                    </div> : null
                }
                {
                    count === 3 ? <div className={classes.survey3}>
                        <div onClick={() => setCount(4)} className={classes.survey3items}>
                            <span onClick={() => { checkIndex(5) }} className={classes.imgItem}>
                                <img className={classes.img} src={lotus} alt="Lotus" />
                                <h3>GO SEAMLESS - YOGA PANTS</h3>
                            </span>
                            <span onClick={() => { checkIndex(6) }} className={classes.imgItem}>
                                <img className={classes.img} src={lunarBamboo} alt="Seamless" />
                                <h3>LUNAR BAMBOO BRA</h3>
                            </span>
                        </div>
                    </div> : null
                }
                {
                    count === 4 ? <div className={classes.survey3}>
                        <div onClick={() => { window.location.reload(); }} className={classes.survey3items}>
                            <span onClick={() => { checkIndex(7) }} className={classes.imgItem}>
                                <img className={classes.img} src={jetsetter} alt="Jetsetter" />
                                <h3>JETSETTER SEAMLESS SET</h3>
                            </span>
                            <span onClick={() => { checkIndex(8) }} className={classes.imgItem}>
                                <img className={classes.img} src={seamless} alt="Seamless" />
                                <h3>GO SEAMLESS - YOGA PANTS</h3>
                            </span>
                        </div>
                    </div> : null
                }
            </div>
        </div >
    );
}

export default Survey;
