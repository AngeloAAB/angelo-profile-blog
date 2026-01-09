/**
 * 1. Configuration: Routing and Content
 * Includes the "About Me" section for the home view.
 */
const routes = {
    home: `
        <section class="hero fade-in">
            <h1>Angelo Bartholomeus</h1>
            <p>Operations Expert & Solution Creator</p>
        </section>

        <section class="about-section fade-in">
            <div class="about-container">
                <div class="about-content">
                    <h2>🚀 About Me</h2>
                    <p><strong>Operations Expert turned Solution Creator</strong></p>
                    <p>I don’t just write code; I build solutions that solve real-world business headaches. With over two decades of experience in retail operations, I understand the friction points in daily workflows.</p>
                    <p>At Convinience store and Supermarket, I transitioned from traditional purchasing to applying automation using SQL, Excel, and Power Query to make reporting seamless.</p>
                    <p>I specialize in creating lean, effective systems that automate the "boring stuff," allowing teams to focus on growth.</p>
                </div>
                <div class="about-image">
                    <img src="assets/profile.png" alt="Angelo Bartholomeus" class="profile-photo">
                </div>
            </div>
        </section>

        <section id="skills" class="skills fade-in">
            <h2>Skills</h2>
            <div class="skills-grid">
                <div class="skill-card">
                    <div class="icon">⚙️</div>
                    <h3>Workflow Optimization</h3>
                    <p>Designing efficient processes that reduce errors and improve team productivity.</p>
                </div>
                <div class="skill-card">
                    <div class="icon">📊</div>
                    <h3>Excel, VBA & Power Query</h3>
                    <p>Advanced data cleaning, automation, and dynamic reporting solutions.</p>
                </div>
                <div class="skill-card">
                    <div class="icon">🗂️</div>
                    <h3>Inventory & Purchasing</h3>
                    <p>20+ years managing stock levels, vendor relations, and purchasing workflows.</p>
                </div>
                <div class="skill-card">
                    <div class="icon">💻</div>
                    <h3>SQL & Databases</h3>
                    <p>Building structured queries and maintaining clean, reliable datasets.</p>
                </div>
                <div class="skill-card">
                    <div class="icon">🛒</div>
                    <h3>Retail Operations</h3>
                    <p>Experience across supermarkets, convenience stores, and logistics environments.</p>
                </div>
                <div class="skill-card">
                    <div class="icon">🌐</div>
                    <h3>Multilingual Communication</h3>
                    <p>Papiamentu, Spanish, English, and Dutch (elementary).</p>
                </div>
            </div>
        </section>

        <section id="experience" class="experience fade-in">
            <h2>Experience</h2>
            <div class="timeline">
                <div class="timeline-item">
                    <div class="timeline-dot"></div>
                    <div class="timeline-content">
                        <h3>Purchaser — Vreugdenhil Supermarket</h3>
                        <span class="date">2011 – Present</span>
                        <p>Managing purchasing, inventory control, invoice processing, and workflow automation. Developed efficient systems using Excel, Power Query, and structured processes.</p>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-dot"></div>
                    <div class="timeline-content">
                        <h3>Supervisor — Beep Beep Convenience Store</h3>
                        <span class="date">2002 – 2011</span>
                        <p>Oversaw daily operations, staff scheduling, inventory management, and administrative tasks.</p>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-dot"></div>
                    <div class="timeline-content">
                        <h3>Sales Representative — Baba’s</h3>
                        <span class="date">1995 – 2002</span>
                        <p>Provided customer service, handled inventory, and supported logistics operations.</p>
                    </div>
                </div>
            </div>
        </section>

        <section id="projects" class="projects fade-in">
            <h2>Projects</h2>
            <div class="projects-grid">
                <div class="project-card">
                    <h3>Automated Invoice Extraction</h3>
                    <p>Built a data extraction workflow that extracts data to recreate invoices in import format, reducing manual entry time by over 70%.</p>
                    <span class="tag">Power Query</span> <span class="tag">Automation</span>
                </div>
                <div class="project-card">
                    <h3>Inventory Reconciliation System</h3>
                    <p>Designed a robust Excel + Power Query solution to compare stock levels and generate clean Inventory reports.</p>
                    <span class="tag">Excel</span> <span class="tag">Process Optimization</span>
                </div>
                <div class="project-card">
                    <h3>Purchasing Workflow Optimization</h3>
                    <p>Streamlined the purchasing process at Vreugdenhil by creating structured templates and automated checks.</p>
                    <span class="tag">Operations</span> <span class="tag">Efficiency</span>
                </div>
                <div class="project-card">
                    <h3>Reporting System</h3>
                    <p>Combine data from multiple sources to create comprehensive reports.</p>
                    <span class="tag">MS Access</span> <span class="tag">SQL Server</span>
                </div>
            </div>
        </section>

        <section id="contact" class="contact fade-in">
            <h2>Contact</h2>
            <p>If you'd like to connect or collaborate, feel free to reach out.</p>
            <a href="mailto:angotheb@gmail.com" class="contact-btn">Send Me an Email</a>
        </section>
    `,
    blog: `<h1>Blog</h1><div id="blog-list">Loading posts...</div>`
};

const appContainer = document.getElementById('app');

async function navigate(page, id = null) {
// 1. Handle Single Post View
    if (page === 'post' && id) {
        try {
            // Using absolute path to prevent 404 on sub-routes
            const response = await fetch('data/posts.json');
            const posts = await response.json();
            const post = posts.find(p => p.id === id);

            if (post) {
                appContainer.innerHTML = `
                    <article class="post-detail">
                        <h1>${post.title}</h1>
                        <small>${post.date}</small>
                        <div class="post-content">${post.content}</div>
                        <br>
                        <button data-link="blog" style="cursor:pointer; padding: 10px; border:none; background: var(--primary-color); color: white; border-radius: 5px;">← Back to Blog</button>
                    </article>
                `;
            } else {
                appContainer.innerHTML = '<h1>Post not found</h1>';
            }
            return;
        } catch (err) {
            appContainer.innerHTML = '<p>Error loading article. Check if /data/posts.json exists.</p>';
            return;
        }
    }

// 2. Handle Regular Routes
    appContainer.innerHTML = routes[page] || '<h1>404</h1><p>Page not found</p>';

    if (page === 'blog') {
        try {
            const response = await fetch('data/posts.json');
            const posts = await response.json();
            renderBlog(posts);
        } catch (error) {
            document.getElementById('blog-list').innerHTML = '<p>Unable to load posts.</p>';
        }
    }
}

// 3. Render Blog Posts
function renderBlog(posts) {
    const list = document.getElementById('blog-list');
    list.innerHTML = posts.map(post => `
        <article class="post-card" data-link="post" data-id="${post.id}" style="cursor:pointer;">
            <h3>${post.title}</h3>
            <small>${post.date}</small>
            <p>${post.summary}</p>
        </article>
    `).join('');
}

// 4. Event Listeners
document.addEventListener('click', (e) => {
    const target = e.target.closest('[data-link]');
    
    if (target) {
        const href = target.getAttribute('href');

        // FIX: If it's an email link, let the browser handle it normally
        if (href && href.startsWith('mailto:')) {
            return; 
        }

        e.preventDefault();
        const page = target.getAttribute('data-link');
        const id = target.getAttribute('data-id');
        
        const url = id ? `post/${id}` : (page === 'home' ? '/' : `/${page}`);
        history.pushState({ page, id }, "", url);
        navigate(page, id);
    }
});

window.onpopstate = (e) => {
    const state = e.state || { page: 'home', id: null };
    navigate(state.page, state.id);
};

// Initial load
navigate('home');

