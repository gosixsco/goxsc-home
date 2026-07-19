export default function Footer() {
    return (
        <footer className="border-t border-white/10">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 text-sm text-zinc-500">
                <span>© 2026 GOXSC</span>

                <a
                    href="https://github.com/gosixsco"
                    target="_blank"
                    rel="noreferrer"
                    className="transition hover:text-orange-400"
                >
                    GitHub
                </a>
            </div>
        </footer>
    );
}