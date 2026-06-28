const students = [
  { name: "Awlad Hossain", role: "UIUX Designer", img: "/user1.jpg" },
  { name: "Jannatul Islam", role: "Motion Design", img: "user2.jpg" },
  { name: "Imran Hossain", role: "Graphic Designer", img: "user3.jpg" },
  { name: "Nishi Akter", role: "Web Developer", img: "user4.jpg" },
];

export default function Students() {
  return (
    <section className="pb-20">
      <div className="mx-auto max-w-[1720px] px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-center text-3xl font-bold text-[#1D1D1D] md:text-4xl lg:text-left lg:text-5xl">
            Meet Our Successful Students
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600 lg:mx-0 lg:text-left">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {students.map((student) => (
            <div
              key={student.name}
              className="overflow-hidden rounded-xl border bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* <div
                  className="aspect-[4/5] bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${student.img})`,
                  }}
                /> */}
              <div className="overflow-hidden">
                <img
                  src={student.img}
                  alt={student.name}
                  className="h-full w-full object-center"
                />
              </div>
              {/* <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={student.img}
                    alt={student.name}
                    fill
                    className="object-cover"
                  />
                </div> */}

              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#4A4A4A]">
                  {student.name}
                </h3>

                <p className="mt-2 text-gray-600">{student.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="rounded-lg bg-[#289BDE] px-8 py-3 font-semibold text-white transition hover:opacity-90">
            View All
          </button>
        </div>
      </div>
    </section>
  );
}
