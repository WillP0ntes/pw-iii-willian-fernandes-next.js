import Link from 'next/link';

export default function Navbar() {
    return (
        <nav>
            <Link href="#inicial">Início</Link>
            <Link href="#sobre">Sobre</Link>
            <Link href="#projetos">Projetos</Link>
            <Link href="#contato">Contato</Link>
        </nav>
    );
}
