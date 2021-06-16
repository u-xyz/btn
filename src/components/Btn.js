import PropTypes from 'prop-types';
import {useRef, useEffect} from 'react';

function Btn(props) {

    const btnRef = useRef(null);

    useEffect(() => {
        if (props.btnClicked && btnRef && btnRef.current) {
            btnRef.current.click();
        }
    }, [props.btnClicked])

    const handleClick = (e) => {
        props.clickHandler(e)
    }

    const btnStyling = {
        backgroundColor: props.btnType === 'primary' ? '#1583e3' : '#ffffff',
        border: props.btnType === 'primary' ? props.btnBorder : 'solid #cccccc',
        color: props.btnType === 'primary' ? props.btnColor : '#cccccc',
        padding: props.btnPadding,
        fontSize: props.btnFontSize
    }


    const iconStyling = {
        marginLeft: props.iconOnly ? "auto" : props.iconMarginLeft,
        marginRight: props.iconOnly ? "auto" : props.iconMarginRight
    }

    return (
        <button style={{...btnStyling}} onClick={handleClick} type={props.btnFunction} ref={btnRef}>
            {
                props.showLoader ?
                    props.iconOnly ?
                        <i className={props.loaderIconClassName} style={{...iconStyling}}/> :
                        <><i className={props.loaderIconClassName} style={{...iconStyling}}/>{props.loadingText}</>
                    :
                    props.iconOnly ? <i className={props.iconClassName} style={{...iconStyling}}/> :
                        <><i className={props.iconClassName} style={{...iconStyling}}/>{props.mainText}</>
            }
        </button>
    )
}

Btn.propTypes = {
    btnType: PropTypes.oneOf(['primary', 'secondary']).isRequired,
    btnFunction: PropTypes.string,
    btnClicked: PropTypes.bool,
    btnBorder: PropTypes.string,
    btnColor: PropTypes.string,
    btnPadding: PropTypes.string,
    btnFontSize: PropTypes.string,
    iconOnly: PropTypes.bool,
    iconClassName: PropTypes.string,
    iconMarginLeft: PropTypes.string,
    iconMarginRight: PropTypes.string,
    loaderIconClassName: PropTypes.string,
    clickHandler: PropTypes.func,
    loadingText: PropTypes.string,
    mainText: PropTypes.string,
    showLoader: PropTypes.bool
}

Btn.defaultProps = {
    btnFunction: 'button',
    btnClicked: false,
    btnBorder: "none",
    btnColor: "white",
    btnPadding: "12px 24px",
    btnFontSize: "16px",
    iconOnly: false,
    iconMarginLeft: "-12px",
    iconMarginRight: "8px",
    loaderIconClassName: "fa fa-circle-o-notch fa-spin",
    clickHandler: (e) => {
        e.preventDefault();
    },
    loadingText: 'Loading',
    mainText: 'Click',
    showLoader: false,
    iconClassName: 'fa fa-search'
}

export default Btn
