const COVER_IMG = "https://cdn.poehali.dev/projects/41319778-2928-423b-9a5b-1db2b6dd2271/files/01e6a6c9-9e19-43e6-9b27-2bbc6870d091.jpg";
const AUTHOR_IMG = "https://cdn.poehali.dev/projects/41319778-2928-423b-9a5b-1db2b6dd2271/files/a3203bd7-509d-40aa-9342-991d0601ec3a.jpg";
const ILLUSTRATIONS_IMG = "https://cdn.poehali.dev/projects/41319778-2928-423b-9a5b-1db2b6dd2271/files/d971dcd4-1105-4355-9034-c7298c58111e.jpg";

const reviews = [
  {
    quote: "«Солярис» — это не просто научная фантастика. Это философский трактат, облачённый в одежды романа. Лем поставил вопросы, на которые у человечества нет ответов.",
    author: "Кшиштоф Пестка",
    role: "литературный критик",
  },
  {
    quote: "Читая Лема, понимаешь: мы не готовы к контакту с чем-то принципиально иным. Мы несём в космос себя — и это наша главная трагедия.",
    author: "Урсула Ле Гуин",
    role: "писатель",
  },
  {
    quote: "Эта книга изменила моё представление о смысле науки. После Соляриса я перестал думать, что разум — это ответ на все вопросы.",
    author: "Читатель, Goodreads",
    role: "читатель",
  },
];

const facts = [
  {
    icon: "🌊",
    text: "Роман написан в 1961 году — задолго до эпохи компьютеров — и по сей день остаётся актуальным философским высказыванием о природе познания.",
  },
  {
    icon: "🌍",
    text: "«Солярис» переведён более чем на 40 языков и входит в списки обязательной литературы университетов по всему миру.",
  },
  {
    icon: "🎬",
    text: "По роману сняты два культовых фильма: советский — Андреем Тарковским (1972) и американский — Стивеном Содербергом (2002).",
  },
  {
    icon: "🏆",
    text: "Станислав Лем — единственный автор научной фантастики, удостоенный звания почётного члена Американской академии искусств и наук.",
  },
];

