export default function CTA() {
  return (
    <section className="pb-20">
      <div className="mx-auto max-w-[1720px] px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-[#289BDE] px-8 py-12 lg:px-16 lg:py-16">
          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
            <div className="max-w-2xl text-center lg:text-left">
              <h2 className="mb-4 text-3xl font-bold text-white lg:text-5xl">
                Ready to Join?
              </h2>

              <p className="text-gray-100 leading-7">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
            </div>

            <button className="rounded-lg bg-white px-8 py-3 font-semibold text-[#289BDE] transition hover:bg-gray-100">
              Register Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
