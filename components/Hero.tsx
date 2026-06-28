export default function Hero() {
  return (
    <section className="mx-auto mt-6 max-w-[1720px] px-4 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-2xl">
        <div
          className="h-[400px] sm:h-[500px] lg:h-[700px] w-full bg-cover bg-center"
          style={{
            backgroundImage: "url(/hero.png)",
          }}
        />

        <div className="absolute inset-0 flex items-center justify-center bg-black/60 px-6">
          <div className="max-w-4xl text-center">
            <h1 className="mb-6 text-3xl font-bold leading-tight text-white sm:text-5xl lg:text-7xl">
              Get Started Digital Learning
            </h1>

            <p className="mx-auto mb-8 max-w-3xl text-sm leading-7 text-gray-200 sm:text-lg">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>

            <button className="rounded bg-[#289BDE] px-8 py-4 font-semibold text-white transition hover:opacity-90">
              Get Started
            </button>
          </div>
        </div>

        {/* Left Arrow */}

        <button className="absolute left-3 top-1/2 hidden -translate-y-1/2 rounded-full bg-white/20 p-3 backdrop-blur transition hover:bg-[#289BDE] md:flex">
          <svg
            className="h-5 w-5 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Right Arrow */}

        <button className="absolute right-3 top-1/2 hidden -translate-y-1/2 rounded-full bg-white/20 p-3 backdrop-blur transition hover:bg-[#289BDE] md:flex">
          <svg
            className="h-5 w-5 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
