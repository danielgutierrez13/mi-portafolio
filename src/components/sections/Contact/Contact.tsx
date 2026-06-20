import { useScrollReveal } from '../../../hooks/useScrollReveal';
import { SectionHead } from '../../ui/SectionHead';
import { Button } from '../../ui/Button';
import { CONTACT } from '../../../data/contact';

interface TerminalProps {
  readonly name: string;
  readonly email: string;
  readonly phone: string;
  readonly location: string;
}

function Terminal({ name, email, phone, location }: TerminalProps) {
  const ref = useScrollReveal();
  const phoneHref = phone.replace(/\s/g, '');

  return (
    <div className="term reveal" ref={ref}>
      <div className="term__bar">
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </div>
      <div className="term__body">
        <div><span className="cmd">$</span> ./contactar.sh</div>
        <div><span className="ok">✓</span> Conexión segura establecida</div>
        <div>&nbsp;</div>
        <div><span className="k">nombre</span>: {name}</div>
        <div><span className="k">correo</span>: <a href={`mailto:${email}`}>{email}</a></div>
        <div><span className="k">telefono</span>: <a href={`tel:${phoneHref}`}>{phone}</a></div>
        <div><span className="k">ubicacion</span>: {location}</div>
        <div><span className="cursor-blink">_</span></div>
      </div>
    </div>
  );
}

interface ContactActionsProps {
  readonly email: string;
  readonly phoneHref: string;
}

function ContactActions({ email, phoneHref }: ContactActionsProps) {
  const ref = useScrollReveal();
  return (
    <div className="contact-actions reveal" ref={ref}>
      <Button variant="primary" href={`mailto:${email}`} icon="mail">Escribir un correo</Button>
      <Button variant="light" href={`tel:${phoneHref}`} icon="phone">Llamar ahora</Button>
    </div>
  );
}

export function Contact() {
  const { eyebrow, heading, description, name, email, phone, phoneHref, location } = CONTACT;

  return (
    <section className="contact" id="contacto">
      <div className="container">
        <SectionHead eyebrow={eyebrow} heading={heading} description={description} />
        <div className="contact__grid">
          <Terminal name={name} email={email} phone={phone} location={location} />
          <ContactActions email={email} phoneHref={phoneHref} />
        </div>
      </div>
    </section>
  );
}
