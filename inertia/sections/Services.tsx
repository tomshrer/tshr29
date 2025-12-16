import { useRef } from 'react'

const sections = [
  {
    title: 'Développement Web',
    description:
      'Conception et développement de sites web vitrines, e-commerce, et d’applications sur mesure.',
  },
  {
    title: 'WordPress',
    description: 'Création d’expériences utilisateur fluides, esthétiques et intuitives.',
  },
  {
    title: 'SEO Optimization',
    description: 'Développement d’une image de marque forte et cohérente sur tous les supports.',
  },
  {
    title: 'Hébergement',
    description:
      'Optimisation technique et stratégique pour une meilleure visibilité sur les moteurs de recherche.',
  },
]

export default function Services() {
  return (
    <div className="bg-gradient-to-t from-stone-950 to-stone-900 w-full">
      <div className="max-w-6xl mx-auto z-10 relative py-20">
        <section className="flex flex-col space-y-7 sm:space-y-14">
          <h2 className="text-2xl text-center sm:text-left sm:text-4xl">
            Découvrez nos services pour développer votre présence digitale
          </h2>
          <div className="grid gap-7 text-sm sm:grid-cols-4 sm:gap-14">
            {sections.map((section, index) => (
              <div key={index} className="sm:space-y-14">
                <h3 className="text-xl">{section.title}</h3>
                <p className="text-stone-400">{section.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
