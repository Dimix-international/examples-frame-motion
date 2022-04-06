import logo from '../logo.svg';
import '../App.css';
import {motion} from "framer-motion";

export const ExampleApp = () => {

    const pVariant = {
        hidden: {
            x: -1000,
            opacity:0,
        },
        visible: {
            x:0,
            opacity:1,
        },
    }
    const listVariants = {
        visible: i => ({ //i передается в custom
            opacity:1,
            y:0,
            transition: {
                delay: i * 0.5,
            }
        }),
        hidden: {
            opacity: 0,
            y: 100,
        }
    }

    const items = ['Text1','Text2','Text3'];
    return (
        <div className="App">
            <header className="App-header">
                <motion.img
                    src={logo}
                    className="App-logo"
                    alt="logo"
                    initial={{
                        //настройки от какого значения начинать анимацию

                    }}
                    animate={'visible'}
                    transition={{
                        delay:5, //задержка до первой анимации, сек
                        duration:2, //sec
                        repeat: Infinity, //повторения
                        repeatDelay: 2, //задержка между анимациями
                        repeatType: 'reverse', //способ повторения анимации
                        type: 'tween', //тип анимации
                        ease: 'easeIn',
                    }}
                />
                <motion.p
                    initial={'hidden'}
                    animate={{
                        x:0,
                        opacity:1,
                    }}
                    transition={{
                        delay:2,
                        duration:2,
                    }}
                    variants={pVariant}
                >
                    Edit <code>src/App.js</code> and save to reload.
                </motion.p>
                <motion.a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                        //анимация на момент hover
                        scale: 1.3,
                        color: '#fff',
                    }}
                >
                    Learn React
                </motion.a>
                <ul>{
                    items.map((el,i) => (
                        <motion.li
                            key={el}
                            variants={listVariants}
                            initial={'hidden'}
                            animate={'visible'}
                            custom={i} //параметр для вариантов
                        >{el}</motion.li>
                    ))
                }</ul>
            </header>
        </div>
    )
}