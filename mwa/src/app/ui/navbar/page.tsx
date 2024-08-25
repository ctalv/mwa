import Link from 'next/link'

export default function Page() {
    return (
    <nav>
        <div className='navbar'>
        <div className='brand'></div>
        </div>
        <div className='navmenu'>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/projects">Projects</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
                <li>
                    <Link href="/client">Client</Link>
                </li>
            </ul>
        </div>
    </nav>
    );
  }