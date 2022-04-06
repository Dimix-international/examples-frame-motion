import {motion} from "framer-motion";
import  './button.css';


export const Button = (props) => {
    const {
        text,
        handleClick = Function.prototype, //заглушка если не передали
    } = props;

    return (
        <motion.button
            className={'btn'}
            whileHover={{
                backgroundColor:'#ddd',
            }}
            whileTap={{
                //когда кликаем и удерживаем (active)
                backgroundColor:'#ссс',
            }}
            onClick={handleClick}
        >
            {text}
        </motion.button>
    )
}