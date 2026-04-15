export function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div>
            <span className="text-sm tracking-[0.2em] font-light">LIVENGY</span>
            <p className="text-muted-foreground text-xs mt-2 leading-relaxed">
              Precision longevity protocols personalized to your biology. Reverse aging. Look good. Feel extraordinary.
            </p>
          </div>
          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase text-muted-foreground mb-3">Contact</h4>
            <a
              href="mailto:contact@livengy.com"
              className="text-sm text-foreground/80 hover:text-primary transition-colors"
            >
              contact@livengy.com
            </a>
          </div>
          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase text-muted-foreground mb-3">Headquarters</h4>
            <address className="text-sm text-foreground/70 not-italic leading-relaxed">
              LIVENGY LLC<br />
              6300 Riverside Plaza Ln NW<br />
              Ste 100 Unit 1110<br />
              Albuquerque, NM 87120
            </address>
          </div>
        </div>
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-muted-foreground text-xs">
            &copy; 2025 LIVENGY LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
