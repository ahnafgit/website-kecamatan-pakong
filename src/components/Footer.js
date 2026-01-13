export function renderFooter() {
    const year = new Date().getFullYear();
    return `
    <div class="footer-content container">
      <div class="footer-section">
        <h3>Kecamatan Pakong</h3>
        <p>Jl. Raya Pakong No. 1, Pamekasan</p>
        <p>Telp: (0324) 123456</p>
      </div>
      <div class="footer-bottom">
        <p>&copy; ${year} Kecamatan Pakong. All rights reserved.</p>
      </div>
    </div>
  `;
}
