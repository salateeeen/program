import Link from "next/link";

export default function Navigation() {
    return (
        <ul>
            <li>
                <Link href={"/"}>Home</Link>
            </li>
            <li>
                <Link href={"/bookings"}>Bookings</Link>
            </li>
            <li>
                <Link href={"/farms"}>farms</Link>
            </li>
        </ul>
    )
}


