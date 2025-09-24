import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/elegant-fashion-model-wearing-modern-korean-style-.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
          한국의 아름다움을
          <br />
          <span className="text-primary">현대적으로</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-pretty opacity-90">전통과 현대가 만나는 특별한 패션을 경험하세요</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-3">
            컬렉션 보기
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-foreground text-lg px-8 py-3 bg-transparent"
          >
            브랜드 스토리
          </Button>
        </div>
      </div>
    </section>
  )
}
