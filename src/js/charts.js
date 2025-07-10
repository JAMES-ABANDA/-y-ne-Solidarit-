// Fonction pour initialiser tous les graphiques
function initCharts() {
  // Dépôts Chart
  const depotsCtx = document.getElementById("depotsChart").getContext("2d");
  const depotsChart = new Chart(depotsCtx, {
    type: "line",
    data: {
      labels: [
        "Jan",
        "Fév",
        "Mar",
        "Avr",
        "Mai",
        "Juin",
        "Juil",
        "Août",
        "Sep",
        "Oct",
        "Nov",
        "Déc",
      ],
      datasets: [
        {
          label: "Dépôts (en milliers €)",
          data: [120, 150, 180, 135, 200, 220, 240, 210, 300, 280, 320, 350],
          borderColor: "#3498db",
          backgroundColor: "rgba(52, 152, 219, 0.1)",
          borderWidth: 3,
          pointBackgroundColor: "#fff",
          pointBorderColor: "#3498db",
          pointBorderWidth: 2,
          pointRadius: 5,
          tension: 0.3,
          fill: true,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          grid: {
            color: "rgba(0, 0, 0, 0.05)",
          },
        },
        x: {
          grid: {
            display: false,
          },
        },
      },
    },
  });

  // Fonds Chart
  const fondsCtx = document.getElementById("fondsChart").getContext("2d");
  const fondsChart = new Chart(fondsCtx, {
    type: "doughnut",
    data: {
      labels: ["Épargne", "Secours", "Fonds Développement", "Frais de gestion"],
      datasets: [
        {
          data: [45, 20, 25, 10],
          backgroundColor: ["#3498db", "#e74c3c", "#2ecc71", "#95a5a6"],
          borderWidth: 0,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "bottom",
        },
      },
    },
  });

  // Secours Chart
  const secoursCtx = document.getElementById("secoursChart").getContext("2d");
  const secoursChart = new Chart(secoursCtx, {
    type: "bar",
    data: {
      labels: ["Médical", "Éducation", "Urgence", "Logement"],
      datasets: [
        {
          label: "Demandes traitées",
          data: [65, 40, 25, 12],
          backgroundColor: [
            "rgba(231, 76, 60, 0.7)",
            "rgba(52, 152, 219, 0.7)",
            "rgba(243, 156, 18, 0.7)",
            "rgba(46, 204, 113, 0.7)",
          ],
          borderColor: [
            "rgb(231, 76, 60)",
            "rgb(52, 152, 219)",
            "rgb(243, 156, 18)",
            "rgb(46, 204, 113)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          grid: {
            color: "rgba(0, 0, 0, 0.05)",
          },
        },
        x: {
          grid: {
            display: false,
          },
        },
      },
    },
  });

  // Projets Chart
  const projetsCtx = document.getElementById("projetsChart").getContext("2d");
  const projetsChart = new Chart(projetsCtx, {
    type: "bar",
    data: {
      labels: [
        "Projet Agricole",
        "PME Textile",
        "École Primaire",
        "Centre Santé",
      ],
      datasets: [
        {
          label: "% de financement",
          data: [75, 90, 45, 60],
          backgroundColor: "rgba(46, 204, 113, 0.7)",
          borderColor: "rgb(46, 204, 113)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      indexAxis: "y",
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        x: {
          max: 100,
          grid: {
            color: "rgba(0, 0, 0, 0.05)",
          },
        },
        y: {
          grid: {
            display: false,
          },
        },
      },
    },
  });

  // Chart filters functionality
  const filters = document.querySelectorAll(".chart-filter");
  filters.forEach((filter) => {
    filter.addEventListener("click", function () {
      // Remove active class from siblings
      const siblings = Array.from(this.parentElement.children);
      siblings.forEach((sibling) => sibling.classList.remove("active"));

      // Add active class to clicked element
      this.classList.add("active");

      // Update chart data based on selection
      if (this.textContent === "3 ans") {
        depotsChart.data.datasets[0].data = [
          80, 90, 100, 110, 120, 130, 140, 150, 170, 200, 230, 280,
        ];
        depotsChart.update();
      } else if (this.textContent === "12 mois") {
        depotsChart.data.datasets[0].data = [
          120, 150, 180, 135, 200, 220, 240, 210, 300, 280, 320, 350,
        ];
        depotsChart.update();
      }
    });
  });
}

// Initialisation des graphiques quand le DOM est prêt
if (document.readyState === "complete") {
  initCharts();
} else {
  document.addEventListener("DOMContentLoaded", initCharts);
}
