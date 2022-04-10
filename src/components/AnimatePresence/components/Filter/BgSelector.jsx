import {motion} from "framer-motion";

export const BgSelector = () => {
    return (
        <motion.div
            layoutId={'activeMenuItem'}
            style={{
                width:'100%',
                height:'100%',
                position:'absolute',
                left:0,
                top:0,
                backgroundColor: 'red',
                zIndex: 0,
            }}
        />
    )
}