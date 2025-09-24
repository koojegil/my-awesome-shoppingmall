import { Card, CardContent } from "@/components/ui/card"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">StyleCo 소개</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            2015년 설립된 StyleCo는 한국의 전통적인 아름다움과 현대적인 감각을 결합한 패션 브랜드입니다.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-card border-border">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl text-primary-foreground">🎨</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">디자인 철학</h3>
              <p className="text-muted-foreground text-pretty">
                한국의 전통 미학과 현대적 실용성을 조화롭게 결합하여 독창적이고 세련된 디자인을 추구합니다.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-secondary rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl text-secondary-foreground">🌱</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">지속가능성</h3>
              <p className="text-muted-foreground text-pretty">
                환경을 생각하는 소재 선택과 윤리적 생산 과정을 통해 지속가능한 패션을 실현합니다.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-accent rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl text-accent-foreground">✨</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">품질 약속</h3>
              <p className="text-muted-foreground text-pretty">
                최고급 소재와 정교한 제작 기술로 오래도록 사랑받을 수 있는 고품질 제품을 만듭니다.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
