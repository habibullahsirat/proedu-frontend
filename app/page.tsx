// "use client";

// import { useState } from "react";

// const courses = [
//   {
//     title: "Fundamental Of UI/UX Design",
//     desc: "Some quick example text to build on the card title and make up the bulk of the card.",
//     price: "Price : 20$",
//     img: "img.png",
//   },
//   {
//     title: "Javascript Basic to Advanced",
//     desc: "Some quick example text to build on the card title and make up the bulk of the card.",
//     price: "Price : 20$",
//     img: "img.png",
//   },
//   {
//     title: "Fullstack Web Development",
//     desc: "Some quick example text to build on the card title and make up the bulk of the card.",
//     price: "Price : 20$",
//     img: "img.png",
//   },
//   {
//     title: "Digital Marketing",
//     desc: "Some quick example text to build on the card title and make up the bulk of the card.",
//     price: "Price : 20$",
//     img: "img.png",
//   },
//   {
//     title: "Photography Basic Rules",
//     desc: "Some quick example text to build on the card title and make up the bulk of the card.",
//     price: "Price : 20$",
//     img: "img.png",
//   },
//   {
//     title: "Motion Graphics",
//     desc: "Some quick example text to build on the card title and make up the bulk of the card.",
//     price: "Price : 20$",
//     img: "img.png",
//   },
// ];

// const students = [
//   { name: "Awlad Hossain", role: "UIUX Designer", img: "img.png" },
//   { name: "Jannatul Islam", role: "Motion Design", img: "img.png" },
//   { name: "Imran Hossain", role: "Graphic Designer", img: "img.png" },
//   { name: "Nishi Akter", role: "Web Developer", img: "img.png" },
// ];

// const testimonials = [
//   {
//     name: "Awlad Hossain",
//     role: "UI Designer",
//     rating: 4,
//     text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem.",
//     img: "img.png",
//   },
//   {
//     name: "Shanta Akter",
//     role: "Graphic Designer",
//     rating: 4,
//     text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem.",
//     img: "img.png",
//   },
// ];

// const faqs = [
//   {
//     q: "What other services are you compatible with?",
//     a: "There are many variations of passages of available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the generators on the.",
//     open: true,
//   },
//   {
//     q: "I have a technical I need resolved, who do I email?",
//     a: "",
//     open: false,
//   },
//   { q: "What other services are you compatible with?", a: "", open: false },
//   { q: "What other services are you compatible with?", a: "", open: false },
// ];

// const partners = [
//   "Coursera",
//   "Udemy",
//   "FedEx",
//   "EDUCATION",
//   "ELECOM",
//   "indeed",
// ];

// function StarRating({ count = 5, filled = 4 }) {
//   return (
//     <div className="flex gap-0.5">
//       {Array.from({ length: count }).map((_, i) => (
//         <svg
//           key={i}
//           className={`w-5 h-5 ${i < filled ? "text-yellow-400" : "text-yellow-100"}`}
//           fill="currentColor"
//           viewBox="0 0 20 20"
//         >
//           <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//         </svg>
//       ))}
//     </div>
//   );
// }

// export default function LandingPage() {
//   const [openFaq, setOpenFaq] = useState(0);
//   const [testimonialIdx, setTestimonialIdx] = useState(0);

//   return (
//     <div className="font-sans text-gray-800 bg-white">
//       {/* ── NAV ── */}
//       <nav className="flex items-center justify-between px-5 md:px-10 lg:px-[140px] py-4 border-b border-gray-100 sticky top-0 bg-white z-50">
//         <span className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#4A4A4A]">
//           Pro Edu
//         </span>

//         {/* Desktop nav links */}
//         <ul className="hidden lg:flex gap-8 text-[#777777] text-base font-normal">
//           {["Home", "Courses", "Deals", "Success", "About"].map((item) => (
//             <li
//               key={item}
//               className="cursor-pointer hover:text-[#289BDE] transition-colors"
//             >
//               {item}
//             </li>
//           ))}
//         </ul>

//         {/* Hamburger (mobile/tablet) */}
//         <div className="lg:hidden flex items-center gap-3">
//           <button className="border border-[#289BDE] text-[#289BDE] font-semibold text-sm px-4 py-1.5 rounded hidden md:block">
//             Register
//           </button>
//           <button className="p-1">
//             <svg
//               className="w-6 h-6 text-[#4A4A4A]"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth={2}
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             </svg>
//           </button>
//         </div>

//         <button className="hidden lg:block border border-[#289BDE] text-[#289BDE] font-semibold text-lg px-6 py-2 rounded hover:bg-[#289BDE] hover:text-white transition-colors">
//           Register
//         </button>
//       </nav>

