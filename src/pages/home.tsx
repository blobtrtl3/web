import {
  Database,
  Book,
  Feather,
  MousePointerClick,
} from 'lucide-react';
import { Card } from '../components/card';
import { Footer } from '../components/footer';

export default function Home() {
  return (
    <div class="min-h-screen bg-background">
      <div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-26">
          <div class="flex flex-col items-center md:flex-row justify-between gap-8">
            <img src="https://raw.githubusercontent.com/blobtrtl3/docs/841ed1ff604ac649f55e2ce19df6220258d94a1b/logo/logo.svg" alt="Trtl3's logo" class="h-48 md:h-full" />
            <div>
              <div class="flex items-end">
                <h1 class="text-text text-4xl md:text-5xl font-bold mb-4">
                  Simple, fast, and <span class="text-primary font-[Playfair_Display] italic">open-source</span> blob storage. Build and ship ideas <span class="text-primary font-[Playfair_Display] italic">faster than ever!</span>
                </h1>
              </div>
              <p class="text-base text-text mb-8">
                A lightweight, self-hosted blob storage service — built for developers who want to understand object storage without the complexity of cloud platforms. Perfect for experimenting with file uploads, downloads, and simple HTTP-based file management.
              </p>
              <div class="flex gap-4 flex-col md:flex-row md:items-end">
                <a
                  href="https://docs.trtl3.store"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="bg-primary text-base text-background px-10 py-3 rounded-lg font-medium hover:bg-primary-hover transition-colors flex items-center gap-2 justify-center md:justify-start"
                >
                  Get started
                </a>
                <a class="github-button" href="https://github.com/blobtrtl3/trtl3" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star blobtrtl3/trtl3 on GitHub">Star</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div class="py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card
              icon={Database}
              title="Simple storage service"
              desc="Perfect for simple applications that need reliable storage without complications."
            />
            <Card
              icon={MousePointerClick}
              title="Easy to use"
              desc="Designed with simplicity in mindset up quickly, write less code, and focus on build and ship."
            />
            <Card
              icon={Feather}
              title="Lightweight"
              desc="Minimal footprint with performance optimized for speed, efficiency, and low resource usage."
            />
            <Card
              icon={Book}
              title="Great for learning"
              desc="Understand how object storage works under the hood without cloud complexity."
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
