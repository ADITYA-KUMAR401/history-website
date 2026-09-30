// ===================================================================
// इतिहास Anime — Full JavaScript (Gallery + Video Stories + Generator)
// ===================================================================

// ===== CHARACTER DATA (Gallery) =====
const characterData = {
    chandragupta: {
        name: 'Chandragupta Maurya', role: 'Founder of the Maurya Empire', era: '340–298 BCE',
        image: 'images/chandragupta_maurya.jpg',
        bio: 'Chandragupta Maurya was the founder of the Maurya Empire. Starting as a young warrior from humble origins, he was mentored by the brilliant strategist Chanakya. Together they overthrew the powerful Nanda dynasty and defeated the Greek forces of Seleucus Nicator. He unified most of the Indian subcontinent under one rule for the first time.',
        stats: [{ label: 'Dynasty', value: 'Maurya' }, { label: 'Capital', value: 'Pataliputra' }, { label: 'Known For', value: 'Unifying India' }, { label: 'Mentor', value: 'Chanakya' }],
        quote: '"With the guidance of a wise teacher, even a common man can become an emperor."'
    },
    chanakya: {
        name: 'Chanakya (Kautilya)', role: 'The Master Strategist', era: '375–283 BCE',
        image: 'images/chanakya.jpg',
        bio: 'Chanakya, also known as Kautilya, was an ancient Indian polymath — teacher, philosopher, economist, and royal advisor. A Brahmin scholar at Takshashila with a shaved head and only a shikha, he authored the Arthashastra, a treatise on statecraft written 2,000 years before Machiavelli.',
        stats: [{ label: 'Title', value: 'Kautilya / Vishnugupta' }, { label: 'University', value: 'Takshashila' }, { label: 'Masterwork', value: 'Arthashastra' }, { label: 'Legacy', value: 'Political Science Pioneer' }],
        quote: '"Before you start some work, always ask yourself three questions — Why am I doing it? What might the results be? Will I be successful?"'
    },
    ashoka: {
        name: 'Ashoka the Great', role: 'Emperor of Peace & Dharma', era: '304–232 BCE',
        image: 'images/ashoka_the_great.jpg',
        bio: 'Emperor Ashoka, grandson of Chandragupta, was transformed by the bloodshed at the Battle of Kalinga. He embraced Buddhism and devoted his life to peace and dharma. The Ashoka Chakra adorns the Indian flag to this day.',
        stats: [{ label: 'Dynasty', value: 'Maurya' }, { label: 'Turning Point', value: 'Battle of Kalinga' }, { label: 'Religion', value: 'Buddhism' }, { label: 'Symbol', value: 'Ashoka Chakra 🇮🇳' }],
        quote: '"All men are my children. What I desire for my own children — their welfare — I desire for all men."'
    },
    prithviraj: {
        name: 'Prithviraj Chauhan', role: 'The Last Great Rajput King', era: '1166–1192 CE',
        image: 'images/prithviraj_chauhan.jpg',
        bio: 'Prithviraj III was the king of the Chahamana dynasty, renowned as a master archer. He famously defeated Muhammad of Ghor in the First Battle of Tarain. Legend says he killed Ghori with a blind arrow using shabdbhedi baan — shooting by sound.',
        stats: [{ label: 'Dynasty', value: 'Chahamana (Chauhan)' }, { label: 'Capital', value: 'Ajmer & Delhi' }, { label: 'Famous Battle', value: 'Tarain (1191)' }, { label: 'Skill', value: 'Shabdbhedi Baan' }],
        quote: '"A Rajput warrior fights with honour, not sight — even darkness cannot stop the arrow of justice."'
    },
    shivaji: {
        name: 'Chhatrapati Shivaji Maharaj', role: 'Founder of the Maratha Empire', era: '1630–1680 CE',
        image: 'images/shivaji_maharaj.jpg',
        bio: 'Chhatrapati Shivaji Maharaj carved out a kingdom using brilliant guerrilla warfare. With his iconic Maratha turban and Bhavani sword, he established a competent civil administration, built a formidable navy, and promoted religious tolerance.',
        stats: [{ label: 'Dynasty', value: 'Bhonsle (Maratha)' }, { label: 'Capital', value: 'Raigad Fort' }, { label: 'Sword', value: 'Bhavani Talwar' }, { label: 'Innovation', value: 'Indian Navy Pioneer' }],
        quote: '"Even if there were a sword in the hands of everyone, it is willpower alone that establishes a kingdom."'
    },
    lakshmibai: {
        name: 'Rani Lakshmibai', role: 'The Warrior Queen of Jhansi', era: '1828–1858 CE',
        image: 'images/rani_lakshmibai.jpg',
        bio: 'Rani Lakshmibai was one of the leading figures of the Indian Rebellion of 1857. She rode into battle with her young son strapped to her back. Even her British adversaries praised her as "the bravest and best military leader of the rebellion."',
        stats: [{ label: 'Kingdom', value: 'Jhansi' }, { label: 'Rebellion', value: '1857 Revolt' }, { label: 'Horse', value: 'Badal & Sarangi' }, { label: 'Age at Death', value: '29 years' }],
        quote: '"मैं अपनी झाँसी नहीं दूँगी!" — I shall not give up my Jhansi!'
    },
    maharana_pratap: {
        name: 'Maharana Pratap', role: 'The Pride of Mewar', era: '1540–1597 CE',
        image: 'images/maharana_pratap.jpg',
        bio: 'Maharana Pratap was the Rajput king of Mewar who never surrendered to the Mughal Empire. The Battle of Haldighati (1576) became legendary. His loyal horse Chetak sacrificed its life to save its master — a bond celebrated for centuries.',
        stats: [{ label: 'Dynasty', value: 'Sisodia (Rajput)' }, { label: 'Kingdom', value: 'Mewar' }, { label: 'Famous Battle', value: 'Haldighati (1576)' }, { label: 'Loyal Horse', value: 'Chetak' }],
        quote: '"I may lose my kingdom, but I will never lose my honour. The sun of Mewar shall never set."'
    }
};