const Index = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      style={{ backgroundColor: "var(--navy-deep)", color: "var(--text-primary)", fontFamily: "'Montserrat', sans-serif" }}
      className="min-h-screen"
    >
      {/* ─── HEADER ─── */}
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 60px",
          height: 64,
          background: "rgba(3,8,16,0.72)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(232,168,53,0.1)",
        }}
      >
        {/* Left nav */}
        <nav style={{ display: "flex", gap: 40 }}>
          {[
            { label: "О книге", id: "hero" },
            { label: "Об авторе", id: "author" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: 12,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "rgba(140,163,190,0.8)",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 400,
                padding: 0,
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--amber)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(140,163,190,0.8)")}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Center logo */}
        <div
          className="font-display"
          style={{
            fontSize: 22,
            fontWeight: 300,
            fontStyle: "italic",
            color: "rgba(212,221,232,0.6)",
            letterSpacing: "0.05em",
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          Солярис
        </div>

        {/* Right nav */}
        <nav style={{ display: "flex", gap: 40 }}>
          {[
            { label: "Рецензии", id: "reviews" },
            { label: "Читать", id: "cta" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: 12,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: item.label === "Читать" ? "var(--amber)" : "rgba(140,163,190,0.8)",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: item.label === "Читать" ? 500 : 400,
                padding: 0,
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--amber)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = item.label === "Читать" ? "var(--amber)" : "rgba(140,163,190,0.8)")}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </header>

      {/* ─── HERO ─── */}
      <section
        id="hero"
        style={{
          background: "linear-gradient(135deg, #020810 0%, #060d1a 40%, #081525 70%, #0a1c30 100%)",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="stars-bg absolute inset-0 pointer-events-none" />
        <div
          className="absolute pointer-events-none"
          style={{
            top: "-10%",
            right: "-5%",
            width: 520,
            height: 520,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(232,168,53,0.07) 0%, transparent 70%)",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 10,
            maxWidth: 1280,
            margin: "0 auto",
            padding: "120px 80px 80px",
            width: "100%",
            display: "flex",
            alignItems: "center",
            gap: 80,
          }}
        >
          <div style={{ flexShrink: 0 }}>
            <div
              style={{
                width: 340,
                height: 480,
                borderRadius: 4,
                overflow: "hidden",
                boxShadow: "0 40px 80px rgba(0,0,0,0.7), 0 0 60px rgba(232,168,53,0.1)",
                border: "1px solid rgba(232,168,53,0.15)",
              }}
            >
              <img
                src={COVER_IMG}
                alt="Солярис — обложка"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>

          <div style={{ flex: 1, maxWidth: 580 }}>
            <div style={{ fontSize: 13, letterSpacing: "0.25em", color: "var(--amber)", textTransform: "uppercase", marginBottom: 24 }}>
              Станислав Лем · 1961
            </div>
            <h1
              className="font-display"
              style={{ fontSize: 96, lineHeight: 0.9, fontWeight: 300, letterSpacing: "-0.02em", color: "#d4dde8", marginBottom: 24 }}
            >
              Солярис
            </h1>
            <div className="amber-line" />
            <p
              className="font-display"
              style={{ fontSize: 20, fontWeight: 300, color: "#8ca3be", lineHeight: 1.5, marginBottom: 32, fontStyle: "italic" }}
            >
              Философский роман о контакте с непостижимым
            </p>
            <p
              style={{ fontSize: 15, fontWeight: 300, color: "var(--text-muted)", lineHeight: 1.8, marginBottom: 48, maxWidth: 480 }}
            >
              Психолог Крис Кельвин прибывает на исследовательскую станцию над планетой Солярис, покрытой живым разумным океаном. Здесь учёных преследуют материализованные воспоминания — «гости» из глубин их собственного сознания. Роман ставит вопрос: способен ли человек познать нечто принципиально иное, или он обречён видеть в неведомом лишь отражение себя?
            </p>
            <button
              style={{
                padding: "14px 36px",
                border: "1px solid var(--amber)",
                color: "var(--amber)",
                fontSize: 13,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 500,
                background: "transparent",
                cursor: "pointer",
                borderRadius: 2,
              }}
            >
              Читать фрагмент
            </button>
          </div>
        </div>
      </section>

      {/* ─── AUTHOR ─── */}
      <section
        id="author"
        style={{
          background: "linear-gradient(180deg, #060d1a 0%, #070f1e 100%)",
          padding: "120px 0",
          borderTop: "1px solid rgba(232,168,53,0.08)",
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "0 80px",
            display: "flex",
            alignItems: "flex-start",
            gap: 80,
          }}
        >
          <div style={{ flexShrink: 0 }}>
            <div
              style={{
                width: 300,
                height: 380,
                overflow: "hidden",
                borderRadius: 2,
                filter: "grayscale(100%) contrast(1.1)",
                boxShadow: "0 24px 60px rgba(0,0,0,0.6)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <img
                src={AUTHOR_IMG}
                alt="Станислав Лем"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
              />
            </div>
          </div>

          <div style={{ flex: 1, paddingTop: 8 }}>
            <div style={{ fontSize: 12, letterSpacing: "0.25em", color: "var(--amber)", textTransform: "uppercase", marginBottom: 20 }}>
              Об авторе
            </div>
            <h2
              className="font-display"
              style={{ fontSize: 60, fontWeight: 300, color: "#d4dde8", marginBottom: 20, lineHeight: 1 }}
            >
              Станислав Лем
            </h2>
            <div className="amber-line" />
            <p style={{ fontSize: 15, fontWeight: 300, color: "var(--text-muted)", lineHeight: 1.9, marginBottom: 40, maxWidth: 560 }}>
              Станислав Лем (1921–2006) — польский писатель, философ и футуролог, крупнейший представитель мировой научной фантастики. Родился во Львове, пережил Вторую мировую войну и посвятил жизнь осмыслению места человека во Вселенной. Его произведения соединяют строгую научную мысль с глубокой гуманистической философией.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px 40px" }}>
              {[
                { value: "40+", label: "языков перевода" },
                { value: "30 млн", label: "экземпляров по миру" },
                { value: "1976", label: "премия Министерства культуры Польши" },
                { value: "SFWA", label: "почётный член американской академии" },
              ].map((a) => (
                <div key={a.label} style={{ borderTop: "1px solid rgba(232,168,53,0.2)", paddingTop: 16 }}>
                  <div
                    className="font-display"
                    style={{ fontSize: 32, fontWeight: 300, color: "var(--amber)", marginBottom: 4 }}
                  >
                    {a.value}
                  </div>
                  <div style={{ fontSize: 12, letterSpacing: "0.1em", color: "var(--text-muted)", textTransform: "uppercase" }}>
                    {a.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── REVIEWS ─── */}
      <section
        id="reviews"
        style={{
          background: "linear-gradient(180deg, #070f1e 0%, #060c18 100%)",
          padding: "120px 0",
          borderTop: "1px solid rgba(232,168,53,0.08)",
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 80px" }}>
          <div style={{ marginBottom: 64 }}>
            <div style={{ fontSize: 12, letterSpacing: "0.25em", color: "var(--amber)", textTransform: "uppercase", marginBottom: 20 }}>
              Рецензии
            </div>
            <h2
              className="font-display"
              style={{ fontSize: 52, fontWeight: 300, color: "#d4dde8", lineHeight: 1 }}
            >
              Что говорят о книге
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {reviews.map((r) => (
              <div
                key={r.author}
                style={{
                  background: "rgba(15, 30, 58, 0.5)",
                  border: "1px solid rgba(232,168,53,0.15)",
                  borderRadius: 8,
                  padding: "40px 36px",
                  backdropFilter: "blur(8px)",
                }}
              >
                <div style={{ width: 32, height: 2, background: "var(--amber)", marginBottom: 28, opacity: 0.6 }} />
                <p
                  className="font-display"
                  style={{ fontSize: 18, fontStyle: "italic", fontWeight: 300, color: "#b8c8d8", lineHeight: 1.75, marginBottom: 32 }}
                >
                  {r.quote}
                </p>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 500, color: "#d4dde8", marginBottom: 4 }}>{r.author}</div>
                  <div style={{ fontSize: 12, color: "var(--text-muted)", letterSpacing: "0.08em", textTransform: "uppercase" }}>{r.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FACTS & ILLUSTRATIONS ─── */}
      <section
        style={{
          background: "linear-gradient(180deg, #060c18 0%, #040a14 100%)",
          padding: "120px 0 100px",
          borderTop: "1px solid rgba(232,168,53,0.08)",
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 80px" }}>
          <div style={{ marginBottom: 64 }}>
            <div style={{ fontSize: 12, letterSpacing: "0.25em", color: "var(--amber)", textTransform: "uppercase", marginBottom: 20 }}>
              Исследование
            </div>
            <h2
              className="font-display"
              style={{ fontSize: 52, fontWeight: 300, color: "#d4dde8", lineHeight: 1 }}
            >
              Тайны Соляриса
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>
            <div>
              {facts.map((fact, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: 24,
                    alignItems: "flex-start",
                    padding: "32px 0",
                    borderBottom: i < facts.length - 1 ? "1px solid rgba(232,168,53,0.1)" : "none",
                  }}
                >
                  <div
                    style={{
                      flexShrink: 0,
                      width: 44,
                      height: 44,
                      borderRadius: "50%",
                      background: "rgba(232,168,53,0.08)",
                      border: "1px solid rgba(232,168,53,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 20,
                    }}
                  >
                    {fact.icon}
                  </div>
                  <p style={{ fontSize: 15, fontWeight: 300, color: "var(--text-muted)", lineHeight: 1.8, paddingTop: 8 }}>
                    {fact.text}
                  </p>
                </div>
              ))}
            </div>

            <div>
              <div
                style={{
                  width: "100%",
                  aspectRatio: "4/3",
                  borderRadius: 6,
                  overflow: "hidden",
                  border: "1px solid rgba(232,168,53,0.12)",
                  boxShadow: "0 24px 60px rgba(0,0,0,0.5)",
                }}
              >
                <img
                  src={ILLUSTRATIONS_IMG}
                  alt="Иллюстрации к Солярису"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <p
                className="font-display"
                style={{ fontSize: 14, fontStyle: "italic", color: "var(--text-muted)", marginTop: 16, textAlign: "center", letterSpacing: "0.05em" }}
              >
                Станция над океаном · Призрак · Текстура Соляриса
              </p>
            </div>
          </div>

          <div id="cta" style={{ marginTop: 80, textAlign: "center", paddingTop: 60, borderTop: "1px solid rgba(232,168,53,0.1)" }}>
            <p
              className="font-display"
              style={{ fontSize: 28, fontStyle: "italic", fontWeight: 300, color: "#8ca3be", marginBottom: 24 }}
            >
              «Мы не хотим завоёвывать космос, мы хотим расширить Землю до его границ.»
            </p>
            <div style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 40, letterSpacing: "0.1em" }}>
              — Станислав Лем, Солярис
            </div>
            <button
              style={{
                padding: "14px 40px",
                border: "1px solid var(--amber)",
                color: "var(--amber)",
                fontSize: 13,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 500,
                background: "transparent",
                cursor: "pointer",
                borderRadius: 2,
              }}
            >
              Читать фрагмент
            </button>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer
        style={{
          background: "#030810",
          borderTop: "1px solid rgba(232,168,53,0.08)",
          padding: "32px 80px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          className="font-display"
          style={{ fontSize: 22, fontStyle: "italic", fontWeight: 300, color: "rgba(212,221,232,0.4)" }}
        >
          Солярис
        </div>
        <div style={{ fontSize: 12, color: "rgba(122,143,168,0.5)", letterSpacing: "0.1em" }}>
          Станислав Лем · 1961 · Wydawnictwo Literackie
        </div>
      </footer>
    </div>
  );
};

export default Index;