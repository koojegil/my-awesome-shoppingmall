import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer id="contact" className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="h-8 w-8 rounded-full bg-primary"></div>
              <span className="text-xl font-bold">StyleCo</span>
            </div>
            <p className="text-background/80 text-pretty">한국의 아름다움을 현대적으로 해석한 패션 브랜드</p>
          </div>

          <div>
            <h3 className="font-bold mb-4">회사 정보</h3>
            <ul className="space-y-2 text-background/80">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  회사소개
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  채용정보
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  투자정보
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  보도자료
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">고객 서비스</h3>
            <ul className="space-y-2 text-background/80">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  고객센터
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  배송 안내
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  교환/반품
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  사이즈 가이드
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">뉴스레터</h3>
            <p className="text-background/80 mb-4 text-pretty">최신 컬렉션과 특별 혜택을 가장 먼저 받아보세요</p>
            <div className="flex gap-2">
              <Input placeholder="이메일 주소" className="bg-background text-foreground border-background/20" />
              <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90">구독</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/60 text-sm">© 2024 StyleCo. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-background/60 hover:text-primary transition-colors">
              개인정보처리방침
            </a>
            <a href="#" className="text-background/60 hover:text-primary transition-colors">
              이용약관
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
