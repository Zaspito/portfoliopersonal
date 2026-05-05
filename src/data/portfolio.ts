import {
  BadgeCheck,
  Bot,
  BrainCircuit,
  ChartNoAxesCombined,
  Code2,
  DatabaseZap,
  Globe2,
  LineChart,
  Megaphone,
  Search,
  ServerCog,
  ShoppingCart,
  Workflow,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const imageBase = '/images/portfolio/';

export type Stat = {
  value: string;
  label: string;
  detail: string;
};

export type ExperienceItem = {
  company: string;
  location: string;
  role: string;
  period: string;
  summary: string;
  points: string[];
};

export type Project = {
  title: string;
  description: string;
  outcome: string;
  stack: string[];
  image: string;
  imageAlt: string;
  logo?: string;
  logoAlt?: string;
  icon: LucideIcon;
  visual: 'aicc' | 'sevillavet' | 'automation' | 'ai' | 'bonmenu';
};

export type EducationItem = {
  title: string;
  center: string;
  period: string;
};

export type SkillGroup = {
  title: string;
  icon: LucideIcon;
  logos: { name: string; src: string }[];
  skills: string[];
};

export const brandLogos = [
  { label: 'WordPress', src: `${imageBase}wordpress.svg` },
  { label: 'WooCommerce', src: `${imageBase}woocommerce.svg` },
  { label: 'Search Console', src: `${imageBase}google-search-console.svg` },
  { label: 'n8n', src: `${imageBase}n8n.svg` },
  { label: 'Google Ads', src: `${imageBase}google-ads.svg` },
  { label: 'GitHub', src: `${imageBase}github.svg` },
];

export const stats: Stat[] = [
  {
    value: '4.000 -> 10.000+',
    label: 'visitas mensuales',
    detail: 'Crecimiento orgánico trabajado desde SEO técnico, arquitectura y contenido.',
  },
  {
    value: '12 -> 25',
    label: 'autoridad de dominio',
    detail: 'Mejora aproximada de autoridad y señales de confianza del proyecto.',
  },
  {
    value: 'Lead ops',
    label: 'automatización comercial',
    detail: 'Clasificación, registro y respuesta de leads con flujos conectados.',
  },
  {
    value: 'Multi-site',
    label: 'WordPress gestionado',
    detail: 'Mantenimiento, optimización y evolución de varios sitios reales.',
  },
];

export const experience: ExperienceItem[] = [
  {
    company: 'Academia Internacional de Ciencias Criminalísticas AICC',
    location: 'Sevilla',
    role: 'Técnico WordPress, SEO, GEO y Automatización Digital',
    period: 'Nov 2025 - Actualidad',
    summary:
      'Trabajo en la mejora de webs formativas, captación de leads, medición de conversiones y automatización de procesos comerciales.',
    points: [
      'Gestión y optimización de sitios WordPress y WooCommerce.',
      'SEO on-page, SEO técnico, arquitectura web, contenidos e intención de búsqueda.',
      'Configuración de Google Tag Manager, Search Console y medición de conversiones.',
      'Campañas de Google Ads Search orientadas a captación de leads.',
      'Automatización con n8n, Google Sheets, Apps Script y WhatsApp/YCloud.',
      'Prompts, Skills para Claude, asistentes IA y optimización GEO.',
    ],
  },
  {
    company: 'Foro Empresarial',
    location: 'Alcalá de Guadaíra, Sevilla',
    role: 'Prácticas DAM / Desarrollo web',
    period: 'May 2025 - Jun 2025',
    summary:
      'Primera experiencia en entorno profesional, colaborando en desarrollo web, bases de datos y documentación técnica.',
    points: [
      'Desarrollo web y apoyo en proyectos digitales.',
      'Trabajo con bases de datos.',
      'Documentación técnica.',
      'Adaptación a entorno profesional.',
    ],
  },
];

export const projects: Project[] = [
  {
    title: 'AICC: ecosistema SEO, GEO y automatización',
    description:
      'Optimización de webs formativas con WordPress, SEO técnico, GEO, WooCommerce, Google Ads, CRM y automatizaciones conectadas.',
    outcome: 'Sistema digital orientado a visibilidad, captación y gestión comercial.',
    stack: ['WordPress', 'WooCommerce', 'SEO técnico', 'GEO', 'n8n'],
    image: `${imageBase}aicc-cover.webp`,
    imageAlt: 'Logotipo de Academia Internacional de Ciencias Criminalísticas AICC',
    logo: `${imageBase}aicc-logo.png`,
    logoAlt: 'Emblema oficial de AICC',
    icon: Workflow,
    visual: 'aicc',
  },
  {
    title: 'SevillaVet: presencia digital internacional',
    description:
      'Proyecto internacional para un hospital veterinario en Los Ángeles, con foco en estructura web, diseño visual, SEO y comunicación profesional.',
    outcome: 'Enfoque web serio, claro y adaptado a un entorno sanitario/veterinario.',
    stack: ['Diseño web', 'SEO', 'Comunicación', 'Internacional'],
    image: `${imageBase}sevillavet-hospital.jpg`,
    imageAlt: 'Recepción del hospital veterinario SevillaVet en Los Ángeles',
    logo: `${imageBase}sevillavet-logo.png`,
    logoAlt: 'Logotipo de SevillaVet',
    icon: Globe2,
    visual: 'sevillavet',
  },
  {
    title: 'Automatización de leads',
    description:
      'Flujo para detectar intención del lead, clasificar programas, elegir plantillas, registrar estados y automatizar respuestas comerciales.',
    outcome: 'Menos trabajo manual y una operación comercial más ordenada.',
    stack: ['n8n', 'Google Sheets', 'Apps Script', 'WhatsApp/YCloud'],
    image: `${imageBase}n8n.svg`,
    imageAlt: 'Logotipo de n8n',
    icon: DatabaseZap,
    visual: 'automation',
  },
  {
    title: 'Skills, prompts y asistentes IA',
    description:
      'Instrucciones avanzadas, prompts profesionales y Skills para Claude y otras IAs aplicadas a SEO, ventas y atención al cliente.',
    outcome: 'IA aplicada como herramienta de trabajo, no como decoración.',
    stack: ['Claude', 'ChatGPT', 'Prompt Engineering', 'SEO', 'Ventas'],
    image: `${imageBase}anthropic.svg`,
    imageAlt: 'Logotipo de Anthropic Claude',
    logo: `${imageBase}openai.svg`,
    logoAlt: 'Logotipo de OpenAI',
    icon: BrainCircuit,
    visual: 'ai',
  },
  {
    title: 'BonMenu',
    description:
      'Aplicación de dietas y comparación de alimentos disponibles en supermercados para ayudar al usuario a tomar mejores decisiones alimentarias.',
    outcome: 'Producto digital pensado para utilidad diaria, datos y experiencia de usuario.',
    stack: ['App web', 'Datos', 'UX', 'Nutrición'],
    image: `${imageBase}bonmenu-food.jpg`,
    imageAlt: 'Cesta de alimentos frescos para el proyecto BonMenu',
    icon: ChartNoAxesCombined,
    visual: 'bonmenu',
  },
];

export const education: EducationItem[] = [
  {
    title: 'Grado Superior en Desarrollo de Aplicaciones Multiplataforma DAM',
    center: 'MEDAC, Sevilla',
    period: 'Finalizado',
  },
  {
    title: 'Grado Superior en Desarrollo de Aplicaciones Web DAW',
    center: 'Prometeo The Power',
    period: 'Desde septiembre hasta actualidad',
  },
  {
    title: 'Máster en Full Stack Development',
    center: 'Formación especializada',
    period: 'En curso / finalizando',
  },
  {
    title: 'Máster en Data Analysis',
    center: 'Formación especializada',
    period: 'En curso / finalizando',
  },
  {
    title: 'Próxima formación prevista',
    center: 'MBA y Máster en Digital Business / Big Data',
    period: 'Planificado',
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: 'Desarrollo Web',
    icon: Code2,
    logos: [
      { name: 'HTML5', src: `${imageBase}html5.svg` },
      { name: 'CSS3', src: `${imageBase}css3.svg` },
      { name: 'TypeScript', src: `${imageBase}typescript.svg` },
      { name: 'Laravel', src: `${imageBase}laravel.svg` },
    ],
    skills: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'PHP', 'Laravel', 'Python'],
  },
  {
    title: 'SEO & GEO',
    icon: Search,
    logos: [
      { name: 'Google Search Console', src: `${imageBase}google-search-console.svg` },
      { name: 'Google Ads', src: `${imageBase}google-ads.svg` },
      { name: 'WordPress', src: `${imageBase}wordpress.svg` },
    ],
    skills: ['SEO on-page', 'SEO técnico', 'GEO', 'Rank Math', 'SERanking', 'Surfer', 'Search Atlas'],
  },
  {
    title: 'Automatización',
    icon: Workflow,
    logos: [
      { name: 'n8n', src: `${imageBase}n8n.svg` },
      { name: 'Google Sheets', src: `${imageBase}google-sheets.svg` },
      { name: 'Google Apps Script', src: `${imageBase}google-apps-script.svg` },
      { name: 'WhatsApp', src: `${imageBase}whatsapp.svg` },
    ],
    skills: ['n8n', 'Google Apps Script', 'CRM', 'Google Sheets', 'WhatsApp/YCloud', 'Web Scraping'],
  },
  {
    title: 'IA aplicada',
    icon: Bot,
    logos: [
      { name: 'Claude', src: `${imageBase}anthropic.svg` },
      { name: 'OpenAI', src: `${imageBase}openai.svg` },
    ],
    skills: ['IA aplicada', 'Prompt Engineering', 'Skills para Claude', 'ChatGPT'],
  },
  {
    title: 'Analítica y Ads',
    icon: LineChart,
    logos: [
      { name: 'Google Search Console', src: `${imageBase}google-search-console.svg` },
      { name: 'Google Tag Manager', src: `${imageBase}google-tag-manager.svg` },
      { name: 'Google Ads', src: `${imageBase}google-ads.svg` },
    ],
    skills: ['Google Search Console', 'Google Tag Manager', 'Google Ads', 'Captación de leads'],
  },
  {
    title: 'Infraestructura',
    icon: ServerCog,
    logos: [
      { name: 'GitHub', src: `${imageBase}github.svg` },
      { name: 'Ubuntu', src: `${imageBase}ubuntu.svg` },
      { name: 'DigitalOcean', src: `${imageBase}digitalocean.svg` },
      { name: 'MySQL', src: `${imageBase}mysql.svg` },
    ],
    skills: ['MySQL', 'NoSQL', 'VPS', 'Ubuntu', 'DigitalOcean', 'Plesk', 'Git/GitHub'],
  },
  {
    title: 'WordPress & eCommerce',
    icon: ShoppingCart,
    logos: [
      { name: 'WordPress', src: `${imageBase}wordpress.svg` },
      { name: 'WooCommerce', src: `${imageBase}woocommerce.svg` },
    ],
    skills: ['WordPress', 'WooCommerce', 'Gestión de sitios', 'Arquitectura web'],
  },
];

