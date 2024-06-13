import "../../index.css";
import {NavLink} from "react-router-dom";
import HomeSvg from "@/svg/HomeSvg.jsx";
import MusicSvg from "@/svg/MusicSvg.jsx";
import AlbumSvg from "@/svg/AlbumSvg.jsx";
import SettingsSvg from "@/svg/SettingsSvg.jsx";

function Menu() {
    return (
        <nav
            className="h-full w-1/6 main-color border-r-4 px-1 py-2
            border-r-gray-700 flex flex-col"
        >
            <ul className=" flex flex-col gap-2 h-full">
                <li>
                    <NavLink
                        className="p-3 second-color text-xl rounded-xl hover:hover-color transition flex gap-3 items-center"
                        to="/"
                    >
                        <HomeSvg/>
                        <span>Home</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className="p-3 second-color text-xl rounded-xl hover:hover-color transition flex gap-3 items-center"
                        to="/Music"
                    >
                        <MusicSvg/>
                        <span>Music</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className="p-3 second-color text-xl rounded-xl hover:hover-color transition flex gap-3 items-center"
                        to="/Albums"
                    >
                        <AlbumSvg/>
                        <span>Albums</span>
                    </NavLink>
                </li>
                <li className="mt-auto ">
                    <NavLink
                        className="p-3 second-color text-xl rounded-xl hover:hover-color transition flex gap-3 items-center"
                        to="/Settings"
                    >
                        <SettingsSvg/>
                        <span>Settings</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Menu;