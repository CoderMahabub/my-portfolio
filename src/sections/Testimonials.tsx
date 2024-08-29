import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import grainImage from "@/assets/images/grain.jpg";
import { Card } from "@/components/Card";

const testimonials = [
  {
    name: "Jimmy Jordan",
    position: "Head of Design @ Stop Bullying",
    text: "CoderMahabub is very good with his work. He delivered as per the expectation. Went out of his way to make sure I 100% satisfied. Thank you so much.",
    avatar: memojiAvatar1,
  },
  {
    name: "Megal Vpage",
    position: "Web Developer @ Vpage",
    text: "Awesome service, great communicator, and made sure I was happy with the final product. I highly recommended his services and will definitely be a returning client!",
    avatar: memojiAvatar2,
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
    <div className="py-16">
      <div className="container">
        <SectionHeader
          eyebrow="Happy Clients"
          title="What Clients Say About Me"
          description="Do not Just take my word for it. See what my clients have to say about
        my work."
        />
        <div className="mt-16 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex gap-8 flex-none">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="max-w-xs">
                <div className="flex gap-4 items-center">
                  <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="max-h-full"
                    />
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-white/40">
                      {testimonial.position}
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-sm">{testimonial.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