// ===== ANIME VIDEO STORY SCRIPTS =====
// Each story has chapters with scene direction
const videoStories = {
    chandragupta: {
        title: 'Chandragupta Maurya',
        subtitle: 'The Rise of an Empire',
        image: 'images/chandragupta_maurya.jpg',
        chapters: [
            { type: 'title', duration: 5000 },
            { type: 'chapter', label: 'Chapter I', title: 'The Orphan of Pataliputra', duration: 3000 },
            { type: 'narration', text: 'In the ancient city of Pataliputra, under the tyrannical rule of the Nanda dynasty, a young boy with fire in his eyes dreamed of a united Bharat...', duration: 7000 },
            { type: 'character', duration: 6000 },
            { type: 'narration', text: 'Abandoned and alone, the boy showed extraordinary courage and leadership even as a child. A passing scholar noticed something remarkable in him — the spark of a future emperor.', duration: 8000 },
            { type: 'chapter', label: 'Chapter II', title: 'The Meeting with Chanakya', duration: 3000 },
            { type: 'narration', text: 'At the great university of Takshashila, the brilliant Brahmin teacher Chanakya — humiliated by the Nanda king — took a sacred oath. He would uproot the corrupt dynasty and place a worthy king on the throne.', duration: 9000 },
            { type: 'narration', text: 'When Chanakya saw young Chandragupta commanding other boys in play, he knew — this was the one. The teacher found his emperor. The sword found its strategist.', duration: 8000 },
            { type: 'chapter', label: 'Chapter III', title: 'The Fall of the Nandas', duration: 3000 },
            { type: 'narration', text: 'Years of rigorous training in warfare, diplomacy, and statecraft transformed the orphan into an unstoppable warrior. With Chanakya\'s masterful strategy, they built an army from nothing.', duration: 8000 },
            { type: 'character', duration: 5000 },
            { type: 'narration', text: 'In a campaign that shook the subcontinent, Chandragupta defeated the mighty Nanda army, conquered Pataliputra, and at the age of just 20, became the Emperor of the greatest empire India had ever seen.', duration: 9000 },
            { type: 'chapter', label: 'Chapter IV', title: 'The Maurya Empire', duration: 3000 },
            { type: 'narration', text: 'He defeated the Greek generals left behind by Alexander. He made the mighty Seleucus Nicator bow and offer his daughter in peace. From Afghanistan to Bengal — one empire, one Bharat, one Chandragupta.', duration: 9000 },
            { type: 'quote', duration: 6000 },
            { type: 'credit', duration: 4000 }
        ]
    },
    chanakya: {
        title: 'Chanakya',
        subtitle: 'The Mastermind\'s Oath',
        image: 'images/chanakya.jpg',
        chapters: [
            { type: 'title', duration: 5000 },
            { type: 'chapter', label: 'Chapter I', title: 'The Scholar of Takshashila', duration: 3000 },
            { type: 'narration', text: 'In the ancient halls of Takshashila — the world\'s first university — a brilliant Brahmin scholar with a shaved head and a single shikha spent his days mastering every known science.', duration: 8000 },
            { type: 'character', duration: 6000 },
            { type: 'narration', text: 'Chanakya was no ordinary teacher. He was a master of economics, warfare, politics, and human psychology. His mind was sharper than any sword ever forged.', duration: 7000 },
            { type: 'chapter', label: 'Chapter II', title: 'The Oath of Vengeance', duration: 3000 },
            { type: 'narration', text: 'When the arrogant Nanda king Dhanananda insulted and humiliated him in open court, Chanakya untied his sacred shikha and took a thunderous oath — "I will not tie my shikha until I uproot this dynasty!"', duration: 9000 },
            { type: 'narration', text: 'This was not the rage of a warrior. This was the cold, calculated fury of the most dangerous mind in all of India. The Nanda king had made his greatest mistake.', duration: 8000 },
            { type: 'chapter', label: 'Chapter III', title: 'The Arthashastra', duration: 3000 },
            { type: 'narration', text: 'Chanakya wrote the Arthashastra — a masterwork on statecraft, espionage, economics, and governance that would influence rulers for millennia. It was written 1,800 years before Machiavelli\'s The Prince.', duration: 9000 },
            { type: 'character', duration: 5000 },
            { type: 'narration', text: 'With his pen, he designed an empire. With his strategy, he built it. And with his student Chandragupta, he delivered on every word of his oath.', duration: 8000 },
            { type: 'quote', duration: 6000 },
            { type: 'credit', duration: 4000 }
        ]
    },
    ashoka: {
        title: 'Ashoka the Great',
        subtitle: 'From Warrior to Saint',
        image: 'images/ashoka_the_great.jpg',
        chapters: [
            { type: 'title', duration: 5000 },
            { type: 'chapter', label: 'Chapter I', title: 'The Fierce Prince', duration: 3000 },
            { type: 'narration', text: 'Born as the grandson of the great Chandragupta Maurya, young Ashoka was fierce, ambitious, and ruthless. He crushed every rebellion and conquered every territory that stood against the Maurya Empire.', duration: 9000 },
            { type: 'character', duration: 6000 },
            { type: 'narration', text: 'They called him "Chandashoka" — Ashoka the Cruel. His military campaigns knew no mercy. The throne of Pataliputra was his, seized through sheer force and political cunning.', duration: 8000 },
            { type: 'chapter', label: 'Chapter II', title: 'The Battle of Kalinga', duration: 3000 },
            { type: 'narration', text: 'In 261 BCE, Ashoka launched his greatest campaign — the invasion of Kalinga. The battle was devastating. Over 100,000 soldiers died. 150,000 were deported. The rivers ran red with blood.', duration: 9000 },
            { type: 'narration', text: 'Walking through the battlefield after his "victory," Ashoka saw the carnage — the bodies of mothers, children, innocents. Something broke inside the emperor. Something new was born.', duration: 9000 },
            { type: 'chapter', label: 'Chapter III', title: 'The Transformation', duration: 3000 },
            { type: 'narration', text: 'Ashoka renounced violence forever. He embraced Buddhism and the path of Dharma. The most powerful emperor in the world chose peace over power, compassion over conquest.', duration: 8000 },
            { type: 'character', duration: 5000 },
            { type: 'narration', text: 'He erected the Ashoka Pillars across India — each bearing the lion capital that would become independent India\'s national emblem. The Ashoka Chakra adorns the Indian flag to this very day.', duration: 9000 },
            { type: 'quote', duration: 6000 },
            { type: 'credit', duration: 4000 }
        ]
    },
    prithviraj: {
        title: 'Prithviraj Chauhan',
        subtitle: 'The Arrow of Justice',
        image: 'images/prithviraj_chauhan.jpg',
        chapters: [
            { type: 'title', duration: 5000 },
            { type: 'chapter', label: 'Chapter I', title: 'The Young King of Ajmer', duration: 3000 },
            { type: 'narration', text: 'At the age of just 11, Prithviraj Chauhan ascended the throne of the mighty Chahamana dynasty. Young in years but ancient in courage, he was a born warrior and a legendary archer.', duration: 8000 },
            { type: 'character', duration: 6000 },
            { type: 'narration', text: 'His skill with the bow was beyond human. He could hit a target purely by sound — the legendary art of Shabdbhedi Baan. They said his arrows never missed, for they carried the honour of a Rajput.', duration: 8000 },
            { type: 'chapter', label: 'Chapter II', title: 'The First Battle of Tarain', duration: 3000 },
            { type: 'narration', text: 'When Muhammad of Ghor invaded with a massive army, Prithviraj met him on the plains of Tarain in 1191. In a glorious display of Rajput valour, he crushed the invader and drove him back in defeat.', duration: 9000 },
            { type: 'narration', text: 'True to Rajput honour, Prithviraj showed mercy and released his defeated enemy — a decision that would define the fate of Bharat forever.', duration: 7000 },
            { type: 'chapter', label: 'Chapter III', title: 'The Final Arrow', duration: 3000 },
            { type: 'narration', text: 'Captured after the Second Battle of Tarain, Prithviraj was blinded but his spirit remained unbroken. Legend says that in Ghor\'s court, his loyal poet Chand Bardai whispered the location of the enemy king in verse.', duration: 9000 },
            { type: 'character', duration: 5000 },
            { type: 'narration', text: '"Chaar baas, chaubis gaj, angul ashta pramaan... Taa upar sultan hai, mat chuko Chauhan!" — And with a single arrow guided by sound alone, the blind king struck true. A legend for eternity.', duration: 10000 },
            { type: 'quote', duration: 6000 },
            { type: 'credit', duration: 4000 }
        ]
    },
    shivaji: {
        title: 'Chhatrapati Shivaji Maharaj',
        subtitle: 'The Tiger of Maharashtra',
        image: 'images/shivaji_maharaj.jpg',
        chapters: [
            { type: 'title', duration: 5000 },
            { type: 'chapter', label: 'Chapter I', title: 'The Son of the Sahyadris', duration: 3000 },
            { type: 'narration', text: 'In the rugged Sahyadri mountains of Maharashtra, a young boy named Shivaji grew up listening to tales of valour from his mother Jijabai. She ignited in him a fire that would liberate an entire nation.', duration: 8000 },
            { type: 'character', duration: 6000 },
            { type: 'narration', text: 'At the age of just 16, Shivaji captured the fortress of Torna. It was the first spark of what would become an unstoppable wildfire — the rise of the Maratha Empire.', duration: 8000 },
            { type: 'chapter', label: 'Chapter II', title: 'The Art of Guerrilla War', duration: 3000 },
            { type: 'narration', text: 'Shivaji revolutionized warfare. While great empires relied on massive armies, he used the mountains themselves as his army — striking fast, disappearing into the hills, outsmarting forces ten times his size.', duration: 9000 },
            { type: 'narration', text: 'He built a network of hill forts across the Sahyadris. He created India\'s first navy. He treated every faith with respect. He was not just a warrior — he was a visionary king.', duration: 8000 },
            { type: 'chapter', label: 'Chapter III', title: 'The Coronation', duration: 3000 },
            { type: 'narration', text: 'On June 6, 1674, atop the mighty Raigad Fort, Shivaji was crowned Chhatrapati — the sovereign king. Saffron flags flew over the Sahyadris. The Maratha Empire was born. Bharat had its protector.', duration: 9000 },
            { type: 'character', duration: 5000 },
            { type: 'narration', text: 'His legacy endures — a king who proved that courage, strategy, and righteousness can overcome any force. Jai Bhavani! Jai Shivaji!', duration: 7000 },
            { type: 'quote', duration: 6000 },
            { type: 'credit', duration: 4000 }
        ]
    },
    lakshmibai: {
        title: 'Rani Lakshmibai',
        subtitle: 'The Queen Who Fought',
        image: 'images/rani_lakshmibai.jpg',
        chapters: [
            { type: 'title', duration: 5000 },
            { type: 'chapter', label: 'Chapter I', title: 'Manikarnika', duration: 3000 },
            { type: 'narration', text: 'Born as Manikarnika in Varanasi, the young girl grew up learning horse riding, sword fighting, and archery — alongside her education. She was no ordinary girl. She was destiny\'s chosen warrior.', duration: 8000 },
            { type: 'character', duration: 6000 },
            { type: 'narration', text: 'Married to Maharaja Gangadhar Rao of Jhansi, she became Rani Lakshmibai — the queen of a small but proud kingdom. When her husband died and the British tried to annex Jhansi, she stood firm.', duration: 8000 },
            { type: 'chapter', label: 'Chapter II', title: '"मैं अपनी झाँसी नहीं दूँगी!"', duration: 4000 },
            { type: 'narration', text: '"I shall not give up my Jhansi!" — These words thundered across India. A young queen, standing alone against the might of the British Empire, refusing to surrender what was rightfully hers.', duration: 8000 },
            { type: 'narration', text: 'When the British armies laid siege to Jhansi, she defended her city with extraordinary bravery. When the walls fell, she did the unthinkable — she leapt from the fort on horseback, her infant son strapped to her back.', duration: 9000 },
            { type: 'chapter', label: 'Chapter III', title: 'The Last Ride', duration: 3000 },
            { type: 'narration', text: 'Dressed as a man, sword in hand, baby on her back, Rani Lakshmibai rode through enemy lines like a force of nature. Even the British general Hugh Rose admitted she was "the bravest and best of the military leaders."', duration: 9000 },
            { type: 'character', duration: 5000 },
            { type: 'narration', text: 'She fell in battle at just 29 years of age. But her sacrifice lit the flame of India\'s freedom struggle. She proved that courage knows no gender. Rani Lakshmibai — the eternal symbol of resistance.', duration: 9000 },
            { type: 'quote', duration: 6000 },
            { type: 'credit', duration: 4000 }
        ]
    },
    maharana_pratap: {
        title: 'Maharana Pratap',
        subtitle: 'The Unconquered King',
        image: 'images/maharana_pratap.jpg',
        chapters: [
            { type: 'title', duration: 5000 },
            { type: 'chapter', label: 'Chapter I', title: 'The Lion of Mewar', duration: 3000 },
            { type: 'narration', text: 'In the royal house of Mewar, the noble Sisodia Rajput dynasty, a prince was born whose name would become synonymous with freedom, honour, and unyielding courage — Maharana Pratap.', duration: 8000 },
            { type: 'character', duration: 6000 },
            { type: 'narration', text: 'When most Rajput kings submitted to Mughal authority, Pratap stood tall and refused. He would eat grass and live in the forests, but he would never bow before any invader. That was his sacred oath.', duration: 9000 },
            { type: 'chapter', label: 'Chapter II', title: 'The Battle of Haldighati', duration: 3000 },
            { type: 'narration', text: 'On June 18, 1576, the narrow pass of Haldighati witnessed one of history\'s most heroic battles. Maharana Pratap, with a small force, charged against the massive Mughal army led by Man Singh.', duration: 9000 },
            { type: 'narration', text: 'Riding his beloved horse Chetak, Pratap fought with the fury of a lion. Though outnumbered, the Rajputs fought with such valour that even the Mughal chroniclers recorded their bravery with respect.', duration: 8000 },
            { type: 'chapter', label: 'Chapter III', title: 'Chetak — The Loyal Companion', duration: 3000 },
            { type: 'narration', text: 'When Pratap was wounded and the battle turned, his loyal horse Chetak — though fatally injured — carried his master to safety, leaping across a wide stream before collapsing. Pratap wept over his fallen companion.', duration: 9000 },
            { type: 'character', duration: 5000 },
            { type: 'narration', text: 'Maharana Pratap never surrendered. He recaptured most of Mewar and ruled with honour until his last breath. The sun of Mewar never set. His courage echoes through the centuries — a true hero of Bharat.', duration: 9000 },
            { type: 'quote', duration: 6000 },
            { type: 'credit', duration: 4000 }
        ]
    }
};

