import { Outlet } from "react-router-dom";

export function Layout() {

    return <div><header>
        <h1 className="title">Mijn Notities</h1>
        <h2>Notes - Example</h2>
    </header>
        <div>
            <Outlet />
        </div>
    </div>

}

