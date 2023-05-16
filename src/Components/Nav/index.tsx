import { useState } from 'react';
import { BiHomeAlt, BiInfoCircle, BiMenu, BiMoviePlay } from 'react-icons/bi';
import NavItem from './NavItem';

const defaultIconSize = '1.875rem';

const items = [
    { label: 'Home', icon: <BiHomeAlt size={defaultIconSize} />, active: true },
    { label: 'Movie', icon: <BiMoviePlay size={defaultIconSize} />, active: false },
    { label: 'About', icon: <BiInfoCircle size={defaultIconSize} />, active: false },
];

const NavItemsContainer = () => (
    <>
        {items.map((item, index) => (
            <NavItem item={item} key={index} />
        ))}
    </>
);

const Nav = () => {
    const [isNavMenuMobileOpen, setIsNavMenuMobileOpen] = useState(false);

    const handleOpenMenu = () => {
        setIsNavMenuMobileOpen(!isNavMenuMobileOpen);
    };

    return (
        <nav className="col-span-1 bg-cyan-200">
            <div className="flex md:block mx-4 justify-between items-center">
                <h4 className="uppercase font-bold text-primary py-4 border-b border-cyan-200 md:border-primary text-left md:text-right">
                    Phimmoi.net
                </h4>
                <BiMenu className="cursor-pointer md:hidden block" onClick={handleOpenMenu} size={defaultIconSize} />
            </div>
            <ul className={`mx-4 my-2 ${isNavMenuMobileOpen ? '' : 'hidden'} md:block`}>
                <NavItemsContainer />
            </ul>
        </nav>
    );
};

export default Nav;
