import CookieConsent from "react-cookie-consent";
import './cookie.css';

//https://www.npmjs.com/package/react-cookie-consent
const CookieComponent = () => {
    return (
        <CookieConsent
            debug={true}
            enableDeclineButton
            location="bottom"
            cookieName={'YallaBannana'}
            acceptOnScroll={true}
            acceptOnScrollPercentage={50}
            buttonText={'Allow all'}
            containerClasses={'containerCookie'}
            declineButtonText={'Decline'}
            disableStyles={true}
            contentClasses={'cookie-content'}
            overlayClasses={'overlay-content'}
            buttonWrapperClasses={'btns-cookie'}
        >
            Flipped buttons
        </CookieConsent>
    )
}

export default CookieComponent;