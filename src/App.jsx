import { useState, useEffect, useRef } from "react";

const COLORS = {
  green: "#40C350",
  greenDark: "#2fa33d",
  greenLight: "#e8f8ea",
  dark: "#121212",
  gray: "#f3f3f3",
  grayMid: "#bfbfbf",
  white: "#ffffff",
  text: "rgba(18,18,18,0.85)",
  textLight: "rgba(18,18,18,0.55)",
  blue: "#334fb4",
};

const styles = {
  body: {
    fontFamily: "'Assistant', sans-serif",
    background: COLORS.white,
    color: COLORS.text,
    margin: 0,
    padding: 0,
    overflowX: "hidden",
  },
  // NAV
  nav: {
    background: COLORS.white,
    borderBottom: `1px solid rgba(18,18,18,0.08)`,
    position: "sticky",
    top: 0,
    zIndex: 100,
    boxShadow: "0 2px 8px rgba(18,18,18,0.06)",
  },
  navInner: {
    maxWidth: 1100,
    margin: "0 auto",
    padding: "0 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: 60,
  },
  navLogo: {
    fontWeight: 700,
    fontSize: 20,
    color: COLORS.green,
    letterSpacing: 1,
    textTransform: "uppercase",
  },
  navCta: {
    background: COLORS.green,
    color: COLORS.white,
    border: "none",
    borderRadius: 40,
    padding: "10px 22px",
    fontWeight: 700,
    fontSize: 14,
    cursor: "pointer",
    boxShadow: "0 4px 5px rgba(64,195,80,0.35)",
    transition: "background 0.2s, transform 0.15s",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  // HERO
  hero: {
    background: `linear-gradient(135deg, #e8f8ea 0%, #ffffff 60%, #f0f7ff 100%)`,
    padding: "60px 20px 50px",
    textAlign: "center",
  },
  heroEyebrow: {
    display: "inline-block",
    background: COLORS.greenLight,
    color: COLORS.green,
    borderRadius: 40,
    padding: "6px 18px",
    fontSize: 13,
    fontWeight: 700,
    letterSpacing: 1.5,
    textTransform: "uppercase",
    marginBottom: 18,
  },
  heroTitle: {
    fontSize: "clamp(2rem, 6vw, 3.2rem)",
    fontWeight: 700,
    color: COLORS.dark,
    lineHeight: 1.15,
    marginBottom: 16,
    maxWidth: 720,
    margin: "0 auto 16px",
  },
  heroSubtitle: {
    fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
    color: COLORS.textLight,
    maxWidth: 560,
    margin: "0 auto 32px",
    lineHeight: 1.6,
  },
  heroCtaBtn: {
    display: "inline-block",
    background: COLORS.green,
    color: COLORS.white,
    borderRadius: 40,
    padding: "18px 48px",
    fontWeight: 700,
    fontSize: 18,
    border: "none",
    cursor: "pointer",
    boxShadow: "0 4px 18px rgba(64,195,80,0.45)",
    transition: "background 0.2s, transform 0.15s, box-shadow 0.2s",
    textTransform: "uppercase",
    letterSpacing: 1,
    textDecoration: "none",
  },
  heroCtaSmall: {
    display: "block",
    fontSize: 12,
    color: COLORS.textLight,
    marginTop: 12,
    letterSpacing: 0.5,
  },
  heroImageWrap: {
    marginTop: 40,
    display: "flex",
    justifyContent: "center",
  },
  heroImage: {
    borderRadius: 16,
    maxWidth: 320,
    width: "100%",
    boxShadow: "0 12px 40px rgba(18,18,18,0.13)",
    objectFit: "cover",
  },
  // TRUST BAR
  trustBar: {
    background: COLORS.dark,
    color: COLORS.white,
    padding: "14px 20px",
    display: "flex",
    justifyContent: "center",
    gap: 32,
    flexWrap: "wrap",
    fontSize: 13,
    fontWeight: 600,
    letterSpacing: 0.5,
  },
  trustItem: {
    display: "flex",
    alignItems: "center",
    gap: 8,
  },
  trustIcon: {
    fontSize: 16,
  },
  // SECTION
  section: {
    maxWidth: 1100,
    margin: "0 auto",
    padding: "60px 20px",
  },
  sectionTitle: {
    fontSize: "clamp(1.5rem, 4vw, 2.2rem)",
    fontWeight: 700,
    color: COLORS.dark,
    textAlign: "center",
    marginBottom: 12,
  },
  sectionSubtitle: {
    fontSize: 16,
    color: COLORS.textLight,
    textAlign: "center",
    maxWidth: 520,
    margin: "0 auto 40px",
    lineHeight: 1.6,
  },
  // BENEFITS
  benefitsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: 24,
    marginTop: 8,
  },
  benefitCard: {
    background: COLORS.white,
    border: `1.5px solid rgba(64,195,80,0.2)`,
    borderRadius: 16,
    padding: "28px 24px",
    boxShadow: "0 2px 12px rgba(18,18,18,0.05)",
    transition: "transform 0.2s, box-shadow 0.2s",
    cursor: "default",
  },
  benefitIcon: {
    fontSize: 36,
    marginBottom: 14,
  },
  benefitTitle: {
    fontWeight: 700,
    fontSize: 17,
    color: COLORS.dark,
    marginBottom: 8,
  },
  benefitText: {
    fontSize: 14,
    color: COLORS.textLight,
    lineHeight: 1.65,
  },
  // PRODUCT SECTION
  productSection: {
    background: COLORS.gray,
    padding: "60px 20px",
  },
  productInner: {
    maxWidth: 1000,
    margin: "0 auto",
    display: "flex",
    gap: 48,
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  productImageWrap: {
    flex: "0 0 auto",
    display: "flex",
    justifyContent: "center",
  },
  productImage: {
    borderRadius: 16,
    width: 280,
    maxWidth: "100%",
    boxShadow: "0 10px 40px rgba(18,18,18,0.13)",
    objectFit: "cover",
  },
  productInfo: {
    flex: 1,
    minWidth: 260,
  },
  productBadge: {
    display: "inline-block",
    background: "#fff3cd",
    color: "#856404",
    borderRadius: 40,
    padding: "5px 16px",
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: 1,
    marginBottom: 16,
    textTransform: "uppercase",
  },
  productTitle: {
    fontSize: "clamp(1.3rem, 3.5vw, 2rem)",
    fontWeight: 700,
    color: COLORS.dark,
    lineHeight: 1.25,
    marginBottom: 12,
  },
  productDesc: {
    fontSize: 15,
    color: COLORS.textLight,
    lineHeight: 1.7,
    marginBottom: 20,
  },
  checkList: {
    listStyle: "none",
    padding: 0,
    margin: "0 0 24px",
  },
  checkItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: 10,
    marginBottom: 10,
    fontSize: 14,
    color: COLORS.text,
    lineHeight: 1.5,
  },
  checkIcon: {
    color: COLORS.green,
    fontWeight: 700,
    fontSize: 16,
    flexShrink: 0,
    marginTop: 1,
  },
  priceWrap: {
    display: "flex",
    alignItems: "baseline",
    gap: 12,
    marginBottom: 6,
  },
  priceOld: {
    fontSize: 16,
    color: COLORS.grayMid,
    textDecoration: "line-through",
    fontWeight: 400,
  },
  priceNew: {
    fontSize: 32,
    fontWeight: 700,
    color: COLORS.green,
  },
  priceNote: {
    fontSize: 12,
    color: COLORS.textLight,
    marginBottom: 20,
  },
  buyBtn: {
    display: "inline-block",
    background: COLORS.green,
    color: COLORS.white,
    borderRadius: 40,
    padding: "16px 40px",
    fontWeight: 700,
    fontSize: 17,
    border: "none",
    cursor: "pointer",
    boxShadow: "0 4px 18px rgba(64,195,80,0.4)",
    transition: "background 0.2s, transform 0.15s",
    textTransform: "uppercase",
    letterSpacing: 0.8,
    width: "100%",
    textAlign: "center",
    textDecoration: "none",
  },
  // TESTIMONIALS
  testimonialsWrap: {
    background: COLORS.white,
    padding: "60px 20px",
  },
  testimonialsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: 24,
    maxWidth: 1000,
    margin: "0 auto",
  },
  testimonialCard: {
    background: COLORS.gray,
    borderRadius: 16,
    padding: "28px 24px",
    boxShadow: "0 2px 10px rgba(18,18,18,0.04)",
  },
  testimonialStars: {
    color: "#f5a623",
    fontSize: 18,
    marginBottom: 10,
    letterSpacing: 3,
  },
  testimonialText: {
    fontSize: 14,
    color: COLORS.text,
    lineHeight: 1.7,
    fontStyle: "italic",
    marginBottom: 14,
  },
  testimonialAuthor: {
    fontWeight: 700,
    fontSize: 14,
    color: COLORS.dark,
  },
  testimonialRole: {
    fontSize: 12,
    color: COLORS.textLight,
    marginTop: 2,
  },
  // GUARANTEE
  guaranteeSection: {
    background: `linear-gradient(135deg, ${COLORS.greenLight} 0%, #f0f7ff 100%)`,
    padding: "60px 20px",
    textAlign: "center",
  },
  guaranteeIcon: {
    fontSize: 64,
    marginBottom: 16,
  },
  guaranteeTitle: {
    fontSize: "clamp(1.4rem, 3.5vw, 2rem)",
    fontWeight: 700,
    color: COLORS.dark,
    marginBottom: 14,
  },
  guaranteeText: {
    fontSize: 15,
    color: COLORS.textLight,
    maxWidth: 500,
    margin: "0 auto 28px",
    lineHeight: 1.7,
  },
  // FAQ
  faqSection: {
    background: COLORS.white,
    padding: "60px 20px",
  },
  faqInner: {
    maxWidth: 720,
    margin: "0 auto",
  },
  faqItem: {
    borderBottom: `1px solid rgba(18,18,18,0.08)`,
    padding: "20px 0",
    cursor: "pointer",
  },
  faqQuestion: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontWeight: 700,
    fontSize: 16,
    color: COLORS.dark,
    gap: 12,
  },
  faqArrow: {
    fontSize: 18,
    transition: "transform 0.25s",
    flexShrink: 0,
    color: COLORS.green,
  },
  faqAnswer: {
    fontSize: 14,
    color: COLORS.textLight,
    lineHeight: 1.7,
    marginTop: 12,
    overflow: "hidden",
    transition: "max-height 0.3s ease, opacity 0.3s",
  },
  // FOOTER CTA
  footerCta: {
    background: COLORS.dark,
    color: COLORS.white,
    padding: "60px 20px",
    textAlign: "center",
  },
  footerCtaTitle: {
    fontSize: "clamp(1.4rem, 4vw, 2rem)",
    fontWeight: 700,
    color: COLORS.white,
    marginBottom: 12,
    maxWidth: 560,
    margin: "0 auto 12px",
  },
  footerCtaSubtitle: {
    fontSize: 15,
    color: "rgba(255,255,255,0.6)",
    marginBottom: 32,
    maxWidth: 460,
    margin: "0 auto 32px",
    lineHeight: 1.6,
  },
  footerCtaBtn: {
    display: "inline-block",
    background: COLORS.green,
    color: COLORS.white,
    borderRadius: 40,
    padding: "18px 52px",
    fontWeight: 700,
    fontSize: 18,
    border: "none",
    cursor: "pointer",
    boxShadow: "0 4px 20px rgba(64,195,80,0.4)",
    transition: "background 0.2s, transform 0.15s",
    textTransform: "uppercase",
    letterSpacing: 1,
    textDecoration: "none",
  },
  // FOOTER
  footer: {
    background: COLORS.dark,
    borderTop: "1px solid rgba(255,255,255,0.07)",
    padding: "24px 20px",
    textAlign: "center",
    color: "rgba(255,255,255,0.4)",
    fontSize: 13,
  },
};

