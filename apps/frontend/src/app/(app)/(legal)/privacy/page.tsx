import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Klipo Privacy Policy',
  description: 'How Klipo collects, uses and protects your data.',
};

const sections = [
  {
    title: '1. Who we are',
    body: [
      'Klipo is a video planning tool that lets you schedule and publish short-form videos to your TikTok account. This policy explains what data we handle and why.',
    ],
  },
  {
    title: '2. Data we collect',
    body: [
      'Account data: your name, email address and the password you choose (stored hashed).',
      'TikTok data: when you connect TikTok, we receive your TikTok open ID, display name, profile picture and the access and refresh tokens needed to publish on your behalf. We only use the permissions you approve on the TikTok authorization screen.',
      'Content you create: the videos, captions and scheduling settings you add to Klipo.',
      'Technical data: basic logs such as IP address and browser type, used for security and troubleshooting.',
    ],
  },
  {
    title: '3. How we use your data',
    body: [
      'We use your data to run Klipo: to authenticate you, to store and schedule your posts, and to publish them to TikTok at the time you choose. We do not sell your data and we do not use your TikTok data for advertising.',
    ],
  },
  {
    title: '4. Sharing',
    body: [
      'We share your content and tokens only with TikTok, as needed to publish your posts, and with infrastructure providers that host Klipo and process data on our behalf. We may disclose data if required by law.',
    ],
  },
  {
    title: '5. Storage and security',
    body: [
      'Access tokens and credentials are stored on our servers and are protected with access controls. We keep your data for as long as your account is active.',
    ],
  },
  {
    title: '6. Your choices',
    body: [
      'You can disconnect your TikTok account in Klipo at any time, which removes the stored tokens, and you can also revoke Klipo in your TikTok app settings under connected apps.',
      'You can request access to, correction of or deletion of your account and data by contacting us. When you delete your account, we delete your content and connected account data, except where we must keep it by law.',
    ],
  },
  {
    title: '7. Children',
    body: [
      'Klipo is not intended for children under the minimum age required to use TikTok in their country, and we do not knowingly collect their data.',
    ],
  },
  {
    title: '8. Changes to this policy',
    body: [
      'We may update this policy from time to time. The latest version is always available on this page.',
    ],
  },
];

export default function Privacy() {
  return (
    <div className="flex flex-col gap-[24px] pt-[40px] max-w-[760px]">
      <h1 className="text-[36px] font-bold">Privacy Policy</h1>
      {sections.map((section) => (
        <section key={section.title} className="flex flex-col gap-[8px]">
          <h2 className="text-[20px] font-semibold">{section.title}</h2>
          {section.body.map((paragraph) => (
            <p key={paragraph} className="text-white/80 text-[15px]">
              {paragraph}
            </p>
          ))}
        </section>
      ))}
    </div>
  );
}
