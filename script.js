// ===================================================================
// इतिहास Anime — Full Interactive Engine
// Indian History × Anime: 12 Legendary Characters, Cinematic Video Player & Generator
// ===================================================================

// ===== 1. COMPREHENSIVE CHARACTER DATABASE =====
const allCharacters = [
    {
        id: 'chandragupta',
        name: 'Chandragupta Maurya',
        role: 'Founder of the Maurya Empire',
        era: 'ancient',
        eraText: '340–298 BCE',
        image: 'images/chandragupta_maurya.jpg',
        tags: ['Warrior', 'Emperor', 'Unifier'],
        bio: 'Chandragupta Maurya founded the Maurya Empire, uniting most of the Indian subcontinent under a single sovereign rule for the first time in history. Mentored by Chanakya, he overthrew the corrupt Nanda dynasty and repelled the Greek forces of Seleucus Nicator.',
        stats: [
            { label: 'Dynasty', value: 'Maurya' },
            { label: 'Capital', value: 'Pataliputra' },
            { label: 'Major Feat', value: 'Unified Bharat' },
            { label: 'Mentor', value: 'Chanakya' }
        ],
        quote: '"With guidance and righteous determination, even a humble youth can forge an immortal empire."',
        videoTitle: 'The Rise of an Empire',
        videoDuration: '⏱️ 2:30 min'
    },
    {
        id: 'chanakya',
        name: 'Chanakya (Kautilya)',
        role: 'The Master Strategist & Polymath',
        era: 'ancient',
        eraText: '375–283 BCE',
        image: 'images/chanakya.jpg',
        tags: ['Philosopher', 'Strategist', 'Guru'],
        bio: 'Chanakya, also known as Vishnugupta and Kautilya, was an ancient Brahmin scholar and royal advisor at Takshashila University. Living with austere simplicity—shaved head and sacred shikha—he authored the pioneering Arthashastra on politics, economics, and military strategy.',
        stats: [
            { label: 'Institution', value: 'Takshashila' },
            { label: 'Masterpiece', value: 'Arthashastra' },
            { label: 'Apparel', value: 'Austere Monk Robe' },
            { label: 'Legacy', value: 'Father of Statecraft' }
        ],
        quote: '"Before embarking on any endeavor, ask yourself: Why am I doing this? What will be the result? Will I succeed?"',
        videoTitle: "The Mastermind's Sacred Oath",
        videoDuration: '⏱️ 2:30 min'
    },
    {
        id: 'ashoka',
        name: 'Ashoka the Great',
        role: 'Emperor of Peace & Universal Dharma',
        era: 'ancient',
        eraText: '304–232 BCE',
        image: 'images/ashoka_the_great.jpg',
        tags: ['Emperor', 'Buddhist', 'Dharma'],
        bio: 'Grandson of Chandragupta, Emperor Ashoka ruled the vast Mauryan empire. Profoundly moved by the sorrow of the Kalinga War, he renounced violence, embraced Buddhism, and championed peace, animal welfare, and moral governance. The Ashoka Chakra shines upon the Indian National Flag today.',
        stats: [
            { label: 'Dynasty', value: 'Maurya' },
            { label: 'Turning Point', value: 'Kalinga War (261 BCE)' },
            { label: 'Ideology', value: 'Ahimsa & Dharma' },
            { label: 'National Symbol', value: 'Ashoka Chakra 🇮🇳' }
        ],
        quote: '"All men are my children. Just as I desire prosperity for my own family, I desire welfare for all living beings."',
        videoTitle: 'From Conquest to Compassion',
        videoDuration: '⏱️ 3:00 min'
    },
    {
        id: 'prithviraj',
        name: 'Prithviraj Chauhan',
        role: 'The Last Great Rajput Sovereign',
        era: 'medieval',
        eraText: '1166–1192 CE',
        image: 'images/prithviraj_chauhan.jpg',
        tags: ['Rajput', 'Master Archer', 'King'],
        bio: 'Prithviraj III reigned over Ajmer and Delhi with extraordinary courage and chivalry. Renowned for mastering the legendary art of Shabdbhedi Baan (striking accurately by sound alone), he triumphed over invading armies at the First Battle of Tarain in 1191.',
        stats: [
            { label: 'Dynasty', value: 'Chahamana' },
            { label: 'Capitals', value: 'Ajmer & Delhi' },
            { label: 'Mastery', value: 'Shabdbhedi Baan' },
            { label: 'Triumph', value: 'Battle of Tarain' }
        ],
        quote: '"A Rajput defends honour above life—the sound of truth guides the arrow through darkest night."',
        videoTitle: 'The Unfailing Arrow of Justice',
        videoDuration: '⏱️ 2:30 min'
    },
    {
        id: 'maharana_pratap',
        name: 'Maharana Pratap',
        role: 'The Unconquered Lion of Mewar',
        era: 'medieval',
        eraText: '1540–1597 CE',
        image: 'images/maharana_pratap.jpg',
        tags: ['Rajput', 'Defender', 'Chetak'],
        bio: 'Maharana Pratap was the beloved Rajput monarch of Mewar who fiercely stood for independence and honour. Leading his people in the legendary Battle of Haldighati (1576), he and his loyal warhorse Chetak embodied unbreakable spirit and chivalry.',
        stats: [
            { label: 'Dynasty', value: 'Sisodia (Mewar)' },
            { label: 'Famous Stand', value: 'Haldighati (1576)' },
            { label: 'Steed', value: 'Chetak' },
            { label: 'Ideal', value: 'Unyielding Honour' }
        ],
        quote: '"The sun of Mewar shall never set before an invader. Honour and self-respect are our eternal crown."',
        videoTitle: 'The Roar of Haldighati',
        videoDuration: '⏱️ 2:45 min'
    },
    {
        id: 'rani_padmini',
        name: 'Rani Padmini (Padmavati)',
        role: 'The Regal Queen of Chittor',
        era: 'medieval',
        eraText: '13th–14th Century CE',
        image: 'images/rani_padmini.jpg',
        tags: ['Queen', 'Chittorgarh', 'Sacrifice'],
        bio: 'Rani Padmini was celebrated across Bharat for her radiant grace, intellect, and steadfast devotion to righteousness. When Chittorgarh faced overwhelming siege, she led the women of Chittor in supreme valor and dignity to safeguard their sanctity.',
        stats: [
            { label: 'Kingdom', value: 'Chittorgarh' },
            { label: 'Reign', value: 'Guhila Dynasty' },
            { label: 'Virtue', value: 'Supreme Sanctity' },
            { label: 'Fortress', value: 'Chittor Fort' }
        ],
        quote: '"Dignity is the supreme adornment of a queen; it shines brighter than the grandest jewels of the palace."',
        videoTitle: 'The Radiant Light of Chittor',
        videoDuration: '⏱️ 2:30 min'
    },
    {
        id: 'rani_durgavati',
        name: 'Rani Durgavati',
        role: 'Warrior Queen of Gondwana',
        era: 'medieval',
        eraText: '1524–1564 CE',
        image: 'images/rani_durgavati.jpg',
        tags: ['Gondwana', 'Leader', 'Warrior'],
        bio: 'Rani Durgavati was the fearless ruler of Gondwana who transformed her kingdom into a bastion of prosperity, cultural harmony, and military prowess. Riding her majestic war elephant Sarman, she valiantly defended her homeland against imperial forces.',
        stats: [
            { label: 'Kingdom', value: 'Garha-Gondwana' },
            { label: 'Seat', value: 'Singorgarh & Chauragarh' },
            { label: 'Companion', value: 'Elephant Sarman' },
            { label: 'Valor', value: 'Battle of Narrai' }
        ],
        quote: '"It is far nobler to die fighting with sword in hand than to yield one inch of the motherland."',
        videoTitle: 'The Guardian of Gondwana',
        videoDuration: '⏱️ 2:30 min'
    },
    {
        id: 'shivaji',
        name: 'Chhatrapati Shivaji Maharaj',
        role: 'Founder of the Maratha Empire',
        era: 'medieval',
        eraText: '1630–1680 CE',
        image: 'images/shivaji_maharaj.jpg',
        tags: ['Maratha', 'Naval Pioneer', 'Sovereign'],
        bio: 'Chhatrapati Shivaji Maharaj founded the Maratha Empire through visionary leadership, swift guerrilla warfare (Ganimi Kava), and just civil governance. He established modern naval defense, protected all religions, and revived native administration under Hindavi Swarajya.',
        stats: [
            { label: 'Empire', value: 'Maratha' },
            { label: 'Capital', value: 'Raigad Fort' },
            { label: 'Sword', value: 'Bhavani Talwar' },
            { label: 'Vision', value: 'Hindavi Swarajya' }
        ],
        quote: '"Even if there were a sword in the hands of everyone, it is unshakeable willpower alone that establishes a kingdom."',
        videoTitle: 'The Flame of Swarajya',
        videoDuration: '⏱️ 3:00 min'
    },
    {
        id: 'tipu_sultan',
        name: 'Tipu Sultan',
        role: 'The Tiger of Mysore & Artillery Pioneer',
        era: 'medieval',
        eraText: '1751–1799 CE',
        image: 'images/tipu_sultan.jpg',
        tags: ['Mysore', 'Rocket Pioneer', 'Defender'],
        bio: 'Tipu Sultan ruled Mysore as a scholarly innovator and military commander. Renowned for advancing iron-cased Mysorean rockets against colonial armies, he fortified Srirangapatna and resisted foreign expansionism with relentless determination.',
        stats: [
            { label: 'Kingdom', value: 'Mysore' },
            { label: 'Capital', value: 'Srirangapatna' },
            { label: 'Innovation', value: 'Mysorean Rocket Artillery' },
            { label: 'Emblem', value: 'Tiger of Mysore' }
        ],
        quote: '"To live like a tiger for a single day is far greater than to live like a sheep for a hundred years."',
        videoTitle: 'The Roar of Mysore',
        videoDuration: '⏱️ 2:30 min'
    },
    {
        id: 'lakshmibai',
        name: 'Rani Lakshmibai',
        role: 'The Warrior Queen of Jhansi',
        era: 'modern',
        eraText: '1828–1858 CE',
        image: 'images/rani_lakshmibai.jpg',
        tags: ['Freedom', '1857 Revolt', 'Warrior'],
        bio: 'Rani Lakshmibai was one of the foremost leaders of the 1857 First War of Indian Independence. Defending Jhansi with her son Damodar Rao strapped to her back, her extraordinary courage drew unanimous respect from allies and foes alike.',
        stats: [
            { label: 'Kingdom', value: 'Jhansi' },
            { label: 'Uprising', value: '1857 War of Independence' },
            { label: 'Steeds', value: 'Badal, Pavan, Sarangi' },
            { label: 'Age of Valor', value: '29 Years' }
        ],
        quote: '"मैं अपनी झाँसी नहीं दूँगी! (I shall never surrender my Jhansi!)"',
        videoTitle: 'The Lightning of Jhansi',
        videoDuration: '⏱️ 2:45 min'
    },
    {
        id: 'bhagat_singh',
        name: 'Bhagat Singh',
        role: 'The Revolutionary Symbol of Freedom',
        era: 'modern',
        eraText: '1907–1931 CE',
        image: 'images/bhagat_singh.jpg',
        tags: ['Revolutionary', 'Patriot', 'Inquilab'],
        bio: 'Bhagat Singh was a passionate intellectual, writer, and freedom fighter whose supreme sacrifice at the age of 23 ignited India’s struggle for complete independence. His slogan "Inquilab Zindabad" resonated across the hearts of millions.',
        stats: [
            { label: 'Movement', value: 'HSRA' },
            { label: 'Iconic Call', value: 'Inquilab Zindabad!' },
            { label: 'Age at Sacrifice', value: '23 Years' },
            { label: 'Legacy', value: 'Shaheed-e-Azam' }
        ],
        quote: '"They may kill me, but they cannot kill my ideas. They can crush my body, but they cannot crush my spirit."',
        videoTitle: 'The Eternal Spark of Inquilab',
        videoDuration: '⏱️ 2:30 min'
    },
    {
        id: 'subhas_bose',
        name: 'Subhas Chandra Bose (Netaji)',
        role: 'Supreme Commander of the Indian National Army',
        era: 'modern',
        eraText: '1897–1945 CE',
        image: 'images/subhas_chandra_bose.jpg',
        tags: ['Netaji', 'INA', 'Jai Hind'],
        bio: 'Netaji Subhas Chandra Bose was the charismatic leader who formed the Azad Hind Fauj (Indian National Army) to liberate India by storm. His rallying cries "Jai Hind" and "Give me blood, and I will give you freedom!" inspired millions to rise for self-determination.',
        stats: [
            { label: 'Army', value: 'Azad Hind Fauj (INA)' },
            { label: 'Greeting', value: 'Jai Hind! 🇮🇳' },
            { label: 'Government', value: 'Provisional Govt of Azad Hind' },
            { label: 'Title', value: 'Netaji' }
        ],
        quote: '"Freedom is not given, it is taken. Give me blood, and I promise you freedom!"',
        videoTitle: 'The March of Azad Hind',
        videoDuration: '⏱️ 2:45 min'
    }
];

