import { decode, encode } from "html-entities"
import Link from "next/link"
import { HiOutlineHome } from "react-icons/hi"

const Navbar = () => {
    // html entity code for spacing:
    const htmlEntity = decode('&nbsp;', { level: 'html5' })

    return (
        <nav className="flex justify-between items-center bg-slate-800 px-8 py-3">
            <Link href={"/"} className="text-white text-2xl font-bold flex items-center">Todo App {htmlEntity}  <HiOutlineHome size={24} /> </Link>
            <Link href={"/addTopic"} className="bg-green-800 font-bold text-white py-3 px-6 w-fit rounded-full">Add Topic</Link>
        </nav>
    )
}

export default Navbar