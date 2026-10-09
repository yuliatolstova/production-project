import classes from './PageError.module.scss'
import {classNames} from 'shared/lib/classNames/classNames';
import {useTranslation} from "react-i18next";
import {Button} from "@storybook/react/demo";

interface Props {
    className?: string;
};

export const PageError = ({className}: Props) => {
    const {t} = useTranslation()

    const reloadPage = () =>{
        location.reload();
    }

    return (
        <div className={classNames(classes.pageError, {}, [className])}>
            <p>{t('Произошла ошибка')}</p>
            <Button onClick={reloadPage}>
                {t('Обновить страницу')}
            </Button>
        </div>
    );
};