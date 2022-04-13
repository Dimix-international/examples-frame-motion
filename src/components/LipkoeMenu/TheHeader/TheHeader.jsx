import {motion, useTransform} from "framer-motion";

//useTransform - для динамических значений
export const TheHeader = ({offsetY, scrollY}) => {

    const heightSizes = [250,50];

    const height = useTransform(scrollY, offsetY, heightSizes);
    //scrollY - отталкиваемся от scrollY, работаем в диапазоне offsetY (изменения высоты)
    //, и в зависимости от количества проскроленного offsetY, heightSizes будет меняться в ее пределах

    const imgSizes = [100,35];
    const fontSizes = ['40px','20px'];
    const imgWidth = useTransform(scrollY, offsetY, imgSizes);
    const fontSize = useTransform(scrollY, offsetY, fontSizes);

    const pOpacity = useTransform(scrollY , [20,150], [1,0]); //исчезает в диапазоне [20,150]
    const btnOpacity = useTransform(scrollY , [135,300], [0,1]); //исчезает в диапазоне [20,150]
    //пока не достигли 135px ничего не вычисляем, потом от 135 до 300 изменяем значения от 0 до 1

    return (
        <motion.header
            className="header"
            style={{
                height,
            }}
        >
            <div className="flex">
                <motion.img
                    src="https://octocourses.com/static/7bcadc9ec2ba0513c32383ea8ff863c7/630fb/framer-motion.png"
                    style={{
                        width:imgWidth,
                    }}
                />
                <motion.h2
                    style={{
                        fontSize,
                    }}
                >
                    Hello Coders!
                </motion.h2>
                <motion.button
                style={{
                    marginLeft: 'auto',
                    opacity:btnOpacity,
                }}>
                    Click me!
                </motion.button>
            </div>
            <motion.p
                style={{
                    marginTop: '30px',
                    opacity:pOpacity,
                }}
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad odit porro
                quasi iusto fuga blanditiis, eius amet ea ab omnis voluptatem
                perferendis.
                <button
                    style={{
                        display: 'block',
                        marginTop: '10px',
                    }}
                >
                    Click me!
                </button>
            </motion.p>
        </motion.header>
    );
}