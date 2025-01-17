import Image from "next/image"
import Link from "next/link"

export default function Hero() {
    return (
       
        
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/placeholder.svg?height=1080&width=1920"
        alt="iRacing background"
        layout="fill"
        objectFit="cover"
        className="absolute z-0"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4">
          <span className="block">Welcome to</span>
          <span className="block text-yellow-400">PUR iRacing Community</span>
        </h1>
        <p className="mt-3 text-base sm:text-lg md:text-xl text-white sm:mt-5 sm:max-w-xl sm:mx-auto md:mt-5">
          Join the fastest growing virtual racing community. Experience thrilling races, improve your skills, and
          connect with passionate drivers.
        </p>
        <div className="mt-8 sm:mt-12">
          <Link
            href="/join"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-yellow-400 hover:bg-yellow-500 md:py-4 md:text-lg md:px-10 transition duration-150 ease-in-out transform hover:scale-105"
          >
            Join the Race
          </Link>
        </div>
      </div>

      {/* Racing line decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-r from-red-500 via-white to-red-500 z-30"></div>
    </div>
  )
}
