'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const JoinWaitlist = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement waitlist submission logic
    console.log('Submitted:', { name, email, message })
  }

  const formFields = [
    { id: 'name', label: 'Name', type: 'text', value: name, onChange: setName },
    { id: 'email', label: 'Email', type: 'email', value: email, onChange: setEmail },
    { id: 'message', label: 'Message (Optional)', type: 'textarea', value: message, onChange: setMessage },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg text-center"
      >
        <h2 className="text-3xl font-bold mb-4">Join Waitlist</h2>
        <p className="text-gray-600 mb-8">Be the first to experience our revolutionary product!</p>
        <motion.form
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          {formFields.map((field) => (
            <motion.div key={field.id} variants={itemVariants}>
              <label htmlFor={field.id} className="block text-sm font-medium text-gray-700">
                {field.label}
              </label>
              {field.type === 'textarea' ? (
                <textarea
                  id={field.id}
                  value={field.value}
                  onChange={(e) => field.onChange(e.target.value)}
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              ) : (
                <input
                  type={field.type}
                  id={field.id}
                  value={field.value}
                  onChange={(e) => field.onChange(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  required={field.id !== 'message'}
                />
              )}
            </motion.div>
          ))}
          <div className="flex items-center justify-center">
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Join Waitlist
            </motion.button>
          </div>
        </motion.form>
      </motion.div>
    </div>
  )
}

export default JoinWaitlist
