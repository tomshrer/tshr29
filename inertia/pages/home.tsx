import { Head } from '@inertiajs/react'
import Services from '~/sections/Services'
import FaqGrid from '~/sections/Faqs'

export default function Home() {
  return (
    <>
      <Head>
        <title>Création de sites internet à Sarreguemines | tshr29 Studio</title>
        <meta
          name="description"
          content="Agence web à Sarreguemines spécialisée dans la création de sites internet, design UX/UI et communication digitale. Donnez vie à vos projets avec tshr29 Studio."
        />
      </Head>

      <div className="relative isolate px-6 pb-14 pt-32 lg:px-8 h-screen flex items-center bg-black">
        <div className="text-start max-w-7xl mx-auto">
          <h1 className="text-6xl text-balance font-light text-white sm:text-8xl">
            Agence digitale - sites web, design & communication.
          </h1>
          <p className="mt-8 text-lg font-light text-pretty text-gray-500 sm:text-xl/8">
            Nous aidons les entreprises à se démarquer en ligne grâce à des solutions web sur
            mesure, un design innovant et des stratégies de communication efficaces.
          </p>
          <div className="mt-10 flex items-center justify-start gap-x-6">
            <a
              href="#"
              className="rounded-xs bg-neutral-800 px-5 py-2.5 font-medium text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Lancer mon projet
            </a>
          </div>
        </div>
      </div>

      <Services />

      {/*<Testimonials />*/}
      <FaqGrid />
      {/*<Cta />*/}
    </>
  )
}
