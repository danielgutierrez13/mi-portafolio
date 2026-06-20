import { useScrollReveal } from '../../../hooks/useScrollReveal';

function Timestamp() {
  const now = new Date();
  const opts: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' };
  return <span>{now.toLocaleString('es-PE', opts)}</span>;
}

export function ApiCard() {
  const ref = useScrollReveal();

  return (
    <div className="hero__panel reveal" ref={ref}>
      <div className="api-card">
        <div className="api-card__bar">
          <span className="api-card__dot--get">GET</span>
          <span className="api-card__path">/perfil/daniel-gutierrez</span>
        </div>
        <div className="api-card__status">
          <span className="status-pill--ok">200 OK</span>
          <span>34ms</span>
          <Timestamp />
        </div>
        <pre className="api-card__body">
          <code>
            {'{\n'}
            {'  '}<span className="tok-key">&quot;nombre&quot;</span>{': '}<span className="tok-str">&quot;Cesar Daniel Gutiérrez Villegas&quot;</span>{',\n'}
            {'  '}<span className="tok-key">&quot;rol&quot;</span>{': '}<span className="tok-str">&quot;Software Engineer II&quot;</span>{',\n'}
            {'  '}<span className="tok-key">&quot;ubicacion&quot;</span>{': '}<span className="tok-str">&quot;Piura, Perú&quot;</span>{',\n'}
            {'  '}<span className="tok-key">&quot;stack_principal&quot;</span>{': [\n'}
            {'    '}<span className="tok-str">&quot;Java&quot;</span>{', '}<span className="tok-str">&quot;Spring Boot&quot;</span>{',\n'}
            {'    '}<span className="tok-str">&quot;Angular&quot;</span>{', '}<span className="tok-str">&quot;Azure&quot;</span>{'\n'}
            {'  ],\n'}
            {'  '}<span className="tok-key">&quot;experiencia_anios&quot;</span>{': '}<span className="tok-num">4</span>{',\n'}
            {'  '}<span className="tok-key">&quot;disponibilidad&quot;</span>{': '}<span className="tok-str">&quot;open_to_opportunities&quot;</span>{'\n'}
            {'}'}<span className="cursor-blink">|</span>
          </code>
        </pre>
      </div>
    </div>
  );
}
