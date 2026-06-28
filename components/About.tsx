export default function About() {
  return (
    <section className="pb-20">
      <div className="mx-auto max-w-[1720px] px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl bg-[#F4FAFD]">
          <div className="grid items-center lg:grid-cols-2">
            <div
              className="min-h-[350px] bg-cover bg-right lg:min-h-[700px]"
              style={{
                backgroundImage: "url(/man.jpg)",
              }}
            />

            <div className="p-8 md:p-12 lg:p-16">
              <h2 className="mb-6 text-3xl font-bold text-[#1D1D1D] lg:text-5xl">
                Explore The eLearning Institute
              </h2>

              <p className="mb-8 leading-8 text-gray-600">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.
              </p>

              <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
                <div>
                  <h3 className="text-4xl font-bold text-[#1D1D1D]">3.2K+</h3>

                  <p className="mt-2 text-gray-600">Online Course</p>
                </div>

                <div>
                  <h3 className="text-4xl font-bold text-[#1D1D1D]">600+</h3>

                  <p className="mt-2 text-gray-600">Expert Members</p>
                </div>

                <div>
                  <h3 className="text-4xl font-bold text-[#1D1D1D]">1K+</h3>

                  <p className="mt-2 text-gray-600">Rating & Review</p>
                </div>
              </div>

              <button className="mt-10 rounded-lg bg-[#289BDE] px-8 py-3 font-semibold text-white transition hover:opacity-90">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
