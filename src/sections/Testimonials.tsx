import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import test from "node:test";

const testimonials = [
  {
    name: "Jimmy Jordan",
    position: "Head of Design @ Stop Bullying",
    text: "CoderMahabub is very good with his work. He delivered as per the expectation. Went out of his way to make sure I 100% satisfied. Thank you so much.",
    avatar: memojiAvatar2,
  },
  {
    name: "Megal Vpage",
    position: "Web Developer @ Vpage",
    text: "Awesome service, great communicator, and made sure I was happy with the final product. I highly recommended his services and will definitely be a returning client!",
    avatar: memojiAvatar1,
  },

  {
    name: "Tem Darrell",
    position: "CEO @ InnovateCo",
    text: "Very responsive to my needs communicates very well. A real pleasure to work with and I highly recommend him .. Definitely will work with him again.",
    avatar: memojiAvatar3,
  },
  {
    name: "Emily Icypr",
    position: "Product Manager @ ICYPR",
    text: "Incredible work. officially the new person I am coming to for all my website creative designs. THANK YOU..",
    avatar: memojiAvatar4,
  },
  {
    name: "Michael Brown",
    position: "Director of IT @ MegaCorp",
    text: "Great communications. Super fast. The seller was able to help downgrade the size of my tables in Word Press..",
    avatar: memojiAvatar5,
  },
];

export const TestimonialsSection = () => {
  return (
    <div>
      <SectionHeader
        eyebrow="Happy Clients"
        title="What Clients Say About Me"
        description="Do not Just take my word for it. See what my clients have to say about
        my work."
      />
      <div>
        {testimonials.map((testimonial) => (
          <div key={testimonial.name}>
            <Image src={testimonial.avatar} alt={testimonial.name} />
            <div>{testimonial.name}</div>
            <div>{testimonial.position}</div>
            <div>{testimonial.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