//       {/* ── HERO ── */}
//       <section className="mx-5 md:mx-[50px] lg:mx-[140px] mt-4 md:mt-5 rounded relative overflow-hidden">
//         <div
//           className="w-full h-[262px] md:h-[400px] lg:h-[700px] bg-cover bg-center rounded"
//           style={{ backgroundImage: "url(img.png)" }}
//         />
//         <div className="absolute inset-0 bg-[rgba(29,29,29,0.7)] rounded flex flex-col items-center justify-center text-center px-4">
//           {/* Left arrow */}
//           <button className="absolute left-4 md:left-8 lg:left-12 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 border-2 border-white rounded-full flex items-center justify-center">
//             <svg
//               className="w-4 h-4 text-white"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth={2}
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M15 19l-7-7 7-7"
//               />
//             </svg>
//           </button>

//           <h1 className="text-white font-semibold text-xl md:text-4xl lg:text-[65px] leading-tight lg:leading-[85px] mb-3 md:mb-4 max-w-[230px] md:max-w-[380px] lg:max-w-[632px]">
//             Get Started Digital Learning
//           </h1>
//           <p className="text-[#F4F4F4] text-xs md:text-base leading-relaxed mb-4 md:mb-6 max-w-[274px] md:max-w-[573px] lg:max-w-[671px]">
//             It is a long established fact that a reader will be distracted by
//             the readable content of a page when looking at its layout.
//           </p>
//           <button className="bg-[#289BDE] border border-[#289BDE] text-white font-semibold text-sm md:text-lg px-6 md:px-8 py-2 md:py-3 rounded hover:opacity-90 transition-opacity">
//             Get Started
//           </button>

//           {/* Right arrow */}
//           <button className="absolute right-4 md:right-8 lg:right-12 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 border-2 border-white rounded-full flex items-center justify-center">
//             <svg
//               className="w-4 h-4 text-white"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth={2}
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M9 5l7 7-7 7"
//               />
//             </svg>
//           </button>
//         </div>
//       </section>

//       {/* ── COURSES ── */}
//       <section className="px-5 md:px-[50px] lg:px-[140px] py-12 md:py-16">
//         <div className="text-center mb-8 md:mb-10">
//           <h2 className="text-xl md:text-3xl lg:text-[45px] font-semibold text-[#1D1D1D] leading-tight mb-3">
//             Discover Our Popular Courses
//           </h2>
//           <p className="text-[#777777] text-sm md:text-base leading-relaxed max-w-[606px] mx-auto">
//             It is a long established fact that a reader will be distracted by
//             the readable content of a page when looking at its layout.
//           </p>
//         </div>

//         {/* Course cards — mobile: vertical stacked; tablet: full-width list; desktop: 2-col grid */}
//         <div className="flex flex-col gap-4 md:gap-5 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:gap-y-6">
//           {courses.map((course, i) => (
//             <div
//               key={i}
//               className="flex border border-[#E8E8E8] rounded overflow-hidden bg-white hover:shadow-md transition-shadow"
//             >
//               {/* Mobile: image on top; md+: image on left */}
//               <div
//                 className="hidden md:block flex-shrink-0 w-[200px] bg-cover bg-center"
//                 style={{ backgroundImage: "url(img.png)" }}
//               />
//               <div className="flex flex-col md:hidden w-full">
//                 <div
//                   className="w-full h-[224px] bg-cover bg-center"
//                   style={{ backgroundImage: "url(img.png)" }}
//                 />
//               </div>
//               <div className="p-4 md:p-5 flex flex-col justify-between flex-1">
//                 <div>
//                   <h3 className="font-semibold text-base md:text-xl lg:text-[25px] text-[#4A4A4A] mb-1 md:mb-2">
//                     {course.title}
//                   </h3>
//                   <p className="text-[#777777] text-sm md:text-base leading-relaxed">
//                     {course.desc}
//                   </p>
//                 </div>
//                 <span className="text-[#289BDE] font-semibold text-base md:text-lg mt-2">
//                   {course.price}
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="flex justify-center mt-8 md:mt-10">
//           <button className="bg-[#289BDE] border border-[#289BDE] text-white font-semibold text-base md:text-lg px-6 py-2.5 md:py-3 rounded hover:opacity-90 transition-opacity">
//             See More Courses
//           </button>
//         </div>
//       </section>

