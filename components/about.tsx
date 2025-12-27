import Image from "next/image"

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-sm tracking-[0.2em] text-muted-foreground mb-6">ABOUT US</div>
            <h2 className="font-serif font-light text-4xl md:text-5xl lg:text-6xl leading-tight mb-8 text-foreground">
              디테일에서
              <br />
              완성되는 아름다움
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Atelier는 2015년 서울에서 시작된 컨템포러리 패션 브랜드입니다. 우리는 단순히 옷을 만드는 것이 아니라,
              착용자의 삶에 영감을 주는 작품을 창조합니다.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              최고급 원단과 숙련된 장인의 손길이 만나 탄생하는 각 제품은 현대적 감각과 전통적 가치를 완벽하게
              조화시킵니다.
            </p>
          </div>
          <div className="relative aspect-[3/4] bg-muted rounded-sm overflow-hidden">
            <Image
              src="/elegant-fashion-atelier-workspace.jpg"
              alt="Atelier Workspace"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
