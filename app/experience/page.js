'use client'

import { motion } from 'framer-motion'
import Container from "@/components/Container";

const events = [
  {
    date: '2023',
    title: 'Position Name',
    company: 'Company Name',
    description: 'Leading the front-end team in developing cutting-edge web applications.',
    image: '/placeholder.svg?height=150&width=150'
  },
  {
    date: '2023',
    title: 'Position Name',
    company: 'Company Name',
    description: 'Leading the front-end team in developing cutting-edge web applications.',
    image: '/placeholder.svg?height=150&width=150'
  }
]

export default function Page() {
  return (
    <Container className="relative">
      <h1 className="text-3xl sm:text-5xl font-bold mt-4 md:mt-8 text-center">My Journey</h1>
      <div className="absolute md:left-1/2 transform md:-translate-x-1/2 w-1 top-32 bottom-4 md:bottom-8 bg-olive-700" />
      {events.map((event, index) => (
        <motion.div
          key={index}
          className={`relative md:w-1/2 pl-8 text-right md:text-left ${index % 2 === 0 ? 'md:pr-8 md:pl-0' : 'md:ml-auto'}`}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <div className={`absolute left-0.5 top-[5.375rem] transform -translate-x-1/2 w-6 h-6 bg-olive-300 rounded-full z-10 ${index % 2 === 0 ? "md:-right-6 md:left-auto" : "md:left-0"}`} />
          <div className="absolute top-24 left-0 right-0 h-1 bg-olive-700" />
            
          <div className="bg-gray-600 relative z-10 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-between md:justify-start items-center mb-4">
              <img src={event.image} alt="" className="w-16 h-16 rounded-full mr-4 object-cover" />
              <div>
                <h3 className="text-xl font-bold">{event.title}</h3>
                <p className="text-olive-300">{event.company}</p>
              </div>
            </div>
            <p className="mb-2">{event.description}</p>
            <div className="flex items-center justify-end">
              <span className=" font-bold text-olive-300 ">{event.date}</span>
            </div>
          </div>
        </motion.div>
      ))}
    </Container>
  )
}