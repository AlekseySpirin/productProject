import {classNames} from "shared/lib/classNames/classNames";
import cls from './SideBar.module.scss'
import React, {useState} from "react";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";
import {LandSwitcher} from "shared/ui/LangSwitcher/LandSwitcher";

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false)

    const onToggle = () => {
        setCollapsed(prev => !prev)
    }


    return (
        <div className={classNames(cls.sidebar, {[cls.collapsed]: collapsed}, [className])}>
            <button onClick={onToggle}>Toggle</button>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LandSwitcher className={cls.lang}/>
            </div>
        </div>
    );
};

