import classNames from 'classnames/bind';
import styles from './More.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

function MenuItems({ data, onclick }) {
    return (
        <div className={cx('language', data.separate)} onClick={onclick}>
            <data.icon className={cx('icon')} />
            <h3>{data.title}</h3>
        </div>
    );
}

export default MenuItems;
