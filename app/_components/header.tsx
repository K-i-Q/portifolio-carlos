import Link from "next/link";

export default function Header() {
    return (
        <>
            <nav className="w-full flex items-center justify-center">
                <ul className="flex space-x-4">
                    <li className="cursor-pointer">
                       <Link href='/'>Início</Link> 
                    </li>
                    <li className="cursor-pointer">
                       <Link href='/sobre'>Sobre</Link> 
                    </li>
                    <li className="cursor-pointer">
                       <Link href='/contato'>Contato</Link> 
                    </li>
                </ul>
            </nav>
        </>
    )
}