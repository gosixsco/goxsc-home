export default function Hero() {
    return (
        <section className="relative overflow-hidden">
            {/* Background Grid */}
            <div
                className="absolute inset-0 opacity-[0.06]"
                style={{
                    backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,.08) 1px, transparent 1px)
          `,
                    backgroundSize: "40px 40px",
                }}
            />

            {/* Orange Glow */}
            <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/15 blur-[140px]" />

            <div className="relative mx-auto flex min-h-[calc(100vh-64px)] max-w-6xl flex-col items-center justify-center px-6 text-center">

                {/* Badge */}
                <span className="rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1 text-sm font-medium text-orange-300">
                    Open Source • Developer First
                </span>

                {/* Title */}
                <h1 className="mt-8 text-5xl font-extrabold tracking-tight text-white md:text-7xl">
                    Build Better
                    <br />
                    Developer Tools
                </h1>

                {/* Description */}
                <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
                    GOXSC builds fast, lightweight, and developer-focused web
                    services. Start with <span className="font-medium text-white">GOXMail</span>,
                    our temporary email platform.
                </p>

                {/* Buttons */}
                <div className="mt-10 flex flex-wrap justify-center gap-4">
                    <a
                        href="https://mail.goxsc.xyz"
                        className="rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white shadow-lg shadow-orange-500/20 transition duration-200 hover:-translate-y-0.5 hover:bg-orange-600"
                    >
                        Open goxmail
                    </a>

                    <a
                        href="https://github.com/gosixsco"
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-xl border border-zinc-700 px-6 py-3 font-semibold text-zinc-300 transition duration-200 hover:border-orange-500 hover:text-white"
                    >
                        GitHub
                    </a>
                </div>

            </div>
        </section>
    );
}