import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full p-4 shadow-md bg-white sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
      <Link href="/"><h1 className="text-3xl font-bold text-blue-600">AIBlog</h1></Link>
        <nav>
          <ul className="flex gap-6">
            <li>
              <Link href="/" className="hover:text-blue-600">
                Blogs
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-600">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-600">
                About Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
