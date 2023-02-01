import React from "react";
import {Link} from "react-router-dom";
import { Outlet } from "react-router-dom";

export function Layout() {

    return <div><header>
        <h1 className="title">Mijn Notities</h1>
        <h2>Notes - Example</h2>
    </header>
        <nav>
            <ul>
                <li><Link to="/">Alle notities</Link></li>
                <li><Link to="create">Niewe notities</Link></li>
            </ul>
        </nav>
        <div>
            <Outlet />
        </div>
    </div>
}

