import {motion} from "framer-motion";

export const Movie = ({title, poster}) => {
    return (
        <motion.div
            layout={true}
            initial={{
                opacity:0,
                scale:0,
            }}
            animate={{
                opacity:1,
                scale:1,
            }}
            exit={{
                opacity:0,
                scale:0,
            }}
            transition={{
                duration:1
            }}
        >
            <h6>{title}</h6>
            <img src={poster} alt=""/>
        </motion.div>
    )
}