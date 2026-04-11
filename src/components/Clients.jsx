import React from "react";

const SectionTitle = ({ title, subtitle, highlight }) => (
  <div className="text-center mb-16">
    <div
      className="inline-flex items-center gap-2 mb-5"
      style={{
        background: "rgba(0,182,213,0.08)",
        border: "0.5px solid rgba(0,182,213,0.3)",
        borderRadius: 999,
        padding: "5px 18px",
      }}
    >
      <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#00B6D5", display: "inline-block", boxShadow: "0 0 0 3px rgba(0,182,213,0.2)" }} />
      <span style={{ fontSize: "0.7rem", color: "#00B6D5", letterSpacing: "0.08em", fontWeight: 600 }}>
        OUR CLIENTS
      </span>
    </div>
    <h2 className="text-4xl md:text-5xl font-extrabold leading-tight" style={{ color: "#FBF9F9" }}>
      {title} <span style={{ color: "#00B6D5" }}>{highlight}</span>
    </h2>
    {subtitle && (
      <p className="mt-4 text-lg max-w-3xl mx-auto" style={{ color: "#6D7482", lineHeight: 1.75 }}>
        {subtitle}
      </p>
    )}
  </div>
);

const ClientCard = ({ client }) => (
  <a
    href={client.url}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={`Visit ${client.name}`}
    className="group"
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "0.75rem",
      padding: "1.5rem 1rem",
      background: "rgba(17,25,40,0.75)",
      border: "0.5px solid rgba(0,182,213,0.15)",
      borderRadius: 16,
      backdropFilter: "blur(12px)",
      textDecoration: "none",
      position: "relative",
      overflow: "hidden",
      transition: "transform 0.28s ease, box-shadow 0.28s ease, border-color 0.28s ease",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "translateY(-6px)";
      e.currentTarget.style.boxShadow = "0 20px 48px rgba(0,182,213,0.12)";
      e.currentTarget.style.borderColor = "rgba(0,182,213,0.35)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = "none";
      e.currentTarget.style.borderColor = "rgba(0,182,213,0.15)";
    }}
  >
    {/* Top accent bar — appears on hover */}
    <div
      className="group-hover-bar"
      style={{
        position: "absolute",
        top: 0, left: 0, right: 0,
        height: 2,
        background: "linear-gradient(90deg, #00B6D5, #85C441)",
        opacity: 0,
        transition: "opacity 0.28s ease",
      }}
      ref={(el) => {
        if (!el) return;
        const parent = el.closest("a");
        parent.addEventListener("mouseenter", () => (el.style.opacity = "1"));
        parent.addEventListener("mouseleave", () => (el.style.opacity = "0"));
      }}
    />

    {/* Hover glow */}
    <div style={{
      position: "absolute", inset: 0,
      background: "radial-gradient(ellipse at top, rgba(0,182,213,0.06), transparent 65%)",
      pointerEvents: "none",
    }} />

    {/* Logo box */}
    <div style={{
      width: "100%", height: 72,
      display: "flex", alignItems: "center", justifyContent: "center",
      background: "rgba(255,255,255,0.03)",
      border: "0.5px solid rgba(0,182,213,0.1)",
      borderRadius: 10,
      overflow: "hidden",
      position: "relative", zIndex: 1,
    }}>
      <img
        src={client.logo}
        alt={`${client.name} Logo`}
        style={{
          height: 44,
          objectFit: "contain",
          opacity: 0.8,
          filter: "grayscale(20%)",
          transition: "transform 0.3s ease, opacity 0.3s ease, filter 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.08)";
          e.currentTarget.style.opacity = "1";
          e.currentTarget.style.filter = "grayscale(0%)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.opacity = "0.8";
          e.currentTarget.style.filter = "grayscale(20%)";
        }}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = `https://placehold.co/120x60/0ea5e9/fff?text=${client.name.split(" ").map((n) => n[0]).join("")}`;
        }}
      />
    </div>

    {/* Client name */}
    <span style={{
      fontSize: "0.75rem",
      fontWeight: 500,
      color: "#6D7482",
      textAlign: "center",
      lineHeight: 1.4,
      transition: "color 0.25s ease",
      position: "relative", zIndex: 1,
    }}
      onMouseEnter={(e) => (e.currentTarget.style.color = "#00B6D5")}
      onMouseLeave={(e) => (e.currentTarget.style.color = "#6D7482")}
    >
      {client.name}
    </span>
  </a>
);

