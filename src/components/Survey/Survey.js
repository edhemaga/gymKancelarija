import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useStyles from "./styles";
import logo from "../../images/presyonLogo.jpg";
import lotus from "../../assets/items/lotus.jpg";
import seamless from "../../assets/items/seamless.jpg";
import Button from '@material-ui/core/Button';
import axios from "axios";

function Survey() {
    const classes = useStyles();

    const [count, setCount] = React.useState(1);
    const checkIndex = (index) => {
        console.log(index); axios.post(`https://presyontest-survey.herokuapp.com/survey/`, { key: index });
    }

    return (
        <div className={classes.surveyContainer}>
            <div className={classes.surveyLogoWrapper}>
                <img className={classes.surveyLogo} src={logo} alt="Damir je glup" />
            </div>
            <div >
                {count == 1 ?
                    <div className={classes.survey1}>
                        <div onClick={() => setCount(2)} className={classes.survey1items}>
                            <span onClick={() => { checkIndex(1) }} className={classes.imgItem}>
                                <img className={classes.img} src={lotus} alt="Lotus" />
                                <h3>GO SEAMLESS - YOGA PANTS</h3>
                            </span>
                            <span onClick={() => { checkIndex(2) }} className={classes.imgItem}>
                                <img className={classes.img} src={seamless} alt="Seamless" />
                                <h3>LOTUS 7/8 LEGGING</h3>
                            </span>
                        </div>
                    </div>
                    : null}
                {
                    count == 2 ? <div className={classes.survey2}>
                        <div onClick={() => setCount(3)} className={classes.survey2items}>
                            <span onClick={() => { checkIndex(3) }} className={classes.imgItem}>
                                <img className={classes.img} src={lotus} alt="Lotus" />
                                <h3>GO SEAMLESS - YOGA PANTS 2</h3>
                            </span>
                            <span onClick={() => { checkIndex(4) }} className={classes.imgItem}>
                                <img className={classes.img} src={seamless} alt="Seamless" />
                                <h3>LOTUS 7/8 LEGGING</h3>
                            </span>
                        </div>
                    </div> : null
                }
                {
                    count == 3 ? <div className={classes.survey3}>
                        <div onClick={() => { window.location.reload(); }} className={classes.survey3items}>
                            <span onClick={() => { checkIndex(5) }} className={classes.imgItem}>
                                <img className={classes.img} src={lotus} alt="Lotus" />
                                <h3>GO SEAMLESS - YOGA PANTS 3</h3>
                            </span>
                            <span onClick={() => { checkIndex(6) }} className={classes.imgItem}>
                                <img className={classes.img} src={seamless} alt="Seamless" />
                                <h3>LOTUS 7/8 LEGGING</h3>
                            </span>
                        </div>
                    </div> : null
                }
            </div>
        </div >
    );
}

export default Survey;