// ---- DATA ----
const benefits = [
  {
    icon: "🦴",
    title: "Fortalece huesos y músculos",
    text: "Ejercicios diseñados para mejorar la densidad ósea y la fuerza muscular en adultos mayores de forma segura.",
  },
  {
    icon: "❤️",
    title: "Mejora la salud cardiovascular",
    text: "Rutinas de bajo impacto que cuidan el corazón y mejoran la circulación sin esfuerzo excesivo.",
  },
  {
    icon: "🧠",
    title: "Estimula la mente",
    text: "Actividades cognitivas y físicas combinadas que ayudan a mantener la memoria y el bienestar mental.",
  },
  {
    icon: "⚖️",
    title: "Mejora el equilibrio",
    text: "Ejercicios específicos para reducir el riesgo de caídas y mejorar la coordinación y estabilidad.",
  },
  {
    icon: "😊",
    title: "Bienestar emocional",
    text: "Actividades grupales e individuales que reducen el estrés, la soledad y mejoran el estado de ánimo.",
  },
  {
    icon: "📋",
    title: "+200 actividades listas",
    text: "Guía completa con más de 200 ejercicios y actividades categorizadas por nivel, condición y objetivo.",
  },
];

const checkItems = [
  "+200 ejercicios y actividades detalladas paso a paso",
  "Clasificados por nivel: principiante, intermedio y avanzado",
  "Incluye ejercicios de movilidad, equilibrio, fuerza y flexibilidad",
  "Actividades cognitivas para estimular la mente",
  "Adaptable para uso en casa, centros de día o residencias",
  "Diseñado por profesionales de la salud y el deporte",
  "Formato digital, acceso inmediato tras la compra",
];

