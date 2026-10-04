import { Link, useRouterState } from "@tanstack/react-router";
import {
  ArrowDownToLine,
  ArrowRight,
  AtSign,
  Instagram,
  Mail,
  Menu,
  Moon,
  Send,
  Sun,
  X,
  Youtube,
} from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { cv, profile, socials } from "@/content/portfolio";

const nav = [
  ["Home", "/"],
  ["About", "/about"],
  ["Work", "/work"],
  ["Services", "/services"],
  ["Beauty", "/beauty"],
  ["Contact", "/contact"],
] as const;

export function SiteShell({ children }: { children: ReactNode }) {
  const path = useRouterState({ select: (state) => state.location.pathname });
  const [menuOpen, setMenuOpen] = useState(false);
  const [cvOpen, setCvOpen] = useState(false);
  const [socialOpen, setSocialOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem("debbie-theme");
    const next =
      stored === "dark" || (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches);
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
  }, []);
  useEffect(() => {
    setMenuOpen(false);
  }, [path]);
  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setCvOpen(false);
        setSocialOpen(false);
      }
    };
    const openCv = () => setCvOpen(true);
    window.addEventListener("keydown", close);
    window.addEventListener("open-debbie-cv", openCv);
    return () => {
      window.removeEventListener("keydown", close);
      window.removeEventListener("open-debbie-cv", openCv);
    };
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    window.localStorage.setItem("debbie-theme", next ? "dark" : "light");
  };

  return (
    <div className="min-h-screen overflow-x-clip bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-40 px-3 pt-3 sm:px-5 sm:pt-4">
        <div className="mx-auto grid h-16 max-w-[1480px] grid-cols-[minmax(0,1fr)_auto] items-center rounded-full border border-border/70 bg-background/80 px-3 shadow-soft backdrop-blur-xl sm:px-5 lg:grid-cols-[auto_1fr_auto]">
          <Link
            to="/"
            className="flex min-w-0 items-center gap-3"
            aria-label="Debbie Taprandich home"
          >
            <span className="grid size-9 shrink-0 place-items-center rounded-full bg-primary font-display text-sm text-primary-foreground">
              DT
            </span>
            <span className="truncate font-display text-lg sm:text-xl">Debbie Taprandich</span>
          </Link>
          <nav
            className="hidden items-center justify-center gap-1 lg:flex"
            aria-label="Primary navigation"
          >
            {nav.map(([label, to]) => (
              <Link
                key={to}
                to={to}
                activeOptions={{ exact: to === "/" }}
                className="rounded-full px-3 py-2 text-[11px] font-bold uppercase text-muted-foreground transition-colors hover:text-foreground data-[status=active]:bg-accent data-[status=active]:text-foreground"
              >
                {label}
              </Link>
            ))}
            <button
              onClick={() => setCvOpen(true)}
              className="rounded-full px-3 py-2 text-[11px] font-bold uppercase text-muted-foreground transition-colors hover:text-foreground"
            >
              CV
            </button>
          </nav>
          <div className="flex shrink-0 items-center gap-1">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label={dark ? "Use light theme" : "Use dark theme"}
            >
              {dark ? <Sun className="size-4" /> : <Moon className="size-4" />}
            </Button>
            <Button asChild className="hidden xl:inline-flex">
              <Link to="/contact">
                Work with me <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMenuOpen((value) => !value)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </Button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-30 bg-background px-6 pb-10 pt-28 lg:hidden">
          <nav className="grid gap-1" aria-label="Mobile navigation">
            {nav.map(([label, to], i) => (
              <Link key={to} to={to} className="border-b border-border py-3 font-display text-4xl">
                {String(i + 1).padStart(2, "0")} <span className="ml-3">{label}</span>
              </Link>
            ))}
            <button
              className="border-b border-border py-3 text-left font-display text-4xl"
              onClick={() => {
                setCvOpen(true);
                setMenuOpen(false);
              }}
            >
              07 <span className="ml-3">CV</span>
            </button>
          </nav>
        </div>
      )}

      <main>{children}</main>

      <footer className="border-t border-border bg-ink text-paper">
        <div className="page-shell py-14 sm:py-20">
          <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
            <div>
              <p className="font-display text-4xl sm:text-5xl">
                Debbie
                <br />
                Taprandich
              </p>
              <p className="mt-5 max-w-sm text-sm leading-6 text-paper/60">
                Social Media & Content Specialist · Beauty Industry Virtual Assistant · Digital
                Creator · Beauty Therapist
              </p>
            </div>
            <div>
              <p className="footer-label">Explore</p>
              <div className="mt-5 grid gap-3">
                {nav.slice(1).map(([label, to]) => (
                  <Link key={to} to={to} className="text-sm text-paper/70 hover:text-paper">
                    {label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <p className="footer-label">Connect</p>
              <p className="mt-5 text-sm text-paper/60">
                Professional email and verified social links will appear here once provided.
              </p>
              <Button asChild className="mt-5">
                <Link to="/contact">
                  Start a project <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="mt-14 flex flex-col gap-3 border-t border-paper/15 pt-5 text-xs text-paper/50 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Debbie Taprandich</p>
            <p>Nairobi · Available for remote collaborations</p>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-5 right-4 z-30 sm:right-6">
        {socialOpen && (
          <div className="absolute bottom-14 right-0 w-64 rounded-2xl border border-border bg-background p-3 shadow-deep">
            <p className="px-2 pb-2 text-[10px] font-bold uppercase text-muted-foreground">
              Find me where the content lives
            </p>
            {socials.map((social) => (
              <div
                key={social.name}
                className="flex items-center justify-between rounded-xl px-2 py-2 text-sm"
              >
                <span>{social.name}</span>
                <span className="text-xs text-muted-foreground">Link soon</span>
              </div>
            ))}
            <Link
              to="/contact"
              className="mt-2 flex items-center justify-between rounded-xl bg-primary px-3 py-3 text-xs font-bold uppercase text-primary-foreground"
            >
              Contact <ArrowRight className="size-4" />
            </Link>
          </div>
        )}
        <Button
          size="icon"
          onClick={() => setSocialOpen((value) => !value)}
          aria-label="Open contact and social options"
          aria-expanded={socialOpen}
        >
          {socialOpen ? <X className="size-5" /> : <AtSign className="size-5" />}
        </Button>
      </div>

      {cvOpen && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto bg-ink/75 p-3 backdrop-blur-sm sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label="Debbie Taprandich CV"
        >
          <div className="mx-auto my-4 max-w-5xl rounded-3xl bg-background shadow-deep sm:my-10">
            <div className="sticky top-0 z-10 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-t-3xl border-b border-border bg-background/90 px-5 py-4 backdrop-blur">
              <div className="min-w-0">
                <p className="truncate font-display text-2xl">Debbie Taprandich — CV</p>
                <p className="text-xs text-muted-foreground">Digital resume</p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setCvOpen(false)}
                aria-label="Close CV"
              >
                <X className="size-5" />
              </Button>
            </div>
            <div className="grid gap-10 p-6 sm:p-10 lg:grid-cols-[1.3fr_.7fr]">
              <div>
                <p className="cv-label">Profile</p>
                <p className="mt-4 text-lg leading-8">{cv.profile}</p>
                <p className="cv-label mt-10">Professional experience</p>
                <div className="mt-5 grid gap-6">
                  {cv.experience.map(([place, description]) => (
                    <div key={place} className="border-l-2 border-primary pl-4">
                      <h3 className="font-display text-xl">{place}</h3>
                      <p className="mt-1 text-sm leading-6 text-muted-foreground">{description}</p>
                    </div>
                  ))}
                </div>
              </div>
              <aside className="rounded-2xl bg-accent p-6">
                <p className="cv-label">Education</p>
                <p className="mt-3 font-display text-2xl">{cv.education}</p>
                <p className="cv-label mt-8">Skills</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {cv.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-border bg-background px-3 py-2 text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <p className="cv-label mt-8">Platforms</p>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  TikTok · Instagram · YouTube · Facebook
                </p>
              </aside>
            </div>
            <div className="flex flex-wrap gap-3 border-t border-border px-6 py-5 sm:px-10">
              <Button disabled={!profile.cvUrl} title="Add the real CV file to enable download">
                <ArrowDownToLine className="size-4" /> CV file coming soon
              </Button>
              <Button asChild variant="outline">
                <Link to="/contact" onClick={() => setCvOpen(false)}>
                  <Mail className="size-4" /> Contact me
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
