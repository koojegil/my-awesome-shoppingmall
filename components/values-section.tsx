export function ValuesSection() {
  const values = [
    {
      icon: "💎",
      title: "품질 우선",
      description: "최고의 소재와 장인정신으로 완성되는 프리미엄 품질",
    },
    {
      icon: "🤝",
      title: "고객 중심",
      description: "고객의 만족과 신뢰를 최우선으로 하는 서비스",
    },
    {
      icon: "🌍",
      title: "글로벌 비전",
      description: "한국 패션의 우수성을 세계에 알리는 글로벌 브랜드",
    },
    {
      icon: "🔄",
      title: "지속적 혁신",
      description: "끊임없는 연구개발을 통한 혁신적인 디자인과 기술",
    },
  ]

  return (
    <section id="values" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">우리의 가치</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            StyleCo가 추구하는 핵심 가치들입니다
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 bg-accent rounded-full mx-auto mb-6 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{value.title}</h3>
              <p className="text-muted-foreground text-pretty">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
