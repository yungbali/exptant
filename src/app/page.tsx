'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FaHeart, FaBaby, FaSpa, FaCalendar } from 'react-icons/fa'

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Expectant mother"
            layout="fill"
            objectFit="cover"
            className="opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Expectant Harmony</h1>
            <p className="text-xl md:text-2xl mb-8">Nurturing the Journey to Motherhood</p>
            <Link href="/join-waitlist">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-purple-600 font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:shadow-lg"
              >
                Join Our Waitlist
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-12 text-gray-800"
          >
            Our Approach to Maternal Care
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: FaHeart, title: "Compassionate Care", description: "Personalized support for your emotional well-being" },
              { icon: FaBaby, title: "Expert Guidance", description: "Professional advice throughout your journey" },
              { icon: FaSpa, title: "Luxurious Comfort", description: "Premium amenities for ultimate relaxation" },
              { icon: FaCalendar, title: "Flexible Scheduling", description: "Care that fits your lifestyle" }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <feature.icon className="text-5xl mb-4 text-purple-600 mx-auto" />
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-6"
          >
            Experience the Expectant Harmony Difference
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl mb-8"
          >
            Join our waitlist to be among the first to access our premium maternal care services.
          </motion.p>
          <Link href="/join-waitlist">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-purple-600 font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:shadow-lg"
            >
              Join Our Waitlist
            </motion.button>
          </Link>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-12 text-gray-800"
          >
            What Our Clients Say
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Sarah J.", quote: "Expectant Harmony transformed my pregnancy experience. I felt supported and cared for every step of the way." },
              { name: "Emily R.", quote: "The level of care and attention to detail is unmatched. I'm so glad I chose Expectant Harmony for my journey." },
              { name: "Lisa M.", quote: "From the luxurious amenities to the expert staff, everything about Expectant Harmony exceeded my expectations." }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
                <p className="font-semibold text-purple-600">{testimonial.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-4">Expectant Harmony</h3>
              <p>Nurturing the Journey to Motherhood</p>
            </div>
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul>
                <li><Link href="/about" className="hover:text-purple-400">About Us</Link></li>
                <li><Link href="/services" className="hover:text-purple-400">Our Services</Link></li>
                <li><Link href="/join-waitlist" className="hover:text-purple-400">Join Waitlist</Link></li>
                <li><Link href="/contact" className="hover:text-purple-400">Contact</Link></li>
              </ul>
            </div>
            <div className="w-full md:w-1/3">
              <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
              <p>Follow us on social media for updates and tips on maternal wellness.</p>
              {/* Add social media icons here */}
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2023 Expectant Harmony. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
