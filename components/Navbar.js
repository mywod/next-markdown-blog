import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
       
        <Image src="/banner.png" width={300} height={150}/>
      </div>
      <Link href="/"><a>Home</a></Link>
      <Link href="/about"><a>About</a></Link>
      <Link href="/ninjas/"><a>Ninja Listing</a></Link>
    </nav>
);
}
 
export default Navbar;