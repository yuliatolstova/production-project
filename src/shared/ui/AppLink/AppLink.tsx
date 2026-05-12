import { Link, LinkProps } from "react-router-dom";
import cls from './AppLink.module.scss';
import { classNames } from "shared/lib/classNames";

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
  children: React.ReactNode;
}

export const AppLink = ({ className, to, theme = AppLinkTheme.PRIMARY, children }: AppLinkProps) => {
    return (
        <Link to={to} className={classNames(cls.appLink, {}, [className, cls[theme]])}>
            {children}
        </Link>
    );
};