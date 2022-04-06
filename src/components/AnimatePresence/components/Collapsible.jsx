import {motion, AnimatePresence} from "framer-motion";
import {useState} from "react";

export const Collapsible = (props) => {
    const {
        title = 'click me',
        children,
    } = props;

    const [isVisible, setVisible] = useState(true);

    const handleVisibility = () => {
        setVisible(prev => !prev)
    }


    return(
        <>
            <div
                onClick={handleVisibility}
                style={{
                    backgroundColor:'#ddd',
                    width:300,
                    padding:'15px 25px',
                    cursor: 'pointer',
                    textAlign: 'center',
                }}
            >
                {title}
            </div>

            <AnimatePresence
                initial={false} //изначально при загрузки страницы не будет анимации
            >
                {
                    isVisible && (
                        <motion.div
                            initial={{
                                height:0,
                            }}
                            animate={{
                                height:'auto',
                            }}
                            exit={{
                                //для отработки анимации при удаление из DOM
                                height:0,
                            }}
                            transition={{
                                duration:1,
                            }}
                            style={{
                                overflow:'hidden', //важно добавить
                            }}
                        >
                            <div
                                style={{
                                padding:'15px 25px',
                                width:298,
                                border: '1px solid #ddd',
                            }}>
                                {children}
                            </div>
                        </motion.div>
                    )
                }
            </AnimatePresence>
        </>
    )
}