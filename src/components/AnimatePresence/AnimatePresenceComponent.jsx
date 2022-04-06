//для удаления/добавления элементов в DOM с анимацией

import {Collapsible} from "./components/Collapsible";
import {Filter} from "./components/Filter/Filter";
import {data} from "./components/Filter/data";

export const AnimatePresenceComponent = () => {
    return (
        <>
            <Collapsible
            title={'Toggle content'}
        >
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Accusantium at atque autem distinctio dolor, explicabo,
                    ipsam iure molestiae nobis praesentium sunt velit?
                    Architecto distinctio explicabo ipsa ipsam libero nemo
                    nobis.
                </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Accusantium at atque autem distinctio dolor, explicabo,
                    ipsam iure molestiae nobis praesentium sunt velit?
                    Architecto distinctio explicabo ipsa ipsam libero nemo
                    nobis.
                </p>
            </div>
        </Collapsible>
            <Filter
                data={data}
            />
        </>
    )
}