//       {/* ── ABOUT INSTITUTE ── */}
//       <section className="mx-5 md:mx-[50px] lg:mx-[140px] rounded bg-[#F4FAFD] overflow-hidden mb-12 md:mb-16">
//         <div className="flex flex-col md:flex-row">
//           <div
//             className="w-full h-[224px] md:w-[334px] md:h-auto lg:w-[600px] bg-cover bg-center flex-shrink-0"
//             style={{ backgroundImage: "url(img.png)" }}
//           />
//           <div className="p-6 md:p-8 lg:p-16 flex flex-col justify-center">
//             <h2 className="text-xl md:text-3xl lg:text-[45px] font-semibold text-[#1D1D1D] leading-tight mb-4 lg:mb-6">
//               Explore The elearning Institute
//             </h2>
//             <p className="text-[#777777] text-sm md:text-base leading-relaxed mb-6 md:mb-8">
//               There are many variations of passages of Lorem Ipsum available,
//               but the majority have suffered alteration in some form, by
//               injected humour, or randomised words which don't look even
//               slightly believable. If you are going to use a passage of Lorem
//               Ipsum, you need to be sure.
//             </p>

//             {/* Stats */}
//             <div className="flex gap-6 md:gap-10 mb-6 md:mb-8 flex-wrap">
//               {[
//                 { val: "3.2K+", label: "Online Course" },
//                 { val: "600+", label: "Expert member" },
//                 { val: "1k+", label: "Rating & Review" },
//               ].map((stat) => (
//                 <div key={stat.label}>
//                   <div className="text-2xl md:text-3xl lg:text-[45px] font-semibold text-[#1D1D1D] leading-tight">
//                     {stat.val}
//                   </div>
//                   <div className="text-[#777777] text-sm md:text-base md:text-lg font-medium">
//                     {stat.label}
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <button className="bg-[#289BDE] border border-[#289BDE] text-white font-semibold text-base md:text-lg px-6 py-2.5 rounded self-start hover:opacity-90 transition-opacity">
//               Read More
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* ── CTA BANNER ── */}
//       <section className="mx-5 md:mx-[50px] lg:mx-[140px] bg-[#289BDE] rounded px-6 md:px-12 py-10 md:py-12 lg:py-16 flex flex-col md:flex-row items-center justify-between gap-6 mb-12 md:mb-16">
//         <div className="text-center md:text-left">
//           <h2 className="text-white font-semibold text-2xl md:text-3xl lg:text-[45px] mb-2">
//             Ready to join?
//           </h2>
//           <p className="text-[#F4F4F4] text-sm md:text-base leading-relaxed max-w-[528px]">
//             It is a long established fact that a reader will be distracted by
//             the readable content of a page when looking at its layout.
//           </p>
//         </div>
//         <button className="bg-white text-[#289BDE] font-semibold text-base md:text-lg px-6 py-2.5 md:py-3 rounded border border-white hover:bg-gray-50 transition-colors flex-shrink-0">
//           Register Now
//         </button>
//       </section>

//       {/* ── STUDENTS ── */}
//       <section className="px-5 md:px-[50px] lg:px-[140px] mb-12 md:mb-16">
//         <h2 className="text-xl md:text-3xl lg:text-[45px] font-semibold text-[#1D1D1D] leading-tight mb-2 md:mb-3 text-center md:text-left">
//           Meet Our Successfull Students
//         </h2>
//         <p className="text-[#777777] text-sm md:text-base leading-relaxed mb-8 text-center md:text-left max-w-[556px]">
//           It is a long established fact that a reader will be distracted by the
//           readable content of a page when looking at its layout.
//         </p>

//         {/* Mobile: single column scroll; Tablet: 2-col; Desktop: 4-col */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6">
//           {students.map((s) => (
//             <div
//               key={s.name}
//               className="border border-[#E8E8E8] rounded overflow-hidden bg-white"
//             >
//               <div
//                 className="w-full h-[300px] md:h-[343px] bg-cover bg-center"
//                 style={{ backgroundImage: "url(img.png)" }}
//               />
//               <div className="p-4 md:p-5">
//                 <div className="font-semibold text-lg text-[#4A4A4A]">
//                   {s.name}
//                 </div>
//                 <div className="text-[#777777] text-sm md:text-base">
//                   {s.role}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="flex justify-center mt-8">
//           <button className="bg-[#289BDE] border border-[#289BDE] text-white font-semibold text-base md:text-lg px-6 py-2.5 rounded hover:opacity-90 transition-opacity">
//             View All
//           </button>
//         </div>
//       </section>

//       {/* ── TESTIMONIALS ── */}
//       <section className="px-5 md:px-[50px] lg:px-[140px] mb-12 md:mb-16">
//         <div className="text-center mb-8 md:mb-10">
//           <h2 className="text-xl md:text-3xl lg:text-[45px] font-semibold text-[#1D1D1D] mb-2 md:mb-3">
//             Some Students Feedback
//           </h2>
//           <p className="text-[#777777] text-sm md:text-base leading-relaxed max-w-[606px] mx-auto">
//             It is a long established fact that a reader will be distracted by
//             the readable content of a page when looking at its layout.
//           </p>
//         </div>

