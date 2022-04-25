import styles from "./TinyCart.module.css"

import Button from "../../UI/Button/Button"
import { ShoppingCart } from "@mui/icons-material"
import NotificationBubble from "../../UI/NotificationBubble/NotificationBubble"

const TinyCart = () => {
    return <Button className={styles.cart} style = "dark">
        <ShoppingCart/>
        <h2>Your Cart</h2>
        <NotificationBubble count = {2} />
    </Button>
}
export default TinyCart