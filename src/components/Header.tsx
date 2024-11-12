import Link from "next/link"
import "@/app/styles/Header.css"
export default function Header(){
return(
    <div >
        <ul className="Header">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">about</Link>
        </li>       
        <li>
          <Link href="/contact-us">contact-us</Link>
        </li>
      </ul>
    </div>
)
};