const Clients = () => {
  const clients = [
    { name: "Knowledge Hub Institute", logo: "assets/Knowledge.png", url: "https://knowledgehub.co.ke/" },
    { name: "Cyber Shujaa",            logo: "assets/cyber.png",      url: "https://cybershujaa.co.ke/" },
    { name: "NCBA",                    logo: "assets/ncba.png",        url: "https://ncbagroup.com/" },
    { name: "Chuna DT Sacco Ltd",      logo: "assets/chuna.png",       url: "https://chunasacco.co.ke/" },
    { name: "Institute of Pension Management", logo: "assets/pension.jpg", url: "https://ipm.ac.ke/" },
    { name: "Nafasi Sacco",            logo: "assets/nafasi.png",      url: "https://nafasisacco.com/" },
    { name: "Ukoaji Sacco",            logo: "assets/uokoaji.jpg",     url: "https://ukoajisacco.com/" },
    { name: "Utabibu",                 logo: "assets/utabibu.png",     url: "https://utabibusacco.com/" },
    { name: "KMA Sacco",               logo: "assets/kma.jpg",         url: "https://kmasacco.com/" },
    { name: "Pivot Assets",            logo: "assets/pivot.png",       url: "https://pivotassets.co.ke/" },
    { name: "Finnet",                  logo: "assets/finnet.jpg",      url: "https://www.finnet.co.ke/" },
    { name: "Sentinel Africa",         logo: "assets/sa.png",          url: "https://sentinelafrica.com/" },
    { name: "Enwealth",                logo: "assets/enwealth.jpg",    url: "https://enwealth.co.ke/" },
  ];

  return (
    <section
      id="clients"
      className="relative py-28 overflow-hidden"
      style={{ background: "#0b1120" }}
    >
      {/* Circuit grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='140' height='140' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 70 H120 M70 20 V120' stroke='%2300B6D5' stroke-width='0.3' fill='none'/%3E%3Ccircle cx='20' cy='70' r='1.5' fill='%2385C441'/%3E%3Ccircle cx='120' cy='70' r='1.5' fill='%2300B6D5'/%3E%3Ccircle cx='70' cy='20' r='1.5' fill='%2385C441'/%3E%3Ccircle cx='70' cy='120' r='1.5' fill='%2300B6D5'/%3E%3C/svg%3E")`,
          backgroundSize: "140px 140px",
          opacity: 0.06,
        }}
      />

      {/* Ambient glows */}
      <div className="absolute pointer-events-none" style={{ width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,182,213,0.06) 0%, transparent 70%)", top: -100, left: -80 }} />
      <div className="absolute pointer-events-none" style={{ width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(133,196,65,0.05) 0%, transparent 70%)", bottom: 0, right: 0 }} />

      <div className="relative z-10 container mx-auto px-6">

        {/* Section Title */}
        <SectionTitle
          title="Our"
          highlight="Trusted Clients"
          subtitle="We are proud to protect and empower organizations with cutting-edge cybersecurity solutions."
        />

        {/* Stats row */}
        <div
          className="grid grid-cols-3 gap-4 mb-14 max-w-2xl mx-auto"
        >
          {[
            { value: "13+", label: "Clients Protected" },
            { value: "100%", label: "Compliance Success" },
            { value: "24/7", label: "Active Monitoring" },
          ].map((stat, i) => (
            <div
              key={i}
              style={{
                background: "rgba(17,25,40,0.75)",
                border: "0.5px solid rgba(0,182,213,0.15)",
                borderRadius: 12,
                padding: "1rem",
                textAlign: "center",
                backdropFilter: "blur(10px)",
              }}
            >
              <p style={{ fontSize: "1.5rem", fontWeight: 800, color: "#00B6D5", lineHeight: 1 }}>{stat.value}</p>
              <p style={{ fontSize: "0.72rem", color: "#6D7482", marginTop: 4, letterSpacing: "0.04em" }}>{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Clients grid */}
        <div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
          role="list"
          aria-label="Trusted Clients"
        >
          {clients.map((client, index) => (
            <ClientCard key={index} client={client} />
          ))}
        </div>

        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-3 mt-20 mb-8">
          <div style={{ flex: 1, maxWidth: 220, height: "0.5px", background: "linear-gradient(to right, transparent, rgba(0,182,213,0.35))" }} />
          <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
            <span style={{ width: 4, height: 4, borderRadius: "50%", background: "rgba(0,182,213,0.4)", display: "inline-block" }} />
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#00B6D5", display: "inline-block", boxShadow: "0 0 0 3px rgba(0,182,213,0.15)" }} />
            <span style={{ width: 4, height: 4, borderRadius: "50%", background: "rgba(133,196,65,0.4)", display: "inline-block" }} />
          </div>
          <div style={{ flex: 1, maxWidth: 220, height: "0.5px", background: "linear-gradient(to left, transparent, rgba(133,196,65,0.35))" }} />
        </div>

        {/* Footer text */}
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold" style={{ color: "#FBF9F9" }}>
            Trusted by Industry Leaders Across{" "}
            <span style={{ color: "#85C441" }}>Africa 🚀</span>
          </h3>
        </div>

      </div>
    </section>
  );
};

export default Clients;