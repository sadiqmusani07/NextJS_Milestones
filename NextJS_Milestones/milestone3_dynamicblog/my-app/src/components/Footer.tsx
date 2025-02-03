export default function Footer() {
    return (
      <footer className="w-full p-4 bg-gray-100 text-center mt-auto">
        <p>&copy; {new Date().getFullYear()} AIBlog. All rights reserved.</p>
      </footer>
    );
  }