//         <div className="relative flex items-center gap-4">
//           {/* Prev */}
//           <button
//             onClick={() =>
//               setTestimonialIdx(
//                 (prev) =>
//                   (prev - 1 + testimonials.length) % testimonials.length,
//               )
//             }
//             className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#E6F6FF] border border-[#E6F6FF] flex items-center justify-center hover:bg-[#289BDE] hover:text-white transition-colors group"
//           >
//             <svg
//               className="w-5 h-5 text-[#289BDE] group-hover:text-white"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth={2}
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M15 19l-7-7 7-7"
//               />
//             </svg>
//           </button>

//           {/* Cards — desktop shows 2, mobile/tablet shows 1 */}
//           <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-5 lg:gap-6">
//             {testimonials.map((t, i) => {
//               // On mobile show one at a time; on lg show all
//               const isVisible = i === testimonialIdx;
//               return (
//                 <div
//                   key={i}
//                   className={`${isVisible ? "block" : "hidden"} lg:block border border-[#E8E8E8] rounded p-5 md:p-6 bg-white`}
//                 >
//                   <div className="flex justify-between items-start mb-4">
//                     <svg
//                       className="w-10 h-8 text-[#D2D2D2]"
//                       fill="currentColor"
//                       viewBox="0 0 40 32"
//                     >
//                       <path d="M0 32V19.2C0 8.533 5.333 2.133 16 0l2.4 4C13.067 5.333 10.4 8 10.4 12H18V32H0zm22 0V19.2C22 8.533 27.333 2.133 38 0l2.4 4C35.067 5.333 32.4 8 32.4 12H40V32H22z" />
//                     </svg>
//                     <StarRating filled={t.rating} />
//                   </div>
//                   <p className="text-[#777777] text-sm md:text-base leading-relaxed mb-5">
//                     {t.text}
//                   </p>
//                   <div className="flex items-center gap-3">
//                     <div
//                       className="w-10 h-10 md:w-[42px] md:h-[42px] rounded-full bg-cover bg-center flex-shrink-0"
//                       style={{ backgroundImage: "url(img.png)" }}
//                     />
//                     <div>
//                       <div className="font-semibold text-base text-[#4A4A4A]">
//                         {t.name}
//                       </div>
//                       <div className="text-[#777777] text-sm md:text-base">
//                         {t.role}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           {/* Next */}
//           <button
//             onClick={() =>
//               setTestimonialIdx((prev) => (prev + 1) % testimonials.length)
//             }
//             className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#289BDE] flex items-center justify-center hover:opacity-90 transition-opacity"
//           >
//             <svg
//               className="w-5 h-5 text-white"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth={2}
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M9 5l7 7-7 7"
//               />
//             </svg>
//           </button>
//         </div>

//         <div className="flex justify-center mt-8">
//           <button className="bg-[#289BDE] border border-[#289BDE] text-white font-semibold text-base md:text-lg px-6 py-2.5 rounded hover:opacity-90 transition-opacity">
//             View All
//           </button>
//         </div>
//       </section>

//       {/* ── FAQ ── */}
//       <section className="px-5 md:px-[50px] lg:px-[140px] mb-12 md:mb-16">
//         <div className="text-center mb-8 md:mb-10">
//           <h2 className="text-xl md:text-3xl lg:text-[45px] font-semibold text-[#1D1D1D] mb-2 md:mb-3">
//             Frequently Asked Questions
//           </h2>
//           <p className="text-[#777777] text-sm md:text-base leading-relaxed max-w-[606px] mx-auto">
//             It is a long established fact that a reader will be distracted by
//             the readable content of a page when looking at its layout.
//           </p>
//         </div>

