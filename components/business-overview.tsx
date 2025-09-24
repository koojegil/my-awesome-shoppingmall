export function BusinessOverview() {
  const milestones = [
    { year: "2015", title: "회사 설립", description: "StyleCo 브랜드 론칭" },
    { year: "2017", title: "온라인 진출", description: "공식 온라인 쇼핑몰 오픈" },
    { year: "2019", title: "해외 진출", description: "일본, 동남아시아 시장 진출" },
    { year: "2021", title: "지속가능성", description: "친환경 소재 라인 출시" },
    { year: "2023", title: "글로벌 확장", description: "유럽, 북미 시장 진출" },
    { year: "2024", title: "AI 기술 도입", description: "개인 맞춤형 스타일링 서비스" },
  ]

  return (
    <section id="business" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">사업 현황</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            StyleCo의 성장 여정과 주요 성과들을 소개합니다
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary"></div>

            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-12 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                  <div className="bg-card p-6 rounded-lg border border-border shadow-sm">
                    <div className="text-primary font-bold text-lg mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">50+</div>
            <div className="text-muted-foreground">매장 수</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">15</div>
            <div className="text-muted-foreground">진출 국가</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">100만+</div>
            <div className="text-muted-foreground">고객 수</div>
          </div>
        </div>
      </div>
    </section>
  )
}
