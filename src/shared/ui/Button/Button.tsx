import cls from './Button.module.scss';
import { classNames } from 'shared/lib/classNames';

export enum ButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    onClick: () => void;
    className?: string;
    theme?: ButtonTheme;
}

export const Button = ({ children, onClick, className, disabled, theme = ButtonTheme.CLEAR }: ButtonProps) => {
    return (
        <button onClick={onClick} className={classNames(cls.Button, {}, [className, cls[theme]])} disabled={disabled}>
            {children}
        </button>
    )
}