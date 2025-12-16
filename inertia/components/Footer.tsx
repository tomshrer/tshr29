export default function Footer() {
  return (
    <footer className="bg-stone-950 border-t border-t-stone-50/10 w-full px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-10 py-10 text-sm">
        <div className="col-span-3 sm:col-span-1">
          <h6 className="mb-7">Features</h6>
          <ul className="text-stone-400 flex flex-col gap-3">
            <li>
              <a
                href="#"
                className="hover:text-stone-50 hover:cursor-pointer transition-colors duration-400 ease-in-out"
              >
                Themes
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-stone-50 hover:cursor-pointer transition-colors duration-400 ease-in-out"
              >
                Spotify
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-stone-50 hover:cursor-pointer transition-colors duration-400 ease-in-out"
              >
                Apple Music
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
