import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-primary"></div>
          <span className="text-xl font-bold text-foreground">StyleCo</span>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            회사소개
          </a>
          <a href="#values" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            가치관
          </a>
          <a href="#business" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            사업현황
          </a>
          <a href="#contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            연락처
          </a>
        </nav>

        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">쇼핑하기</Button>
      </div>
    </header>
  )
}
