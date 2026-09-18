function Contact() {
  return (
    <section
      id="contact"
      className="
        min-h-svh w-full flex flex-col
        pt-[70px]
      "
    >
      <div
        className="
        flex-1
        flex items-center
        px-0 md:px-6 mb-10
      "
      >
        <div
          className="
          w-full max-w-[1400px] mx-auto
          px-5 md:px-8 xl:px-16
          grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr]
          items-center gap-10 lg:gap-16 xl:gap-24
        "
        >
          <div className="min-w-0 text-left pt-[5vh] lg:pt-0">
            <div
              aria-hidden="true"
              className="
            w-full max-w-[520px] lg:max-w-[680px]
            mx-auto lg:ml-auto lg:mr-0
            aspect-[4/5] lg:aspect-[1.08/1]
            bg-[#af833d80]
            overflow-hidden
            grid place-items-start justify-center
          "
            >
              <p>img</p>
            </div>
            <div className="mt-5">
              <h2 className="mb-1 text-3xl font-[700]">Let’s work together</h2>
              <p className="text-xs font-mono">
                Have an opportunity or project in mind? Send a quick message. I
                usually respond within 24 hours.
              </p>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="
            w-full max-w-[520px] lg:max-w-[680px]
            mx-auto lg:ml-auto lg:mr-0
            aspect-[4/5] lg:aspect-[1.08/1]
            bg-[#af833d80] content-center
          "
          >
            <h2 className="text-center text-4xl font-[600] m-5">
              Send Message
            </h2>
            <form
              action="https://formspree.io/f/xjykkjqa"
              method="POST"
              className="flex flex-col items-center"
            >
              <input
                type="email"
                name="email"
                placeholder="Your email"
                required
                className="font-mono text-sm w-[90%] m-5 p-3 rounded-md bg-[#202020] border border-white/40 transition-all duration-100 hover:border-white/70"
              />

              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                className="font-mono text-sm w-[90%] m-5 my-0 p-3 rounded-md bg-[#202020] border border-white/40 transition-all duration-100 hover:border-white/70"
              />

              <textarea
                name="message"
                placeholder="Your message"
                required
                className="font-mono text-sm w-[90%] m-5 p-3 rounded-t-md bg-[#202020] border border-white/40 transition-all duration-100 hover:border-white/70"
              />

              <button
                type="submit"
                className="mb-5 w-40 p-4 text-lg text-white/80 rounded-lg bg-[#161616] border border-white/40 transition-all duration-100 hover:text-white hover:border-white/80 hover:w-41"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
      <footer className="h-[70px] shrink-0 border-t border-white/10">
        <div className="flex justify-center">
          <a
            className="m-3 mb-1 w-7"
            href="https://www.facebook.com/patryk.kotula.73/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/facebook.svg" />
          </a>
          <a
            className="m-3 mb-1 w-7"
            href="https://github.com/meKOTI"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/github.svg" />
          </a>
          <a
            className="m-3 mb-1 w-7"
            href="https://www.linkedin.com/in/patryk-kotula-a0b32b309/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/linkedin.svg" />
          </a>
        </div>
        <p className="text-center font-mono text-xs">
          © 2026 Patryk Kotula • All rights reserved
        </p>
      </footer>
    </section>
  );
}

export default Contact;
