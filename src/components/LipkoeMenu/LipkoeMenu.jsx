import {TheHeader} from "./TheHeader/TheHeader";
import {motion, useTransform, useViewportScroll} from "framer-motion";
import './styles.css';

export const LipkoeMenu = () => {

    const {scrollY} = useViewportScroll();

    //в каких перделах работаем ( на 300 шапка займет конечный размер)
    const offsetY = [0, 300];

    const marginTop = useTransform(scrollY, offsetY, offsetY); //чтобы текст не прятался

    return (
        <div style={{ position: 'relative' }}>
            <TheHeader offsetY={offsetY} scrollY={scrollY}/>
            <motion.div
                className="section"
                style={{ backgroundColor: 'maroon',  marginTop}}
            >
                <h1>Hello StackBlitz!</h1>
                <p>Start editing to see some magic happen :)</p>
            </motion.div>
            <div className="section" style={{ backgroundColor: 'peru' }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ea,
                libero aliquam explicabo aliquid modi sint quae obcaecati voluptatibus
                voluptatem.
            </div>
        </div>
    );
}