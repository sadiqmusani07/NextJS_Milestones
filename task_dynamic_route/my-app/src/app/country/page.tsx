import Link from "next/link";

export default function Country() {
     return(
         <>
         <h1>List of Countries Available in my List</h1>
         <ul>
            <li><Link href="/country/pakistan">PAKISTAN</Link></li> <br />
            <li><Link href="/country/india">INDIA</Link></li> <br />
            <li><Link href="/country/afghanistan">AFGHANISTAN</Link></li> <br />
            <li><Link href="/country/china">CHINA</Link></li> <br />
            <li><Link href="/country/bangladesh">BANGLADESH</Link></li> <br />
         </ul>
         </>
     )
 }