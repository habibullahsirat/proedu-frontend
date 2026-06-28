const courses = [
  {
    title: "Fundamental Of UI/UX Design",
    desc: "Some quick example text to build on the card title and make up the bulk of the card.",
    price: "Price : 20$",
    img: "img.png",
  },
  {
    title: "Javascript Basic to Advanced",
    desc: "Some quick example text to build on the card title and make up the bulk of the card.",
    price: "Price : 20$",
    img: "img.png",
  },
  {
    title: "Fullstack Web Development",
    desc: "Some quick example text to build on the card title and make up the bulk of the card.",
    price: "Price : 20$",
    img: "img.png",
  },
  {
    title: "Digital Marketing",
    desc: "Some quick example text to build on the card title and make up the bulk of the card.",
    price: "Price : 20$",
    img: "img.png",
  },
  {
    title: "Photography Basic Rules",
    desc: "Some quick example text to build on the card title and make up the bulk of the card.",
    price: "Price : 20$",
    img: "img.png",
  },
  {
    title: "Motion Graphics",
    desc: "Some quick example text to build on the card title and make up the bulk of the card.",
    price: "Price : 20$",
    img: "img.png",
  },
];

export default function Courses() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-[1720px] px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-[#1D1D1D] md:text-4xl lg:text-5xl">
            Discover Our Popular Courses
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {courses.map((course, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl border bg-white shadow-sm transition hover:shadow-lg"
            >
              <div className="flex flex-col md:flex-row">
                <div
                  className="h-60 w-full bg-cover bg-center md:h-auto md:w-56"
                  style={{
                    backgroundImage: "url(img.png)",
                  }}
                />

                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <h3 className="mb-3 text-xl font-semibold text-[#4A4A4A]">
                      {course.title}
                    </h3>

                    <p className="text-gray-600">{course.desc}</p>
                  </div>

                  <h4 className="mt-6 text-xl font-bold text-[#289BDE]">
                    {course.price}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="rounded-lg bg-[#289BDE] px-8 py-3 font-semibold text-white transition hover:opacity-90">
            See More Courses
          </button>
        </div>
      </div>
    </section>
  );
}
