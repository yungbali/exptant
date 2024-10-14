'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Amplify } from 'aws-amplify'
import awsconfig from '../../aws-exports'

Amplify.configure(awsconfig)

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-indigo-100 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-md"
      >
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Thank You!</h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            We've successfully added you to our waitlist. We'll be in touch soon with more information about Expectant Harmony's services.
          </p>
        </div>
        <div className="mt-8 space-y-6">
          <div>
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Return to Home
              </motion.button>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
