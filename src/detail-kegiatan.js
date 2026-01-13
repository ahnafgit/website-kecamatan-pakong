import { kegiatanData } from './data/kegiatan.js';

document.addEventListener('DOMContentLoaded', () => {
    // Get ID from URL
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get('id'));

    // Find data
    const item = kegiatanData.find(k => k.id === id);

    const container = document.getElementById('detail-content');

    if (item) {
        // Render content
        document.title = `${item.title} - Kecamatan Pakong`;

        container.innerHTML = `
            <article class="activity-detail">
                <header class="detail-header">
                    <span class="detail-date">${item.date}</span>
                    <h1 class="detail-title">${item.title}</h1>
                </header>
                
                <div class="detail-image-container">
                    <img src="${item.image}" alt="${item.title}" class="detail-image">
                </div>

                <div class="detail-body">
                    ${item.content}
                </div>
                
                <div class="detail-footer">
                    <a href="kegiatan.html" class="btn-secondary">&larr; Kembali ke Kegiatan</a>
                </div>
            </article>
        `;
    } else {
        // Not found
        container.innerHTML = `
            <div class="error-state">
                <h2>Kegiatan tidak ditemukan</h2>
                <p>Maaf, kegiatan yang Anda cari tidak tersedia.</p>
                <a href="kegiatan.html" class="btn-primary">Kembali ke Daftar Kegiatan</a>
            </div>
        `;
    }
});
