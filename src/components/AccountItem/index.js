import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '../Image';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/42a81079b5885e152707b170d63ba2df~c5_100x100.jpeg?x-expires=1688544000&x-signature=dgW3gfVD8oCRPYqT6iS2ZCutcJ0%3D"
                alt="Hoa"
            />
            <div className={cx('info')}>
                <p className={cx('user-title')}>
                    hoaa.hanassii
                    <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />
                </p>
                <span className={cx('user-subtitle')}>Đào Lê Phương Hoa</span>
            </div>
        </div>
    );
}

export default AccountItem;