// ===== Generator character placeholders =====
const generatorCharacters = {
    maharana_pratap: { name: 'Maharana Pratap', desc: 'The legendary Rajput king of Mewar who never surrendered. Famous for the Battle of Haldighati and his loyal horse Chetak.', image: 'images/maharana_pratap.jpg' },
    rani_padmini: { name: 'Rani Padmini', desc: 'The legendary queen of Chittor, known for her beauty and the supreme sacrifice of Jauhar to protect her honour.', image: 'images/rani_lakshmibai.jpg' },
    tipu_sultan: { name: 'Tipu Sultan', desc: 'The Tiger of Mysore — pioneered rocket artillery against the British. A fierce and noble defender of his kingdom.', image: 'images/ashoka_the_great.jpg' },
    bhagat_singh: { name: 'Bhagat Singh', desc: 'The revolutionary freedom fighter. His sacrifice at age 23 inspired millions to fight for India\'s independence.', image: 'images/chandragupta_maurya.jpg' },
    rani_durgavati: { name: 'Rani Durgavati', desc: 'The brave warrior queen of Gondwana. She ruled with wisdom and chose death over surrender against the Mughals.', image: 'images/rani_lakshmibai.jpg' },
    subhas_bose: { name: 'Subhas Chandra Bose', desc: 'Netaji — commander of the Indian National Army. "Give me blood and I shall give you freedom!" still echoes.', image: 'images/chandragupta_maurya.jpg' }
};

