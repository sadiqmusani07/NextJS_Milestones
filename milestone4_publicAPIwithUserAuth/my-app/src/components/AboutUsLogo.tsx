import { FaHooli, FaLyft, FaLeaf, FaStripe, FaAws, FaRedditAlien } from "react-icons/fa";

export default function AboutUsLogo() {
  return (
    <section className="px-4 py-16 bg-gray-100 text-center">
      {/* First Text Block */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold font-montserrat text-gray-900 mb-4">Big Companies Are Here</h2>
        <p className="text-base font-montserrat text-gray-600 mb-4">
          Problems trying to resolve the conflict between <br />
          the two major realms of Classical physics: Newtonian mechanics
        </p>
      </div>

      {/* Logos Section */}
      <div className="flex flex-wrap justify-center space-x-8 gap-8 px-4 mt-8 w-full">
        {/* Hooli Logo with FaHooli Icon */}
        <div className="flex justify-center items-center mb-4 w-full sm:w-auto text-gray-600">
          <FaHooli size={120} />
        </div>

        {/* Lyft Logo with FaLyft Icon */}
        <div className="flex justify-center items-center mb-4 w-full sm:w-auto text-gray-600">
          <FaLyft size={120} />
        </div>

        {/* Leaf-like Logo */}
        <div className="flex justify-center items-center mb-4 w-full sm:w-auto text-gray-600">
          <FaLeaf size={120} />
        </div>

        {/* Stripe Logo with FaStripe Icon */}
        <div className="flex justify-center items-center mb-4 w-full sm:w-auto text-gray-600">
          <FaStripe size={120} />
        </div>

        {/* AWS Logo */}
        <div className="flex justify-center items-center mb-4 w-full sm:w-auto text-gray-600">
          <FaAws size={120} />
        </div>

        {/* Reddit Alien Logo with FaRedditAlien Icon */}
        <div className="flex justify-center items-center mb-4 w-full sm:w-auto text-gray-600">
          <FaRedditAlien size={120} />
        </div>
      </div>
    </section>
  );
}
