import type { SupportedLang } from './i18n';

// Translations for horoscope suggestions
export const suggestionsTranslations: Record<SupportedLang, {
  signSuggestions: Record<string, string[]>;
  scopeSuggestions: Record<string, string[]>;
  scoreBased: {
    love: string;
    career: string;
    wealth: string;
    health: string;
  };
  general: string[];
}> = {
  en: {
    signSuggestions: {
      'Aries': [
        'Take the lead in new initiatives and don\'t be afraid to be the first to act',
        'Channel your natural energy into physical activities and competitive pursuits',
        'Be mindful of impatience and practice listening before reacting'
      ],
      'Taurus': [
        'Focus on building long-term stability and financial security',
        'Indulge in sensory pleasures and appreciate the beauty around you',
        'Avoid becoming too rigid in your thinking and stay open to change'
      ],
      'Gemini': [
        'Engage in learning new skills and expanding your knowledge base',
        'Use your communication talents to build meaningful connections',
        'Be careful not to spread yourself too thin across too many projects'
      ],
      'Cancer': [
        'Nurture your emotional well-being and spend time with loved ones',
        'Trust your intuition and pay attention to your dreams and feelings',
        'Don\'t let fear hold you back from taking necessary risks'
      ],
      'Leo': [
        'Express your creativity and share your talents with the world',
        'Take center stage when appropriate and don\'t shy away from recognition',
        'Remember to be generous and consider others\' needs as well'
      ],
      'Virgo': [
        'Focus on improving your skills and helping others through service',
        'Pay attention to details but don\'t get lost in perfectionism',
        'Take care of your health and maintain a balanced routine'
      ],
      'Libra': [
        'Seek harmony in relationships and work on diplomatic solutions',
        'Appreciate art, beauty, and aesthetic experiences',
        'Make decisions based on what feels right, not just what others want'
      ],
      'Scorpio': [
        'Embrace transformation and let go of what no longer serves you',
        'Use your depth and intensity to create meaningful change',
        'Be honest about your motivations and avoid manipulation'
      ],
      'Sagittarius': [
        'Expand your horizons through travel, education, or new experiences',
        'Share your wisdom and philosophical insights with others',
        'Be mindful of making promises you can\'t keep'
      ],
      'Capricorn': [
        'Focus on long-term goals and build solid foundations for the future',
        'Take on leadership roles and demonstrate your reliability',
        'Remember to have fun and not take life too seriously'
      ],
      'Aquarius': [
        'Connect with like-minded people and work toward humanitarian goals',
        'Embrace your uniqueness and don\'t conform to others\' expectations',
        'Balance your need for independence with meaningful relationships'
      ],
      'Pisces': [
        'Trust your intuition and pay attention to your spiritual side',
        'Use your compassion to help others and make a positive impact',
        'Set healthy boundaries and don\'t lose yourself in others\' problems'
      ]
    },
    scopeSuggestions: {
      daily: [
        'Start your day with intention and set clear goals for what you want to accomplish',
        'Take breaks throughout the day to check in with your energy and emotions',
        'End your day with gratitude and reflection on what went well'
      ],
      weekly: [
        'Plan your week ahead but remain flexible to unexpected opportunities',
        'Focus on one major goal while maintaining progress on smaller tasks',
        'Schedule time for both work and personal activities to maintain balance'
      ],
      monthly: [
        'Review your monthly goals and adjust your approach based on what you\'ve learned',
        'Take time to evaluate your relationships and make necessary improvements',
        'Invest in your personal development through learning or new experiences'
      ],
      yearly: [
        'Set long-term vision and break it down into achievable quarterly milestones',
        'Invest in relationships and opportunities that align with your life purpose',
        'Take calculated risks that could lead to significant personal or professional growth'
      ]
    },
    scoreBased: {
      love: 'Focus on improving communication and emotional connection in your relationships',
      career: 'Consider new learning opportunities or networking to advance your professional goals',
      wealth: 'Review your financial habits and create a practical budget for better money management',
      health: 'Prioritize self-care and establish a consistent wellness routine'
    },
    general: [
      'Trust your intuition and inner wisdom when making important decisions',
      'Stay open to unexpected opportunities that may come your way',
      'Practice gratitude daily to attract more positive energy into your life'
    ]
  },
  es: {
    signSuggestions: {
      'Aries': [
        'Toma la iniciativa en nuevas iniciativas y no tengas miedo de ser el primero en actuar',
        'Canaliza tu energía natural hacia actividades físicas y competencias',
        'Ten cuidado con la impaciencia y practica escuchar antes de reaccionar'
      ],
      'Taurus': [
        'Enfócate en construir estabilidad a largo plazo y seguridad financiera',
        'Disfruta de los placeres sensoriales y aprecia la belleza a tu alrededor',
        'Evita volverte demasiado rígido en tu pensamiento y mantente abierto al cambio'
      ],
      'Gemini': [
        'Participa en aprender nuevas habilidades y expandir tu base de conocimientos',
        'Usa tus talentos de comunicación para construir conexiones significativas',
        'Ten cuidado de no extenderse demasiado en demasiados proyectos'
      ],
      'Cancer': [
        'Cuida tu bienestar emocional y pasa tiempo con tus seres queridos',
        'Confía en tu intuición y presta atención a tus sueños y sentimientos',
        'No dejes que el miedo te impida tomar riesgos necesarios'
      ],
      'Leo': [
        'Expresa tu creatividad y comparte tus talentos con el mundo',
        'Toma el centro del escenario cuando sea apropiado y no huyas del reconocimiento',
        'Recuerda ser generoso y considerar también las necesidades de los demás'
      ],
      'Virgo': [
        'Enfócate en mejorar tus habilidades y ayudar a otros a través del servicio',
        'Presta atención a los detalles pero no te pierdas en el perfeccionismo',
        'Cuida tu salud y mantén una rutina equilibrada'
      ],
      'Libra': [
        'Busca armonía en las relaciones y trabaja en soluciones diplomáticas',
        'Aprecia el arte, la belleza y las experiencias estéticas',
        'Toma decisiones basadas en lo que se siente bien, no solo en lo que otros quieren'
      ],
      'Scorpio': [
        'Abraza la transformación y deja ir lo que ya no te sirve',
        'Usa tu profundidad e intensidad para crear cambios significativos',
        'Sé honesto sobre tus motivaciones y evita la manipulación'
      ],
      'Sagittarius': [
        'Expande tus horizontes a través de viajes, educación o nuevas experiencias',
        'Comparte tu sabiduría e ideas filosóficas con otros',
        'Ten cuidado de hacer promesas que no puedas cumplir'
      ],
      'Capricorn': [
        'Enfócate en objetivos a largo plazo y construye bases sólidas para el futuro',
        'Asume roles de liderazgo y demuestra tu confiabilidad',
        'Recuerda divertirte y no tomar la vida demasiado en serio'
      ],
      'Aquarius': [
        'Conéctate con personas afines y trabaja hacia objetivos humanitarios',
        'Abraza tu singularidad y no te conformes con las expectativas de otros',
        'Equilibra tu necesidad de independencia con relaciones significativas'
      ],
      'Pisces': [
        'Confía en tu intuición y presta atención a tu lado espiritual',
        'Usa tu compasión para ayudar a otros y hacer un impacto positivo',
        'Establece límites saludables y no te pierdas en los problemas de otros'
      ]
    },
    scopeSuggestions: {
      daily: [
        'Comienza tu día con intención y establece objetivos claros para lo que quieres lograr',
        'Toma descansos durante el día para verificar tu energía y emociones',
        'Termina tu día con gratitud y reflexión sobre lo que salió bien'
      ],
      weekly: [
        'Planifica tu semana por adelantado pero mantente flexible a oportunidades inesperadas',
        'Enfócate en un objetivo principal mientras mantienes el progreso en tareas más pequeñas',
        'Programa tiempo tanto para el trabajo como para actividades personales para mantener el equilibrio'
      ],
      monthly: [
        'Revisa tus objetivos mensuales y ajusta tu enfoque basado en lo que has aprendido',
        'Tómate tiempo para evaluar tus relaciones y hacer mejoras necesarias',
        'Invierte en tu desarrollo personal a través del aprendizaje o nuevas experiencias'
      ],
      yearly: [
        'Establece una visión a largo plazo y divídela en hitos trimestrales alcanzables',
        'Invierte en relaciones y oportunidades que se alineen con tu propósito de vida',
        'Toma riesgos calculados que podrían llevar a un crecimiento personal o profesional significativo'
      ]
    },
    scoreBased: {
      love: 'Enfócate en mejorar la comunicación y la conexión emocional en tus relaciones',
      career: 'Considera nuevas oportunidades de aprendizaje o networking para avanzar en tus objetivos profesionales',
      wealth: 'Revisa tus hábitos financieros y crea un presupuesto práctico para una mejor gestión del dinero',
      health: 'Prioriza el autocuidado y establece una rutina de bienestar consistente'
    },
    general: [
      'Confía en tu intuición y sabiduría interior al tomar decisiones importantes',
      'Mantente abierto a oportunidades inesperadas que puedan llegar',
      'Practica la gratitud diariamente para atraer más energía positiva a tu vida'
    ]
  },
  fr: {
    signSuggestions: {
      'Aries': [
        'Prenez les devants dans de nouvelles initiatives et n\'ayez pas peur d\'être le premier à agir',
        'Canalisez votre énergie naturelle vers des activités physiques et des compétitions',
        'Soyez conscient de l\'impatience et pratiquez l\'écoute avant de réagir'
      ],
      'Taurus': [
        'Concentrez-vous sur la construction d\'une stabilité à long terme et d\'une sécurité financière',
        'Laissez-vous aller aux plaisirs sensoriels et appréciez la beauté qui vous entoure',
        'Évitez de devenir trop rigide dans votre pensée et restez ouvert au changement'
      ],
      'Gemini': [
        'Participez à l\'apprentissage de nouvelles compétences et à l\'élargissement de votre base de connaissances',
        'Utilisez vos talents de communication pour établir des connexions significatives',
        'Faites attention à ne pas vous disperser sur trop de projets'
      ],
      'Cancer': [
        'Prenez soin de votre bien-être émotionnel et passez du temps avec vos proches',
        'Faites confiance à votre intuition et prêtez attention à vos rêves et sentiments',
        'Ne laissez pas la peur vous empêcher de prendre les risques nécessaires'
      ],
      'Leo': [
        'Exprimez votre créativité et partagez vos talents avec le monde',
        'Prenez le devant de la scène quand c\'est approprié et ne fuyez pas la reconnaissance',
        'N\'oubliez pas d\'être généreux et de considérer aussi les besoins des autres'
      ],
      'Virgo': [
        'Concentrez-vous sur l\'amélioration de vos compétences et l\'aide aux autres par le service',
        'Prêtez attention aux détails mais ne vous perdez pas dans le perfectionnisme',
        'Prenez soin de votre santé et maintenez une routine équilibrée'
      ],
      'Libra': [
        'Recherchez l\'harmonie dans les relations et travaillez sur des solutions diplomatiques',
        'Appréciez l\'art, la beauté et les expériences esthétiques',
        'Prenez des décisions basées sur ce qui semble juste, pas seulement sur ce que les autres veulent'
      ],
      'Scorpio': [
        'Embrassez la transformation et laissez aller ce qui ne vous sert plus',
        'Utilisez votre profondeur et votre intensité pour créer un changement significatif',
        'Soyez honnête sur vos motivations et évitez la manipulation'
      ],
      'Sagittarius': [
        'Élargissez vos horizons grâce aux voyages, à l\'éducation ou à de nouvelles expériences',
        'Partagez votre sagesse et vos idées philosophiques avec les autres',
        'Soyez conscient de faire des promesses que vous ne pouvez pas tenir'
      ],
      'Capricorn': [
        'Concentrez-vous sur les objectifs à long terme et construisez des bases solides pour l\'avenir',
        'Assumez des rôles de leadership et démontrez votre fiabilité',
        'N\'oubliez pas de vous amuser et de ne pas prendre la vie trop au sérieux'
      ],
      'Aquarius': [
        'Connectez-vous avec des personnes partageant les mêmes idées et travaillez vers des objectifs humanitaires',
        'Embrassez votre unicité et ne vous conformez pas aux attentes des autres',
        'Équilibrez votre besoin d\'indépendance avec des relations significatives'
      ],
      'Pisces': [
        'Faites confiance à votre intuition et prêtez attention à votre côté spirituel',
        'Utilisez votre compassion pour aider les autres et avoir un impact positif',
        'Établissez des limites saines et ne vous perdez pas dans les problèmes des autres'
      ]
    },
    scopeSuggestions: {
      daily: [
        'Commencez votre journée avec intention et fixez des objectifs clairs pour ce que vous voulez accomplir',
        'Prenez des pauses tout au long de la journée pour vérifier votre énergie et vos émotions',
        'Terminez votre journée avec gratitude et réflexion sur ce qui s\'est bien passé'
      ],
      weekly: [
        'Planifiez votre semaine à l\'avance mais restez flexible face aux opportunités inattendues',
        'Concentrez-vous sur un objectif majeur tout en maintenant les progrès sur des tâches plus petites',
        'Planifiez du temps pour le travail et les activités personnelles pour maintenir l\'équilibre'
      ],
      monthly: [
        'Examinez vos objectifs mensuels et ajustez votre approche en fonction de ce que vous avez appris',
        'Prenez le temps d\'évaluer vos relations et d\'apporter les améliorations nécessaires',
        'Investissez dans votre développement personnel grâce à l\'apprentissage ou à de nouvelles expériences'
      ],
      yearly: [
        'Établissez une vision à long terme et décomposez-la en jalons trimestriels réalisables',
        'Investissez dans des relations et des opportunités qui correspondent à votre but dans la vie',
        'Prenez des risques calculés qui pourraient conduire à une croissance personnelle ou professionnelle significative'
      ]
    },
    scoreBased: {
      love: 'Concentrez-vous sur l\'amélioration de la communication et de la connexion émotionnelle dans vos relations',
      career: 'Envisagez de nouvelles opportunités d\'apprentissage ou de réseautage pour faire avancer vos objectifs professionnels',
      wealth: 'Examinez vos habitudes financières et créez un budget pratique pour une meilleure gestion de l\'argent',
      health: 'Priorisez les soins personnels et établissez une routine de bien-être cohérente'
    },
    general: [
      'Faites confiance à votre intuition et à votre sagesse intérieure lors de la prise de décisions importantes',
      'Restez ouvert aux opportunités inattendues qui pourraient se présenter',
      'Pratiquez la gratitude quotidiennement pour attirer plus d\'énergie positive dans votre vie'
    ]
  },
  zh: {
    signSuggestions: {
      'Aries': [
        '在新计划中带头，不要害怕成为第一个行动的人',
        '将你的自然能量引导到体育活动和竞争追求中',
        '注意急躁情绪，在反应之前先练习倾听'
      ],
      'Taurus': [
        '专注于建立长期稳定和财务安全',
        '享受感官愉悦，欣赏周围的美',
        '避免思维过于僵化，保持对变化的开放'
      ],
      'Gemini': [
        '参与学习新技能和扩展你的知识基础',
        '使用你的沟通才能建立有意义的联系',
        '注意不要让自己在太多项目中分散精力'
      ],
      'Cancer': [
        '培养你的情感健康，与所爱的人共度时光',
        '相信你的直觉，注意你的梦想和感受',
        '不要让恐惧阻止你采取必要的风险'
      ],
      'Leo': [
        '表达你的创造力，与世界分享你的才能',
        '在适当的时候站在中心舞台，不要回避认可',
        '记住要慷慨，也要考虑他人的需求'
      ],
      'Virgo': [
        '专注于提高你的技能，通过服务帮助他人',
        '注意细节，但不要迷失在完美主义中',
        '照顾你的健康，保持平衡的日常'
      ],
      'Libra': [
        '在关系中寻求和谐，致力于外交解决方案',
        '欣赏艺术、美丽和美学体验',
        '根据感觉正确的事情做决定，而不仅仅是别人想要的'
      ],
      'Scorpio': [
        '拥抱转变，放下不再为你服务的东西',
        '使用你的深度和强度来创造有意义的变化',
        '对你的动机诚实，避免操纵'
      ],
      'Sagittarius': [
        '通过旅行、教育或新体验扩展你的视野',
        '与他人分享你的智慧和哲学见解',
        '注意不要做出你无法兑现的承诺'
      ],
      'Capricorn': [
        '专注于长期目标，为未来建立坚实的基础',
        '承担领导角色，展示你的可靠性',
        '记住要享受乐趣，不要把生活看得太严肃'
      ],
      'Aquarius': [
        '与志同道合的人联系，朝着人道主义目标努力',
        '拥抱你的独特性，不要符合他人的期望',
        '平衡你对独立的需求与有意义的关系'
      ],
      'Pisces': [
        '相信你的直觉，注意你的精神方面',
        '使用你的同情心帮助他人并产生积极影响',
        '设定健康的界限，不要在别人的问题中迷失自己'
      ]
    },
    scopeSuggestions: {
      daily: [
        '以意图开始你的一天，为你想要完成的事情设定明确的目标',
        '全天休息，检查你的能量和情绪',
        '以感恩和反思结束你的一天，思考什么进展顺利'
      ],
      weekly: [
        '提前计划你的一周，但对意外机会保持灵活',
        '专注于一个主要目标，同时在较小的任务上保持进展',
        '为工作和个人活动安排时间以保持平衡'
      ],
      monthly: [
        '回顾你的月度目标，根据你学到的调整你的方法',
        '花时间评估你的关系并进行必要的改进',
        '通过学习或新体验投资你的个人发展'
      ],
      yearly: [
        '设定长期愿景，并将其分解为可实现的季度里程碑',
        '投资于与你的生活目标一致的关系和机会',
        '采取可能带来重大个人或专业成长的计算风险'
      ]
    },
    scoreBased: {
      love: '专注于改善你关系中的沟通和情感联系',
      career: '考虑新的学习机会或网络来推进你的职业目标',
      wealth: '审查你的财务习惯，创建实用的预算以更好地管理资金',
      health: '优先考虑自我护理并建立一致的健康习惯'
    },
    general: [
      '在做重要决定时相信你的直觉和内在智慧',
      '对可能到来的意外机会保持开放',
      '每天练习感恩，以吸引更多正能量进入你的生活'
    ]
  },
  id: {
    signSuggestions: {
      'Aries': [
        'Ambil alih dalam inisiatif baru dan jangan takut menjadi yang pertama bertindak',
        'Salurkan energi alami Anda ke aktivitas fisik dan kompetisi',
        'Waspadai ketidaksabaran dan praktikkan mendengarkan sebelum bereaksi'
      ],
      'Taurus': [
        'Fokus pada membangun stabilitas jangka panjang dan keamanan finansial',
        'Nikmati kesenangan indrawi dan hargai keindahan di sekitar Anda',
        'Hindari menjadi terlalu kaku dalam pemikiran Anda dan tetap terbuka terhadap perubahan'
      ],
      'Gemini': [
        'Terlibat dalam mempelajari keterampilan baru dan memperluas basis pengetahuan Anda',
        'Gunakan bakat komunikasi Anda untuk membangun koneksi yang bermakna',
        'Hati-hati jangan menyebarkan diri terlalu tipis di terlalu banyak proyek'
      ],
      'Cancer': [
        'Pelihara kesejahteraan emosional Anda dan luangkan waktu dengan orang terkasih',
        'Percayai intuisi Anda dan perhatikan mimpi dan perasaan Anda',
        'Jangan biarkan ketakutan menahan Anda dari mengambil risiko yang diperlukan'
      ],
      'Leo': [
        'Ekspresikan kreativitas Anda dan bagikan bakat Anda dengan dunia',
        'Ambil panggung utama ketika tepat dan jangan menghindari pengakuan',
        'Ingatlah untuk menjadi murah hati dan mempertimbangkan kebutuhan orang lain juga'
      ],
      'Virgo': [
        'Fokus pada meningkatkan keterampilan Anda dan membantu orang lain melalui layanan',
        'Perhatikan detail tetapi jangan tersesat dalam perfeksionisme',
        'Jaga kesehatan Anda dan pertahankan rutinitas yang seimbang'
      ],
      'Libra': [
        'Cari harmoni dalam hubungan dan bekerja pada solusi diplomatik',
        'Hargai seni, keindahan, dan pengalaman estetika',
        'Buat keputusan berdasarkan apa yang terasa benar, bukan hanya apa yang diinginkan orang lain'
      ],
      'Scorpio': [
        'Terima transformasi dan lepaskan apa yang tidak lagi melayani Anda',
        'Gunakan kedalaman dan intensitas Anda untuk menciptakan perubahan yang bermakna',
        'Jujurlah tentang motivasi Anda dan hindari manipulasi'
      ],
      'Sagittarius': [
        'Perluas cakrawala Anda melalui perjalanan, pendidikan, atau pengalaman baru',
        'Bagikan kebijaksanaan dan wawasan filosofis Anda dengan orang lain',
        'Waspadai membuat janji yang tidak bisa Anda tepati'
      ],
      'Capricorn': [
        'Fokus pada tujuan jangka panjang dan bangun fondasi yang solid untuk masa depan',
        'Ambil peran kepemimpinan dan tunjukkan keandalan Anda',
        'Ingatlah untuk bersenang-senang dan jangan menganggap hidup terlalu serius'
      ],
      'Aquarius': [
        'Terhubung dengan orang yang berpikiran sama dan bekerja menuju tujuan kemanusiaan',
        'Terima keunikan Anda dan jangan menyesuaikan dengan harapan orang lain',
        'Seimbangkan kebutuhan Anda akan kemandirian dengan hubungan yang bermakna'
      ],
      'Pisces': [
        'Percayai intuisi Anda dan perhatikan sisi spiritual Anda',
        'Gunakan belas kasihan Anda untuk membantu orang lain dan membuat dampak positif',
        'Tetapkan batas yang sehat dan jangan kehilangan diri dalam masalah orang lain'
      ]
    },
    scopeSuggestions: {
      daily: [
        'Mulai hari Anda dengan niat dan tetapkan tujuan yang jelas untuk apa yang ingin Anda capai',
        'Ambil istirahat sepanjang hari untuk memeriksa energi dan emosi Anda',
        'Akhiri hari Anda dengan rasa syukur dan refleksi tentang apa yang berjalan dengan baik'
      ],
      weekly: [
        'Rencanakan minggu Anda di depan tetapi tetap fleksibel terhadap peluang tak terduga',
        'Fokus pada satu tujuan utama sambil mempertahankan kemajuan pada tugas yang lebih kecil',
        'Jadwalkan waktu untuk pekerjaan dan aktivitas pribadi untuk menjaga keseimbangan'
      ],
      monthly: [
        'Tinjau tujuan bulanan Anda dan sesuaikan pendekatan Anda berdasarkan apa yang telah Anda pelajari',
        'Luangkan waktu untuk mengevaluasi hubungan Anda dan membuat perbaikan yang diperlukan',
        'Investasikan dalam pengembangan pribadi Anda melalui pembelajaran atau pengalaman baru'
      ],
      yearly: [
        'Tetapkan visi jangka panjang dan pecah menjadi milestone triwulanan yang dapat dicapai',
        'Investasikan dalam hubungan dan peluang yang selaras dengan tujuan hidup Anda',
        'Ambil risiko yang dihitung yang dapat menyebabkan pertumbuhan pribadi atau profesional yang signifikan'
      ]
    },
    scoreBased: {
      love: 'Fokus pada meningkatkan komunikasi dan koneksi emosional dalam hubungan Anda',
      career: 'Pertimbangkan peluang pembelajaran baru atau jaringan untuk memajukan tujuan profesional Anda',
      wealth: 'Tinjau kebiasaan keuangan Anda dan buat anggaran praktis untuk manajemen uang yang lebih baik',
      health: 'Prioritaskan perawatan diri dan buat rutinitas kesehatan yang konsisten'
    },
    general: [
      'Percayai intuisi dan kebijaksanaan batin Anda saat membuat keputusan penting',
      'Tetap terbuka terhadap peluang tak terduga yang mungkin datang',
      'Praktikkan rasa syukur setiap hari untuk menarik lebih banyak energi positif ke dalam hidup Anda'
    ]
  },
  ja: {
    signSuggestions: {
      'Aries': [
        '新しいイニシアチブで主導権を握り、最初に行動することを恐れないでください',
        'あなたの自然なエネルギーを身体活動や競争的な追求に向けましょう',
        '焦りに注意し、反応する前に聞く練習をしてください'
      ],
      'Taurus': [
        '長期的な安定性と財政的セキュリティの構築に焦点を当てる',
        '感覚的な喜びを楽しみ、周囲の美しさを感謝する',
        '思考が硬直しすぎないようにし、変化に開かれたままにする'
      ],
      'Gemini': [
        '新しいスキルを学び、知識基盤を拡大することに従事する',
        'コミュニケーションの才能を使って意味のあるつながりを築く',
        'あまりにも多くのプロジェクトに自分を広げすぎないように注意する'
      ],
      'Cancer': [
        '感情的な健康を育み、愛する人と時間を過ごす',
        'あなたの直感を信頼し、夢や感情に注意を払う',
        '必要なリスクを取ることを恐れに妨げさせない'
      ],
      'Leo': [
        'あなたの創造性を表現し、才能を世界と共有する',
        '適切な時に中心舞台を取り、認識から逃げない',
        '寛大であることを忘れず、他の人のニーズも考慮する'
      ],
      'Virgo': [
        'スキルの向上とサービスを通じて他の人を助けることに焦点を当てる',
        '細部に注意を払うが、完璧主義に迷わない',
        '健康に気を配り、バランスの取れたルーチンを維持する'
      ],
      'Libra': [
        '関係で調和を求め、外交的な解決策に取り組む',
        '芸術、美、美的体験を感謝する',
        '他の人が望むだけでなく、正しいと感じることに基づいて決定を下す'
      ],
      'Scorpio': [
        '変容を受け入れ、もはやあなたに役立たないものを手放す',
        'あなたの深さと強度を使って意味のある変化を創造する',
        'あなたの動機について正直であり、操作を避ける'
      ],
      'Sagittarius': [
        '旅行、教育、または新しい経験を通じて視野を広げる',
        'あなたの知恵と哲学的洞察を他の人と共有する',
        '守れない約束をすることに注意する'
      ],
      'Capricorn': [
        '長期的な目標に焦点を当て、未来のために堅実な基盤を築く',
        'リーダーシップの役割を引き受け、あなたの信頼性を示す',
        '楽しむことを忘れず、人生を真剣に取りすぎない'
      ],
      'Aquarius': [
        '同じ考えを持つ人々とつながり、人道的目標に向けて働く',
        'あなたの独自性を受け入れ、他の人の期待に従わない',
        '意味のある関係で独立の必要性をバランスさせる'
      ],
      'Pisces': [
        'あなたの直感を信頼し、あなたの精神的な側面に注意を払う',
        'あなたの思いやりを使って他の人を助け、ポジティブな影響を与える',
        '健康的な境界を設定し、他の人の問題で自分を失わない'
      ]
    },
    scopeSuggestions: {
      daily: [
        '意図を持って一日を始め、達成したいことの明確な目標を設定する',
        '一日を通して休憩を取り、エネルギーと感情を確認する',
        '感謝と反省で一日を終え、うまくいったことを振り返る'
      ],
      weekly: [
        '週を事前に計画するが、予期しない機会に柔軟に対応する',
        '小さなタスクで進捗を維持しながら、1つの主要な目標に焦点を当てる',
        'バランスを保つために仕事と個人的な活動の両方に時間をスケジュールする'
      ],
      monthly: [
        '月間目標をレビューし、学んだことに基づいてアプローチを調整する',
        '関係を評価し、必要な改善を行う時間を取る',
        '学習や新しい経験を通じて個人の成長に投資する'
      ],
      yearly: [
        '長期的なビジョンを設定し、達成可能な四半期のマイルストーンに分解する',
        'あなたの人生の目的に合った関係と機会に投資する',
        '重要な個人的または専門的な成長につながる可能性のある計算されたリスクを取る'
      ]
    },
    scoreBased: {
      love: '関係におけるコミュニケーションと感情的なつながりの改善に焦点を当てる',
      career: '専門的な目標を進めるために新しい学習機会やネットワーキングを検討する',
      wealth: '財務習慣をレビューし、より良い資金管理のための実用的な予算を作成する',
      health: 'セルフケアを優先し、一貫した健康ルーチンを確立する'
    },
    general: [
      '重要な決定を下す際にあなたの直感と内なる知恵を信頼する',
      '来るかもしれない予期しない機会に開かれたままにする',
      'より多くのポジティブなエネルギーをあなたの人生に引き寄せるために毎日感謝を実践する'
    ]
  },
  ko: {
    signSuggestions: {
      'Aries': [
        '새로운 이니셔티브에서 주도권을 잡고 첫 번째로 행동하는 것을 두려워하지 마세요',
        '자연스러운 에너지를 신체 활동과 경쟁적인 추구로 채널링하세요',
        '성급함에 주의하고 반응하기 전에 듣는 연습을 하세요'
      ],
      'Taurus': [
        '장기적인 안정성과 재정적 보안 구축에 집중하세요',
        '감각적 즐거움을 즐기고 주변의 아름다움을 감사하세요',
        '생각이 너무 경직되지 않도록 하고 변화에 열려 있으세요'
      ],
      'Gemini': [
        '새로운 기술을 배우고 지식 기반을 확장하는 데 참여하세요',
        '의사 소통 재능을 사용하여 의미 있는 연결을 구축하세요',
        '너무 많은 프로젝트에 자신을 너무 얇게 퍼뜨리지 않도록 주의하세요'
      ],
      'Cancer': [
        '감정적 웰빙을 양육하고 사랑하는 사람들과 시간을 보내세요',
        '직감을 신뢰하고 꿈과 감정에 주의를 기울이세요',
        '두려움이 필요한 위험을 감수하는 것을 막지 못하게 하세요'
      ],
      'Leo': [
        '창의성을 표현하고 재능을 세계와 공유하세요',
        '적절할 때 중심 무대를 차지하고 인정에서 벗어나지 마세요',
        '관대하고 다른 사람의 필요도 고려하는 것을 기억하세요'
      ],
      'Virgo': [
        '기술을 향상시키고 서비스를 통해 다른 사람을 돕는 데 집중하세요',
        '세부 사항에 주의를 기울이되 완벽주의에 빠지지 마세요',
        '건강을 돌보고 균형 잡힌 루틴을 유지하세요'
      ],
      'Libra': [
        '관계에서 조화를 추구하고 외교적 해결책에 노력하세요',
        '예술, 아름다움, 미적 경험을 감사하세요',
        '다른 사람이 원하는 것뿐만 아니라 올바르게 느껴지는 것을 기반으로 결정을 내리세요'
      ],
      'Scorpio': [
        '변형을 받아들이고 더 이상 당신에게 도움이 되지 않는 것을 놓으세요',
        '깊이와 강도를 사용하여 의미 있는 변화를 만드세요',
        '동기에 대해 정직하고 조작을 피하세요'
      ],
      'Sagittarius': [
        '여행, 교육 또는 새로운 경험을 통해 지평을 넓히세요',
        '지혜와 철학적 통찰을 다른 사람과 공유하세요',
        '지킬 수 없는 약속을 하는 것에 주의하세요'
      ],
      'Capricorn': [
        '장기 목표에 집중하고 미래를 위한 견고한 기초를 구축하세요',
        '리더십 역할을 맡고 신뢰성을 보여주세요',
        '즐기는 것을 기억하고 인생을 너무 심각하게 받아들이지 마세요'
      ],
      'Aquarius': [
        '같은 생각을 가진 사람들과 연결하고 인도주의적 목표를 향해 노력하세요',
        '고유성을 받아들이고 다른 사람의 기대에 맞추지 마세요',
        '의미 있는 관계로 독립에 대한 필요성을 균형 잡으세요'
      ],
      'Pisces': [
        '직감을 신뢰하고 영적 측면에 주의를 기울이세요',
        '연민을 사용하여 다른 사람을 돕고 긍정적인 영향을 미치세요',
        '건강한 경계를 설정하고 다른 사람의 문제에서 자신을 잃지 마세요'
      ]
    },
    scopeSuggestions: {
      daily: [
        '의도로 하루를 시작하고 달성하고 싶은 것에 대한 명확한 목표를 설정하세요',
        '하루 종일 휴식을 취하여 에너지와 감정을 확인하세요',
        '감사와 반성으로 하루를 마치고 잘된 것을 되돌아보세요'
      ],
      weekly: [
        '주를 미리 계획하되 예상치 못한 기회에 유연하게 대응하세요',
        '작은 작업에서 진행을 유지하면서 하나의 주요 목표에 집중하세요',
        '균형을 유지하기 위해 업무와 개인 활동 모두에 시간을 예약하세요'
      ],
      monthly: [
        '월간 목표를 검토하고 배운 것을 바탕으로 접근 방식을 조정하세요',
        '관계를 평가하고 필요한 개선을 할 시간을 가지세요',
        '학습이나 새로운 경험을 통해 개인 발전에 투자하세요'
      ],
      yearly: [
        '장기 비전을 설정하고 달성 가능한 분기별 마일스톤으로 나누세요',
        '인생 목적과 일치하는 관계와 기회에 투자하세요',
        '중요한 개인적 또는 전문적 성장으로 이어질 수 있는 계산된 위험을 감수하세요'
      ]
    },
    scoreBased: {
      love: '관계에서 의사 소통과 감정적 연결을 개선하는 데 집중하세요',
      career: '전문 목표를 발전시키기 위해 새로운 학습 기회나 네트워킹을 고려하세요',
      wealth: '재정 습관을 검토하고 더 나은 돈 관리를 위한 실용적인 예산을 만드세요',
      health: '자기 관리에 우선순위를 두고 일관된 웰빙 루틴을 수립하세요'
    },
    general: [
      '중요한 결정을 내릴 때 직감과 내면의 지혜를 신뢰하세요',
      '올 수 있는 예상치 못한 기회에 열려 있으세요',
      '더 많은 긍정적인 에너지를 삶에 끌어들이기 위해 매일 감사를 실천하세요'
    ]
  }
};