const testimonials = [
  {
    stars: "★★★★★",
    text: '"Increíble guía. La uso con mi madre de 78 años y ha mejorado muchísimo su movilidad y ánimo. Los ejercicios están muy bien explicados."',
    author: "María G.",
    role: "Hija de adulto mayor",
  },
  {
    stars: "★★★★★",
    text: '"Trabajo en un centro de día y esta guía ha sido un antes y un después. Mis pacientes la adoran y noto cambios reales en pocas semanas."',
    author: "Carlos R.",
    role: "Fisioterapeuta",
  },
  {
    stars: "★★★★★",
    text: '"Tengo 72 años y empecé sola con esta guía. Es muy clara, fácil de seguir y me siento con mucha más energía. ¡La recomiendo a todos!"',
    author: "Dolores M.",
    role: "Adulta mayor activa",
  },
];

const faqs = [
  {
    q: "¿Para quién está diseñada esta guía?",
    a: "Está diseñada para adultos mayores de 60 años en adelante, cuidadores, familiares y profesionales de la salud como fisioterapeutas, enfermeros o educadores físicos que trabajan con personas mayores.",
  },
  {
    q: "¿Necesito equipamiento especial para los ejercicios?",
    a: "No. La mayoría de los ejercicios se pueden realizar con el propio peso corporal o con elementos cotidianos del hogar. Algunos ejercicios opcionales pueden incluir bandas elásticas o sillas.",
  },
  {
    q: "¿Cómo accedo a la guía después de comprar?",
    a: "Recibirás acceso inmediato a la guía digital en formato PDF de alta calidad. Podrás descargarla e imprimirla cuantas veces quieras.",
  },
  {
    q: "¿Qué pasa si no me gusta?",
    a: "Ofrecemos garantía de satisfacción. Si no quedas conforme con la guía, te devolvemos el dinero sin preguntas dentro de los primeros 30 días.",
  },
  {
    q: "¿Es segura para personas con enfermedades crónicas?",
    a: "Los ejercicios están diseñados para ser de bajo impacto y seguros. Sin embargo, siempre recomendamos consultar con el médico antes de iniciar cualquier programa de ejercicio, especialmente con condiciones preexistentes.",
  },
];

