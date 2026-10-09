import styles from './PageLoader.module.scss';
import { Spinner } from '../Spinner/Spinner';

export const PageLoader = () => {
    return (
        <div className={styles.loader}>
            <Spinner />
        </div>
    )
}