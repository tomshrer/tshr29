import { Head, Link, usePage } from '@inertiajs/react'

export default function NotFound() {
  const { url } = usePage()

  return (
    <>
      <Head>
        <title>404 - Page non trouvée - Tshr29</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta
          name="description"
          content="La page que vous recherchez n'existe pas ou a été déplacée. Retournez à l'accueil ou contactez-nous."
        />
      </Head>
      <div className="grid min-h-[calc(100vh-81px)] place-items-center px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <h1 className="font-medium mb-8 text-8xl sm:text-9xl">404</h1>
          <p className="font-light leading-tight mb-16 px-8 sm:px-0 sm:text-4xl text-xl">
            Page not found: {url}
          </p>
          <div className="flex items-center justify-center w-full">
            <Link
              href="/"
              className="cursor-pointer border-2 border-stone-800 px-4 py-2 sm:px-6 sm:py-3 sm:text-xl"
            >
              Go back home
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