// ---- ANIMATED SECTION ----
function FadeIn({ children, delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.12 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// ---- FAQ ITEM ----
function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={styles.faqItem}
      onClick={() => setOpen(!open)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && setOpen(!open)}
    >
      <div style={styles.faqQuestion}>
        <span>{q}</span>
        <span
          style={{
            ...styles.faqArrow,
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
          }}
        >
          ▼
        </span>
      </div>
      <div
        style={{
          ...styles.faqAnswer,
          maxHeight: open ? 300 : 0,
          opacity: open ? 1 : 0,
          marginTop: open ? 12 : 0,
        }}
      >
        {a}
      </div>
    </div>
  );
}

// ---- HOVER BUTTON ----
function HoverBtn({ style, children, href }) {
  const [hovered, setHovered] = useState(false);
  const Tag = href ? "a" : "button";
  return (
    <Tag
      href={href}
      target={href ? "_blank" : undefined}
      rel={href ? "noopener noreferrer" : undefined}
      style={{
        ...style,
        background: hovered ? COLORS.greenDark : COLORS.green,
        transform: hovered ? "translateY(-2px) scale(1.02)" : "translateY(0) scale(1)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </Tag>
  );
}

// ---- BENEFIT CARD ----
function BenefitCard({ icon, title, text, delay }) {
  const [hovered, setHovered] = useState(false);
  return (
    <FadeIn delay={delay}>
      <div
        style={{
          ...styles.benefitCard,
          transform: hovered ? "translateY(-5px)" : "translateY(0)",
          boxShadow: hovered
            ? "0 8px 28px rgba(64,195,80,0.18)"
            : "0 2px 12px rgba(18,18,18,0.05)",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div style={styles.benefitIcon}>{icon}</div>
        <div style={styles.benefitTitle}>{title}</div>
        <div style={styles.benefitText}>{text}</div>
      </div>
    </FadeIn>
  );
}

// ---- MAIN APP ----
export default function App() {
  // TODO: Reemplazar href del CTA con el link real de la guía profesional
  const productLink = "https://fx0yzk-i2.myshopify.com/products/guia-profesional-de-actividades-y-ejercicios-para-adultos-mayores";
  // TODO: Reemplazar con imagen real del producto cuando esté disponible
  const productImageUrl = "https://fx0yzk-i2.myshopify.com/cdn/shop/files/Gemini_Generated_Image_c0ck8pc0ck8pc0ck.png?v=1784001804&width=533";
  const fallbackImage = "https://via.placeholder.com/400x500/40C350/FFFFFF?text=GUIA+PROFESIONAL";

  const [imgError, setImgError] = useState(false);

  return (
    <div style={styles.body}>
      {/* FONT IMPORT */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Assistant:wght@400;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'Assistant', sans-serif; }
        a { text-decoration: none; }
        ::selection { background: #40C350; color: #fff; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #f3f3f3; }
        ::-webkit-scrollbar-thumb { background: #40C350; border-radius: 3px; }
      `}</style>

      {/* NAV */}
      <nav style={styles.nav}>
        <div style={styles.navInner}>
          <div style={styles.navLogo}>💪 Adultos Mayores</div>
          <HoverBtn style={styles.navCta} href={productLink}>
            Ver Guía
          </HoverBtn>
        </div>
      </nav>

      {/* HERO */}
      <section style={styles.hero}>
        <FadeIn delay={0}>
          <div style={styles.heroEyebrow}>🌟 Guía Profesional Completa</div>
        </FadeIn>
        <FadeIn delay={100}>
          <h1 style={styles.heroTitle}>
            Más de 200 Ejercicios y Actividades para los Abuelos
          </h1>
        </FadeIn>
        <FadeIn delay={200}>
          <p style={styles.heroSubtitle}>
            La guía definitiva para mantener a los adultos mayores activos, saludables y felices. Diseñada por profesionales, adaptada para cualquier nivel.
          </p>
        </FadeIn>
        <FadeIn delay={300}>
          <HoverBtn style={styles.heroCtaBtn} href={productLink}>
            🎯 Obtener la Guía Profesional
          </HoverBtn>
          <span style={styles.heroCtaSmall}>
            ✅ Acceso inmediato · 📱 Compatible con todos los dispositivos
          </span>
        </FadeIn>
        <FadeIn delay={400}>
          <div style={styles.heroImageWrap}>
            <img
              src={imgError ? fallbackImage : productImageUrl}
              alt="Guía Profesional de +200 Actividades y Ejercicios para Adultos Mayores"
              style={styles.heroImage}
              onError={() => setImgError(true)}
            />
          </div>
        </FadeIn>
      </section>

      {/* TRUST BAR */}
      <div style={styles.trustBar}>
        <div style={styles.trustItem}>
          <span style={styles.trustIcon}>✅</span>
          <span>+500 familias satisfechas</span>
        </div>
        <div style={styles.trustItem}>
          <span style={styles.trustIcon}>🏆</span>
          <span>Diseño profesional</span>
        </div>
        <div style={styles.trustItem}>
          <span style={styles.trustIcon}>🔒</span>
          <span>Garantía 30 días</span>
        </div>
        <div style={styles.trustItem}>
          <span style={styles.trustIcon}>⚡</span>
          <span>Acceso inmediato</span>
        </div>
      </div>

      {/* BENEFITS */}
      <section style={{ background: COLORS.white }}>
        <div style={styles.section}>
          <FadeIn>
            <h2 style={styles.sectionTitle}>¿Por qué elegir nuestra guía?</h2>
            <p style={styles.sectionSubtitle}>
              Todo lo que necesitas para mejorar la calidad de vida de los adultos mayores en un solo lugar.
            </p>
          </FadeIn>
          <div style={styles.benefitsGrid}>
            {benefits.map((b, i) => (
              <BenefitCard key={i} {...b} delay={i * 80} />
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT SECTION */}
      <section style={styles.productSection}>
        <FadeIn>
          <div style={styles.productInner}>
            <div style={styles.productImageWrap}>
              <img
                src={imgError ? fallbackImage : productImageUrl}
                alt="Guía Profesional Ejercicios Adultos Mayores"
                style={styles.productImage}
                onError={() => setImgError(true)}
              />
            </div>
            <div style={styles.productInfo}>
              <div style={styles.productBadge}>⭐ Más vendido</div>
              <h2 style={styles.productTitle}>
                Guía Profesional de +200 Actividades y Ejercicios para los Abuelos
              </h2>
              <p style={styles.productDesc}>
                Una colección completa y profesional de ejercicios físicos, actividades cognitivas y rutinas diseñadas especialmente para adultos mayores, con instrucciones claras y adaptaciones por nivel.
              </p>
              <ul style={styles.checkList}>
                {checkItems.map((item, i) => (
                  <li key={i} style={styles.checkItem}>
                    <span style={styles.checkIcon}>✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div style={styles.priceWrap}>
                {/* TODO: Actualizar precios reales del producto */}
                <span style={styles.priceOld}>$49.99</span>
                <span style={styles.priceNew}>$19.99</span>
              </div>
              <p style={styles.priceNote}>💸 Oferta por tiempo limitado · Ahorra 60%</p>
              <HoverBtn style={styles.buyBtn} href={productLink}>
                🛒 Comprar Ahora — Acceso Inmediato
              </HoverBtn>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* TESTIMONIALS */}
      <section style={styles.testimonialsWrap}>
        <FadeIn>
          <h2 style={{ ...styles.sectionTitle, marginBottom: 8 }}>
            Lo que dicen nuestros clientes
          </h2>
          <p style={styles.sectionSubtitle}>
            Cientos de familias ya han transformado la vida de sus seres queridos.
          </p>
        </FadeIn>
        <div style={styles.testimonialsGrid}>
          {testimonials.map((t, i) => (
            <FadeIn key={i} delay={i * 120}>
              <div style={styles.testimonialCard}>
                <div style={styles.testimonialStars}>{t.stars}</div>
                <p style={styles.testimonialText}>{t.text}</p>
                <div style={styles.testimonialAuthor}>{t.author}</div>
                <div style={styles.testimonialRole}>{t.role}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* GUARANTEE */}
      <section style={styles.guaranteeSection}>
        <FadeIn>
          <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
            <div style={styles.guaranteeIcon}>🛡️</div>
            <h2 style={styles.guaranteeTitle}>
              Garantía de satisfacción de 30 días
            </h2>
            <p style={styles.guaranteeText}>
              Si por cualquier motivo no estás satisfecho con la guía, te devolvemos el 100% de tu dinero sin preguntas. Tu satisfacción es nuestra prioridad.
            </p>
            <HoverBtn style={{ ...styles.buyBtn, display: "inline-block", width: "auto" }} href={productLink}>
              🎯 Quiero la Guía Profesional
            </HoverBtn>
          </div>
        </FadeIn>
      </section>

      {/* FAQ */}
      <section style={styles.faqSection}>
        <FadeIn>
          <h2 style={styles.sectionTitle}>Preguntas frecuentes</h2>
          <p style={styles.sectionSubtitle}>
            Resolvemos todas tus dudas antes de adquirir la guía.
          </p>
        </FadeIn>
        <div style={styles.faqInner}>
          {faqs.map((faq, i) => (
            <FaqItem key={i} q={faq.q} a={faq.a} />
          ))}
        </div>
      </section>

      {/* FOOTER CTA */}
      <section style={styles.footerCta}>
        <FadeIn>
          <h2 style={styles.footerCtaTitle}>
            ¿Listo para mejorar la calidad de vida de tus seres queridos?
          </h2>
          <p style={styles.footerCtaSubtitle}>
            Únete a cientos de familias y profesionales que ya confían en nuestra Guía Profesional de Ejercicios para los Abuelos.
          </p>
          <HoverBtn style={styles.footerCtaBtn} href={productLink}>
            🚀 Obtener la Guía Ahora
          </HoverBtn>
          <div style={{ marginTop: 16, color: "rgba(255,255,255,0.45)", fontSize: 13 }}>
            ⚡ Acceso inmediato · 🔒 Pago seguro · 🛡️ Garantía 30 días
          </div>
        </FadeIn>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        <div>© 2024 Adultos Mayores — Todos los derechos reservados</div>
        <div style={{ marginTop: 6 }}>
          {/* TODO: Agregar links de política de privacidad y términos */}
          Hecho con ❤️ para los abuelos y sus familias
        </div>
      </footer>
    </div>
  );
}