// ===== 2. CINEMATIC VIDEO SCRIPTS =====
const videoStoryScripts = {
    chandragupta: {
        title: 'Chandragupta Maurya',
        subtitle: 'The Rise of an Empire',
        image: 'images/chandragupta_maurya.jpg',
        chapters: [
            { type: 'title', duration: 4500 },
            { type: 'chapter', label: 'Chapter I', title: 'The Orphan of Pataliputra', duration: 3000 },
            { type: 'narration', text: 'In the ancient city of Pataliputra, amidst turmoil and foreign incursions, a young boy with luminous eyes envisioned an undivided Bharat.', duration: 7500 },
            { type: 'character', duration: 5500 },
            { type: 'chapter', label: 'Chapter II', title: 'The Mentor of Takshashila', duration: 3000 },
            { type: 'narration', text: 'The master teacher Chanakya witnessed the boy organizing other children into disciplined units. The teacher found his emperor; the sword found its mastermind.', duration: 8000 },
            { type: 'chapter', label: 'Chapter III', title: 'Unification of Bharat', duration: 3000 },
            { type: 'narration', text: 'Trained rigorously in statecraft and strategy, Chandragupta united sovereign provinces, defeated Seleucus Nicator, and founded the Maurya Empire—stretching from the Himalayas to the oceans.', duration: 9000 },
            { type: 'quote', duration: 6000 },
            { type: 'credit', duration: 4000 }
        ]
    },
    chanakya: {
        title: 'Chanakya (Kautilya)',
        subtitle: "The Mastermind's Sacred Oath",
        image: 'images/chanakya.jpg',
        chapters: [
            { type: 'title', duration: 4500 },
            { type: 'chapter', label: 'Chapter I', title: 'The Sage of Takshashila', duration: 3000 },
            { type: 'narration', text: 'In the great university of Takshashila, an austere scholar with a shaved head and sacred shikha mastered economics, warfare, and moral governance.', duration: 7500 },
            { type: 'character', duration: 5500 },
            { type: 'chapter', label: 'Chapter II', title: 'The Sacred Vow', duration: 3000 },
            { type: 'narration', text: 'Insulted by corrupt rulers, Chanakya untied his shikha and proclaimed: "I shall not bind this hair until righteousness and strength are restored to the throne of Bharat!"', duration: 8500 },
            { type: 'chapter', label: 'Chapter III', title: 'The Arthashastra', duration: 3000 },
            { type: 'narration', text: 'He composed the timeless Arthashastra, guiding generations on ethics, administration, and sovereignty. His intellect remains an eternal beacon of Bharatiya wisdom.', duration: 8500 },
            { type: 'quote', duration: 6000 },
            { type: 'credit', duration: 4000 }
        ]
    },
    ashoka: {
        title: 'Ashoka the Great',
        subtitle: 'From Conquest to Compassion',
        image: 'images/ashoka_the_great.jpg',
        chapters: [
            { type: 'title', duration: 4500 },
            { type: 'chapter', label: 'Chapter I', title: 'The Mighty Emperor', duration: 3000 },
            { type: 'narration', text: 'Inheriting the vast Mauryan realm, Ashoka ruled with unmatched strength and military power across the subcontinent.', duration: 7000 },
            { type: 'character', duration: 5500 },
            { type: 'chapter', label: 'Chapter II', title: 'The Awakening at Kalinga', duration: 3000 },
            { type: 'narration', text: 'Witnessing the tragedy of Kalinga, his heart transformed. He laid down weapons of war and embraced the path of Ahimsa, peace, and universal dharma.', duration: 8500 },
            { type: 'chapter', label: 'Chapter III', title: 'The Wheel of Dharma', duration: 3000 },
            { type: 'narration', text: 'He inscribed edicts of benevolence across pillars and rocks. The 24 spokes of the Ashoka Chakra live on as our national emblem of righteousness and progress.', duration: 9000 },
            { type: 'quote', duration: 6000 },
            { type: 'credit', duration: 4000 }
        ]
    },
    prithviraj: {
        title: 'Prithviraj Chauhan',
        subtitle: 'The Unfailing Arrow of Justice',
        image: 'images/prithviraj_chauhan.jpg',
        chapters: [
            { type: 'title', duration: 4500 },
            { type: 'chapter', label: 'Chapter I', title: 'The Young Defender', duration: 3000 },
            { type: 'narration', text: 'Ascending the throne of Ajmer and Delhi, Prithviraj Chauhan exemplified chivalry and master archer skills across northern India.', duration: 7500 },
            { type: 'character', duration: 5500 },
            { type: 'chapter', label: 'Chapter II', title: 'The Battle of Tarain', duration: 3000 },
            { type: 'narration', text: 'At Tarain in 1191, he routed foreign invaders with relentless courage, demonstrating Rajput honor and martial distinction.', duration: 8000 },
            { type: 'chapter', label: 'Chapter III', title: 'Shabdbhedi Baan', duration: 3000 },
            { type: 'narration', text: '"Chaar baas, chaubis gaj, angul ashta pramaan..." Guided purely by sound, the blindfolded king struck the mark with immortal precision.', duration: 9000 },
            { type: 'quote', duration: 6000 },
            { type: 'credit', duration: 4000 }
        ]
    },
    maharana_pratap: {
        title: 'Maharana Pratap',
        subtitle: 'The Roar of Haldighati',
        image: 'images/maharana_pratap.jpg',
        chapters: [
            { type: 'title', duration: 4500 },
            { type: 'chapter', label: 'Chapter I', title: 'The Pride of Mewar', duration: 3000 },
            { type: 'narration', text: 'In the sacred land of Mewar, Maharana Pratap refused to bow before imperial subjugation, choosing the freedom of his mountains and people.', duration: 8000 },
            { type: 'character', duration: 5500 },
            { type: 'chapter', label: 'Chapter II', title: 'Haldighati & Chetak', duration: 3000 },
            { type: 'narration', text: 'On June 18, 1576, Pratap charged into battle on his beloved horse Chetak. Bound by deep loyalty, Chetak carried his wounded master to safety with a heroic final leap.', duration: 9000 },
            { type: 'chapter', label: 'Chapter III', title: 'The Eternal Flame', duration: 3000 },
            { type: 'narration', text: 'Living in the Aravallis, he recaptured his lands and preserved the sovereignty of Mewar. His noble courage shines as an eternal inspiration.', duration: 8500 },
            { type: 'quote', duration: 6000 },
            { type: 'credit', duration: 4000 }
        ]
    },
    rani_padmini: {
        title: 'Rani Padmini',
        subtitle: 'The Radiant Light of Chittor',
        image: 'images/rani_padmini.jpg',
        chapters: [
            { type: 'title', duration: 4500 },
            { type: 'chapter', label: 'Chapter I', title: 'The Jewel of Chittorgarh', duration: 3000 },
            { type: 'narration', text: 'Rani Padmini graced the historic fort of Chittor with wisdom, poetic grace, and serene royal dignity.', duration: 7500 },
            { type: 'character', duration: 5500 },
            { type: 'chapter', label: 'Chapter II', title: 'The Test of Valor', duration: 3000 },
            { type: 'narration', text: 'When greedy conquerors besieged the fortress, Padmini inspired the women and warriors of Mewar with unshakeable fortitude.', duration: 8000 },
            { type: 'chapter', label: 'Chapter III', title: 'Immortal Dignity', duration: 3000 },
            { type: 'narration', text: 'Choosing noble sacrifice over subjugation, her legend stands eternally as a testament to purity, pride, and Bharatiya self-respect.', duration: 8500 },
            { type: 'quote', duration: 6000 },
            { type: 'credit', duration: 4000 }
        ]
    },
    rani_durgavati: {
        title: 'Rani Durgavati',
        subtitle: 'The Guardian of Gondwana',
        image: 'images/rani_durgavati.jpg',
        chapters: [
            { type: 'title', duration: 4500 },
            { type: 'chapter', label: 'Chapter I', title: 'The Queen of the Forests', duration: 3000 },
            { type: 'narration', text: 'Ruler of Gondwana, Rani Durgavati nurtured a prosperous land with extensive irrigation, temples, and an invincible defense force.', duration: 8000 },
            { type: 'character', duration: 5500 },
            { type: 'chapter', label: 'Chapter II', title: 'The Battle on Elephant Sarman', duration: 3000 },
            { type: 'narration', text: 'Riding into the thick of combat upon her royal elephant Sarman, she drove back invading imperial armies with fearless archery.', duration: 8500 },
            { type: 'chapter', label: 'Chapter III', title: 'Sovereign till the End', duration: 3000 },
            { type: 'narration', text: 'Fighting to her final breath, she preserved the sacred liberty of Gondwana. Her memory lives on in the songs of central India.', duration: 8500 },
            { type: 'quote', duration: 6000 },
            { type: 'credit', duration: 4000 }
        ]
    },
    shivaji: {
        title: 'Chhatrapati Shivaji Maharaj',
        subtitle: 'The Flame of Swarajya',
        image: 'images/shivaji_maharaj.jpg',
        chapters: [
            { type: 'title', duration: 4500 },
            { type: 'chapter', label: 'Chapter I', title: 'The Sahyadri Lion', duration: 3000 },
            { type: 'narration', text: 'Inspired by his noble mother Jijabai, young Shivaji vowed to establish Hindavi Swarajya—a self-governing homeland of justice and honor.', duration: 8000 },
            { type: 'character', duration: 5500 },
            { type: 'chapter', label: 'Chapter II', title: 'Forts & Naval Mastery', duration: 3000 },
            { type: 'narration', text: 'Through revolutionary mountain tactics and building India’s first modern blue-water naval fleet, he secured the coastlines and hill citadels.', duration: 8500 },
            { type: 'chapter', label: 'Chapter III', title: 'The Coronation at Raigad', duration: 3000 },
            { type: 'narration', text: 'Crowned Chhatrapati in 1674, he established equitable administration, religious respect, and naval strength that shaped modern India.', duration: 9000 },
            { type: 'quote', duration: 6000 },
            { type: 'credit', duration: 4000 }
        ]
    },
    tipu_sultan: {
        title: 'Tipu Sultan',
        subtitle: 'The Roar of Mysore',
        image: 'images/tipu_sultan.jpg',
        chapters: [
            { type: 'title', duration: 4500 },
            { type: 'chapter', label: 'Chapter I', title: 'The Innovator of Srirangapatna', duration: 3000 },
            { type: 'narration', text: 'In southern India, Tipu Sultan blended scientific curiosity, silk commerce, and military engineering to defend Mysore.', duration: 7500 },
            { type: 'character', duration: 5500 },
            { type: 'chapter', label: 'Chapter II', title: 'Mysorean Rocket Artillery', duration: 3000 },
            { type: 'narration', text: 'Pioneering metal-cylinder rockets with devastating accuracy, his forces repulsed colonial advances across multiple campaigns.', duration: 8000 },
            { type: 'chapter', label: 'Chapter III', title: 'Valiant Stand', duration: 3000 },
            { type: 'narration', text: 'Sword in hand with the tiger emblem gleaming, he stood with his troops at the gates of Srirangapatna, refusing dishonor.', duration: 8500 },
            { type: 'quote', duration: 6000 },
            { type: 'credit', duration: 4000 }
        ]
    },
    lakshmibai: {
        title: 'Rani Lakshmibai',
        subtitle: 'The Lightning of Jhansi',
        image: 'images/rani_lakshmibai.jpg',
        chapters: [
            { type: 'title', duration: 4500 },
            { type: 'chapter', label: 'Chapter I', title: 'Manikarnika of Varanasi', duration: 3000 },
            { type: 'narration', text: 'Mastering swordsmanship, equestrian arts, and sacred scriptures from childhood, young Manu became the beloved queen of Jhansi.', duration: 7500 },
            { type: 'character', duration: 5500 },
            { type: 'chapter', label: 'Chapter II', title: 'The Cry of Freedom', duration: 3000 },
            { type: 'narration', text: '"मैं अपनी झाँसी नहीं दूँगी!" She rallied warriors of every background, leaping from the high ramparts on her horse Badal with her infant son safely secured.', duration: 9000 },
            { type: 'chapter', label: 'Chapter III', title: 'Immortal Legend', duration: 3000 },
            { type: 'narration', text: 'At just 29 years old, she led cavalry charges that shook the empire. Even her adversaries proclaimed her the bravest and noblest commander.', duration: 9000 },
            { type: 'quote', duration: 6000 },
            { type: 'credit', duration: 4000 }
        ]
    },
    bhagat_singh: {
        title: 'Bhagat Singh',
        subtitle: 'The Eternal Spark of Inquilab',
        image: 'images/bhagat_singh.jpg',
        chapters: [
            { type: 'title', duration: 4500 },
            { type: 'chapter', label: 'Chapter I', title: 'The Youth of Punjab', duration: 3000 },
            { type: 'narration', text: 'Witnessing colonial oppression, a brilliant 23-year-old visionary embraced the pen, the press, and the revolution.', duration: 7500 },
            { type: 'character', duration: 5500 },
            { type: 'chapter', label: 'Chapter II', title: 'To Make the Deaf Hear', duration: 3000 },
            { type: 'narration', text: 'Throwing harmless pamphlets and slogans in the Assembly, he declared that bullets cannot kill ideals and ideas shall liberate humanity.', duration: 8500 },
            { type: 'chapter', label: 'Chapter III', title: 'Inquilab Zindabad!', duration: 3000 },
            { type: 'narration', text: 'Smiling in the face of the gallows, his supreme sacrifice awakened the slumbering conscience of a billion citizens.', duration: 8500 },
            { type: 'quote', duration: 6000 },
            { type: 'credit', duration: 4000 }
        ]
    },
    subhas_bose: {
        title: 'Subhas Chandra Bose (Netaji)',
        subtitle: 'The March of Azad Hind',
        image: 'images/subhas_chandra_bose.jpg',
        chapters: [
            { type: 'title', duration: 4500 },
            { type: 'chapter', label: 'Chapter I', title: 'The Visionary Leader', duration: 3000 },
            { type: 'narration', text: 'A brilliant leader and patriot, Subhas Chandra Bose dedicated every breath to the complete liberation of mother Bharat.', duration: 7500 },
            { type: 'character', duration: 5500 },
            { type: 'chapter', label: 'Chapter II', title: 'The Azad Hind Fauj', duration: 3000 },
            { type: 'narration', text: 'Uniting expatriate Indians across Asia, he formed the Indian National Army with the inclusive Rani of Jhansi women’s combat regiment.', duration: 8500 },
            { type: 'chapter', label: 'Chapter III', title: 'Chalo Delhi! Jai Hind!', duration: 3000 },
            { type: 'narration', text: '"Give me blood, and I promise you freedom!" His roar echoes through time, forever enshrined in our national greeting: Jai Hind!', duration: 9000 },
            { type: 'quote', duration: 6000 },
            { type: 'credit', duration: 4000 }
        ]
    }
};

