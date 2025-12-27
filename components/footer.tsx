export function Footer() {
  return (
    <footer className="py-16 px-6 md:px-12 border-t border-border">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="text-3xl font-serif font-light tracking-tight mb-4 text-foreground">ATELIER</div>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              시대를 초월한 우아함과 혁신적인 디자인으로 당신만의 스타일을 완성하는 패션 브랜드입니다.
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-4 text-foreground">메뉴</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  컬렉션
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  브랜드 스토리
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  매장 안내
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  고객 서비스
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4 text-foreground">팔로우</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Pinterest
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div>© 2025 Atelier Fashion. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">
              이용약관
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              개인정보처리방침
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
