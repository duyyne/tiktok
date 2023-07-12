import { useState, useEffect, useRef } from 'react';

import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmarkCircle, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import { SearchIcon } from '~/components/Icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';

import styles from './Search.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Search() {
    const [isFocus, setIsFocus] = useState(true);
    const [searchValue, setSearchValue] = useState('');
    const [result, setSearchResult] = useState([]);

    const inputRef = useRef();

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3]);
        }, 0);
    }, []);

    const handleHideSearchResult = () => {
        setIsFocus(false);
    };

    const handleShowSearchResult = () => {
        setIsFocus(true);
    };

    return (
        <Tippy
            interactive
            visible={isFocus && result.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('title')}>Accounts</h4>
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideSearchResult}
        >
            <div className={cx('search-area')}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    className={cx('search-input')}
                    placeholder="Search"
                    spellCheck={false}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={handleShowSearchResult}
                />

                {searchValue && (
                    <button
                        onClick={() => {
                            setSearchValue('');
                            setSearchResult([]);
                            inputRef.current.focus();
                        }}
                        className={cx('clear-btn')}
                    >
                        <FontAwesomeIcon icon={faXmarkCircle} />
                    </button>
                )}
                <button className={cx('search-btn')}>
                    <SearchIcon />
                </button>
            </div>
        </Tippy>
    );
}

export default Search;
