export default function Introduction() {
  return (
    <section className="py-20 container mx-auto px-4">
      <div className="flex flex-col gap-12 md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <svg
            width="400"
            height="300"
            viewBox="0 0 400 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Website wireframe illustration"
            className="w-full h-auto"
          >
            <rect
              x="10"
              y="10"
              width="380"
              height="280"
              rx="8"
              fill="#2A2A29"
            />
            <rect x="10" y="10" width="380" height="30" rx="8" fill="#3A3A39" />
            <circle
              cx="30"
              cy="25"
              r="5"
              fill="#FF5F56"
              className="cursor-pointer"
            />
            <circle
              cx="50"
              cy="25"
              r="5"
              fill="#FFBD2E"
              className="cursor-pointer"
            />
            <circle
              cx="70"
              cy="25"
              r="5"
              fill="#27C93F"
              className="cursor-pointer"
            />
            <rect
              x="90"
              y="17"
              width="280"
              height="16"
              rx="8"
              fill="#1A1A19"
              className="cursor-text"
            />
            <rect
              x="30"
              y="60"
              width="340"
              height="40"
              rx="4"
              fill="#859F3D"
              fillOpacity="0.6"
            />
            <rect
              x="30"
              y="110"
              width="200"
              height="20"
              rx="4"
              fill="#31511E"
              fillOpacity="0.6"
            />
            <rect
              x="30"
              y="140"
              width="340"
              height="60"
              rx="4"
              fill="#859F3D"
              fillOpacity="0.4"
            />
            <rect
              x="30"
              y="210"
              width="160"
              height="60"
              rx="4"
              fill="#31511E"
              fillOpacity="0.8"
            />
            <rect
              x="200"
              y="210"
              width="170"
              height="60"
              rx="4"
              fill="#859F3D"
              fillOpacity="0.5"
            />
          </svg>
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">
            Passionate Front-End Developer
          </h2>
          <p className="text-lg mb-6">
            With a keen eye for design and a love for clean, efficient code, I
            specialize in creating beautiful, responsive websites that provide
            seamless user experiences. My journey in web development is driven
            by a constant desire to learn and innovate.
          </p>
          <div className="w-48 h-1 bg-olive-300"></div>
        </div>
      </div>
    </section>
  );
}
