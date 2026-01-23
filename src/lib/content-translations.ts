import type { SupportedLang } from './i18n';
import { CARD_MEANINGS } from './advanced-tarot';
import { translateText } from './i18n';
import type { ZodiacSign } from './zodiac';

type Horizon = "daily" | "monthly" | "yearly";

// Horoscope translations
export const horoscopeTranslations: Record<SupportedLang, Record<ZodiacSign, Record<Horizon, string>>> = {
  en: {
    Aries: {
      daily: "Your energy ignites new beginnings today. Channel it with intention and take bold action on something you've been putting off.",
      monthly: "This month brings opportunities for leadership. Your natural confidence will shine, but remember to listen as much as you lead.",
      yearly: "This year marks a significant period of growth. Embrace new challenges and trust your instincts."
    },
    Taurus: {
      daily: "Steadiness brings results today. Focus on your routines and take time to appreciate the simple pleasures around you.",
      monthly: "This month emphasizes stability and building. Invest in long-term projects and nurture your relationships.",
      yearly: "A year of steady progress awaits. Your patience and determination will pay off in meaningful ways."
    },
    Gemini: {
      daily: "Curiosity opens doors today. Listen as much as you speak, and you'll discover valuable insights.",
      monthly: "This month is perfect for learning and communication. New ideas and connections will enrich your life.",
      yearly: "A year of expansion through knowledge and relationships. Stay open to new perspectives."
    },
    Cancer: {
      daily: "Gentle boundaries protect your soft power today. Tend to your home and loved ones.",
      monthly: "This month focuses on emotional well-being and family connections. Trust your intuition.",
      yearly: "A year of emotional growth and deeper connections. Nurture yourself as you nurture others."
    },
    Leo: {
      daily: "Lead with heart today. Express your gifts generously, and let your natural charisma shine.",
      monthly: "This month brings recognition and creative opportunities. Share your talents with confidence.",
      yearly: "A year of self-expression and achievement. Your natural leadership will be recognized."
    },
    Virgo: {
      daily: "Refinement is sacred today. Clear the small details to reveal the bigger picture.",
      monthly: "This month emphasizes organization and service. Your attention to detail will be appreciated.",
      yearly: "A year of improvement and mastery. Focus on perfecting your skills and helping others."
    },
    Libra: {
      daily: "Seek harmony without losing your center today. Beauty and balance support truth.",
      monthly: "This month highlights relationships and partnerships. Find balance between giving and receiving.",
      yearly: "A year of partnership and harmony. Focus on creating beauty and balance in all areas of life."
    },
    Scorpio: {
      daily: "Depth transforms today. Release control to gain presence and trust the process.",
      monthly: "This month brings transformation and renewal. Let go of what no longer serves you.",
      yearly: "A year of profound change and growth. Embrace transformation and trust your inner strength."
    },
    Sagittarius: {
      daily: "Adventure teaches today. Aim far, then walk steadily toward your goals.",
      monthly: "This month is perfect for exploration and learning. Expand your horizons through new experiences.",
      yearly: "A year of adventure and expansion. Travel, learning, and new experiences await."
    },
    Capricorn: {
      daily: "Build with patience today. Your foundations will carry your vision forward.",
      monthly: "This month emphasizes career and long-term goals. Your discipline will bring results.",
      yearly: "A year of achievement and building. Your hard work will pay off in significant ways."
    },
    Aquarius: {
      daily: "Innovate with community today. Your ideas want collaborators and supporters.",
      monthly: "This month highlights friendships and innovation. Connect with like-minded people.",
      yearly: "A year of innovation and community. Your unique ideas will find their audience."
    },
    Pisces: {
      daily: "Dreams inform reality today. Trust symbols and subtle signals from your intuition.",
      monthly: "This month emphasizes creativity and spirituality. Listen to your inner voice.",
      yearly: "A year of spiritual growth and creative expression. Trust your intuition and artistic vision."
    }
  },
  es: {
    Aries: {
      daily: "Tu energía enciende nuevos comienzos hoy. Canalízala con intención y toma acción audaz en algo que has estado posponiendo.",
      monthly: "Este mes trae oportunidades de liderazgo. Tu confianza natural brillará, pero recuerda escuchar tanto como lideras.",
      yearly: "Este año marca un período significativo de crecimiento. Abraza nuevos desafíos y confía en tus instintos."
    },
    Taurus: {
      daily: "La constancia trae resultados hoy. Enfócate en tus rutinas y tómate tiempo para apreciar los placeres simples a tu alrededor.",
      monthly: "Este mes enfatiza la estabilidad y la construcción. Invierte en proyectos a largo plazo y nutre tus relaciones.",
      yearly: "Un año de progreso constante te espera. Tu paciencia y determinación darán frutos de manera significativa."
    },
    Gemini: {
      daily: "La curiosidad abre puertas hoy. Escucha tanto como hablas, y descubrirás valiosas perspectivas.",
      monthly: "Este mes es perfecto para aprender y comunicar. Nuevas ideas y conexiones enriquecerán tu vida.",
      yearly: "Un año de expansión a través del conocimiento y las relaciones. Mantente abierto a nuevas perspectivas."
    },
    Cancer: {
      daily: "Límites suaves protegen tu poder suave hoy. Cuida tu hogar y tus seres queridos.",
      monthly: "Este mes se enfoca en el bienestar emocional y las conexiones familiares. Confía en tu intuición.",
      yearly: "Un año de crecimiento emocional y conexiones más profundas. Nútete mientras nutres a otros."
    },
    Leo: {
      daily: "Lidera con el corazón hoy. Expresa tus dones generosamente y deja que tu carisma natural brille.",
      monthly: "Este mes trae reconocimiento y oportunidades creativas. Comparte tus talentos con confianza.",
      yearly: "Un año de autoexpresión y logros. Tu liderazgo natural será reconocido."
    },
    Virgo: {
      daily: "El refinamiento es sagrado hoy. Aclara los pequeños detalles para revelar el panorama más amplio.",
      monthly: "Este mes enfatiza la organización y el servicio. Tu atención al detalle será apreciada.",
      yearly: "Un año de mejora y maestría. Enfócate en perfeccionar tus habilidades y ayudar a otros."
    },
    Libra: {
      daily: "Busca armonía sin perder tu centro hoy. La belleza y el equilibrio apoyan la verdad.",
      monthly: "Este mes destaca las relaciones y asociaciones. Encuentra equilibrio entre dar y recibir.",
      yearly: "Un año de asociación y armonía. Enfócate en crear belleza y equilibrio en todas las áreas de la vida."
    },
    Scorpio: {
      daily: "La profundidad transforma hoy. Libera el control para ganar presencia y confía en el proceso.",
      monthly: "Este mes trae transformación y renovación. Deja ir lo que ya no te sirve.",
      yearly: "Un año de cambio y crecimiento profundo. Abraza la transformación y confía en tu fuerza interior."
    },
    Sagittarius: {
      daily: "La aventura enseña hoy. Apunta lejos, luego camina constantemente hacia tus metas.",
      monthly: "Este mes es perfecto para la exploración y el aprendizaje. Expande tus horizontes a través de nuevas experiencias.",
      yearly: "Un año de aventura y expansión. Viajes, aprendizaje y nuevas experiencias te esperan."
    },
    Capricorn: {
      daily: "Construye con paciencia hoy. Tus fundamentos llevarán tu visión hacia adelante.",
      monthly: "Este mes enfatiza la carrera y las metas a largo plazo. Tu disciplina traerá resultados.",
      yearly: "Un año de logros y construcción. Tu trabajo duro dará frutos de manera significativa."
    },
    Aquarius: {
      daily: "Innovar con la comunidad hoy. Tus ideas quieren colaboradores y partidarios.",
      monthly: "Este mes destaca las amistades y la innovación. Conéctate con personas afines.",
      yearly: "Un año de innovación y comunidad. Tus ideas únicas encontrarán su audiencia."
    },
    Pisces: {
      daily: "Los sueños informan la realidad hoy. Confía en los símbolos y señales sutiles de tu intuición.",
      monthly: "Este mes enfatiza la creatividad y la espiritualidad. Escucha tu voz interior.",
      yearly: "Un año de crecimiento espiritual y expresión creativa. Confía en tu intuición y visión artística."
    }
  },
  fr: {
    Aries: {
      daily: "Votre énergie enflamme de nouveaux départs aujourd'hui. Canalisez-la avec intention et agissez avec audace sur quelque chose que vous avez remis à plus tard.",
      monthly: "Ce mois apporte des opportunités de leadership. Votre confiance naturelle brillera, mais rappelez-vous d'écouter autant que vous dirigez.",
      yearly: "Cette année marque une période de croissance significative. Embrassez de nouveaux défis et faites confiance à vos instincts."
    },
    Taurus: {
      daily: "La constance apporte des résultats aujourd'hui. Concentrez-vous sur vos routines et prenez le temps d'apprécier les plaisirs simples autour de vous.",
      monthly: "Ce mois met l'accent sur la stabilité et la construction. Investissez dans des projets à long terme et nourrissez vos relations.",
      yearly: "Une année de progrès constants vous attend. Votre patience et votre détermination porteront leurs fruits de manière significative."
    },
    Gemini: {
      daily: "La curiosité ouvre des portes aujourd'hui. Écoutez autant que vous parlez, et vous découvrirez des perspectives précieuses.",
      monthly: "Ce mois est parfait pour l'apprentissage et la communication. De nouvelles idées et connexions enrichiront votre vie.",
      yearly: "Une année d'expansion à travers la connaissance et les relations. Restez ouvert à de nouvelles perspectives."
    },
    Cancer: {
      daily: "Des limites douces protègent votre pouvoir doux aujourd'hui. Prenez soin de votre foyer et de vos proches.",
      monthly: "Ce mois se concentre sur le bien-être émotionnel et les liens familiaux. Faites confiance à votre intuition.",
      yearly: "Une année de croissance émotionnelle et de connexions plus profondes. Prenez soin de vous en prenant soin des autres."
    },
    Leo: {
      daily: "Menez avec le cœur aujourd'hui. Exprimez vos dons généreusement et laissez briller votre charisme naturel.",
      monthly: "Ce mois apporte la reconnaissance et des opportunités créatives. Partagez vos talents avec confiance.",
      yearly: "Une année d'expression de soi et de réalisations. Votre leadership naturel sera reconnu."
    },
    Virgo: {
      daily: "Le raffinement est sacré aujourd'hui. Clarifiez les petits détails pour révéler la vue d'ensemble.",
      monthly: "Ce mois met l'accent sur l'organisation et le service. Votre attention aux détails sera appréciée.",
      yearly: "Une année d'amélioration et de maîtrise. Concentrez-vous sur la perfection de vos compétences et l'aide aux autres."
    },
    Libra: {
      daily: "Cherchez l'harmonie sans perdre votre centre aujourd'hui. La beauté et l'équilibre soutiennent la vérité.",
      monthly: "Ce mois met en lumière les relations et les partenariats. Trouvez l'équilibre entre donner et recevoir.",
      yearly: "Une année de partenariat et d'harmonie. Concentrez-vous sur la création de beauté et d'équilibre dans tous les domaines de la vie."
    },
    Scorpio: {
      daily: "La profondeur transforme aujourd'hui. Libérez le contrôle pour gagner en présence et faites confiance au processus.",
      monthly: "Ce mois apporte la transformation et le renouveau. Lâchez ce qui ne vous sert plus.",
      yearly: "Une année de changement et de croissance profonds. Embrassez la transformation et faites confiance à votre force intérieure."
    },
    Sagittarius: {
      daily: "L'aventure enseigne aujourd'hui. Visez loin, puis marchez régulièrement vers vos objectifs.",
      monthly: "Ce mois est parfait pour l'exploration et l'apprentissage. Élargissez vos horizons grâce à de nouvelles expériences.",
      yearly: "Une année d'aventure et d'expansion. Voyages, apprentissage et nouvelles expériences vous attendent."
    },
    Capricorn: {
      daily: "Construisez avec patience aujourd'hui. Vos fondations porteront votre vision vers l'avant.",
      monthly: "Ce mois met l'accent sur la carrière et les objectifs à long terme. Votre discipline portera ses fruits.",
      yearly: "Une année de réalisations et de construction. Votre travail acharné portera ses fruits de manière significative."
    },
    Aquarius: {
      daily: "Innovez avec la communauté aujourd'hui. Vos idées veulent des collaborateurs et des partisans.",
      monthly: "Ce mois met en lumière les amitiés et l'innovation. Connectez-vous avec des personnes partageant les mêmes idées.",
      yearly: "Une année d'innovation et de communauté. Vos idées uniques trouveront leur public."
    },
    Pisces: {
      daily: "Les rêves informent la réalité aujourd'hui. Faites confiance aux symboles et aux signaux subtils de votre intuition.",
      monthly: "Ce mois met l'accent sur la créativité et la spiritualité. Écoutez votre voix intérieure.",
      yearly: "Une année de croissance spirituelle et d'expression créative. Faites confiance à votre intuition et à votre vision artistique."
    }
  },
  zh: {
    Aries: {
      daily: "今天你的能量点燃新的开始。有意识地引导它，对一直拖延的事情采取大胆行动。",
      monthly: "这个月带来领导机会。你天生的自信会闪耀，但记住要像领导一样多倾听。",
      yearly: "今年标志着重要的成长时期。拥抱新挑战，相信你的直觉。"
    },
    Taurus: {
      daily: "今天稳定带来结果。专注于你的日常，花时间欣赏周围的简单快乐。",
      monthly: "这个月强调稳定和建设。投资长期项目，培养你的关系。",
      yearly: "等待你的是稳步进步的一年。你的耐心和决心将以有意义的方式得到回报。"
    },
    Gemini: {
      daily: "今天好奇心打开大门。多听少说，你会发现宝贵的见解。",
      monthly: "这个月非常适合学习和交流。新想法和联系将丰富你的生活。",
      yearly: "通过知识和关系扩展的一年。对新观点保持开放。"
    },
    Cancer: {
      daily: "今天温和的界限保护你的柔软力量。照顾你的家和所爱的人。",
      monthly: "这个月专注于情感健康和家庭联系。相信你的直觉。",
      yearly: "情感成长和更深联系的一年。在滋养他人的同时滋养自己。"
    },
    Leo: {
      daily: "今天用心领导。慷慨地表达你的天赋，让你天生的魅力闪耀。",
      monthly: "这个月带来认可和创造机会。自信地分享你的才能。",
      yearly: "自我表达和成就的一年。你天生的领导力将被认可。"
    },
    Virgo: {
      daily: "今天精炼是神圣的。清除小细节以揭示更大的画面。",
      monthly: "这个月强调组织和服务。你对细节的关注将受到赞赏。",
      yearly: "改进和掌握的一年。专注于完善你的技能和帮助他人。"
    },
    Libra: {
      daily: "今天寻求和谐而不失去中心。美丽和平衡支持真理。",
      monthly: "这个月突出关系和伙伴关系。在给予和接受之间找到平衡。",
      yearly: "伙伴关系和和谐的一年。专注于在生活的所有领域创造美丽和平衡。"
    },
    Scorpio: {
      daily: "今天深度转化。释放控制以获得存在感，相信过程。",
      monthly: "这个月带来转变和更新。放下不再为你服务的东西。",
      yearly: "深刻变化和成长的一年。拥抱转变，相信你内在的力量。"
    },
    Sagittarius: {
      daily: "今天冒险教导。瞄准远方，然后稳步走向你的目标。",
      monthly: "这个月非常适合探索和学习。通过新体验扩展你的视野。",
      yearly: "冒险和扩展的一年。旅行、学习和新体验等待着你。"
    },
    Capricorn: {
      daily: "今天耐心建设。你的基础将推动你的愿景向前。",
      monthly: "这个月强调职业和长期目标。你的纪律将带来结果。",
      yearly: "成就和建设的一年。你的努力工作将以有意义的方式得到回报。"
    },
    Aquarius: {
      daily: "今天与社区一起创新。你的想法需要合作者和支持者。",
      monthly: "这个月突出友谊和创新。与志同道合的人联系。",
      yearly: "创新和社区的一年。你独特的想法将找到它们的受众。"
    },
    Pisces: {
      daily: "今天梦想告知现实。相信你直觉中的符号和微妙信号。",
      monthly: "这个月强调创造力和灵性。倾听你内心的声音。",
      yearly: "精神成长和创造性表达的一年。相信你的直觉和艺术视野。"
    }
  },
  id: {
    Aries: {
      daily: "Energi Anda menyalakan awal baru hari ini. Salurkan dengan niat dan ambil tindakan berani pada sesuatu yang telah Anda tunda.",
      monthly: "Bulan ini membawa peluang kepemimpinan. Kepercayaan diri alami Anda akan bersinar, tetapi ingat untuk mendengarkan sebanyak Anda memimpin.",
      yearly: "Tahun ini menandai periode pertumbuhan yang signifikan. Terima tantangan baru dan percayai insting Anda."
    },
    Taurus: {
      daily: "Kestabilan membawa hasil hari ini. Fokus pada rutinitas Anda dan luangkan waktu untuk menghargai kesenangan sederhana di sekitar Anda.",
      monthly: "Bulan ini menekankan stabilitas dan pembangunan. Investasikan dalam proyek jangka panjang dan rawat hubungan Anda.",
      yearly: "Tahun kemajuan yang stabil menanti. Kesabaran dan tekad Anda akan terbayar dengan cara yang berarti."
    },
    Gemini: {
      daily: "Rasa ingin tahu membuka pintu hari ini. Dengarkan sebanyak Anda berbicara, dan Anda akan menemukan wawasan berharga.",
      monthly: "Bulan ini sempurna untuk belajar dan berkomunikasi. Ide dan koneksi baru akan memperkaya hidup Anda.",
      yearly: "Tahun ekspansi melalui pengetahuan dan hubungan. Tetap terbuka untuk perspektif baru."
    },
    Cancer: {
      daily: "Batas lembut melindungi kekuatan lembut Anda hari ini. Rawat rumah dan orang terkasih Anda.",
      monthly: "Bulan ini fokus pada kesejahteraan emosional dan koneksi keluarga. Percayai intuisi Anda.",
      yearly: "Tahun pertumbuhan emosional dan koneksi yang lebih dalam. Rawat diri Anda sambil merawat orang lain."
    },
    Leo: {
      daily: "Pimpin dengan hati hari ini. Ekspresikan bakat Anda dengan murah hati, dan biarkan karisma alami Anda bersinar.",
      monthly: "Bulan ini membawa pengakuan dan peluang kreatif. Bagikan bakat Anda dengan percaya diri.",
      yearly: "Tahun ekspresi diri dan pencapaian. Kepemimpinan alami Anda akan diakui."
    },
    Virgo: {
      daily: "Penyempurnaan adalah suci hari ini. Bersihkan detail kecil untuk mengungkapkan gambaran yang lebih besar.",
      monthly: "Bulan ini menekankan organisasi dan layanan. Perhatian Anda pada detail akan dihargai.",
      yearly: "Tahun peningkatan dan penguasaan. Fokus pada menyempurnakan keterampilan Anda dan membantu orang lain."
    },
    Libra: {
      daily: "Cari harmoni tanpa kehilangan pusat Anda hari ini. Keindahan dan keseimbangan mendukung kebenaran.",
      monthly: "Bulan ini menyoroti hubungan dan kemitraan. Temukan keseimbangan antara memberi dan menerima.",
      yearly: "Tahun kemitraan dan harmoni. Fokus pada menciptakan keindahan dan keseimbangan di semua area kehidupan."
    },
    Scorpio: {
      daily: "Kedalaman mengubah hari ini. Lepaskan kendali untuk mendapatkan kehadiran dan percayai prosesnya.",
      monthly: "Bulan ini membawa transformasi dan pembaruan. Lepaskan apa yang tidak lagi melayani Anda.",
      yearly: "Tahun perubahan dan pertumbuhan yang mendalam. Terima transformasi dan percayai kekuatan batin Anda."
    },
    Sagittarius: {
      daily: "Petualangan mengajar hari ini. Tuju jauh, lalu berjalan dengan mantap menuju tujuan Anda.",
      monthly: "Bulan ini sempurna untuk eksplorasi dan pembelajaran. Perluas cakrawala Anda melalui pengalaman baru.",
      yearly: "Tahun petualangan dan ekspansi. Perjalanan, pembelajaran, dan pengalaman baru menanti."
    },
    Capricorn: {
      daily: "Bangun dengan kesabaran hari ini. Fondasi Anda akan membawa visi Anda ke depan.",
      monthly: "Bulan ini menekankan karier dan tujuan jangka panjang. Disiplin Anda akan membawa hasil.",
      yearly: "Tahun pencapaian dan pembangunan. Kerja keras Anda akan terbayar dengan cara yang signifikan."
    },
    Aquarius: {
      daily: "Berinovasi dengan komunitas hari ini. Ide Anda menginginkan kolaborator dan pendukung.",
      monthly: "Bulan ini menyoroti persahabatan dan inovasi. Terhubung dengan orang yang berpikiran sama.",
      yearly: "Tahun inovasi dan komunitas. Ide unik Anda akan menemukan audiens mereka."
    },
    Pisces: {
      daily: "Mimpi menginformasikan kenyataan hari ini. Percayai simbol dan sinyal halus dari intuisi Anda.",
      monthly: "Bulan ini menekankan kreativitas dan spiritualitas. Dengarkan suara batin Anda.",
      yearly: "Tahun pertumbuhan spiritual dan ekspresi kreatif. Percayai intuisi dan visi artistik Anda."
    }
  },
  ja: {
    Aries: {
      daily: "今日、あなたのエネルギーが新しい始まりを点火します。意図を持ってそれを導き、先延ばしにしていたことに大胆に行動してください。",
      monthly: "今月はリーダーシップの機会をもたらします。あなたの自然な自信が輝きますが、リードするのと同じくらい聞くことを忘れないでください。",
      yearly: "今年は重要な成長の期間を示します。新しい挑戦を受け入れ、あなたの直感を信じてください。"
    },
    Taurus: {
      daily: "今日、安定が結果をもたらします。ルーティンに集中し、周りのシンプルな喜びを楽しむ時間を取りましょう。",
      monthly: "今月は安定と構築を強調します。長期プロジェクトに投資し、関係を育みましょう。",
      yearly: "着実な進歩の年が待っています。あなたの忍耐と決意が意味のある方法で報われるでしょう。"
    },
    Gemini: {
      daily: "今日、好奇心が扉を開きます。話すのと同じくらい聞き、貴重な洞察を発見するでしょう。",
      monthly: "今月は学習とコミュニケーションに最適です。新しいアイデアとつながりがあなたの人生を豊かにします。",
      yearly: "知識と関係を通じた拡大の年。新しい視点に開かれてください。"
    },
    Cancer: {
      daily: "今日、優しい境界があなたの柔らかい力を保護します。家と愛する人を大切にしてください。",
      monthly: "今月は感情的な幸福と家族のつながりに焦点を当てます。あなたの直感を信じてください。",
      yearly: "感情的な成長とより深いつながりの年。他の人を育むのと同じように自分を育みましょう。"
    },
    Leo: {
      daily: "今日、心でリードしてください。あなたの才能を寛大に表現し、自然なカリスマを輝かせましょう。",
      monthly: "今月は認識と創造的な機会をもたらします。自信を持って才能を共有してください。",
      yearly: "自己表現と達成の年。あなたの自然なリーダーシップが認められるでしょう。"
    },
    Virgo: {
      daily: "今日、洗練は神聖です。小さな詳細をクリアして、より大きな絵を明らかにしてください。",
      monthly: "今月は組織とサービスを強調します。詳細への注意が評価されるでしょう。",
      yearly: "改善と習熟の年。スキルを完璧にし、他の人を助けることに集中してください。"
    },
    Libra: {
      daily: "今日、中心を失うことなく調和を求めましょう。美しさとバランスが真実を支えます。",
      monthly: "今月は関係とパートナーシップを強調します。与えることと受け取ることのバランスを見つけてください。",
      yearly: "パートナーシップと調和の年。人生のすべての領域で美しさとバランスを作り出すことに集中してください。"
    },
    Scorpio: {
      daily: "今日、深さが変容します。存在感を得るためにコントロールを解放し、プロセスを信じてください。",
      monthly: "今月は変容と更新をもたらします。もはやあなたに役立たないものを手放してください。",
      yearly: "深い変化と成長の年。変容を受け入れ、あなたの内なる強さを信じてください。"
    },
    Sagittarius: {
      daily: "今日、冒険が教えます。遠くを目指し、その後目標に向かって着実に歩んでください。",
      monthly: "今月は探検と学習に最適です。新しい経験を通じて視野を広げてください。",
      yearly: "冒険と拡大の年。旅行、学習、新しい経験が待っています。"
    },
    Capricorn: {
      daily: "今日、忍耐を持って構築してください。あなたの基盤がビジョンを前進させます。",
      monthly: "今月はキャリアと長期目標を強調します。あなたの規律が結果をもたらすでしょう。",
      yearly: "達成と構築の年。あなたの努力が意味のある方法で報われるでしょう。"
    },
    Aquarius: {
      daily: "今日、コミュニティと共に革新してください。あなたのアイデアは協力者と支持者を求めています。",
      monthly: "今月は友情と革新を強調します。志を同じくする人々とつながってください。",
      yearly: "革新とコミュニティの年。あなたのユニークなアイデアが聴衆を見つけるでしょう。"
    },
    Pisces: {
      daily: "今日、夢が現実を伝えます。あなたの直感からのシンボルと微妙な信号を信じてください。",
      monthly: "今月は創造性とスピリチュアリティを強調します。内なる声を聞いてください。",
      yearly: "精神的成長と創造的表現の年。あなたの直感と芸術的ビジョンを信じてください。"
    }
  },
  ko: {
    Aries: {
      daily: "오늘 당신의 에너지가 새로운 시작을 점화합니다. 의도적으로 그것을 채널링하고 미루고 있던 것에 대해 대담하게 행동하세요.",
      monthly: "이번 달은 리더십 기회를 가져옵니다. 당신의 자연스러운 자신감이 빛날 것이지만, 리드하는 만큼 듣는 것을 기억하세요.",
      yearly: "올해는 중요한 성장 기간을 나타냅니다. 새로운 도전을 받아들이고 당신의 직감을 신뢰하세요."
    },
    Taurus: {
      daily: "오늘 안정이 결과를 가져옵니다. 루틴에 집중하고 주변의 단순한 즐거움을 감상하는 시간을 가지세요.",
      monthly: "이번 달은 안정성과 구축을 강조합니다. 장기 프로젝트에 투자하고 관계를 육성하세요.",
      yearly: "꾸준한 진전의 해가 기다립니다. 당신의 인내와 결심이 의미 있는 방식으로 보상받을 것입니다."
    },
    Gemini: {
      daily: "오늘 호기심이 문을 엽니다. 말하는 만큼 듣고, 귀중한 통찰을 발견할 것입니다.",
      monthly: "이번 달은 학습과 소통에 완벽합니다. 새로운 아이디어와 연결이 당신의 삶을 풍요롭게 할 것입니다.",
      yearly: "지식과 관계를 통한 확장의 해. 새로운 관점에 열려 있으세요."
    },
    Cancer: {
      daily: "오늘 부드러운 경계가 당신의 부드러운 힘을 보호합니다. 집과 사랑하는 사람들을 돌보세요.",
      monthly: "이번 달은 감정적 웰빙과 가족 연결에 초점을 맞춥니다. 당신의 직감을 신뢰하세요.",
      yearly: "감정적 성장과 더 깊은 연결의 해. 다른 사람을 양육하는 것처럼 자신을 양육하세요."
    },
    Leo: {
      daily: "오늘 마음으로 리드하세요. 당신의 재능을 관대하게 표현하고 자연스러운 카리스마를 빛내세요.",
      monthly: "이번 달은 인정과 창의적 기회를 가져옵니다. 자신감 있게 재능을 공유하세요.",
      yearly: "자기 표현과 성취의 해. 당신의 자연스러운 리더십이 인정받을 것입니다."
    },
    Virgo: {
      daily: "오늘 정제는 신성합니다. 작은 세부 사항을 정리하여 더 큰 그림을 드러내세요.",
      monthly: "이번 달은 조직과 서비스를 강조합니다. 세부 사항에 대한 당신의 주의가 감사받을 것입니다.",
      yearly: "개선과 숙달의 해. 기술을 완벽하게 하고 다른 사람을 돕는 데 집중하세요."
    },
    Libra: {
      daily: "오늘 중심을 잃지 않고 조화를 추구하세요. 아름다움과 균형이 진실을 지원합니다.",
      monthly: "이번 달은 관계와 파트너십을 강조합니다. 주는 것과 받는 것 사이의 균형을 찾으세요.",
      yearly: "파트너십과 조화의 해. 삶의 모든 영역에서 아름다움과 균형을 만드는 데 집중하세요."
    },
    Scorpio: {
      daily: "오늘 깊이가 변형합니다. 존재감을 얻기 위해 통제를 해제하고 프로세스를 신뢰하세요.",
      monthly: "이번 달은 변형과 갱신을 가져옵니다. 더 이상 당신에게 도움이 되지 않는 것을 놓으세요.",
      yearly: "깊은 변화와 성장의 해. 변형을 받아들이고 당신의 내면의 힘을 신뢰하세요."
    },
    Sagittarius: {
      daily: "오늘 모험이 가르칩니다. 멀리 목표를 정한 다음 목표를 향해 꾸준히 걸어가세요.",
      monthly: "이번 달은 탐험과 학습에 완벽합니다. 새로운 경험을 통해 지평을 넓히세요.",
      yearly: "모험과 확장의 해. 여행, 학습, 새로운 경험이 기다립니다."
    },
    Capricorn: {
      daily: "오늘 인내심으로 구축하세요. 당신의 기초가 비전을 앞으로 나아가게 할 것입니다.",
      monthly: "이번 달은 경력과 장기 목표를 강조합니다. 당신의 규율이 결과를 가져올 것입니다.",
      yearly: "성취와 구축의 해. 당신의 노력이 의미 있는 방식으로 보상받을 것입니다."
    },
    Aquarius: {
      daily: "오늘 커뮤니티와 함께 혁신하세요. 당신의 아이디어는 협력자와 지지자를 원합니다.",
      monthly: "이번 달은 우정과 혁신을 강조합니다. 같은 생각을 가진 사람들과 연결하세요.",
      yearly: "혁신과 커뮤니티의 해. 당신의 독특한 아이디어가 청중을 찾을 것입니다."
    },
    Pisces: {
      daily: "오늘 꿈이 현실을 알려줍니다. 당신의 직감에서 온 상징과 미묘한 신호를 신뢰하세요.",
      monthly: "이번 달은 창의성과 영성을 강조합니다. 내면의 목소리를 들으세요.",
      yearly: "영적 성장과 창의적 표현의 해. 당신의 직감과 예술적 비전을 신뢰하세요."
    }
  }
};

