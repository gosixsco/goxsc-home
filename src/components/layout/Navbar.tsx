export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/70 backdrop-blur">
            <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
                <a
                    href="/"
                    className="flex items-center gap-3 transition-opacity hover:opacity-90"
                >
                    <img
                        src="/logo.png"
                        alt="GOXSC"
                        className="h-9 w-9 select-none"
                    />

                    <span className="text-lg font-bold tracking-tight text-white">
                        GOXSC
                    </span>
                </a>

                <a
                    href="https://github.com/gosixsco"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-medium text-zinc-400 transition hover:text-white"
                >
                    GitHub
                </a>
            </div>
        </header>
    );
}