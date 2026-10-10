import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Klipo Terms of Service',
  description: 'The terms that apply when you use Klipo.',
};

const sections = [
  {
    title: '1. About Klipo',
    body: [
      'Klipo is a web application that lets you plan, schedule and publish short-form videos to your own TikTok account. By creating an account or using Klipo you agree to these terms.',
    ],
  },
  {
    title: '2. Your account',
    body: [
      'You must provide accurate registration details and keep your login credentials secure. You are responsible for everything that happens under your account.',
      'You must be old enough to use TikTok in your country and you may only connect TikTok accounts that you own or are authorized to manage.',
    ],
  },
  {
    title: '3. Connecting TikTok',
    body: [
      'When you connect your TikTok account, you authorize Klipo to publish or upload content on your behalf and to read basic profile information. Klipo only acts when you create or schedule a post.',
      'You can disconnect your TikTok account in Klipo or revoke access in your TikTok settings at any time. Use of TikTok remains subject to the TikTok Terms of Service and Community Guidelines.',
    ],
  },
  {
    title: '4. Your content',
    body: [
      'You keep all rights to the videos and captions you upload. You grant Klipo the limited right to store, process and transmit your content only to provide the service, including delivering it to TikTok at the time you choose.',
      'You are responsible for your content and must have the rights to publish it. You must not upload content that is illegal, infringes the rights of others or violates TikTok policies.',
    ],
  },
  {
    title: '5. Acceptable use',
    body: [
      'You may not misuse the service, attempt to access it by unauthorized means, interfere with its operation, send spam or use it to violate any law or third-party platform rules.',
    ],
  },
  {
    title: '6. Availability and changes',
    body: [
      'Klipo is provided on an "as is" basis. We may change, suspend or discontinue features at any time. Publishing depends on third-party services such as TikTok, so we cannot guarantee that every scheduled post will be delivered.',
    ],
  },
  {
    title: '7. Termination',
    body: [
      'You can stop using Klipo and delete your account at any time. We may suspend or terminate accounts that violate these terms.',
    ],
  },
  {
    title: '8. Liability',
    body: [
      'To the extent permitted by law, Klipo is not liable for indirect or consequential damages, loss of data, loss of reach or any action taken by TikTok against your account.',
    ],
  },
  {
    title: '9. Changes to these terms',
    body: [
      'We may update these terms from time to time. Continuing to use Klipo after an update means you accept the new terms.',
    ],
  },
];

export default function Terms() {
  return (
    <div className="flex flex-col gap-[24px] pt-[40px] max-w-[760px]">
      <h1 className="text-[36px] font-bold">Terms of Service</h1>
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