// Tarot card meaning translations
export const tarotCardTranslations: Record<SupportedLang, Record<string, { upright: string; reversed: string }>> = {
  en: {
    "The Fool": { upright: "New beginnings, innocence, free spirit.", reversed: "Recklessness, holding back." },
    "The Magician": { upright: "Manifestation, resourcefulness, power.", reversed: "Manipulation, scattered energy." },
    "The High Priestess": { upright: "Intuition, sacred knowledge, mystery.", reversed: "Secrets, disconnection." },
    "The Empress": { upright: "Fertility, abundance, nurturing.", reversed: "Creative block, dependence." },
    "The Emperor": { upright: "Authority, structure, leadership.", reversed: "Rigidity, domination." },
    "The Hierophant": { upright: "Tradition, spiritual wisdom.", reversed: "Rebellion, nonconformity." },
    "The Lovers": { upright: "Union, choices, alignment.", reversed: "Disharmony, imbalance." },
    "The Chariot": { upright: "Willpower, determination.", reversed: "Aggression, lack of control." },
    "Strength": { upright: "Courage, compassion.", reversed: "Self-doubt, reactivity." },
    "The Hermit": { upright: "Introspection, wisdom.", reversed: "Isolation, withdrawal." },
    "Wheel of Fortune": { upright: "Change, cycles, destiny.", reversed: "Bad luck, resistance." },
    "Justice": { upright: "Fairness, truth, balance.", reversed: "Unfairness, lack of accountability." },
    "The Hanged Man": { upright: "Sacrifice, waiting, enlightenment.", reversed: "Stalling, needless sacrifice." },
    "Death": { upright: "Endings, transformation, rebirth.", reversed: "Resistance to change." },
    "Temperance": { upright: "Balance, moderation, patience.", reversed: "Imbalance, excess." },
    "The Devil": { upright: "Bondage, addiction.", reversed: "Freedom, breaking free." },
    "The Tower": { upright: "Sudden upheaval, revelation.", reversed: "Fear of change." },
    "The Star": { upright: "Hope, faith, purpose.", reversed: "Faithlessness, discouragement." },
    "The Moon": { upright: "Illusion, fear, anxiety.", reversed: "Release of fear." },
    "The Sun": { upright: "Joy, success, celebration.", reversed: "Inner child, feeling down." },
    "Judgement": { upright: "Absolution, rebirth.", reversed: "Lack of self awareness." },
    "The World": { upright: "Fulfillment, harmony, completion.", reversed: "Incomplete, seeking closure." }
  },
  es: {
    "The Fool": { upright: "Nuevos comienzos, inocencia, espíritu libre.", reversed: "Imprudencia, contención." },
    "The Magician": { upright: "Manifestación, ingenio, poder.", reversed: "Manipulación, energía dispersa." },
    "The High Priestess": { upright: "Intuición, conocimiento sagrado, misterio.", reversed: "Secretos, desconexión." },
    "The Empress": { upright: "Fertilidad, abundancia, crianza.", reversed: "Bloqueo creativo, dependencia." },
    "The Emperor": { upright: "Autoridad, estructura, liderazgo.", reversed: "Rigidez, dominación." },
    "The Hierophant": { upright: "Tradición, sabiduría espiritual.", reversed: "Rebelión, inconformismo." },
    "The Lovers": { upright: "Unión, elecciones, alineación.", reversed: "Desarmonía, desequilibrio." },
    "The Chariot": { upright: "Voluntad, determinación.", reversed: "Agresión, falta de control." },
    "Strength": { upright: "Valor, compasión.", reversed: "Autoduda, reactividad." },
    "The Hermit": { upright: "Introspección, sabiduría.", reversed: "Aislamiento, retiro." },
    "Wheel of Fortune": { upright: "Cambio, ciclos, destino.", reversed: "Mala suerte, resistencia." },
    "Justice": { upright: "Justicia, verdad, equilibrio.", reversed: "Injusticia, falta de responsabilidad." },
    "The Hanged Man": { upright: "Sacrificio, espera, iluminación.", reversed: "Estancamiento, sacrificio innecesario." },
    "Death": { upright: "Finales, transformación, renacimiento.", reversed: "Resistencia al cambio." },
    "Temperance": { upright: "Equilibrio, moderación, paciencia.", reversed: "Desequilibrio, exceso." },
    "The Devil": { upright: "Esclavitud, adicción.", reversed: "Libertad, liberación." },
    "The Tower": { upright: "Conmoción repentina, revelación.", reversed: "Miedo al cambio." },
    "The Star": { upright: "Esperanza, fe, propósito.", reversed: "Falta de fe, desánimo." },
    "The Moon": { upright: "Ilusión, miedo, ansiedad.", reversed: "Liberación del miedo." },
    "The Sun": { upright: "Alegría, éxito, celebración.", reversed: "Niño interior, sentirse deprimido." },
    "Judgement": { upright: "Absolución, renacimiento.", reversed: "Falta de autoconciencia." },
    "The World": { upright: "Cumplimiento, armonía, finalización.", reversed: "Incompleto, buscando cierre." }
  },
  fr: {
    "The Fool": { upright: "Nouveaux départs, innocence, esprit libre.", reversed: "Imprudence, retenue." },
    "The Magician": { upright: "Manifestation, ingéniosité, pouvoir.", reversed: "Manipulation, énergie dispersée." },
    "The High Priestess": { upright: "Intuition, connaissance sacrée, mystère.", reversed: "Secrets, déconnexion." },
    "The Empress": { upright: "Fécondité, abondance, soins.", reversed: "Blocage créatif, dépendance." },
    "The Emperor": { upright: "Autorité, structure, leadership.", reversed: "Rigidité, domination." },
    "The Hierophant": { upright: "Tradition, sagesse spirituelle.", reversed: "Rébellion, non-conformité." },
    "The Lovers": { upright: "Union, choix, alignement.", reversed: "Disharmonie, déséquilibre." },
    "The Chariot": { upright: "Volonté, détermination.", reversed: "Agressivité, manque de contrôle." },
    "Strength": { upright: "Courage, compassion.", reversed: "Doute de soi, réactivité." },
    "The Hermit": { upright: "Introspection, sagesse.", reversed: "Isolement, retrait." },
    "Wheel of Fortune": { upright: "Changement, cycles, destin.", reversed: "Malchance, résistance." },
    "Justice": { upright: "Équité, vérité, équilibre.", reversed: "Injustice, manque de responsabilité." },
    "The Hanged Man": { upright: "Sacrifice, attente, illumination.", reversed: "Stagnation, sacrifice inutile." },
    "Death": { upright: "Fins, transformation, renaissance.", reversed: "Résistance au changement." },
    "Temperance": { upright: "Équilibre, modération, patience.", reversed: "Déséquilibre, excès." },
    "The Devil": { upright: "Esclavage, dépendance.", reversed: "Liberté, libération." },
    "The Tower": { upright: "Bouleversement soudain, révélation.", reversed: "Peur du changement." },
    "The Star": { upright: "Espoir, foi, but.", reversed: "Manque de foi, découragement." },
    "The Moon": { upright: "Illusion, peur, anxiété.", reversed: "Libération de la peur." },
    "The Sun": { upright: "Joie, succès, célébration.", reversed: "Enfant intérieur, se sentir déprimé." },
    "Judgement": { upright: "Absolution, renaissance.", reversed: "Manque de conscience de soi." },
    "The World": { upright: "Accomplissement, harmonie, achèvement.", reversed: "Incomplet, cherchant la clôture." }
  },
  zh: {
    "The Fool": { upright: "新的开始，纯真，自由精神。", reversed: "鲁莽，退缩。" },
    "The Magician": { upright: "显化，足智多谋，力量。", reversed: "操纵，能量分散。" },
    "The High Priestess": { upright: "直觉，神圣知识，神秘。", reversed: "秘密，断开连接。" },
    "The Empress": { upright: "生育，丰富，滋养。", reversed: "创意阻塞，依赖。" },
    "The Emperor": { upright: "权威，结构，领导力。", reversed: "僵化，支配。" },
    "The Hierophant": { upright: "传统，精神智慧。", reversed: "反叛，不墨守成规。" },
    "The Lovers": { upright: "结合，选择，对齐。", reversed: "不和谐，不平衡。" },
    "The Chariot": { upright: "意志力，决心。", reversed: "攻击性，缺乏控制。" },
    "Strength": { upright: "勇气，同情。", reversed: "自我怀疑，反应性。" },
    "The Hermit": { upright: "内省，智慧。", reversed: "孤立，退缩。" },
    "Wheel of Fortune": { upright: "变化，周期，命运。", reversed: "坏运气，抵抗。" },
    "Justice": { upright: "公平，真理，平衡。", reversed: "不公平，缺乏问责制。" },
    "The Hanged Man": { upright: "牺牲，等待，启蒙。", reversed: "停滞，不必要的牺牲。" },
    "Death": { upright: "结束，转变，重生。", reversed: "抗拒变化。" },
    "Temperance": { upright: "平衡，适度，耐心。", reversed: "不平衡，过度。" },
    "The Devil": { upright: "束缚，成瘾。", reversed: "自由，挣脱。" },
    "The Tower": { upright: "突然的剧变，启示。", reversed: "对变化的恐惧。" },
    "The Star": { upright: "希望，信念，目的。", reversed: "缺乏信念，沮丧。" },
    "The Moon": { upright: "幻觉，恐惧，焦虑。", reversed: "释放恐惧。" },
    "The Sun": { upright: "快乐，成功，庆祝。", reversed: "内在小孩，感到沮丧。" },
    "Judgement": { upright: "赦免，重生。", reversed: "缺乏自我意识。" },
    "The World": { upright: "完成，和谐，圆满。", reversed: "不完整，寻求结束。" }
  },
  id: {
    "The Fool": { upright: "Awal baru, kepolosan, semangat bebas.", reversed: "Kecerobohan, menahan diri." },
    "The Magician": { upright: "Manifestasi, kecerdikan, kekuatan.", reversed: "Manipulasi, energi tersebar." },
    "The High Priestess": { upright: "Intuisi, pengetahuan suci, misteri.", reversed: "Rahasia, keterputusan." },
    "The Empress": { upright: "Kesuburan, kelimpahan, pengasuhan.", reversed: "Blok kreatif, ketergantungan." },
    "The Emperor": { upright: "Otoritas, struktur, kepemimpinan.", reversed: "Kekakuan, dominasi." },
    "The Hierophant": { upright: "Tradisi, kebijaksanaan spiritual.", reversed: "Pemberontakan, nonkonformitas." },
    "The Lovers": { upright: "Persatuan, pilihan, keselarasan.", reversed: "Ketidakharmonisan, ketidakseimbangan." },
    "The Chariot": { upright: "Kemauan, tekad.", reversed: "Agresi, kurang kontrol." },
    "Strength": { upright: "Keberanian, belas kasihan.", reversed: "Keraguan diri, reaktivitas." },
    "The Hermit": { upright: "Introspeksi, kebijaksanaan.", reversed: "Isolasi, penarikan diri." },
    "Wheel of Fortune": { upright: "Perubahan, siklus, takdir.", reversed: "Nasib buruk, perlawanan." },
    "Justice": { upright: "Keadilan, kebenaran, keseimbangan.", reversed: "Ketidakadilan, kurang akuntabilitas." },
    "The Hanged Man": { upright: "Pengorbanan, menunggu, pencerahan.", reversed: "Menunda, pengorbanan yang tidak perlu." },
    "Death": { upright: "Akhir, transformasi, kelahiran kembali.", reversed: "Perlawanan terhadap perubahan." },
    "Temperance": { upright: "Keseimbangan, moderasi, kesabaran.", reversed: "Ketidakseimbangan, kelebihan." },
    "The Devil": { upright: "Perbudakan, kecanduan.", reversed: "Kebebasan, membebaskan diri." },
    "The Tower": { upright: "Kekacauan tiba-tiba, wahyu.", reversed: "Ketakutan akan perubahan." },
    "The Star": { upright: "Harapan, iman, tujuan.", reversed: "Kurang iman, kekecewaan." },
    "The Moon": { upright: "Ilusi, ketakutan, kecemasan.", reversed: "Pelepasan ketakutan." },
    "The Sun": { upright: "Kegembiraan, kesuksesan, perayaan.", reversed: "Anak batin, merasa sedih." },
    "Judgement": { upright: "Absolusi, kelahiran kembali.", reversed: "Kurang kesadaran diri." },
    "The World": { upright: "Pemenuhan, harmoni, penyelesaian.", reversed: "Tidak lengkap, mencari penutupan." }
  },
  ja: {
    "The Fool": { upright: "新しい始まり、純真さ、自由な精神。", reversed: "無謀さ、控えめ。" },
    "The Magician": { upright: "顕現、機知、力。", reversed: "操作、散らばったエネルギー。" },
    "The High Priestess": { upright: "直感、神聖な知識、神秘。", reversed: "秘密、切断。" },
    "The Empress": { upright: "肥沃、豊富、育成。", reversed: "創造的ブロック、依存。" },
    "The Emperor": { upright: "権威、構造、リーダーシップ。", reversed: "硬直、支配。" },
    "The Hierophant": { upright: "伝統、精神的な知恵。", reversed: "反逆、非順応。" },
    "The Lovers": { upright: "結合、選択、整列。", reversed: "不調和、不均衡。" },
    "The Chariot": { upright: "意志力、決意。", reversed: "攻撃性、コントロールの欠如。" },
    "Strength": { upright: "勇気、思いやり。", reversed: "自己疑念、反応性。" },
    "The Hermit": { upright: "内省、知恵。", reversed: "孤立、撤退。" },
    "Wheel of Fortune": { upright: "変化、サイクル、運命。", reversed: "不運、抵抗。" },
    "Justice": { upright: "公平、真実、バランス。", reversed: "不公平、説明責任の欠如。" },
    "The Hanged Man": { upright: "犠牲、待機、啓蒙。", reversed: "停滞、無駄な犠牲。" },
    "Death": { upright: "終わり、変容、再生。", reversed: "変化への抵抗。" },
    "Temperance": { upright: "バランス、節制、忍耐。", reversed: "不均衡、過剰。" },
    "The Devil": { upright: "束縛、依存症。", reversed: "自由、解放。" },
    "The Tower": { upright: "突然の大変動、啓示。", reversed: "変化への恐怖。" },
    "The Star": { upright: "希望、信仰、目的。", reversed: "信仰の欠如、落胆。" },
    "The Moon": { upright: "幻想、恐怖、不安。", reversed: "恐怖の解放。" },
    "The Sun": { upright: "喜び、成功、祝賀。", reversed: "内なる子供、気分の落ち込み。" },
    "Judgement": { upright: "赦免、再生。", reversed: "自己認識の欠如。" },
    "The World": { upright: "達成、調和、完成。", reversed: "不完全、閉鎖を求める。" }
  },
  ko: {
    "The Fool": { upright: "새로운 시작, 순수함, 자유로운 정신.", reversed: "무모함, 억제." },
    "The Magician": { upright: "현현, 재치, 힘.", reversed: "조작, 흩어진 에너지." },
    "The High Priestess": { upright: "직감, 신성한 지식, 신비.", reversed: "비밀, 단절." },
    "The Empress": { upright: "풍요, 풍부, 양육.", reversed: "창의적 블록, 의존." },
    "The Emperor": { upright: "권위, 구조, 리더십.", reversed: "경직, 지배." },
    "The Hierophant": { upright: "전통, 영적 지혜.", reversed: "반란, 비순응." },
    "The Lovers": { upright: "결합, 선택, 정렬.", reversed: "불화, 불균형." },
    "The Chariot": { upright: "의지력, 결심.", reversed: "공격성, 통제 부족." },
    "Strength": { upright: "용기, 연민.", reversed: "자기 의심, 반응성." },
    "The Hermit": { upright: "내성, 지혜.", reversed: "고립, 철수." },
    "Wheel of Fortune": { upright: "변화, 주기, 운명.", reversed: "불운, 저항." },
    "Justice": { upright: "공정, 진실, 균형.", reversed: "불공정, 책임 부족." },
    "The Hanged Man": { upright: "희생, 대기, 깨달음.", reversed: "정체, 불필요한 희생." },
    "Death": { upright: "끝, 변형, 재생.", reversed: "변화에 대한 저항." },
    "Temperance": { upright: "균형, 절제, 인내.", reversed: "불균형, 과다." },
    "The Devil": { upright: "속박, 중독.", reversed: "자유, 해방." },
    "The Tower": { upright: "갑작스러운 격변, 계시.", reversed: "변화에 대한 두려움." },
    "The Star": { upright: "희망, 신앙, 목적.", reversed: "신앙 부족, 낙담." },
    "The Moon": { upright: "환상, 두려움, 불안.", reversed: "두려움의 해방." },
    "The Sun": { upright: "기쁨, 성공, 축하.", reversed: "내면의 아이, 우울함." },
    "Judgement": { upright: "면죄, 재생.", reversed: "자기 인식 부족." },
    "The World": { upright: "성취, 조화, 완성.", reversed: "불완전, 종결 추구." }
  }
};

