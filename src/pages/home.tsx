import { Database, Book, Feather, MousePointerClick } from 'lucide-react';
import { Card } from '../components/card';
import { Footer } from '../components/footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-20">
            <div className="flex-shrink-0 flex justify-center lg:justify-start">
              <img
                src="https://raw.githubusercontent.com/blobtrtl3/docs/841ed1ff604ac649f55e2ce19df6220258d94a1b/logo/logo.svg"
                alt="Trtl3 logo"
                className="h-48 w-48 lg:h-72 lg:w-72"
              />
            </div>
            <div className="flex-1">
              <h1 className="text-text text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
                Simple, fast, and{' '}
                <span className="text-primary">open-source</span> blob storage.
              </h1>
              <p className="mt-4 text-text text-xl lg:text-2xl font-medium">
                Build and ship ideas faster than ever.
              </p>
              <p className="mt-6 text-disable text-base lg:text-lg leading-relaxed max-w-xl">
                A lightweight, self-hosted blob storage service — built for
                developers who want to understand object storage without the
                complexity of cloud platforms.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <a
                  href="https://docs.trtl3.store"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-primary text-background font-medium px-6 py-3 rounded-lg hover:bg-primary-hover transition-colors"
                >
                  Get started
                </a>
                <iframe
                  src="https://ghbtns.com/github-btn.html?user=blobtrtl3&amp;repo=trtl3&amp;type=star&amp;count=true&amp;size=large"
                  width={160}
                  height={30}
                  title="GitHub Stars"
                  className="border-0"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-text text-2xl sm:text-3xl font-bold mb-3">
              Why TRTL3?
            </h2>
            <p className="text-disable text-base max-w-xl mx-auto">
              A simple, no-nonsense approach to file storage for developers.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card
              icon={Database}
              title="Simple storage"
              desc="Perfect for applications that need reliable storage without complications."
            />
            <Card
              icon={MousePointerClick}
              title="Easy to use"
              desc="Set up quickly, write less code, and focus on building and shipping."
            />
            <Card
              icon={Feather}
              title="Lightweight"
              desc="Minimal footprint optimized for speed, efficiency, and low resource usage."
            />
            <Card
              icon={Book}
              title="Great for learning"
              desc="Understand how object storage works without cloud complexity."
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
