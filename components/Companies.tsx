const companies = [
  {
    id: 1,
    name: "Coursera",
    logo: "logo1.png",
  },
  {
    id: 2,
    name: "Udemy",
    logo: "logo2.png",
  },
  {
    id: 3,
    name: "FedEx",
    logo: "logo3.png",
  },
  {
    id: 4,
    name: "Education",
    logo: "logo4.png",
  },
  {
    id: 5,
    name: "Elecom",
    logo: "logo5.png",
  },
  {
    id: 6,
    name: "Indeed",
    logo: "logo6.png",
  },
];

export default function Companies() {
  return (
    <section className="pb-20">
      <div className="mx-auto max-w-[1720px] px-4">
        <h2 className="mb-12 text-center text-3xl font-bold lg:text-5xl">
          Trusted by over 800+ companies
        </h2>

        <div className="grid grid-cols-2 gap-8 text-center sm:grid-cols-3 lg:grid-cols-6">
          {companies.map((company) => (
            <div
              key={company.id}
              className="rounded-lg p-6 font-bold text-gray-500 transition hover:shadow-md"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="max-w-full h-12 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
