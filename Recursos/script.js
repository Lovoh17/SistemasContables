
const ctxBar = document.getElementById('barChart').getContext('2d');
const barChart = new Chart(ctxBar, {
    type: 'bar',
    data: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
        datasets: [{
            label: 'Ventas',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                '#5E6073',
                '#89A3B2',
                '#B2D3BE',
                '#F2F4D1',
                '#5E6073',
                '#89A3B2'
            ],
            borderColor: '#5E6073',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const ctxLine = document.getElementById('lineChart').getContext('2d');
const lineChart = new Chart(ctxLine, {
    type: 'line',
    data: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
        datasets: [{
            label: 'Progreso',
            data: [65, 59, 80, 81, 56, 55],
            fill: false,
            borderColor: '#89A3B2',
            tension: 0.1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const radarData = {
    labels: ['A', 'B', 'C', 'D', 'E'],
    datasets: [{
        label: 'Dataset 1',
        data: [20, 10, 15, 25, 30],
        backgroundColor: 'rgba(178, 211, 190, 0.5)',
        borderColor: 'rgba(178, 211, 190, 1)',
        borderWidth: 1
    }]
};

const radarConfig = {
    type: 'radar',
    data: radarData,
    options: {
        scales: {
            r: {
                beginAtZero: true
            }
        }
    }
};

const ctx = document.getElementById('barChart2').getContext('2d');
const barChart2 = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
        datasets: [
            {
                label: 'Conjunto de Datos 1',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)', 
                borderWidth: 1
            },
            {
                label: 'Conjunto de Datos 2',
                data: [7, 11, 5, 8, 3, 7], 
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        responsive: true,
        maintainAspectRatio: false
    }
});

const ctxDonut = document.getElementById('donutChart').getContext('2d');
const donutChart = new Chart(ctxDonut, {
    type: 'doughnut',
    data: {
        labels: ['Ventas', 'Costos', 'Beneficios', 'Otros'],
        datasets: [{
            label: 'Distribución de Costos',
            data: [30, 20, 25, 25], // Datos del gráfico de dona
            backgroundColor: [
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 99, 132, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(255, 206, 86, 0.6)'
            ],
            borderColor: 'rgba(255, 255, 255, 1)',
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return tooltipItem.label + ': ' + tooltipItem.raw + '%';
                    }
                }
            }
        }
    }
});

const records = [
    { date: '2024-10-01', description: 'Venta de producto A', amount: 500, type: 'Entrada' },
    { date: '2024-10-02', description: 'Compra de suministros', amount: 200, type: 'Salida' },
    { date: '2024-10-03', description: 'Pago de servicios', amount: 150, type: 'Salida' },
    { date: '2024-10-04', description: 'Ingreso por servicios', amount: 300, type: 'Entrada' },
    { date: '2024-10-05', description: 'Gastos de publicidad', amount: 100, type: 'Salida' },
    { date: '2024-10-06', description: 'Venta de producto B', amount: 600, type: 'Entrada' },
    { date: '2024-10-07', description: 'Alquiler', amount: 400, type: 'Salida' },
    { date: '2024-10-08', description: 'Ingreso por servicios de consultoría', amount: 800, type: 'Entrada' },
    { date: '2024-10-09', description: 'Compra de equipos', amount: 250, type: 'Salida' },
    { date: '2024-10-10', description: 'Venta de producto C', amount: 900, type: 'Entrada' },
];

const tableBody = document.getElementById('recordTableBody');
records.forEach(record => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${record.date}</td>
        <td>${record.description}</td>
        <td>${record.amount}</td>
        <td>${record.type}</td>
    `;
    tableBody.appendChild(row);
});

const sidebar = document.getElementById('sidebar');
    const toggleButton = document.getElementById('toggle-sidebar-btn');

    toggleButton.addEventListener('click', () => {
        sidebar.classList.toggle('d-none');
    });

    const searchForm = document.getElementById('searchForm');

    function checkWidth() {
        if (window.innerWidth < 1000) {
            searchForm.classList.add('d-none');
        } else {
            searchForm.classList.remove('d-none');
        }
    }

    checkWidth();

    window.addEventListener('resize', checkWidth);