import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-12 bg-secondary">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <div className="text-sm tracking-[0.2em] text-muted-foreground mb-6">CONTACT</div>
            <h2 className="font-serif font-light text-4xl md:text-5xl lg:text-6xl mb-8 text-foreground">
              함께 만들어가는
              <br />
              당신의 스타일
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-12">
              Atelier의 제품과 서비스에 대해 궁금하신 점이 있으시거나, 개인 맞춤 상담을 원하시면 언제든 연락 주세요.
              전문 스타일리스트가 친절하게 안내해 드리겠습니다.
            </p>

            <div className="space-y-6">
              <div>
                <div className="text-sm font-medium mb-2 text-foreground">매장 방문</div>
                <div className="text-muted-foreground">
                  서울시 강남구 청담동 123-45
                  <br />
                  월-토: 11:00 - 20:00 / 일: 12:00 - 19:00
                </div>
              </div>
              <div>
                <div className="text-sm font-medium mb-2 text-foreground">문의</div>
                <div className="text-muted-foreground">
                  이메일: contact@atelier-fashion.com
                  <br />
                  전화: 02-1234-5678
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 md:p-12 rounded-sm">
            <h3 className="text-2xl font-serif font-light mb-8 text-card-foreground">문의하기</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="text-sm mb-2 block text-card-foreground">
                    이름
                  </label>
                  <Input id="name" placeholder="홍길동" className="bg-background" />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm mb-2 block text-card-foreground">
                    이메일
                  </label>
                  <Input id="email" type="email" placeholder="hello@example.com" className="bg-background" />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="text-sm mb-2 block text-card-foreground">
                  연락처
                </label>
                <Input id="phone" placeholder="010-1234-5678" className="bg-background" />
              </div>
              <div>
                <label htmlFor="message" className="text-sm mb-2 block text-card-foreground">
                  문의 내용
                </label>
                <Textarea
                  id="message"
                  placeholder="문의하실 내용을 자유롭게 작성해 주세요"
                  rows={5}
                  className="bg-background resize-none"
                />
              </div>
              <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6">
                문의 보내기
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
