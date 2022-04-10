import {motion, AnimatePresence, AnimateSharedLayout} from "framer-motion";
import {useState} from "react";
import {Button} from "./Button";
import './filter.css';

export const Filter = ({data}) => {
    const [cards, setCards] = useState(data);
    const [selected, setSelected] = useState(0);

    const buttons = data.reduce((acc,el) => {
        //собираем в новый массив по условию
        if(acc.includes(el.category)) return acc;

        return [...acc, el.category]; //собираем массив строк уникальных с наименов категорий
    }, ['all']);

    const handleFilter = (selector) => {
        if(selector === 'all') {
            return setCards(data);
        }
        setCards(data.filter(el => el.category === selector))
    }

    return (
        <AnimateSharedLayout>
        <motion.div layout>
            <motion.div style={{
                backgroundColor: '#f1f1f1'
            }}>
                {
                    buttons.map((btn, index) => (
                        <Button
                            key={btn}
                            text={btn}
                            handleClick={() => {
                                handleFilter(btn);
                                setSelected(index);
                            }}
                            isSelected={selected === index}
                        />
                    ))
                }
            </motion.div>
                <motion.div
                    layout //если размеры меняются, пускай будут с анимацией - не будет деформаий
                    style={{
                        overflow: 'hidden',
                        maxWidth: 210,
                        border: '1px solid #eee',
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
                                    layout
                                    key={card.title}
                                    className={'filterDiv'}
                                    initial={{
                                        opacity: 0,
                                    }}
                                    animate={{
                                        opacity: 1
                                    }}
                                    exit={{
                                        opacity: 0,
                                    }}
                                    transition={{
                                        duration: 1
                                    }}
                                >
                                    {card.title}
                                </motion.div>
                            ))
                        }
                    </AnimatePresence>
                </motion.div>
             </motion.div>
        </AnimateSharedLayout>
    )
}