// ===== 3. TIMELINE DATA =====
const timelineEvents = [
    { year: '375 BCE', title: 'Chanakya at Takshashila', desc: 'The master strategist authors the Arthashastra and trains young Chandragupta to unite Bharat.' },
    { year: '340 BCE', title: 'Rise of Chandragupta Maurya', desc: 'Under Chanakya’s guidance, Chandragupta founds the Maurya Empire and repels Greek armies.' },
    { year: '261 BCE', title: 'Ashoka & The Turn to Peace', desc: 'Following the Kalinga war, Emperor Ashoka establishes Ahimsa, Buddhist diplomacy, and rock edicts.' },
    { year: '1191 CE', title: 'Prithviraj Chauhan at Tarain', desc: 'The Rajput king triumphs in the First Battle of Tarain, demonstrating masterful archery and chivalry.' },
    { year: '1303 CE', title: 'Rani Padmini & Chittorgarh', desc: 'The queen of Chittor stands firm in virtue and dignity against the imperial siege of Mewar.' },
    { year: '1564 CE', title: 'Rani Durgavati’s Valor', desc: 'The warrior queen of Gondwana commands her armies on elephant Sarman to defend central India.' },
    { year: '1576 CE', title: 'Maharana Pratap at Haldighati', desc: 'Maharana Pratap and his loyal steed Chetak fight valiantly in the Aravalli passes for independence.' },
    { year: '1674 CE', title: 'Coronation of Shivaji Maharaj', desc: 'Chhatrapati Shivaji is crowned at Raigad Fort, establishing Hindavi Swarajya and India’s navy.' },
    { year: '1799 CE', title: 'Tipu Sultan & Mysore Artillery', desc: 'The Tiger of Mysore deploys advanced rocketry and defends Srirangapatna to his last breath.' },
    { year: '1858 CE', title: 'Rani Lakshmibai’s Freedom Ride', desc: 'The warrior queen of Jhansi leads the 1857 war of independence, becoming an immortal icon.' },
    { year: '1931 CE', title: 'Bhagat Singh’s Supreme Sacrifice', desc: 'Shaheed Bhagat Singh’s martyrdom at age 23 electrifies the freedom struggle with "Inquilab Zindabad".' },
    { year: '1943 CE', title: 'Netaji & The Azad Hind Fauj', desc: 'Netaji establishes the Provisional Government of Free India and rallies the nation with "Jai Hind".' }
];

