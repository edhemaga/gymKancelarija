import { makeStyles } from "@material-ui/core/styles";
import { withThemeCreator } from "@material-ui/styles";

export default makeStyles({
    surveyContainer: {
        backgroundColor: 'white',
        height: '100%',
        width: '100%',
        padding: '20px 0'
    },
    surveyImagesContainer: {
        width: '100%',
    },
    surveyLogoWrapper: {
        display: 'flex',
    },
    surveyLogo: {
        maxHeight: '50px',
        margin: 'auto',
    },
    survey1: {
        width: '100%',
        display: 'flex',
        position: 'absolute',
        top: '50px',
        zIndex: 1000
    },
    survey1items: {
        margin: 'auto',
        display: 'flex', 
        width: '50%',
    },
    survey2: {
        width: '100%',
        display: 'flex',
        position: 'absolute',
        top: '50px',
        zIndex: 500
    },
    survey2items: {
        margin: 'auto',
        display: 'flex'
    },
    survey3: {
        width: '100%',
        display: 'flex',
        position: 'absolute',
        top: '50px'
    },
    survey3items: {
        margin: 'auto',
        display: 'flex',
        zIndex: 100
    },
    imgItem: {
        margin: 'auto',
        maxHeight: "550px",
        padding: "50px 25px",
        textAlign: 'center'
    },
    img: {
        maxHeight: "550px",
        borderRadius: '3px',
    },
});
