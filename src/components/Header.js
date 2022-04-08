import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/fire-alert"
const Header = () => {
    return(
        <div className="header-container">
            <h2><Icon icon={locationIcon}></Icon> (Powered By NASA)</h2>
        </div>
    )
}

export default Header;