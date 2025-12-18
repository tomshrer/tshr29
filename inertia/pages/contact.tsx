import { Head, useForm } from '@inertiajs/react'
import toast from 'react-hot-toast'

export default function Contact() {
  const { data, setData, post, processing } = useForm({
    firstName: '',
    lastName: '',
    email: '',
    content: '',
  })

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    post('/contact', {
      onSuccess: () => {
        setData({ firstName: '', lastName: '', email: '', content: '' }),
          toast.success('Message envoyé avec succès !')
      },
    })
  }

  return (
    <>
      <Head>
        <title>Contactez tshr29 Studio à Sarreguemines | Agence Web</title>
        <meta
          name="description"
          content="Contactez tshr29 Studio, agence web à Sarreguemines. Pour toute demande de création de site internet, design UX/UI ou communication digitale, envoyez-nous un message."
        />
      </Head>
      <div className="min-h-[calc(100vh-81px)] px-6 py-12 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl sm:text-6xl">Ready to talk?</h2>
          <p className="mt-2 text-lg/8 font-thin text-stone-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
        </div>
        <form onSubmit={submit} className="mx-auto mt-16 max-w-xl sm:mt-20">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <input
                name="firstName"
                type="text"
                value={data.firstName}
                onChange={(e) => setData('firstName', e.target.value)}
                placeholder="Saisissez votre prénom"
                className="w-full border-0 appearance-none transition-colors rounded-md px-3 gap-2 py-3 text-sm bg-stone-900 text-stone-50 ring ring-inset focus:outline-none focus:ring-stone-800 disabled:cursor-not-allowed disabled:opacity-75 placeholder:text-stone-400 ring-stone-700 focus-visible:ring-2 focus-visible:ring-inset"
              />
            </div>

            <div>
              <input
                name="lastName"
                type="text"
                value={data.lastName}
                onChange={(e) => setData('lastName', e.target.value)}
                placeholder="Saisissez votre nom"
                className="w-full border-0 appearance-none transition-colors rounded-md px-3 gap-2 py-3 text-sm bg-stone-900 text-stone-50 ring ring-inset focus:outline-none focus:ring-stone-800 disabled:cursor-not-allowed disabled:opacity-75 placeholder:text-stone-400 ring-stone-700 focus-visible:ring-2 focus-visible:ring-inset"
              />
            </div>

            <div className="sm:col-span-2">
              <input
                name="email"
                type="text"
                value={data.email}
                onChange={(e) => setData('email', e.target.value)}
                placeholder="Saisissez votre adresse email"
                className="w-full border-0 appearance-none transition-colors rounded-md px-3 gap-2 py-3 text-sm bg-stone-900 text-stone-50 ring ring-inset focus:outline-none focus:ring-stone-800 disabled:cursor-not-allowed disabled:opacity-75 placeholder:text-stone-400 ring-stone-700 focus-visible:ring-2 focus-visible:ring-inset"
              />
            </div>

            <div className="sm:col-span-2">
              <textarea
                placeholder="Saisissez votre message"
                rows={5}
                value={data.content}
                onChange={(e) => setData('content', e.target.value)}
                className="w-full border-0 appearance-none transition-colors rounded-md px-3 gap-2 py-3 text-sm bg-stone-900 text-stone-50 ring ring-inset focus:outline-none focus:ring-stone-800 disabled:cursor-not-allowed disabled:opacity-75 placeholder:text-stone-400 ring-stone-700 focus-visible:ring-2 focus-visible:ring-inset"
              />
            </div>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              disabled={processing}
              className="rounded-xs w-full bg-neutral-800 px-5 py-2.5 font-medium text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {processing ? 'Envoi en cours...' : 'Send to us'}
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
