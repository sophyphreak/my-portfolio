import { useState, FormEvent, ChangeEvent } from 'react';
import Head from 'next/head';
import StatusBar from '../components/StatusBar';

const fieldClass =
  'mt-2 h-11 w-full border-x-0 border-t-0 border-b border-bone/35 bg-transparent px-0 font-serif text-[1rem] text-bone placeholder:text-bone/30 focus:border-caution focus:outline-none focus:ring-0';

const labelClass = 'mono block text-[0.66rem] uppercase tracking-[0.2em] text-halftone';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setStatus('idle');
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ 'form-name': 'contact', ...formData }).toString(),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Contact form submission failed');
        }
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(() => setStatus('error'));
  };

  return (
    <>
      <Head>
        <title>Contact &middot; Andrew Horn</title>
        <meta name="description" content="Contact Andrew Horn about full-stack engineering roles." />
      </Head>
      <StatusBar />
      <main className="min-h-screen">
        <div className="container max-w-3xl py-16 md:py-24">
          <p className="num">§C · Contact</p>
          <h1 className="display-1 mt-6">
            Send a message<br className="hidden sm:inline" />{' '}
            about an engineering role.
          </h1>
          <div className="mt-6 h-px w-24 bg-bone/40" />
          <p className="lede mt-6 max-w-[60ch]">
            Hiring for a senior or staff full-stack role, want to discuss a
            project, or curious about the People Counter pipeline? Drop a note
            below.
          </p>

          <form
            name="contact"
            method="POST"
            data-netlify="true"
            onSubmit={handleSubmit}
            className="mt-12 border-t border-bone/25 pt-8"
          >
            <input type="hidden" name="form-name" value="contact" />

            <div className="flex items-baseline justify-between gap-4">
              <span className="num">Form C &middot; Inbound</span>
              <span className="mono text-[0.66rem] uppercase tracking-[0.16em] text-halftone">
                Replies within 2 business days
              </span>
            </div>

            <div className="mt-8 grid gap-7 sm:grid-cols-2">
              <label className="block">
                <span className={labelClass}>Name</span>
                <input
                  id="name" name="name" required
                  value={formData.name} onChange={handleChange}
                  className={fieldClass}
                />
              </label>
              <label className="block">
                <span className={labelClass}>Email</span>
                <input
                  id="email" name="email" type="email" required
                  value={formData.email} onChange={handleChange}
                  className={fieldClass}
                />
              </label>
            </div>

            <label className="mt-7 block">
              <span className={labelClass}>Message</span>
              <textarea
                id="message" name="message" required rows={6}
                value={formData.message} onChange={handleChange}
                placeholder="A short note is fine. Role, team, what you&apos;re trying to ship."
                className="mt-2 w-full resize-none border border-bone/30 bg-transparent p-3 font-serif text-[1rem] text-bone placeholder:text-bone/30 focus:border-caution focus:outline-none focus:ring-0"
              />
            </label>

            <div className="mt-8 flex flex-wrap items-center gap-5">
              <button type="submit" className="cta">
                Send <span aria-hidden="true">&rarr;</span>
              </button>
              <p className="mono text-[0.66rem] uppercase tracking-[0.16em] text-halftone">
                No tracking &middot; No mailing list
              </p>
            </div>

            {status === 'success' && (
              <p className="mono mt-6 text-[0.78rem] text-caution">
                &gt; message sent. talk soon.
              </p>
            )}
            {status === 'error' && (
              <p className="mono mt-6 text-[0.78rem] text-caution">
                &gt; something went wrong. try again in a moment.
              </p>
            )}
          </form>
        </div>
      </main>
    </>
  );
}