// ===== 4. DOM INJECTION & SETUP =====

function populateGallery() {
    const grid = document.getElementById('galleryGrid');
    if (!grid) return;
    grid.innerHTML = allCharacters.map(char => `
        <div class="card" data-era="${char.era}" data-character="${char.id}">
            <div class="card-image">
                <img src="${char.image}" alt="${char.name}" loading="lazy">
                <div class="card-overlay">
                    <span class="card-era-badge">${char.eraText}</span>
                    <span class="card-play-hint">🎬 Click for Bio & Video</span>
                </div>
            </div>
            <div class="card-body">
                <h3 class="card-name">${char.name}</h3>
                <p class="card-title-role">${char.role}</p>
                <div class="card-tags">
                    ${char.tags.map(t => `<span class="tag">${t}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

function populateVideos() {
    const grid = document.getElementById('videoGrid');
    if (!grid) return;
    grid.innerHTML = allCharacters.map(char => `
        <div class="video-char-card" data-video="${char.id}">
            <img src="${char.image}" alt="${char.name}" loading="lazy">
            <div class="video-char-info">
                <h4>${char.name}</h4>
                <p>${char.videoTitle}</p>
                <span class="video-duration">${char.videoDuration}</span>
            </div>
        </div>
    `).join('');
}

function populateGenerator() {
    const container = document.getElementById('characterSelect');
    if (!container) return;
    container.innerHTML = allCharacters.map((char, index) => `
        <div class="select-option ${index === 0 ? 'selected' : ''}" data-value="${char.id}">
            <span class="option-icon">⚔️</span>
            <span>${char.name}</span>
        </div>
    `).join('');
}

function populateTimeline() {
    const container = document.getElementById('timeline');
    if (!container) return;
    container.innerHTML = timelineEvents.map(evt => `
        <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
                <div class="timeline-year">${evt.year}</div>
                <h4>${evt.title}</h4>
                <p>${evt.desc}</p>
            </div>
        </div>
    `).join('');
}

// ===== 5. AUDIO SYNTHESIS (Offline Web Audio) =====
let audioCtx = null;
function getAudioCtx() {
    if (!audioCtx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (AudioContext) audioCtx = new AudioContext();
    }
    if (audioCtx && audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
    return audioCtx;
}

function playDramaticGong() {
    try {
        const ctx = getAudioCtx();
        if (!ctx) return;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(120, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(40, ctx.currentTime + 3);
        gain.gain.setValueAtTime(0.3, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 3.5);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 3.5);
    } catch (e) {}
}

function playTypeClick() {
    try {
        const ctx = getAudioCtx();
        if (!ctx) return;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(400 + Math.random() * 200, ctx.currentTime);
        gain.gain.setValueAtTime(0.02, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.05);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.05);
    } catch (e) {}
}

// ===== 6. PARTICLES BACKGROUND =====
function initParticles() {
    const canvas = document.getElementById('particles');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let particles = [];
    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    class Particle {
        constructor() { this.reset(); }
        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 0.5;
            this.speedX = (Math.random() - 0.5) * 0.3;
            this.speedY = (Math.random() - 0.5) * 0.3;
            this.opacity = Math.random() * 0.3 + 0.1;
            this.color = Math.random() > 0.5 ? '255,153,51' : '240,192,64';
        }
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) this.reset();
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${this.color},${this.opacity})`;
            ctx.fill();
        }
    }
    for (let i = 0; i < 60; i++) particles.push(new Particle());

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => { p.update(); p.draw(); });
        requestAnimationFrame(animate);
    }
    animate();
}

// ===== 7. NAVBAR & SCROLL BEHAVIOR =====
function initNavbar() {
    const navbar = document.querySelector('.navbar');
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');
    const links = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 40);
    });

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('open');
        });
    }

    links.forEach(link => {
        link.addEventListener('click', () => {
            links.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            if (navLinks) navLinks.classList.remove('open');
        });
    });

    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY + 120;
        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');
            if (scrollY >= top && scrollY < top + height) {
                links.forEach(l => l.classList.remove('active'));
                const active = document.querySelector(`.nav-link[href="#${id}"]`);
                if (active) active.classList.add('active');
            }
        });
    });
}

// ===== 8. HERO CAROUSEL =====
function initHeroCarousel() {
    const images = document.querySelectorAll('.carousel-img');
    const nameEl = document.getElementById('heroCarouselName');
    if (!images.length) return;

    const names = [
        'Chandragupta Maurya',
        'Rani Lakshmibai',
        'Chhatrapati Shivaji Maharaj',
        'Maharana Pratap',
        'Shaheed Bhagat Singh'
    ];

    let current = 0;
    setInterval(() => {
        images[current].classList.remove('active');
        current = (current + 1) % images.length;
        images[current].classList.add('active');
        if (nameEl) {
            nameEl.style.opacity = '0';
            setTimeout(() => {
                nameEl.textContent = names[current] || '';
                nameEl.style.opacity = '1';
            }, 300);
        }
    }, 4000);
}

// ===== 9. STAT COUNTERS =====
function initCounters() {
    const stats = document.querySelectorAll('.stat-num');
    const obs = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.dataset.target, 10);
                let current = 0;
                const step = Math.max(1, target / 50);
                const timer = setInterval(() => {
                    current += step;
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }
                    if (target === 3000) {
                        el.textContent = Math.floor(current).toLocaleString() + '+';
                    } else {
                        el.textContent = Math.floor(current);
                    }
                }, 20);
                obs.unobserve(el);
            }
        });
    }, { threshold: 0.5 });
    stats.forEach(s => obs.observe(s));
}

// ===== 10. GALLERY FILTER & MODAL =====
let currentModalCharacter = null;

function initGallery() {
    const btns = document.querySelectorAll('.filter-btn');
    const modal = document.getElementById('characterModal');
    const closeBtn = modal ? modal.querySelector('.modal-close') : null;
    const backdrop = modal ? modal.querySelector('.modal-backdrop') : null;

    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            btns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.dataset.filter;
            const cards = document.querySelectorAll('.card');
            cards.forEach(card => {
                if (filter === 'all' || card.dataset.era === filter) {
                    card.classList.remove('hidden');
                    card.style.display = '';
                } else {
                    card.classList.add('hidden');
                    setTimeout(() => { card.style.display = 'none'; }, 250);
                }
            });
        });
    });

    document.getElementById('galleryGrid').addEventListener('click', e => {
        const card = e.target.closest('.card');
        if (!card) return;
        const charId = card.dataset.character;
        const char = allCharacters.find(c => c.id === charId);
        if (!char || !modal) return;

        currentModalCharacter = charId;
        document.getElementById('modalImg').src = char.image;
        document.getElementById('modalEra').textContent = char.eraText;
        document.getElementById('modalName').textContent = char.name;
        document.getElementById('modalRole').textContent = char.role;
        document.getElementById('modalBio').textContent = char.bio;
        document.getElementById('modalStats').innerHTML = char.stats.map(s => `
            <div class="modal-stat">
                <span class="modal-stat-label">${s.label}</span>
                <span class="modal-stat-value">${s.value}</span>
            </div>
        `).join('');
        document.getElementById('modalQuote').textContent = char.quote;

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    function closeModal() {
        if (!modal) return;
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (backdrop) backdrop.addEventListener('click', closeModal);
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && modal && modal.classList.contains('active')) closeModal();
    });
}

window.playStoryFromModal = function() {
    if (currentModalCharacter) {
        const modal = document.getElementById('characterModal');
        if (modal) modal.classList.remove('active');
        document.body.style.overflow = '';
        startCinema(currentModalCharacter);
    }
};

// ===== 11. CINEMA VIDEO ENGINE =====
let cinemaTimers = [];
let cinemaPlaying = false;
let cinemaCurrentScene = 0;
let cinemaStoryKey = null;
let cinemaTotalTime = 0;
let cinemaElapsed = 0;
let cinemaInterval = null;

function startCinema(key) {
    const story = videoStoryScripts[key];
    if (!story) return;

    playDramaticGong();
    cinemaStoryKey = key;
    cinemaCurrentScene = 0;
    cinemaElapsed = 0;
    cinemaPlaying = true;
    cinemaTotalTime = story.chapters.reduce((sum, ch) => sum + ch.duration, 0);

    const player = document.getElementById('cinemaPlayer');
    player.style.display = 'block';
    document.body.style.overflow = 'hidden';

    document.getElementById('cinemaBg').style.backgroundImage = `url(${story.image})`;

    // Chapter markers
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

    // Progress counter
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

    createCinemaParticles();
    playScene(0);
}

function clearAllCinema() {
    cinemaTimers.forEach(t => clearTimeout(t));
    cinemaTimers = [];
    const ids = ['cinemaChapter', 'cinemaTitle', 'cinemaSubtitle', 'cinemaNarration', 'cinemaQuote', 'cinemaCredit'];
    ids.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.style.opacity = '0';
            el.innerHTML = '';
        }
    });
    const charImg = document.getElementById('cinemaCharImg');
    if (charImg) {
        charImg.style.opacity = '0';
        charImg.classList.remove('ken-burns');
        charImg.innerHTML = '';
    }
}

function playScene(index) {
    const story = videoStoryScripts[cinemaStoryKey];
    if (!story || index >= story.chapters.length) {
        closeCinema();
        return;
    }

    cinemaCurrentScene = index;
    clearAllCinema();

    const scene = story.chapters[index];
    const charInfo = allCharacters.find(c => c.id === cinemaStoryKey);

    switch (scene.type) {
        case 'title':
            document.getElementById('cinemaTitle').textContent = story.title;
            document.getElementById('cinemaTitle').style.opacity = '1';
            document.getElementById('cinemaSubtitle').textContent = story.subtitle;
            cinemaTimers.push(setTimeout(() => {
                document.getElementById('cinemaSubtitle').style.opacity = '1';
            }, 600));
            break;

        case 'chapter':
            document.getElementById('cinemaChapter').textContent = scene.label;
            document.getElementById('cinemaChapter').style.opacity = '1';
            document.getElementById('cinemaTitle').textContent = scene.title;
            cinemaTimers.push(setTimeout(() => {
                document.getElementById('cinemaTitle').style.opacity = '1';
            }, 500));
            break;

        case 'narration':
            typeText(document.getElementById('cinemaNarration'), scene.text, scene.duration * 0.7);
            document.getElementById('cinemaNarration').style.opacity = '1';
            break;

        case 'character':
            const charImg = document.getElementById('cinemaCharImg');
            charImg.innerHTML = `<img src="${story.image}" alt="${story.title}">`;
            charImg.style.opacity = '1';
            cinemaTimers.push(setTimeout(() => {
                charImg.classList.add('ken-burns');
            }, 80));
            break;

        case 'quote':
            document.getElementById('cinemaQuote').textContent = charInfo ? charInfo.quote : '';
            cinemaTimers.push(setTimeout(() => {
                document.getElementById('cinemaQuote').style.opacity = '1';
            }, 400));
            break;

        case 'credit':
            document.getElementById('cinemaCredit').innerHTML = `
                <div style="font-family:'Cinzel Decorative',serif;font-size:24px;color:#ff9933;margin-bottom:8px;">इतिहास Anime</div>
                <div style="font-size:14px;color:#9999b5;">A tribute to the immortal heroes of Bharat</div>
                <div style="font-size:12px;color:#5c5c78;margin-top:8px;">Portrayed with deepest honor, dignity & historical reverence 🙏</div>
            `;
            document.getElementById('cinemaCredit').style.opacity = '1';
            break;
    }

    const nextTimer = setTimeout(() => {
        if (cinemaPlaying) playScene(index + 1);
    }, scene.duration);
    cinemaTimers.push(nextTimer);
}

function typeText(el, text, duration) {
    const chars = text.split('');
    const delay = duration / chars.length;
    el.textContent = '';
    chars.forEach((char, i) => {
        const t = setTimeout(() => {
            el.textContent += char;
            if (i % 3 === 0) playTypeClick();
        }, delay * i);
        cinemaTimers.push(t);
    });
}

function createCinemaParticles() {
    const container = document.getElementById('cinemaParticles');
    if (!container) return;
    container.innerHTML = '';
    for (let i = 0; i < 25; i++) {
        const p = document.createElement('div');
        const x = Math.random() * 100;
        const dur = 6 + Math.random() * 8;
        const size = 1.5 + Math.random() * 2.5;
        const delay = Math.random() * 4;
        p.style.cssText = `
            position:absolute; left:${x}%; bottom:-10px;
            width:${size}px; height:${size}px;
            background:rgba(255,153,51,${0.25 + Math.random() * 0.35});
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
    const player = document.getElementById('cinemaPlayer');
    if (player) player.style.display = 'none';
    document.body.style.overflow = '';
}