// ===== PARTICLES BACKGROUND =====
function initParticles() {
    const canvas = document.getElementById('particles');
    const ctx = canvas.getContext('2d');
    let particles = [];
    function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
    resize(); window.addEventListener('resize', resize);
    class Particle {
        constructor() { this.reset(); }
        reset() {
            this.x = Math.random() * canvas.width; this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 0.5; this.speedX = (Math.random() - 0.5) * 0.3;
            this.speedY = (Math.random() - 0.5) * 0.3; this.opacity = Math.random() * 0.3 + 0.1;
            this.color = Math.random() > 0.5 ? '255,153,51' : '240,180,65';
        }
        update() { this.x += this.speedX; this.y += this.speedY; if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) this.reset(); }
        draw() { ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2); ctx.fillStyle = `rgba(${this.color},${this.opacity})`; ctx.fill(); }
    }
    for (let i = 0; i < 60; i++) particles.push(new Particle());
    function animate() { ctx.clearRect(0, 0, canvas.width, canvas.height); particles.forEach(p => { p.update(); p.draw(); }); requestAnimationFrame(animate); }
    animate();
}

// ===== NAVBAR =====
function initNavbar() {
    const navbar = document.querySelector('.navbar');
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-link');
    window.addEventListener('scroll', () => { navbar.classList.toggle('scrolled', window.scrollY > 50); });
    navToggle.addEventListener('click', () => { navLinks.classList.toggle('open'); });
    links.forEach(link => { link.addEventListener('click', () => { links.forEach(l => l.classList.remove('active')); link.classList.add('active'); navLinks.classList.remove('open'); }); });
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY + 100;
        sections.forEach(section => {
            const top = section.offsetTop, height = section.offsetHeight, id = section.getAttribute('id');
            if (scrollY >= top && scrollY < top + height) { links.forEach(l => l.classList.remove('active')); const a = document.querySelector(`.nav-link[href="#${id}"]`); if (a) a.classList.add('active'); }
        });
    });
}

