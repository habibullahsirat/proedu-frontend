"use client";
import { useState } from "react";

const testimonials = [
  {
    name: "Awlad Hossain",
    role: "UI Designer",
    rating: 4,
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem.",
    img: "img.png",
  },
  {
    name: "Shanta Akter",
    role: "Graphic Designer",
    rating: 4,
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem.",
    img: "img.png",
  },
];

function StarRating({ count = 5, filled = 4 }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < filled ? "text-yellow-400" : "text-yellow-100"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  return (
    <section className="pb-20">
      <div className="mx-auto max-w-[1720px] px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-[#1D1D1D] md:text-4xl lg:text-5xl">
            Some Students Feedback
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>

        {/* Desktop Arrows */}

        <div className="hidden items-center justify-between lg:flex">
          <button
            onClick={() =>
              setTestimonialIdx(
                (testimonialIdx - 1 + testimonials.length) %
                  testimonials.length,
              )
            }
            className="rounded-full bg-[#EAF6FD] p-4 transition hover:bg-[#289BDE] hover:text-white"
          >
            ←
          </button>

          <button
            onClick={() =>
              setTestimonialIdx((testimonialIdx + 1) % testimonials.length)
            }
            className="rounded-full bg-[#289BDE] p-4 text-white transition hover:opacity-90"
          >
            →
          </button>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          {testimonials
            .slice(
              testimonialIdx,
              testimonialIdx + (window.innerWidth >= 1024 ? 2 : 1),
            )
            .map((testimonial, index) => (
              <div
                key={index}
                className="rounded-xl border bg-white p-8 shadow-sm"
              >
                <div className="mb-6 flex items-center justify-between">
                  <svg
                    className="h-10 w-10 text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 40 32"
                  >
                    <path d="M0 32V19.2C0 8.533 5.333 2.133 16 0l2.4 4C13.067 5.333 10.4 8 10.4 12H18V32H0zm22 0V19.2C22 8.533 27.333 2.133 38 0l2.4 4C35.067 5.333 32.4 8 32.4 12H40V32H22z" />
                  </svg>

                  <StarRating filled={testimonial.rating} />
                </div>

                <p className="leading-8 text-gray-600">{testimonial.text}</p>

                <div className="mt-8 flex items-center gap-4">
                  <div
                    className="h-14 w-14 rounded-full bg-cover bg-center"
                    style={{
                      backgroundImage: "url(img.png)",
                    }}
                  />

                  <div>
                    <h4 className="font-semibold text-[#4A4A4A]">
                      {testimonial.name}
                    </h4>

                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Mobile Controls */}

        <div className="mt-10 flex items-center justify-center gap-6 lg:hidden">
          <button
            onClick={() =>
              setTestimonialIdx(
                (testimonialIdx - 1 + testimonials.length) %
                  testimonials.length,
              )
            }
            className="rounded-full bg-[#EAF6FD] px-5 py-3"
          >
            ←
          </button>

          <div className="flex gap-2">
            {/* {testimonials.map((_, index) => (

          <div
            key={index}
            className={`h-3 w-3 rounded-full ${
              testimonialIdx === index
                ? "bg-[#289BDE]"
                : "bg-gray-300"
            }`}
          />

        ))} */}
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Mobile */}
              <div className="lg:hidden">
                <div className="rounded-xl border bg-white p-8 shadow-sm">
                  <div className="mb-6 flex items-center justify-between">
                    <svg
                      className="h-10 w-10 text-gray-300"
                      fill="currentColor"
                      viewBox="0 0 40 32"
                    >
                      <path d="M0 32V19.2C0 8.533 5.333 2.133 16 0l2.4 4C13.067 5.333 10.4 8 10.4 12H18V32H0zm22 0V19.2C22 8.533 27.333 2.133 38 0l2.4 4C35.067 5.333 32.4 8 32.4 12H40V32H22z" />
                    </svg>

                    <StarRating filled={testimonials[testimonialIdx].rating} />
                  </div>

                  <p className="leading-8 text-gray-600">
                    {testimonials[testimonialIdx].text}
                  </p>

                  <div className="mt-8 flex items-center gap-4">
                    <div
                      className="h-14 w-14 rounded-full bg-cover bg-center"
                      style={{ backgroundImage: "url(img.png)" }}
                    />

                    <div>
                      <h4 className="font-semibold">
                        {testimonials[testimonialIdx].name}
                      </h4>

                      <p className="text-gray-600">
                        {testimonials[testimonialIdx].role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Desktop */}
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="hidden rounded-xl border bg-white p-8 shadow-sm lg:block"
                >
                  <div className="mb-6 flex items-center justify-between">
                    <svg
                      className="h-10 w-10 text-gray-300"
                      fill="currentColor"
                      viewBox="0 0 40 32"
                    >
                      <path d="M0 32V19.2C0 8.533 5.333 2.133 16 0l2.4 4C13.067 5.333 10.4 8 10.4 12H18V32H0zm22 0V19.2C22 8.533 27.333 2.133 38 0l2.4 4C35.067 5.333 32.4 8 32.4 12H40V32H22z" />
                    </svg>

                    <StarRating filled={testimonial.rating} />
                  </div>

                  <p className="leading-8 text-gray-600">{testimonial.text}</p>

                  <div className="mt-8 flex items-center gap-4">
                    <div
                      className="h-14 w-14 rounded-full bg-cover bg-center"
                      style={{ backgroundImage: "url(img.png)" }}
                    />

                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>

                      <p className="text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() =>
              setTestimonialIdx((testimonialIdx + 1) % testimonials.length)
            }
            className="rounded-full bg-[#289BDE] px-5 py-3 text-white"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
