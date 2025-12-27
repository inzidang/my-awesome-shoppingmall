export function Values() {
  const values = [
    {
      number: "01",
      title: "지속 가능성",
      description: "환경을 생각하는 윤리적 생산 프로세스와 지속 가능한 소재 사용을 추구합니다.",
    },
    {
      number: "02",
      title: "장인 정신",
      description: "오랜 경험을 가진 숙련된 장인들이 하나하나 정성을 다해 제작합니다.",
    },
    {
      number: "03",
      title: "혁신적 디자인",
      description: "전통과 현대를 아우르는 독창적인 디자인으로 새로운 트렌드를 제시합니다.",
    },
  ]

  return (
    <section id="values" className="py-24 md:py-32 px-6 md:px-12 bg-secondary">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-20">
          <div className="text-sm tracking-[0.2em] text-muted-foreground mb-6">OUR VALUES</div>
          <h2 className="font-serif font-light text-4xl md:text-5xl lg:text-6xl text-foreground">
            우리가 소중히 여기는 가치
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {values.map((value) => (
            <div key={value.number} className="text-center md:text-left">
              <div className="text-6xl md:text-7xl font-serif font-light text-accent mb-6 opacity-40">
                {value.number}
              </div>
              <h3 className="text-2xl md:text-3xl font-serif font-light mb-4 text-foreground">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
