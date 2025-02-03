// src/app/page.tsx
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';  // Social media icons

export default function AboutUsSection() {
  return (
    <main className="bg-gray-50">
      
      {/* Top Section with Stats */}
      <section className="bg-white py-16 text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="text-gray-700">
            <p className="text-4xl font-semibold">15K</p>
            <p className="text-sm text-gray-500">Happy Customers</p>
          </div>
          <div className="text-gray-700">
            <p className="text-4xl font-semibold">150K</p>
            <p className="text-sm text-gray-500">Monthly Visitors</p>
          </div>
          <div className="text-gray-700">
            <p className="text-4xl font-semibold">15</p>
            <p className="text-sm text-gray-500">Countries, Worldwide</p>
          </div>
          <div className="text-gray-700">
            <p className="text-4xl font-semibold">100+</p>
            <p className="text-sm text-gray-500">Top Partners</p>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 text-center bg-gray-100 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto">
          <div className="relative">
            <img
              src="/assets/AboutVideo.png" // Replace with your image path
              alt="Video Preview"
              className="w-full max-w-lg h-auto object-cover rounded-lg mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="py-16 text-center bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <img
                src="/assets/team_06.png" // Replace with your team member image
                alt="Team Member 1"
                className="w-48 h-48 mx-auto mb-4" // Adjust size as needed
              />
              <p className="font-semibold">Username</p>
              <div className="flex justify-center space-x-4 mt-2">
                <a href="#" className="text-blue-500">
                  <FaFacebook />
                </a>
                <a href="#" className="text-blue-500">
                  <FaTwitter />
                </a>
                <a href="#" className="text-blue-500">
                  <FaInstagram />
                </a>
              </div>
            </div>
            {/* Team Member 2 */}
            <div className="text-center">
              <img
                src="/assets/team_07.png" // Replace with your team member image
                alt="Team Member 2"
                className="w-48 h-48 mx-auto mb-4" // Adjust size as needed
              />
              <p className="font-semibold">Username</p>
              <div className="flex justify-center space-x-4 mt-2">
                <a href="#" className="text-blue-500">
                  <FaFacebook />
                </a>
                <a href="#" className="text-blue-500">
                  <FaTwitter />
                </a>
                <a href="#" className="text-blue-500">
                  <FaInstagram />
                </a>
              </div>
            </div>
            {/* Team Member 3 */}
            <div className="text-center">
              <img
                src="/assets/team_04.png" // Replace with your team member image
                alt="Team Member 3"
                className="w-48 h-48 mx-auto mb-4" // Adjust size as needed
              />
              <p className="font-semibold">Username</p>
              <div className="flex justify-center space-x-4 mt-2">
                <a href="#" className="text-blue-500">
                  <FaFacebook />
                </a>
                <a href="#" className="text-blue-500">
                  <FaTwitter />
                </a>
                <a href="#" className="text-blue-500">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
