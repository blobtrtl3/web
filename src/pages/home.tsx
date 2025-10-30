import {
  Database,
  Book,
  ArrowRight,
  Feather,
  MousePointerClick,
} from 'lucide-react';
import { Card } from '../components/card';
import { Footer } from '../components/footer';
import { Header } from '../components/header';

export default function Home() {
  return (
    <div class="min-h-screen bg-background">
      <Header />

      <div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-26">
          <div class="flex flex-col items-center md:flex-row justify-between gap-8">
            <img src="https://raw.githubusercontent.com/blobtrtl3/docs/841ed1ff604ac649f55e2ce19df6220258d94a1b/logo/logo.svg" alt="Trtl3's logo" class="h-48 md:h-full" />
            <div>
              <div class="flex items-end">
                <h1 class="text-text-title text-4xl md:text-5xl font-bold mb-4">
                  Simple, Fast and <span class="text-primary font-[Playfair_Display] italic">Open Source</span> Blob Storage
                </h1>
              </div>
              <p class="text-base text-text mb-8">
                TRTL3 is a local file storage service inspired by solutions
                like Amazon S3, and other blob storage systems. Designed for
                beginner developers who want to learn how object storage works
                in practice — without the complexity of cloud services or
                external dependencies. If you're building or experimenting with
                file uploads, downloads, and basic file organization via HTTP —
                TRTL3 is a great starting point!
              </p>
              <div class="flex gap-4 flex-col md:flex-row md:items-end">
                <a
                  href="https://docs.trtl3.store"
                  class="bg-primary text-base text-background px-8 py-3 rounded-lg font-medium hover:bg-primary-hover transition-colors flex items-center gap-2 justify-center md:justify-start"
                >
                  Docs
                  <ArrowRight size={20} />
                </a>
                <span class="mb-[4px]">
                  <iframe
                    src="https://ghbtns.com/github-btn.html?user=blobtrtl3&amp;repo=trtl3&amp;type=star&amp;count=true&amp;size=large"
                    width={160}
                    height={30}
                    title="GitHub Stars"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div class="py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-left mb-8">
            <h2 class="text-xl md:text-4xl font-bold text-text-title">
              Why Choose <span class="text-primary">TRTL3</span>?
            </h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card
              icon={Database}
              title="Simple storage service"
              desc="Perfect for simple applications that need reliable storage without complications."
            />
            <Card
              icon={MousePointerClick}
              title="Easy to use"
              desc="Designed with simplicity in mindset up quickly, write less code, and focus on building."
            />
            <Card
              icon={Book}
              title="Great for learning"
              desc="Understand how object storage works under the hood without cloud complexity."
            />
            <Card
              icon={Feather}
              title="Lightweight"
              desc="Minimal footprint with performance optimized for speed, efficiency, and low resource usage."
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
