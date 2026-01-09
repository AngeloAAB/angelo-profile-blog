class SiteFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer>
                <hr>
                <div class="footer-content">
                    <p>&copy; ${new Date().getFullYear()} My Portfolio</p>
                    <nav>
                        <a href="https://github.com" target="_blank">GitHub</a> | 
                        <a href="https://linkedin.com" target="_blank">LinkedIn</a>
                    </nav>
                </div>
            </footer>
            <style>
                footer {
                    text-align: center;
                    padding: 2rem;
                    margin-top: 3rem;
                    color: var(--text-color, #333);
                }
                .footer-content nav {
                    margin-top: 0.5rem;
                }
                .footer-content a {
                    text-decoration: none;
                    color: var(--primary-color, blue);
                    margin: 0 0.5rem;
                }
            </style>
        `;
    }
}

customElements.define('site-footer', SiteFooter);