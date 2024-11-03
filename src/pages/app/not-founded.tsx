    import { Link } from "react-router-dom";

export function NotFounded() {
    return (
        <div className="flex flex-col items-center m-auto">
            <h1 className="text-2xl tracking-tight font-bold">Page not founded</h1>
            <p className="text-xs items-center">
                Back to <span className="text-blue-800 text-base"><Link to="/">Dashboard</Link></span>
            </p>
        </div>
    )
}