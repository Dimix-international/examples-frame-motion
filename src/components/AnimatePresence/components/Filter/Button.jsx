import {motion} from "framer-motion";
import  './button.css';
import {BgSelector} from "./BgSelector";


export const Button = (props) => {
    const {
        text,
        handleClick = Function.prototype, //заглушка если не передали
        isSelected,
    } = props;

    return (
        <motion.button
            layout
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
            {isSelected && <BgSelector />}
            <motion.span
                animate={{
                    color:isSelected ? '#fff' : '#000',
                }}
                style={{
                    position:'relative',
                }}
            >
                {text}
            </motion.span>
        </motion.button>
    )
}