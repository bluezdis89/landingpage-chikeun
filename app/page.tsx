import Image from "next/image"
import { ArrowUpRight, Check, ChevronRight, Leaf, PackageCheck, ShoppingBasket, Store, Truck, Users, Utensils } from "lucide-react"

const catalog = "https://chikeun.katalogku.online"
const whatsapp = "https://wa.me/6285220521882"
const products = [
  ["Ayam Broiler", "Fresh whole chicken", "/images/ayam-broiler.png"],
  ["Fillet Paha", "Fresh chicken thigh fillet", "/images/fillet-paha.png"],
  ["Ceker", "Fresh chicken feet", "/images/ceker.png"],
  ["Ati Ampela", "Chicken liver & gizzard", "/images/ati-ampela.png"],
]
const why = [[Leaf, "Produk Segar", "Produk ayam segar untuk kebutuhan rumah maupun usaha."], [ShoppingBasket, "Praktis", "Pesan produk dengan mudah melalui katalog online atau WhatsApp."], [PackageCheck, "Harga Transparan", "Lihat informasi produk dan harga melalui katalog CHIKEUN."], [Users, "Rumah & Bisnis", "Cocok untuk kebutuhan keluarga maupun usaha kuliner."]]

function Logo() {
  return (
    <a href="#home" className="logo" aria-label="CHIKEUN Homepage">
      <Image
        src="/images/logo-chikeun.png"
        alt="CHIKEUN - Ayam & Produk Ayam"
        width={200}
        height={67}
        priority
        className="logo-img"
      />
    </a>
  )
}
function WhatsAppIcon({ size = 15, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662a11.838 11.838 0 005.712 1.455h.005c6.558 0 11.894-5.335 11.897-11.893a11.82 11.82 0 00-3.486-8.412" />
    </svg>
  )
}
function Button({ href, children, dark = false }: { href: string; children: React.ReactNode; dark?: boolean }) { return <a href={href} className={`button ${dark ? "button-dark" : ""}`}>{children}<ArrowUpRight size={16} /></a> }

