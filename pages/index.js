import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title> ClothWear </title>
        <meta
          name="description"
          content="Harry Potter - Order Online Potter Accessories"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <img
          style={{ width: "100%", height: "100vh", objectFit: "cover" }}
          src="/934.jpg"
          alt="home"
        />
      </div>
      <div>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
                Harry Potter
              </h2>
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                Best Harry Potter Blogs and Websites
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                Choose from one of the most popular harry potter blogs.Subscribe
                to your favorite harry potter blogs for free.
              </p>
            </div>
            <div className="flex flex-wrap">
              <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                  MuggleNet
                </h2>
                <p className="leading-relaxed text-base mb-4">
                  MuggleNet is a Harry Potter fansite that has been delivering
                  news, editorials, interviews, event reports, and information
                  on the Wizarding World since 1999.
                </p>
                <a className="text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"> </path>
                  </svg>
                </a>
              </div>
              <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                  Hogwarts Professor
                </h2>
                <p className="leading-relaxed text-base mb-4">
                  Thoughts for the Serious Reader of Harry Potter
                </p>
                <a className="text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"> </path>
                  </svg>
                </a>
              </div>
              <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                  PotterCast: The Harry Potter Podcast(since 2005)
                </h2>
                <p className="leading-relaxed text-base mb-4">
                  Join PotterCast in a continuing adventure through J.K.Rowling
                  's Wizarding World. For eleven years PotterCast has remained
                  your trusted source for discussion, celebration, and
                  interviews with creators and actors from the Harry Potter
                  Universe.
                </p>
                <a className="text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"> </path>
                  </svg>
                </a>
              </div>
              <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                  The - Leaky - Cauldron.org
                </h2>
                <p className="leading-relaxed text-base mb-4">
                  Harry Potter News, Discussion, Fandom
                </p>
                <a className="text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"> </path>
                  </svg>
                </a>
              </div>
            </div>
            <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Button
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
