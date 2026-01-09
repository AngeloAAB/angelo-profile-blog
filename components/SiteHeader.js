class SiteHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header>
                <nav>
                    <div class="logo"><strong>My Profile</strong></div>
                    <ul>
                        <li><a href="#" data-link="home">Home</a></li>
                        <li><a href="#" data-link="blog">Blog</a></li>
                    </ul>
                </nav>
            </header>
            <style>
                header {
                    padding: 1rem 2rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    background: var(--bg-color, #fff);
                    border-bottom: 1px solid #eee;
                }
                nav {
                    display: flex;
                    width: 100%;
                    justify-content: space-between;
                }
                ul {
                    list-style: none;
                    display: flex;
                    gap: 1.5rem;
                    margin: 0;
                }
                a {
                    text-decoration: none;
                    color: var(--text-color, #333);
                    font-weight: 500;
                }
                a:hover {
                    color: var(--primary-color, blue);
                }
            </style>
        `;
    }
}

customElements.define('site-header', SiteHeader);