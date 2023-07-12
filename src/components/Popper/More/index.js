import classNames from 'classnames/bind';
import styles from './More.module.scss';

import Tippy from '@tippyjs/react/headless';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLanguage } from '@fortawesome/free-solid-svg-icons';
// import { faCircleQuestion, faKeyboard, faMoon } from '@fortawesome/free-regular-svg-icons';

import Header from './Header';
import MenuItems from './MenuItems';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { useState } from 'react';

const cx = classNames.bind(styles);

function More({ children, items = [] }) {
    const [menu, setMenu] = useState([{ data: items }]);
    const currentMenu = menu[menu.length - 1];

    const renderItems = () => {
        return currentMenu.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItems
                    key={index}
                    data={item}
                    onclick={() => {
                        if (isParent) setMenu((prev) => [...prev, item.children]);
                    }}
                />
            );
        });
    };

    return (
        <Tippy
            interactive
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('more')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        {menu.length > 1 && (
                            <Header
                                title="Language"
                                onBack={() => {
                                    setMenu((prev) => prev.slice(0, prev.length - 1));
                                }}
                            />
                        )}
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
            onHide={() => setMenu((prev) => prev.slice(0, 1))}
        >
            {children}
        </Tippy>
    );
}

export default More;