function initCinemaControls() {
    document.getElementById('videoGrid').addEventListener('click', e => {
        const card = e.target.closest('.video-char-card');
        if (!card) return;
        startCinema(card.dataset.video);
    });

    const playPauseBtn = document.getElementById('cinemaPlayPause');
    if (playPauseBtn) {
        playPauseBtn.addEventListener('click', () => {
            cinemaPlaying = !cinemaPlaying;
            playPauseBtn.textContent = cinemaPlaying ? '⏸️' : '▶️';
            if (cinemaPlaying) playScene(cinemaCurrentScene);
            else cinemaTimers.forEach(t => clearTimeout(t));
        });
    }

    const closeBtn = document.getElementById('cinemaClose');
    if (closeBtn) closeBtn.addEventListener('click', closeCinema);

    const fsBtn = document.getElementById('cinemaFullscreen');
    if (fsBtn) {
        fsBtn.addEventListener('click', () => {
            const player = document.getElementById('cinemaPlayer');
            if (document.fullscreenElement) document.exitFullscreen();
            else player.requestFullscreen().catch(() => {});
        });
    }

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && document.getElementById('cinemaPlayer').style.display === 'block') {
            closeCinema();
        }
    });
}

// ===== 12. AI GENERATOR =====
function initGenerator() {
    const charContainer = document.getElementById('characterSelect');
    const styleBtns = document.querySelectorAll('.style-btn');
    const sceneBtns = document.querySelectorAll('.scene-btn');
    const generateBtn = document.getElementById('generateBtn');

    let selectedCharId = allCharacters[0].id;

    if (charContainer) {
        charContainer.addEventListener('click', e => {
            const opt = e.target.closest('.select-option');
            if (!opt) return;
            document.querySelectorAll('.select-option').forEach(o => o.classList.remove('selected'));
            opt.classList.add('selected');
            selectedCharId = opt.dataset.value;
        });
    }

    styleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            styleBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    sceneBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            sceneBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    if (generateBtn) {
        generateBtn.addEventListener('click', () => {
            const char = allCharacters.find(c => c.id === selectedCharId);
            if (!char) return;

            const btnText = generateBtn.querySelector('.btn-text');
            const btnLoading = generateBtn.querySelector('.btn-loading');
            if (btnText) btnText.style.display = 'none';
            if (btnLoading) btnLoading.style.display = 'inline-flex';
            generateBtn.disabled = true;

            setTimeout(() => {
                const placeholder = document.querySelector('.preview-placeholder');
                const result = document.querySelector('.preview-result');
                const previewImg = document.getElementById('previewImg');
                const previewName = document.getElementById('previewName');
                const previewDesc = document.getElementById('previewDesc');

                if (previewImg) previewImg.src = char.image;
                if (previewName) previewName.textContent = char.name;
                if (previewDesc) previewDesc.textContent = `${char.role} • ${char.eraText} — Rendered with historically researched anime detail.`;

                if (placeholder) placeholder.style.display = 'none';
                if (result) {
                    result.style.display = 'block';
                    result.style.animation = 'fadeIn 0.7s ease';
                }

                if (btnText) btnText.style.display = 'inline-flex';
                if (btnLoading) btnLoading.style.display = 'none';
                generateBtn.disabled = false;
            }, 1800);
        });
    }
}

// ===== 13. TIMELINE & SCROLL REVEAL =====
function initTimelineScroll() {
    const items = document.querySelectorAll('.timeline-item');
    const obs = new IntersectionObserver(entries => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                setTimeout(() => entry.target.classList.add('visible'), i * 80);
            }
        });
    }, { threshold: 0.15 });
    items.forEach(item => obs.observe(item));
}

// ===== 14. INITIALIZE ALL ON LOAD =====
document.addEventListener('DOMContentLoaded', () => {
    populateGallery();
    populateVideos();
    populateGenerator();
    populateTimeline();

    initParticles();
    initNavbar();
    initHeroCarousel();
    initCounters();
    initGallery();
    initCinemaControls();
    initGenerator();
    initTimelineScroll();
});