export const capabilityPillars = [
  {
    title: 'Webs que posicionan',
    text: 'Arquitectura, contenido, SEO técnico y medición para crecer con criterio.',
    icon: Search,
  },
  {
    title: 'Procesos conectados',
    text: 'Automatizaciones que unen formularios, CRM, hojas de cálculo y mensajería.',
    icon: Workflow,
  },
  {
    title: 'Marketing medible',
    text: 'Search Console, Tag Manager, Google Ads y lectura de datos para decidir mejor.',
    icon: Megaphone,
  },
];

export const contactLinks = {
  email: 'angelhd028@gmail.com',
  phone: '+34 675 719 398',
  location: 'Sevilla, España',
  cv: '/CV_Angel_Muniz_Pedraza.pdf',
};

export const navItems = [
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Logros', href: '#logros' },
  { label: 'Experiencia', href: '#experiencia' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Formación', href: '#formacion' },
  { label: 'Skills', href: '#skills' },
  { label: 'GEO', href: '#geo-ai' },
  { label: 'Contacto', href: '#contacto' },
];

export const profileSummary =
  'Soy Ángel Muñiz Pedraza, perfil técnico especializado en WordPress, SEO técnico, GEO, automatización e IA aplicada. Mi trabajo se centra en crear sistemas digitales que no solo se ven bien, sino que captan tráfico, generan leads y reducen trabajo manual.';

export const aboutHighlights = [
  'Combino desarrollo web, marketing digital, automatización y análisis para construir soluciones completas.',
  'Trabajo con WordPress, WooCommerce, Search Console, Tag Manager, Google Ads, CRM y sistemas de leads.',
  'Uso IA aplicada de forma práctica: prompts, Skills, asistentes y flujos que mejoran procesos reales.',
];

export const geoAiPoints = [
  'Estructura técnica clara para que buscadores y asistentes entiendan mejor el proyecto.',
  'Trabajo de entidades, intención de búsqueda, contenido semántico y autoridad.',
  'Optimización orientada a Google y también a nuevos entornos de búsqueda generativa.',
  'IA aplicada como una capa útil dentro de la estrategia, no como estética superficial.',
];

export const ctaLabels = {
  contact: 'Contactar',
  projects: 'Ver proyectos',
  cv: 'Descargar CV',
};

export const BadgeIcon = BadgeCheck;