// Tarot summary translations
export const tarotSummaryTranslations: Record<SupportedLang, string> = {
  en: "Three-card spread: past, present, future.",
  es: "Tirada de tres cartas: pasado, presente, futuro.",
  fr: "Tirage de trois cartes : passé, présent, futur.",
  zh: "三张牌阵：过去，现在，未来。",
  id: "Penyebaran tiga kartu: masa lalu, masa kini, masa depan.",
  ja: "三枚のカードスプレッド：過去、現在、未来。",
  ko: "세 장의 카드 스프레드: 과거, 현재, 미래."
};

// Helper function to get horoscope translation
export function getHoroscopeTranslation(sign: ZodiacSign, horizon: Horizon, lang: SupportedLang): string {
  return horoscopeTranslations[lang]?.[sign]?.[horizon] || horoscopeTranslations.en[sign][horizon];
}

// Helper function to get tarot card meaning translation
export function getTarotCardMeaning(cardName: string, isReversed: boolean, lang: SupportedLang): string {
  // First try to get from translations (Major Arcana only)
  const translations = tarotCardTranslations[lang]?.[cardName] || tarotCardTranslations.en[cardName];
  if (translations) {
    return isReversed ? translations.reversed : translations.upright;
  }
  
  // If not in translations (e.g., Minor Arcana), fall back to CARD_MEANINGS
  const cardMeanings = CARD_MEANINGS[cardName];
  if (cardMeanings) {
    const meaning = isReversed ? cardMeanings.reversed : cardMeanings.upright;
    // For Minor Arcana, use translateText (which adds [lang] prefix for now)
    // Full translations for all 78 cards can be added later
    return translateText(meaning, lang);
  }
  
  // Final fallback
  console.warn(`No meaning found for card: ${cardName}, lang: ${lang}`);
  return isReversed ? "Unknown reversed meaning" : "Unknown upright meaning";
}

// Helper function to get tarot summary translation
export function getTarotSummaryTranslation(lang: SupportedLang): string {
  return tarotSummaryTranslations[lang] || tarotSummaryTranslations.en;
}

