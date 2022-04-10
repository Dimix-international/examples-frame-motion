import {motion} from "framer-motion";
import {ActiveLine} from "./ActiveLine";

export const MenuItem = (props) => {
    const {
        item,
        isSelected,
        handleClick = Function.prototype,
    } = props;

    return (
        <motion.div
            onClick={handleClick}
            style={{
                margin:'0 10px',
                fontWeight: 900,
                cursor: 'pointer',
                position:'relative',
            }}
            initial={{
                color: '#000' //не указывать словами
            }}
            animate={{
                color: isSelected ? 'rgba(255,0,0)' : '#000'
            }}
        >
            {
                isSelected && <ActiveLine />
            }
            {item}
        </motion.div>
    )
}