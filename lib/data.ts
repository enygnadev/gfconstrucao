import { Award, Users, Clock } from "lucide-react"

export const featuredServices = [
  {
    title: "Construção Residencial",
    subtitle: "Casas e Apartamentos",
    description:
      "Construção completa de residências, desde fundação até acabamento, com foco em qualidade, conforto e durabilidade.",
    image: "/placeholder.svg?height=400&width=600&text=Residential+Construction",
    features: [
      "Projetos arquitetônicos personalizados",
      "Construção com materiais de primeira qualidade",
      "Acabamentos modernos e funcionais",
      "Acompanhamento técnico especializado",
    ],
  },
  {
    title: "Construção Comercial",
    subtitle: "Escritórios e Lojas",
    description:
      "Desenvolvimento de espaços comerciais funcionais e atraentes, projetados para maximizar produtividade e experiência do cliente.",
    image: "/placeholder.svg?height=400&width=600&text=Commercial+Construction",
    features: [
      "Layouts otimizados para negócios",
      "Sistemas elétricos e hidráulicos avançados",
      "Acabamentos corporativos elegantes",
      "Prazos de entrega rigorosamente cumpridos",
    ],
  },
  {
    title: "Reformas e Renovações",
    subtitle: "Modernização de Espaços",
    description:
      "Transformação completa de ambientes existentes, renovando estruturas e criando espaços modernos e funcionais.",
    image: "/placeholder.svg?height=400&width=600&text=Renovation+Projects",
    features: [
      "Avaliação estrutural completa",
      "Modernização de instalações",
      "Reformas sem interrupção total",
      "Valorização do imóvel garantida",
    ],
  },
]

export const portfolioHighlights = [
  {
    title: "Residência Moderna Mikocheni",
    description: "Casa de luxo com 4 quartos e design contemporâneo",
    image: "/placeholder.svg?height=400&width=600&text=Modern+House+Mikocheni",
    category: "Residencial",
    year: "2024",
  },
  {
    title: "Centro Comercial Masaki",
    description: "Complexo comercial de 3 andares com 20 lojas",
    image: "/placeholder.svg?height=400&width=600&text=Commercial+Center+Masaki",
    category: "Comercial",
    year: "2023",
  },
  {
    title: "Renovação Escritório Upanga",
    description: "Modernização completa de escritório corporativo",
    image: "/placeholder.svg?height=400&width=600&text=Office+Renovation+Upanga",
    category: "Renovação",
    year: "2024",
  },
]

export const testimonials = [
  {
    quote:
      "A Zion Construtora transformou nossa visão em realidade. A qualidade da construção e atenção aos detalhes superaram nossas expectativas.",
    author: "Maria Santos",
    position: "Proprietária",
    company: "Residência Mikocheni",
    rating: 5,
  },
  {
    quote:
      "Profissionalismo excepcional do início ao fim. Entregaram nosso centro comercial no prazo e dentro do orçamento.",
    author: "João Mwalimu",
    position: "Diretor",
    company: "Masaki Shopping Center",
    rating: 5,
  },
  {
    quote:
      "A renovação do nosso escritório foi impecável. Equipe altamente qualificada e resultados de primeira qualidade.",
    author: "Ana Kimaro",
    position: "Gerente Geral",
    company: "TechCorp Tanzania",
    rating: 5,
  },
]

export const whyChooseUs = [
  {
    icon: Award,
    title: "Experiência Comprovada",
    description:
      "Mais de 8 anos de experiência em construção civil, com centenas de projetos concluídos com sucesso em toda a Tanzânia.",
    color: "text-blue-600",
  },
  {
    icon: Users,
    title: "Equipe Especializada",
    description:
      "Profissionais qualificados e certificados, incluindo engenheiros, arquitetos e mestres de obra experientes.",
    color: "text-green-600",
  },
  {
    icon: Clock,
    title: "Prazos Garantidos",
    description:
      "Compromisso rigoroso com cronogramas, utilizando metodologias eficientes de gestão de projetos para entregas pontuais.",
    color: "text-orange-600",
  },
]
