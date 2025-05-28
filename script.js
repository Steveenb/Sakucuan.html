// JavaScript untuk SakuCuan

// Chart.js untuk grafik pendapatan
const ctx = document.getElementById('revenueChart').getContext('2d');
new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Pendapatan (Juta Rp)',
            data: [12, 15, 18, 14, 22, 16],
            borderColor: 'rgb(59, 130, 246)',
            backgroundColor: 'rgba(59, 130, 246, 0.1)',
            tension: 0.4
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Smooth scrolling untuk navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Function untuk menampilkan detail lokasi
function showLocationDetails(location) {
    const locations = {
        malioboro: {
            name: 'Teras Malioboro',
            description: 'Pusat perbelanjaan dan kuliner di jantung Malioboro Street dengan berbagai UMKM lokal.',
            umkm: ['Batik Malioboro', 'Kerajinan Kayu', 'Makanan Tradisional']
        },
        legi: {
            name: 'Pasar Legi Kotagede',
            description: 'Pasar tradisional dengan berbagai kerajinan perak dan batik berkualitas tinggi.',
            umkm: ['Kerajinan Perak', 'Batik Tulis', 'Perhiasan Tradisional']
        },
        beringharjo: {
            name: 'Pasar Beringharjo',
            description: 'Pasar tertua di Yogyakarta dengan aneka batik dan oleh-oleh khas.',
            umkm: ['Batik Klasik', 'Oleh-oleh Yogya', 'Kerajinan Tangan']
        }
    };
    
    const loc = locations[location];
    alert(`${loc.name}\n\n${loc.description}\n\nUMKM Populer:\n• ${loc.umkm.join('\n• ')}`);
}