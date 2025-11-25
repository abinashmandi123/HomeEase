import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-center text-center md:text-left px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-xl"
        />
          <h2 className="text-5xl font-extrabold mb-4">Professional Home Services at Your Doorstep</h2>
          <p className="text-lg text-white/90 mb-6">
            Book trusted professionals for cleaning, repairs, beauty, and more — anytime, anywhere.
          </p>
          <Button className="bg-white text-indigo-600 font-semibold px-6 py-2 rounded-lg hover:scale-105 transition">
            Book a Service
          </Button>

        <motion.img
          src="/home-service-illustration.svg"
          alt="Home Service Illustration"
          className="w-full md:w-1/2 mt-8 md:mt-0"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        />
      </section>

      {/* Features Section */}
      <section className="px-8 py-16 bg-white text-gray-800">
        <h3 className="text-3xl font-bold text-center mb-10">Why Choose HomeEase?</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Expert Professionals", desc: "Trained and verified experts for every service." },
            { title: "Instant Booking", desc: "Book your desired service in just a few taps." },
            { title: "Affordable Pricing", desc: "Transparent and competitive rates for all services." },
          ].map((feature, idx) => (
            <Card key={idx} className="shadow-lg hover:scale-105 transition">
              <CardContent className="p-6 text-center">
                <h4 className="font-semibold text-xl mb-2">{feature.title}</h4>
                <p className="text-gray-600">{feature.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-center py-6 text-sm text-gray-400">
        © {new Date().getFullYear()} HomeEase. All rights reserved.
      </footer>
    </div>
  )
}

export default Home
