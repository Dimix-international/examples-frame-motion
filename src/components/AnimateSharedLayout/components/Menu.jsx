import {AnimateSharedLayout} from "framer-motion";
import {useState} from "react";
import {MenuItem} from "./MenuItem";

const menuData = ['Short', 'Very Looooong item', 'Normal item'];

export const Menu = () => {
    const [activeIndex, setActive] = useState(0);

    return (
        <div
            style = {{
                display:'flex',
                backgroundColor:'#eee',
                padding:'1rem',
                borderRadius:'25px'
        }}
        >
            <AnimateSharedLayout>{
                menuData.map((item, index) => (
                    <MenuItem
                        key={item}
                        item={item}
                        isSelected={activeIndex === index}
                        handleClick={() => setActive(index)}
                    />
                ))
            }
            </AnimateSharedLayout>
        </div>
    )
}

