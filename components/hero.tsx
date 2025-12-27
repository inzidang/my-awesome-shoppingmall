"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronDown, ArrowUp } from "lucide-react"
import Image from "next/image"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import { useState, useEffect } from "react"

export function Hero() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [showTopButton, setShowTopButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 100 // 고정된 네비게이션 높이 고려
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
    setMenuOpen(false)
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <>
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-8 md:px-12 bg-background/80 backdrop-blur-sm border-b border-border/50">
        <div className="max-w-[1600px] mx-auto flex items-center justify-between">
          <div className="text-2xl md:text-3xl font-serif font-light tracking-tight text-foreground">ATELIER</div>
          <DropdownMenuPrimitive.Root open={menuOpen} onOpenChange={setMenuOpen}>
            <DropdownMenuPrimitive.Trigger asChild>
              <button className="text-sm tracking-widest text-foreground hover:text-accent transition-colors flex items-center gap-1 outline-none focus:outline-none focus-visible:outline-none">
                MENU
                <ChevronDown className="h-4 w-4" />
              </button>
            </DropdownMenuPrimitive.Trigger>
            <DropdownMenuPrimitive.Portal>
              <DropdownMenuPrimitive.Content
                className="min-w-[200px] bg-background border-0 rounded-md shadow-lg p-2 z-50"
                align="end"
                sideOffset={5}
              >
                <DropdownMenuPrimitive.Item
                  className="px-4 py-3 text-sm tracking-widest text-foreground hover:bg-accent hover:text-accent-foreground rounded-md cursor-pointer outline-none transition-colors"
                  onSelect={() => scrollToSection("about")}
                >
                  ABOUT US
                </DropdownMenuPrimitive.Item>
                <DropdownMenuPrimitive.Item
                  className="px-4 py-3 text-sm tracking-widest text-foreground hover:bg-accent hover:text-accent-foreground rounded-md cursor-pointer outline-none transition-colors"
                  onSelect={() => scrollToSection("values")}
                >
                  OUR VALUES
                </DropdownMenuPrimitive.Item>
                <DropdownMenuPrimitive.Item
                  className="px-4 py-3 text-sm tracking-widest text-foreground hover:bg-accent hover:text-accent-foreground rounded-md cursor-pointer outline-none transition-colors"
                  onSelect={() => scrollToSection("collections")}
                >
                  COLLECTIONS
                </DropdownMenuPrimitive.Item>
                <DropdownMenuPrimitive.Item
                  className="px-4 py-3 text-sm tracking-widest text-foreground hover:bg-accent hover:text-accent-foreground rounded-md cursor-pointer outline-none transition-colors"
                  onSelect={() => scrollToSection("contact")}
                >
                  CONTACT
                </DropdownMenuPrimitive.Item>
              </DropdownMenuPrimitive.Content>
            </DropdownMenuPrimitive.Portal>
          </DropdownMenuPrimitive.Root>
        </div>
      </nav>

      <section className="relative min-h-screen flex flex-col">
        {/* Hero Content */}
        <div className="flex-1 flex items-center justify-center px-6 md:px-12 pt-32 pb-20">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="font-serif font-light text-5xl md:text-7xl lg:text-8xl leading-[1.1] mb-8 text-balance text-foreground">
            시대를 초월한
            <br />
            우아함과 혁신
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Atelier는 감각적인 디자인과 최상의 품질로 당신만의 스타일을 완성합니다.
            <br />
            시간이 지나도 변치 않는 가치를 제안합니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base tracking-wide"
              onClick={() => scrollToSection("collections")}
            >
              컬렉션 보기
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-base tracking-wide bg-transparent"
              onClick={() => scrollToSection("values")}
            >
              브랜드 스토리
            </Button>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="px-6 md:px-12 pb-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="aspect-[21/9] bg-muted rounded-sm overflow-hidden relative">
            <Image
              src="/minimal-fashion-editorial-photo.jpg"
              alt="Fashion Collection"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
      </section>

      {/* TOP Button */}
      {showTopButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 bg-primary text-primary-foreground hover:bg-primary/90 rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 outline-none focus:outline-none focus-visible:outline-none"
          aria-label="맨 위로 이동"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </>
  )
}
