import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Klipo - Plan and publish your short videos',
  description:
    'Klipo helps creators and businesses plan, schedule and publish short-form videos to their TikTok account from one place.',
};

const features = [
  {
    title: 'Connect your TikTok account',
    description:
      'Sign in with TikTok (Login Kit) and authorize Klipo to publish on your behalf. You can revoke access at any time.',
  },
  {
    title: 'Upload and schedule videos',
    description:
      'Upload a video, write the caption, choose who can view it and pick the date and time. Klipo publishes it for you through the TikTok Content Posting API.',
  },
  {
    title: 'Keep everything in a calendar',
    description:
      'See every scheduled and published video on a single calendar, edit or delete scheduled posts and keep your content plan organized.',
  },
];

export default function About() {
  return (
    <div className="flex flex-col gap-[48px] pt-[40px]">
      <section className="flex flex-col gap-[20px] max-w-[720px]">
        <h1 className="text-[44px] leading-[52px] font-bold">
          Plan and publish your short videos with Klipo
        </h1>
        <p className="text-[18px] text-white/80">
          Klipo is a video planning tool for creators and businesses. Connect
          your TikTok account, schedule your videos and let Klipo publish them
          at the right time.
        </p>
        <div className="flex gap-[12px] flex-wrap">
          <Link
            href="/auth"
            className="bg-[#612BD3] rounded-[8px] px-[20px] py-[12px] hover:opacity-90"
          >
            Get started
          </Link>
          <Link
            href="/auth/login"
            className="border border-white/30 rounded-[8px] px-[20px] py-[12px] hover:bg-white/10"
          >
            Sign in
          </Link>
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-[16px]">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="bg-[#1A1919] rounded-[12px] p-[20px] flex flex-col gap-[8px]"
          >
            <h2 className="text-[18px] font-semibold">{feature.title}</h2>
            <p className="text-white/70 text-[15px]">{feature.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
