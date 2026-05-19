                onMouseLeave={e => (e.currentTarget.style.opacity="1")}>&#x1F4AC;</a>
              <a href="tel:+49000000000"
                style={{ width:36, height:36, borderRadius:10, background:"rgba(176,137,104,.15)", border:"1px solid rgba(176,137,104,.3)", display:"flex", alignItems:"center", justifyContent:"center", textDecoration:"none", fontSize:16, transition:"opacity .2s" }}
                onMouseEnter={e => (e.currentTarget.style.opacity=".7")}
                onMouseLeave={e => (e.currentTarget.style.opacity="1")}>&#x1F4DE;</a>
            </div>
          </div>
          <div>
            <div style={{ fontSize:10, fontWeight:700, color:GOLD, textTransform:"uppercase", letterSpacing:"0.15em", marginBottom:16 }}>Navigation</div>
            {navLinks.map(l => (
              <button key={l.id} type="button" onClick={() => scrollTo(l.id)}
                style={{ display:"block", background:"none", border:"none", color:"rgba(255,255,255,.35)", fontSize:13, marginBottom:10, cursor:"pointer", fontFamily:"inherit", padding:0, transition:"color .2s" }}
                onMouseEnter={e => (e.currentTarget.style.color="#fff")}
                onMouseLeave={e => (e.currentTarget.style.color="rgba(255,255,255,.35)")}>
                {l.label}
              </button>
            ))}
          </div>
          <div>
            <div style={{ fontSize:10, fontWeight:700, color:GOLD, textTransform:"uppercase", letterSpacing:"0.15em", marginBottom:16 }}>Kontakt</div>
            {["info@daheimumzug.de","+49 000 000000","Baden-W&uuml;rttemberg"].map((c,i) => (
              <div key={i} style={{ color:"rgba(255,255,255,.35)", fontSize:13, marginBottom:10 }}>{c}</div>
            ))}
          </div>
        </div>
        <div className="footer-bottom" style={{ maxWidth:1100, margin:"0 auto", paddingTop:22, borderTop:"1px solid rgba(255,255,255,.05)", display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:10 }}>
          <span style={{ color:"rgba(255,255,255,.16)", fontSize:11 }}>Â© {new Date().getFullYear()} DaheimUmzug. Alle Rechte vorbehalten.</span>
          <div style={{ display:"flex", gap:18 }}>
            {["Impressum","Datenschutz","AGB"].map(l => (
              <a key={l} href="#" style={{ color:"rgba(255,255,255,.16)", fontSize:11, textDecoration:"none", transition:"color .2s" }}
                onMouseEnter={e => (e.currentTarget.style.color=GOLD)}
                onMouseLeave={e => (e.currentTarget.style.color="rgba(255,255,255,.16)")}>
                {l}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}