// ===== HERO CAROUSEL =====
function initHeroCarousel() {
    const images = document.querySelectorAll('.carousel-img');
    let current = 0;
    setInterval(() => { images[current].classList.remove('active'); current = (current + 1) % images.length; images[current].classList.add('active'); }, 4000);
}

// ===== STAT COUNTERS =====
function initCounters() {
    const stats = document.querySelectorAll('.stat-num');
    const obs = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target, target = parseInt(el.dataset.target); let current = 0; const step = target / 60;
                const timer = setInterval(() => {
                    current += step; if (current >= target) { current = target; clearInterval(timer); }
                    el.textContent = Math.floor(current);
                    if (target === 100) el.textContent = Math.floor(current) + '%';
                    if (target === 3000) el.textContent = Math.floor(current).toLocaleString() + '+';
                }, 16);
                obs.unobserve(el);
            }
        });
    }, { threshold: 0.5 });
    stats.forEach(s => obs.observe(s));
}

// ===== GALLERY FILTER =====
function initGalleryFilter() {
    const btns = document.querySelectorAll('.filter-btn'), cards = document.querySelectorAll('.card');
    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            btns.forEach(b => b.classList.remove('active')); btn.classList.add('active');
            const filter = btn.dataset.filter;
            cards.forEach(card => {
                if (filter === 'all' || card.dataset.era === filter) { card.classList.remove('hidden'); card.style.display = ''; }
                else { card.classList.add('hidden'); setTimeout(() => card.style.display = 'none', 300); }
            });
        });
    });
}

