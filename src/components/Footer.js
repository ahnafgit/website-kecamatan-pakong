export const renderFooter = () => {
    return `
    <div class="container">
      <div class="footer-content" style="grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); text-align: left; gap: 2rem;">
        
        <!-- Section 1: Identitas -->
        <div class="footer-section">
            <h3>Kecamatan Pakong</h3>
            <p style="color: var(--text-light); font-size: 0.9rem;">
                Website resmi Pemerintah Kecamatan Pakong, Kabupaten Pamekasan. Memberikan pelayanan publik yang transparan dan akuntabel.
            </p>
        </div>

        <!-- Section 2: Kontak -->
        <div class="footer-section">
            <h3>Hubungi Kami</h3>
            <ul style="list-style: none; padding: 0; color: var(--text-light); font-size: 0.9rem;">
                <li style="margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    kecamatanpakong@gmail.com
                </li>
                <li style="margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    (0324) 123456
                </li>
                 <li style="display: flex; align-items: start; gap: 0.5rem;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0; margin-top: 2px;"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    Jl. Raya Pakong No. 1, Pamekasan, Jawa Timur
                </li>
            </ul>
        </div>

        <!-- Section 3: Peta -->
        <div class="footer-section">
            <h3>Lokasi</h3>
            <div style="border-radius: var(--radius-sm); overflow: hidden; box-shadow: var(--shadow-sm);">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63339.67389476084!2d113.5186064069811!3d-7.014631252118318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd9d18e5473468f%3A0x4027a76e3532350!2sPakong%2C%20Pamekasan%20Regency%2C%20East%20Java!5e0!3m2!1sen!2sid!4v1706692800000!5m2!1sen!2sid" 
                    width="100%" 
                    height="150" 
                    style="border:0;" 
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>

      </div>
      
      <div class="footer-bottom">
        <p>&copy; 2026 Pemerintah Kecamatan Pakong. Hak Cipta Dilindungi.</p>
      </div>
    </div>
  `;
};
