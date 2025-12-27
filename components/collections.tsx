import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Collections() {
  const collections = [
    {
      title: "Spring/Summer 2025",
      description: "가볍고 우아한 실루엣",
      image: "/spring-summer-fashion-collection.jpg",
    },
    {
      title: "Fall/Winter 2025",
      description: "따뜻함과 세련됨의 조화",
      image: "/fall-winter-fashion-collection.jpg",
    },
    {
      title: "Signature Collection",
      description: "시대를 초월한 클래식",
      image: "/timeless-classic-fashion.jpg",
    },
  ]

  return (
    <section id="collections" className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-20">
          <div className="text-sm tracking-[0.2em] text-muted-foreground mb-6">COLLECTIONS</div>
          <h2 className="font-serif font-light text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">시즌 컬렉션</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            각 시즌마다 새롭게 선보이는 Atelier의 컬렉션은 현대인의 라이프스타일에
            <br className="hidden md:block" />
            어울리는 독창적인 디자인과 실용성을 갖추고 있습니다.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {collections.map((collection, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="aspect-[3/4] bg-muted rounded-sm overflow-hidden mb-6 relative">
                <Image
                  src={collection.image}
                  alt={collection.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-serif font-light mb-2 text-foreground group-hover:text-accent transition-colors">
                {collection.title}
              </h3>
              <p className="text-sm text-muted-foreground">{collection.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 bg-transparent"
          >
            전체 컬렉션 보기
          </Button>
        </div>
      </div>
    </section>
  )
}