// ===== MODAL =====
let currentModalCharacter = null;
function initModal() {
    const modal = document.getElementById('characterModal'), cards = document.querySelectorAll('.card');
    const closeBtn = modal.querySelector('.modal-close'), backdrop = modal.querySelector('.modal-backdrop');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const key = card.dataset.character, data = characterData[key]; if (!data) return;
            currentModalCharacter = key;
            document.getElementById('modalImg').src = data.image;
            document.getElementById('modalEra').textContent = data.era;
            document.getElementById('modalName').textContent = data.name;
            document.getElementById('modalRole').textContent = data.role;
            document.getElementById('modalBio').textContent = data.bio;
            document.getElementById('modalStats').innerHTML = data.stats.map(s => `<div class="modal-stat"><span class="modal-stat-label">${s.label}</span><span class="modal-stat-value">${s.value}</span></div>`).join('');
            document.getElementById('modalQuote').textContent = data.quote;
            modal.classList.add('active'); document.body.style.overflow = 'hidden';
        });
    });
    function close() { modal.classList.remove('active'); document.body.style.overflow = ''; }
    closeBtn.addEventListener('click', close); backdrop.addEventListener('click', close);
    document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
}

// Play story from modal button
window.playStoryFromModal = function() {
    if (currentModalCharacter && videoStories[currentModalCharacter]) {
        document.getElementById('characterModal').classList.remove('active');
        document.body.style.overflow = '';
        startCinema(currentModalCharacter);
    }
};

// ===== CINEMA VIDEO PLAYER =====
let cinemaTimers = [];
let cinemaPlaying = false;
let cinemaCurrentScene = 0;
let cinemaStoryKey = null;
let cinemaTotalTime = 0;
let cinemaElapsed = 0;
let cinemaInterval = null;

function startCinema(key) {
    const story = videoStories[key];
    if (!story) return;
    cinemaStoryKey = key;
    cinemaCurrentScene = 0;
    cinemaElapsed = 0;
    cinemaPlaying = true;
    cinemaTotalTime = story.chapters.reduce((a, c) => a + c.duration, 0);

    const player = document.getElementById('cinemaPlayer');
    player.style.display = 'block';
    document.body.style.overflow = 'hidden';

    // Set background
    document.getElementById('cinemaBg').style.backgroundImage = `url(${story.image})`;

    // Build chapter dots
    const dotsEl = document.getElementById('cinemaChapterDots');
    dotsEl.innerHTML = '';
    let accumulated = 0;
    story.chapters.forEach(ch => {
        if (ch.type === 'chapter') {
            const dot = document.createElement('div');
            dot.style.cssText = `position:absolute;left:${(accumulated / cinemaTotalTime) * 100}%;top:0;width:6px;height:6px;background:#ff9933;border-radius:50%;transform:translateX(-50%);`;
            dot.title = ch.title || '';
            dotsEl.appendChild(dot);
        }
        accumulated += ch.duration;
    });

    // Start progress tracker
    clearInterval(cinemaInterval);
    cinemaInterval = setInterval(() => {
        if (!cinemaPlaying) return;
        cinemaElapsed += 100;
        const pct = Math.min((cinemaElapsed / cinemaTotalTime) * 100, 100);
        document.getElementById('cinemaProgressBar').style.width = pct + '%';
        const totalSec = Math.floor(cinemaElapsed / 1000);
        const m = Math.floor(totalSec / 60).toString().padStart(2, '0');
        const s = (totalSec % 60).toString().padStart(2, '0');
        document.getElementById('cinemaTime').textContent = `${m}:${s}`;
    }, 100);

    // Create floating particles in cinema
    createCinemaParticles();

    // Start playing scenes
    playScene(0);
}

