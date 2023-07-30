import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-12">
      <div className="w-full max-w-5xl items-center justify-between text-sm lg:flex">
        <div id="by-tapped" className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-white rounded-lg lg:static lg:h-auto lg:w-auto">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://tapped.ai"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/tapped_reverse.svg"
              alt="Tapped AI Logo"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="flex flex-col place-items-center md:pt-24 md:pr-24 md:pl-24 before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
        <h1
          className="text-5xl font-bold text-center text-white lg:text-8xl"
        >Welcome to the first ever <span className="underline decoration-pink-500/30">
          AI record label</span></h1>
        <div className="pt-2 pb-2"></div>
        <h2
          className="text-2xl font-thin text-center text-white lg:text-4xl"
        >let&apos;s destroy traditional record labels together</h2>
        <a
          id="apply-here"
          className="px-4 py-2 mt-8 text-lg font-bold rounded-lg hover:scale-105 transform transition-all duration-200 ease-in-out shadow-lg"
          href="https://d4wmuljalg3.typeform.com/to/FGWV5B6D"
          target="_blank"
          rel="noopener noreferrer"
        >Apply Here</a>
      </div>
    </main>
  )
}
