import {motion} from "framer-motion";

export const ActiveLine = () => {
    return (
        <motion.div
            layoutId={'activeItem'} //уникальное имя
            style={{
                width:'calc(100% - 10px)',
                height: '4px',
                position:'absolute',
                bottom: '-6px',
                left: '5px',
                backgroundColor: 'rgb(255,0,0)'
            }}
        />

    )
}