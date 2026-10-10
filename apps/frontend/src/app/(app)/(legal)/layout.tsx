import { ReactNode } from 'react';
import Link from 'next/link';
import { LogoTextComponent } from '@gitroom/frontend/components/ui/logo-text.component';

export const dynamic = 'force-dynamic';

export default async function LegalLayout({
  children,
}: {
  children: ReactNode;
}) {
  const contactEmail = process.env.CONTACT_EMAIL;
  return (
    <div className="bg-[#0E0E0E] min-h-screen w-screen text-white flex flex-col">
      <header className="w-full max-w-[1000px] mx-auto px-[20px] py-[24px] flex items-center justify-between gap-[20px] flex-wrap">
        <Link href="/about" aria-label="Klipo">
          <LogoTextComponent />
        </Link>
        <nav className="flex items-center gap-[20px] text-[14px]">
          <Link href="/terms" className="hover:underline">
            Terms of Service
          </Link>
          <Link href="/privacy" className="hover:underline">
            Privacy Policy
          </Link>
          <Link
            href="/auth/login"
            className="bg-[#612BD3] rounded-[8px] px-[16px] py-[8px] hover:opacity-90"
          >
            Sign in
          </Link>
        </nav>
      </header>
      <main className="w-full max-w-[1000px] mx-auto px-[20px] pb-[60px] flex-1">
        {children}
      </main>
      <footer className="w-full max-w-[1000px] mx-auto px-[20px] py-[24px] text-[13px] text-white/60 border-t border-white/10">
        <div>&copy; {new Date().getFullYear()} Klipo. All rights reserved.</div>
        {!!contactEmail && (
          <div>
            Contact:{' '}
            <a className="underline" href={`mailto:${contactEmail}`}>
              {contactEmail}
            </a>
          </div>
        )}
      </footer>
    </div>
  );
}
