/* ============================================================
   IterLens — dashboard.js
   Interactive charts for the Dashboard Preview section
   ============================================================ */

(function () {
  // Design tokens — must match CSS variables
  const COLORS = {
    accent:      "#10c8e4",
    teal:        "#2dd4bf",
    positive:    "#34d399",
    warning:     "#fbbf24",
    error:       "#fb7185",
    muted:       "#7fa0bb",
    border:      "#1e3048",
    card:        "#0e1929",
    text:        "#edf2f7",
  };

  // Chart.js global defaults
  Chart.defaults.color = COLORS.muted;
  Chart.defaults.borderColor = COLORS.border;
  Chart.defaults.font.family = "'DM Sans', sans-serif";

  /* ── Bar chart: tiempo perdido por máquina ── */
  const ctxFallas = document.getElementById("chartFallas");
  if (ctxFallas) {
    const fallasData = {
      labels: ["M-04 Prensa", "M-07 Torno", "M-12 CNC", "M-01 Soldadora", "M-09 Compresor", "M-15 Banda"],
      datasets: [
        {
          label: "Horas perdidas",
          data: [18.5, 12.3, 9.7, 7.2, 5.8, 4.1],
          backgroundColor: [
            "rgba(251, 113, 133, 0.75)", // red — most critical
            "rgba(251, 191, 36, 0.65)",
            "rgba(16, 200, 228, 0.65)",
            "rgba(16, 200, 228, 0.5)",
            "rgba(45, 212, 191, 0.5)",
            "rgba(45, 212, 191, 0.35)",
          ],
          borderColor: [
            "rgba(251, 113, 133, 1)",
            "rgba(251, 191, 36, 0.9)",
            COLORS.accent,
            COLORS.accent,
            COLORS.teal,
            COLORS.teal,
          ],
          borderWidth: 1.5,
          borderRadius: 4,
          borderSkipped: false,
        },
      ],
    };

    new Chart(ctxFallas, {
      type: "bar",
      data: fallasData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: "#111c2e",
            borderColor: COLORS.border,
            borderWidth: 1,
            titleColor: COLORS.text,
            bodyColor: COLORS.muted,
            callbacks: {
              label: (ctx) => ` ${ctx.parsed.y} horas perdidas`,
            },
          },
        },
        scales: {
          x: {
            grid: { color: "rgba(30, 48, 72, 0.5)", drawTicks: false },
            ticks: { font: { size: 11 }, color: COLORS.muted, maxRotation: 30 },
          },
          y: {
            grid: { color: "rgba(30, 48, 72, 0.5)", drawTicks: false },
            ticks: {
              font: { size: 11 },
              color: COLORS.muted,
              callback: (v) => v + "h",
            },
            beginAtZero: true,
          },
        },
        animation: {
          duration: 1200,
          easing: "easeOutQuart",
          delay: (ctx) => ctx.dataIndex * 80,
        },
      },
    });
  }

  /* ── Doughnut chart: distribución por tipo de falla ── */
  const ctxTipos = document.getElementById("chartTipos");
  if (ctxTipos) {
    const tiposData = {
      labels: ["Eléctrica", "Mecánica", "Hidráulica", "Software", "Operativa"],
      datasets: [
        {
          data: [32, 28, 18, 14, 8],
          backgroundColor: [
            "rgba(251, 113, 133, 0.8)",
            "rgba(251, 191, 36, 0.8)",
            "rgba(16, 200, 228, 0.8)",
            "rgba(45, 212, 191, 0.8)",
            "rgba(127, 160, 187, 0.6)",
          ],
          borderColor: "#0e1929",
          borderWidth: 3,
          hoverOffset: 8,
        },
      ],
    };

    new Chart(ctxTipos, {
      type: "doughnut",
      data: tiposData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: "68%",
        plugins: {
          legend: {
            position: "bottom",
            labels: {
              font: { size: 11 },
              color: COLORS.muted,
              padding: 14,
              usePointStyle: true,
              pointStyleWidth: 8,
            },
          },
          tooltip: {
            backgroundColor: "#111c2e",
            borderColor: COLORS.border,
            borderWidth: 1,
            titleColor: COLORS.text,
            bodyColor: COLORS.muted,
            callbacks: {
              label: (ctx) => ` ${ctx.parsed}% de las fallas`,
            },
          },
        },
        animation: {
          animateRotate: true,
          duration: 1400,
          easing: "easeOutQuart",
        },
      },
    });
  }

  /* ── Animate charts when section enters viewport ── */
  const dashSection = document.querySelector(".dashboard-preview");
  if (dashSection) {
    const chartObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            // Charts animate on first paint via Chart.js animation config
            chartObserver.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );
    chartObserver.observe(dashSection);
  }
})();