function clearAllCinema() {
    cinemaTimers.forEach(t => clearTimeout(t));
    cinemaTimers = [];
    const ids = ['cinemaChapter', 'cinemaTitle', 'cinemaSubtitle', 'cinemaNarration', 'cinemaQuote', 'cinemaCredit'];
    ids.forEach(id => { const el = document.getElementById(id); el.style.opacity = '0'; el.innerHTML = ''; });
    const charImg = document.getElementById('cinemaCharImg');
    charImg.style.opacity = '0';
    charImg.classList.remove('ken-burns');
    charImg.innerHTML = '';
}

function playScene(index) {
    const story = videoStories[cinemaStoryKey];
    if (!story || index >= story.chapters.length) {
        closeCinema();
        return;
    }
    cinemaCurrentScene = index;
    clearAllCinema();

    const scene = story.chapters[index];
    const data = characterData[cinemaStoryKey];

    switch (scene.type) {
        case 'title':
            document.getElementById('cinemaTitle').textContent = story.title;
            document.getElementById('cinemaTitle').style.opacity = '1';
            document.getElementById('cinemaSubtitle').textContent = story.subtitle;
            const t1 = setTimeout(() => { document.getElementById('cinemaSubtitle').style.opacity = '1'; }, 800);
            cinemaTimers.push(t1);
            break;

        case 'chapter':
            document.getElementById('cinemaChapter').textContent = scene.label;
            document.getElementById('cinemaChapter').style.opacity = '1';
            document.getElementById('cinemaTitle').textContent = scene.title;
            const t2 = setTimeout(() => { document.getElementById('cinemaTitle').style.opacity = '1'; }, 600);
            cinemaTimers.push(t2);
            break;

        case 'narration':
            typeText(document.getElementById('cinemaNarration'), scene.text, scene.duration * 0.7);
            document.getElementById('cinemaNarration').style.opacity = '1';
            break;

        case 'character':
            const charImg = document.getElementById('cinemaCharImg');
            charImg.innerHTML = `<img src="${story.image}" alt="${story.title}" style="width:100%;height:100%;object-fit:cover;">`;
            charImg.style.opacity = '1';
            const t3 = setTimeout(() => { charImg.classList.add('ken-burns'); }, 100);
            cinemaTimers.push(t3);
            break;

        case 'quote':
            document.getElementById('cinemaQuote').textContent = data ? data.quote : '';
            const t4 = setTimeout(() => { document.getElementById('cinemaQuote').style.opacity = '1'; }, 400);
            cinemaTimers.push(t4);
            break;

        case 'credit':
            document.getElementById('cinemaCredit').innerHTML = `
                <div style="font-family:'Cinzel Decorative',serif;font-size:24px;color:#ff9933;margin-bottom:12px;">इतिहास Anime</div>
                <div style="font-size:14px;color:#6a6a80;">A tribute to the legends of Bharat</div>
                <div style="font-size:12px;color:#6a6a80;margin-top:8px;">Every great personality portrayed with honour and dignity 🙏</div>
            `;
            document.getElementById('cinemaCredit').style.opacity = '1';
            break;
    }

    // Schedule next scene
    const next = setTimeout(() => {
        if (cinemaPlaying) playScene(index + 1);
    }, scene.duration);
    cinemaTimers.push(next);
}

function typeText(el, text, duration) {
    const chars = text.split('');
    const delay = duration / chars.length;
    el.textContent = '';
    chars.forEach((char, i) => {
        const t = setTimeout(() => { el.textContent += char; }, delay * i);
        cinemaTimers.push(t);
    });
}

function createCinemaParticles() {
    const container = document.getElementById('cinemaParticles');
    container.innerHTML = '';
    for (let i = 0; i < 30; i++) {
        const p = document.createElement('div');
        const x = Math.random() * 100;
        const dur = 6 + Math.random() * 10;
        const size = 1 + Math.random() * 3;
        const delay = Math.random() * 5;
        p.style.cssText = `
            position:absolute; left:${x}%; bottom:-10px;
            width:${size}px; height:${size}px;
            background:rgba(255,153,51,${0.2 + Math.random() * 0.3});
            border-radius:50%;
            animation: cinemaFloat ${dur}s ${delay}s linear infinite;
        `;
        container.appendChild(p);
    }
}