//         <div className="max-w-[872px] mx-auto flex flex-col gap-3">
//           {faqs.map((faq, i) => (
//             <div key={i} className="rounded overflow-hidden">
//               <button
//                 onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
//                 className={`w-full flex items-center justify-between px-5 py-5 text-left font-semibold text-sm md:text-base lg:text-xl text-[#4A4A4A] transition-colors ${
//                   openFaq === i
//                     ? "bg-[rgba(40,155,222,0.1)] rounded-t"
//                     : "bg-white border border-[#E8E8E8] rounded"
//                 }`}
//               >
//                 <span className="pr-4">{faq.q}</span>
//                 <svg
//                   className={`w-4 h-4 flex-shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`}
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth={1.5}
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M19 9l-7 7-7-7"
//                   />
//                 </svg>
//               </button>
//               {openFaq === i && faq.a && (
//                 <div className="bg-[rgba(40,155,222,0.05)] border-x border-b border-[rgba(40,155,222,0.15)] rounded-b px-5 py-4 text-[#777777] text-sm md:text-base leading-relaxed">
//                   {faq.a}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ── TRUSTED COMPANIES ── */}
//       <section className="px-5 md:px-[50px] lg:px-[140px] mb-12 md:mb-16">
//         <h2 className="text-xl md:text-3xl lg:text-[45px] font-semibold text-[#1D1D1D] text-center mb-6 md:mb-8">
//           Trusted by over 800+ companies
//         </h2>
//         <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 lg:gap-14">
//           {partners.map((p) => (
//             <div
//               key={p}
//               className="text-lg md:text-xl font-bold text-gray-500 hover:text-gray-700 transition-colors"
//             >
//               {p}
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ── FOOTER ── */}
//       <footer className="bg-[#161616] text-white py-10 md:py-14 px-5">
//         <div className="flex flex-col items-center gap-4 md:gap-5">
//           <div className="text-3xl md:text-4xl lg:text-[40px] font-semibold">
//             Pro Edu
//           </div>

//           {/* Social icons */}
//           <div className="flex gap-3 md:gap-4">
//             {["f", "tw", "in", "tk"].map((icon) => (
//               <div
//                 key={icon}
//                 className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#242424] flex items-center justify-center cursor-pointer hover:bg-[#289BDE] transition-colors"
//               >
//                 <span className="text-white text-xs font-bold">{icon}</span>
//               </div>
//             ))}
//           </div>

//           <p className="text-[#E8E8E8] text-sm md:text-base text-center leading-relaxed">
//             Office 41, Zawaya Building, Ghala Muscat, Sultanate of Oman
//           </p>
//           <p className="text-[#E8E8E8] text-xs md:text-sm text-center">
//             Privacy Policy | Terms of use
//           </p>
//         </div>
//       </footer>
//     </div>
//   );
// }

// //////////////////////////////////////////////////////////////////////
"use client";
import Image from "next/image";
import { useState } from "react";
import Hero from "@/components/Hero";
import Courses from "@/components/Courses";
import About from "@/components/About";
import CTA from "@/components/CTA";

const students = [
  { name: "Awlad Hossain", role: "UIUX Designer", img: "/user1.jpg" },
  { name: "Jannatul Islam", role: "Motion Design", img: "user2.jpg" },
  { name: "Imran Hossain", role: "Graphic Designer", img: "user3.jpg" },
  { name: "Nishi Akter", role: "Web Developer", img: "user4.jpg" },
];

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

const faqs = [
  {
    q: "What other services are you compatible with?",
    a: "There are many variations of passages of available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the generators on the.",
    open: true,
  },
  {
    q: "I have a technical I need resolved, who do I email?",
    a: "",
    open: false,
  },
  { q: "What other services are you compatible with?", a: "", open: false },
  { q: "What other services are you compatible with?", a: "", open: false },
];

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

export default function LandingPage() {
  const [openFaq, setOpenFaq] = useState(0);
  const [testimonialIdx, setTestimonialIdx] = useState(0);

  return (
    <div className="min-h-screen overflow-x-hidden bg-white font-sans text-gray-800">
      {/* ================= HERO ================= */}
      <Hero />

      {/* Courses */}
      {/* ================= COURSES ================= */}
      <Courses />

      {/* About Institute */}
      {/* ================= ABOUT ================= */}
      <About />

      {/* CTA */}
      {/* ================= CTA ================= */}

      <CTA />

      {/* Students */}
      {/* ================= STUDENTS ================= */}

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

      {/* Testimonials */}
      {/* ================= TESTIMONIALS ================= */}

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

                      <StarRating
                        filled={testimonials[testimonialIdx].rating}
                      />
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

                    <p className="leading-8 text-gray-600">
                      {testimonial.text}
                    </p>

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

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold lg:text-5xl">
              Frequently Asked Questions
            </h2>

            <p className="mt-4 text-gray-600">Everything you need to know.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="overflow-hidden rounded-xl border">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                  className="flex w-full items-center justify-between bg-white px-6 py-5 text-left font-semibold"
                >
                  {faq.q}

                  <span className="text-xl">
                    {openFaq === index ? "−" : "+"}
                  </span>
                </button>

                {openFaq === index && faq.a && (
                  <div className="bg-gray-50 px-6 py-5 text-gray-600">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

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
    </div>
  );
}
