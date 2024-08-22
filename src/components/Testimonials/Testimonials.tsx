import * as React from "react";
import In_Depth from "./In_Depth";

export interface ITestimonial {
  quote: string;
  author: string;
}

export interface IAppProps {}

const testimonials: ITestimonial[] = [
  {
    quote: "This product changed my life! I can't recommend it enough.",
    author: "Jane Doe",
  },
  {
    quote: "Excellent service and fantastic results. Highly recommend!",
    author: "John Smith",
  },
  {
    quote: "A truly outstanding experience from start to finish.",
    author: "Emily Johnson",
  },
];

const Testimonials: React.FC<IAppProps> = () => {
  return (
    <div className="relative z-50 p-[12%] pb-36">
      <div className="sectiontitle">Testimonials </div>
      <div className="subheading-nocolor pb-[2em] pt-8 text-gray-400">
        No new work. We'll get you live within 30 days. Easy installation, 100%
        hassle-free.
      </div>
      <In_Depth />
      <div className="space-y-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="rounded-lg bg-white p-6 shadow-lg">
            <p className="mb-4 text-lg italic">"{testimonial.quote}"</p>
            <p className="text-right font-semibold">- {testimonial.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