export default function Home() {
  return <main>
    <header className="nav-wrap"><nav className="nav container"><Logo /><div className="nav-links"><a href="#products">Products</a><a href="#why">Why CHIKEUN</a><a href="#business">For Business</a><a href="#order">How to Order</a></div><Button href={catalog}>Lihat Katalog</Button><details className="mobile-menu"><summary>Menu</summary><div><a href="#products">Products</a><a href="#why">Why CHIKEUN</a><a href="#business">For Business</a><a href="#order">How to Order</a></div></details></nav></header>
    <section id="home" className="hero container"><div className="hero-copy"><p className="eyebrow"><span className="dot" /> AYAM SEGAR & PRODUK AYAM</p><h1>Stok Ayam <em>CHIKEUN,</em><br /> Tinggal Pesan<span>.</span></h1><p className="lede">Ayam segar berkualitas untuk kebutuhan rumah, warung, katering, restoran, dan usaha kuliner.</p><div className="actions"><Button href={catalog}>Lihat Produk & Harga</Button><a className="text-link" href={whatsapp}>Pesan via WhatsApp <ChevronRight size={17} /></a></div><div className="trust"><span><Check size={15} /> Fresh</span><span><Check size={15} /> Praktis</span><span><Check size={15} /> Terpercaya</span></div></div><div className="hero-visual"><div className="hero-image"><Image src="/images/hero-chicken.png" alt="Fresh whole chicken from CHIKEUN" fill priority sizes="(max-width: 800px) 100vw, 50vw" /></div><span className="quality-badge">FRESH<br /><b>& QUALITY</b></span><span className="stock-badge">STOK<br /><b>HARI INI</b></span><span className="scribble">fresh every day</span></div></section>
    <section id="products" className="section container"><div className="section-head"><div><p className="eyebrow">PILIHAN HARI INI</p><h2>Produk <em>CHIKEUN</em></h2></div><p className="scribble-note">Dari dapur rumah hingga operasional usaha,<br className="desktop" /> <span>pilih ayam segar sesuai kebutuhanmu.</span></p></div><div className="product-grid">{products.map(([name, desc, image]) => <article className="product-card" key={name}><div className="product-image"><Image src={image} alt={name} fill sizes="(max-width: 700px) 45vw, 25vw" /></div><div className="product-info"><h3>{name}</h3><p>{desc}</p><a href={catalog}>Lihat Detail <ArrowUpRight size={15} /></a></div></article>)}</div><div className="center"><Button href={catalog} dark>Lihat Semua Produk</Button></div></section>
    <section id="why" className="why section"><div className="container"><div className="section-head"><div><p className="eyebrow">KENAPA KAMI</p><h2>Alasan pilih <em>CHIKEUN?</em></h2></div><p className="scribble-note">Kami menjaga hal-hal penting tetap<br className="desktop" /> <span>sederhana untuk kamu.</span></p></div><div className="why-grid">{why.map(([Icon, title, text]) => <article key={title as string}><div className="icon-box"><Icon size={22} /></div><h3>{title as string}</h3><p>{text as string}</p></article>)}</div></div></section>
    <section id="business" className="business section container"><div className="business-image"><Image src="/images/fillet-paha.png" alt="Fresh chicken supply for food businesses" fill sizes="(max-width: 800px) 100vw, 45vw" /></div><div className="business-copy"><p className="eyebrow">UNTUK USAHA</p><h2>Butuh Ayam<br /><em>untuk Usaha?</em></h2><p>CHIKEUN siap membantu kebutuhan ayam untuk warung makan, katering, restoran, UMKM kuliner, dan bisnis makanan lainnya.</p><div className="chips"><span><Store size={16} /> Warung Makan</span><span><Utensils size={16} /> Katering</span><span><Store size={16} /> Restoran</span><span><Users size={16} /> UMKM Kuliner</span></div><Button href={whatsapp}>Konsultasi via WhatsApp</Button><small>Diskusikan kebutuhan jumlah, jenis produk, dan jadwal pengadaan ayam bersama CHIKEUN.</small></div></section>
    <section id="order" className="order section"><div className="container"><div className="center"><p className="eyebrow">CARA PESAN</p><h2>Pesan Ayam Jadi <em>Lebih Mudah</em></h2></div><div className="steps">{[["01", "Lihat Katalog", "Jelajahi produk CHIKEUN melalui katalog online."], ["02", "Pilih Produk", "Pilih jenis dan jumlah produk sesuai kebutuhan."], ["03", "Pesan", "Hubungi CHIKEUN melalui WhatsApp untuk konfirmasi pesanan."]].map(([num, title, text]) => <div className="step" key={num}><b>{num}</b><div><h3>{title}</h3><p>{text}</p></div></div>)}</div><div className="center"><Button href={catalog} dark>Mulai Belanja</Button></div></div></section>
    <section className="final container"><div><p className="eyebrow">SIAP UNTUK HARI INI?</p><h2>Siap Stok Ayam<br /><em>di Rumah?</em></h2><p>Lihat pilihan produk CHIKEUN dan pesan sesuai kebutuhan kamu.</p></div><div className="final-actions"><Button href={catalog}>Lihat Produk & Harga</Button><a className="text-link light" href={whatsapp}>Chat WhatsApp <ChevronRight size={17} /></a></div><div className="final-leaf"><Leaf size={120} strokeWidth={1} /></div></section>
    <footer className="footer"><div className="container footer-grid"><div><Logo /><p>Ayam segar dan produk ayam<br />untuk kebutuhan rumah dan usaha.</p></div><div><b>Explore</b><a href="#products">Products</a><a href="#why">Why CHIKEUN</a><a href="#business">For Business</a></div><div><b>Contact</b><a href={whatsapp} className="footer-wa-link"><WhatsAppIcon size={14} /> 0852 2052 1882</a><a href={catalog}>chikeun.katalogku.online</a></div></div><div className="container footer-bottom"><span>© 2026 CHIKEUN. All rights reserved.</span><span>Made fresh, made simple.</span></div></footer>
    <div className="mobile-cta"><a href={catalog}>Lihat Katalog</a><a href={whatsapp}>WhatsApp</a></div>
  </main>
}
