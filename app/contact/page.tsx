'use client';
import { FormEvent, useState } from 'react';
type Errors = Partial<Record<'name' | 'email' | 'message', string>>;
const field = 'mt-1 w-full border border-ink/30 bg-transparent px-3 py-2.5';
export default function Contact() {
  const [errors, setErrors] = useState<Errors>({}); const [sent, setSent] = useState(false);
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault(); const d = new FormData(e.currentTarget); const v = (k: string) => String(d.get(k) ?? '').trim(); const err: Errors = {};
    if (v('name').length < 2) err.name = 'Enter your full name.';
    if (!/^\S+@\S+\.\S+$/.test(v('email'))) err.email = 'Enter a valid email address, like name@example.com.';
    if (v('message').length < 10) err.message = 'Tell us a little more (at least 10 characters).';
    setErrors(err);
    if (Object.keys(err).length === 0) { /* TODO: POST to /api/contact once the backend exists. */ setSent(true); }
  }
  return (
    <div className="mx-auto grid max-w-7xl gap-14 px-5 py-16 md:grid-cols-12 md:px-10">
      <div className="md:col-span-5"><h1 className="text-5xl text-evergreen md:text-6xl">Tell us what you are looking for.</h1>
        <address className="mt-10 space-y-1 not-italic text-ink/80"><p>Brickshare Homes Limited</p><p>[TODO: office address], Lagos</p><p><a href="tel:+2340000000000" className="underline">+234 000 000 0000</a></p><p><a href="mailto:hello@brickshare.example" className="underline">hello@brickshare.example</a></p></address>
        <p className="mt-6 text-sm text-ink/70">Instagram · LinkedIn · X (add links)</p>
        <div className="mt-8 flex aspect-[4/3] items-center justify-center border border-dashed border-ink/30 text-sm text-ink/50">Map goes here</div></div>
      <div className="md:col-span-7">{sent ? <p role="status" className="border border-evergreen p-6 text-lg">Thanks. We have your message and will reply within two working days.</p> :
        <form onSubmit={onSubmit} noValidate className="space-y-6">
          {(['name', 'email'] as const).map((k) => (<div key={k}><label htmlFor={k}>{k === 'name' ? 'Full name' : 'Email'}</label><input id={k} name={k} type={k === 'email' ? 'email' : 'text'} className={field} aria-invalid={!!errors[k]} aria-describedby={errors[k] ? `${k}-e` : undefined} />{errors[k] && <p id={`${k}-e`} className="mt-1 text-sm text-brass">{errors[k]}</p>}</div>))}
          <div><label htmlFor="message">Message</label><textarea id="message" name="message" rows={6} className={field} aria-invalid={!!errors.message} aria-describedby={errors.message ? 'message-e' : undefined} />{errors.message && <p id="message-e" className="mt-1 text-sm text-brass">{errors.message}</p>}</div>
          <button className="bg-evergreen px-6 py-3 text-sm text-bone hover:bg-evergreen-deep">Send message</button>
        </form>}</div>
    </div>
  );
}