function closeCinema() {
    clearAllCinema();
    clearInterval(cinemaInterval);
    cinemaPlaying = false;
    document.getElementById('cinemaPlayer').style.display = 'none';
    document.body.style.overflow = '';
}

function initCinema() {
    // Video card clicks
    document.querySelectorAll('.video-char-card').forEach(card => {
        card.addEventListener('click', () => {
            startCinema(card.dataset.video);
        });
    });

    // Play/Pause
    document.getElementById('cinemaPlayPause').addEventListener('click', () => {
        cinemaPlaying = !cinemaPlaying;
        document.getElementById('cinemaPlayPause').textContent = cinemaPlaying ? '⏸️' : '▶️';
        if (cinemaPlaying) playScene(cinemaCurrentScene);
    });

    // Close
    document.getElementById('cinemaClose').addEventListener('click', closeCinema);

    // Fullscreen
    document.getElementById('cinemaFullscreen').addEventListener('click', () => {
        const player = document.getElementById('cinemaPlayer');
        if (document.fullscreenElement) document.exitFullscreen();
        else player.requestFullscreen().catch(() => {});
    });

    // Escape key
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && document.getElementById('cinemaPlayer').style.display === 'block') closeCinema();
    });
}

// ===== GENERATOR =====
function initGenerator() {
    const selectOptions = document.querySelectorAll('.select-option');
    const styleBtns = document.querySelectorAll('.style-btn');
    const sceneBtns = document.querySelectorAll('.scene-btn');
    const generateBtn = document.getElementById('generateBtn');
    let selectedCharacter = null;
    selectOptions.forEach(opt => { opt.addEventListener('click', () => { selectOptions.forEach(o => o.classList.remove('selected')); opt.classList.add('selected'); selectedCharacter = opt.dataset.value; }); });
    styleBtns.forEach(btn => { btn.addEventListener('click', () => { styleBtns.forEach(b => b.classList.remove('active')); btn.classList.add('active'); }); });
    sceneBtns.forEach(btn => { btn.addEventListener('click', () => { sceneBtns.forEach(b => b.classList.remove('active')); btn.classList.add('active'); }); });
    generateBtn.addEventListener('click', () => {
        if (!selectedCharacter) { generateBtn.style.animation = 'shake 0.5s ease'; setTimeout(() => generateBtn.style.animation = '', 500); return; }
        const btnText = generateBtn.querySelector('.btn-text'), btnLoading = generateBtn.querySelector('.btn-loading');
        btnText.style.display = 'none'; btnLoading.style.display = 'inline-flex'; generateBtn.disabled = true;
        setTimeout(() => {
            const charData = generatorCharacters[selectedCharacter];
            const placeholder = document.querySelector('.preview-placeholder'), result = document.querySelector('.preview-result');
            document.getElementById('previewImg').src = charData.image;
            document.getElementById('previewName').textContent = charData.name;
            document.getElementById('previewDesc').textContent = charData.desc;
            placeholder.style.display = 'none'; result.style.display = 'block'; result.style.animation = 'fadeIn 0.8s ease';
            btnText.style.display = 'inline-flex'; btnLoading.style.display = 'none'; generateBtn.disabled = false;
        }, 2500);
    });
}

// ===== TIMELINE =====
function initTimeline() {
    const items = document.querySelectorAll('.timeline-item');
    const obs = new IntersectionObserver(entries => { entries.forEach((entry, i) => { if (entry.isIntersecting) setTimeout(() => entry.target.classList.add('visible'), i * 100); }); }, { threshold: 0.2 });
    items.forEach(item => obs.observe(item));
}

// ===== SCROLL ANIMATIONS =====
function initScrollAnimations() {
    const cards = document.querySelectorAll('.card');
    const obs = new IntersectionObserver(entries => { entries.forEach((entry, i) => { if (entry.isIntersecting) { entry.target.style.animation = `fadeInUp 0.6s ease ${i * 0.1}s backwards`; obs.unobserve(entry.target); } }); }, { threshold: 0.1 });
    cards.forEach(card => obs.observe(card));
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
    initParticles();
    initNavbar();
    initHeroCarousel();
    initCounters();
    initGalleryFilter();
    initModal();
    initCinema();
    initGenerator();
    initTimeline();
    initScrollAnimations();
});

// Add dynamic keyframes
const style = document.createElement('style');
style.textContent = `
@keyframes shake { 0%,100%{transform:translateX(0)} 20%{transform:translateX(-8px)} 40%{transform:translateX(8px)} 60%{transform:translateX(-4px)} 80%{transform:translateX(4px)} }
@keyframes cinemaFloat { 0%{transform:translateY(0);opacity:0} 10%{opacity:1} 90%{opacity:1} 100%{transform:translateY(-100vh);opacity:0} }
`;
document.head.appendChild(style);
