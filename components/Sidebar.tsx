"use client";

import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import { HiHome } from "react-icons/hi";
import { LuChevronLast, LuListTodo } from "react-icons/lu";
import { AiOutlineAudio } from "react-icons/ai";
import { IoVideocamOutline } from "react-icons/io5";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { MdOutlineInsertPhoto } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { LuChevronFirst } from "react-icons/lu";
import SidebarItem from "./SidebarItem";
import Box from "./Box";
import { RxHamburgerMenu } from "react-icons/rx";



import { FaReact } from "react-icons/fa";
import { Disclosure } from "@headlessui/react";
import Header from "./Header";

interface SidebarProps {
    children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({
    children
}) => {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);


    const routes = useMemo(() => [
        {
            icon: HiHome,
            label: 'Home',
            active: pathname !== '/search',
            href: '/'
        },
        {
            icon: LuListTodo,
            label: 'To-do',
            active: pathname === '/list',
            href: '/list',
        },
        {
            icon: AiOutlineAudio,
            label: 'Audio',
            active: pathname === '/audio',
            href: '/audio',
        },
        {
            icon: IoVideocamOutline,
            label: 'Video',
            active: pathname === '/video',
            href: '/video',
        },
        {
            icon: MdOutlineInsertPhoto,
            label: 'Photo',
            active: pathname === '/insert',
            href: '/insert',
        },
        {
            icon: MdOutlineCalendarMonth,
            label: 'Calendar',
            active: pathname === '/calendar',
            href: '/calendar',
        },
        {
            icon: MdLocationOn,
            label: 'Location',
            active: pathname === '/location',
            href: '/location',
        }
        
    ], [pathname]);

    return (
        
            <div className="flex h-full right">
                <main className="h-full flex-1 overflow-y-auto py-2">
                    {children}
                </main>
            </div>
    );
};

export default Sidebar;