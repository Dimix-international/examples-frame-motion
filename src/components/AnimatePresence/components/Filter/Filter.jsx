import {motion, AnimatePresence} from "framer-motion";
import {useState} from "react";
import {Button} from "./Button";
import './filter.css';

export const Filter = ({data}) => {
    const [cards, setCards] = useState(data.filter(el => el.category === 'cars'));

    const buttons = data.reduce((acc,el) => {
        //собираем в новый массив по условию
        if(acc.includes(el.category)) return acc;

        return [...acc, el.category]; //собираем массив строк уникальных с наименов категорий
    }, []);

    const handleFilter = (selector) => {
        setCards(data.filter(el => el.category === selector))
    }

    return (
        <div>
            <div>
                {
                    buttons.map(btn => (
                        <Button
                            key={btn}
                            text={btn}
                            handleClick={() => handleFilter(btn)}
                        />
                    ))
                }
            </div>
            <div
                style={{
                    overflow:'hidden',
                    maxWidth: 400
                }}
            >
                <AnimatePresence
                    initial={false}
                    exitBeforeEnter={true} //сначала пропадут элементы (анимация исчезновения)
                    //, потом отрисуются новые (анимация появления)
                >
                    {
                        cards.map(card => (
                            <motion.div
                                key={card.title}
                                className={'filterDiv'}
                                initial={{
                                    opacity:0,
                                }}
                                animate={{
                                    opacity:1
                                }}
                                exit={{
                                    opacity:0,
                                }}
                                transition={{
                                    duration:1
                                }}
                            >
                                {card.title}
                            </motion.div>
                        ))
                    }
                </AnimatePresence>
            </div>
        </div>
    )
}