import Link from "next/link";
import { Calendar, CheckCircle, Clock } from "lucide-react";

import { Button } from "@/components/ui/button";
import { DynamicBanner } from "@/components/dynamic-banner";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <Header />
      <main className="flex-1">
        <DynamicBanner />

        <section
          id="features"
          className="container space-y-12 py-12 md:py-24 lg:py-32 bg-gradient-to-b from-black to-gray-900"
        >
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Features
            </h2>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              Everything you need to stay organized and prepared for your exams.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center space-y-4 rounded-lg border border-gray-800 bg-gray-900/50 p-6 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-300 hover:-translate-y-1">
              <div className="rounded-full bg-primary/10 p-4">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Exam Countdown</h3>
              <p className="text-center text-muted-foreground">
                Set your exam dates and get personalized study schedules to
                ensure you&apos;re prepared on time.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border border-gray-800 bg-gray-900/50 p-6 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-300 hover:-translate-y-1">
              <div className="rounded-full bg-primary/10 p-4">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Progress Tracking</h3>
              <p className="text-center text-muted-foreground">
                Track your progress through each course syllabus and identify
                areas that need more attention.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border border-gray-800 bg-gray-900/50 p-6 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-300 hover:-translate-y-1">
              <div className="rounded-full bg-primary/10 p-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Smart Reminders</h3>
              <p className="text-center text-muted-foreground">
                Get notified when you&apos;re falling behind schedule or when
                it&apos;s time to review difficult topics.
              </p>
            </div>
          </div>
        </section>

        <section
          id="testimonials"
          className="bg-gray-900 py-12 md:py-24 lg:py-32"
        >
          <div className="container space-y-12">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Trusted by students worldwide
              </h2>
              <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
                See what our users have to say about StudyBuddy.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="rounded-lg bg-gray-800 p-6 shadow-lg border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-primary/10" />
                    <div>
                      <p className="font-medium">Student {i}</p>
                      <p className="text-sm text-muted-foreground">
                        University of Example
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-muted-foreground">
                    &quot;StudyBuddy helped me organize my study schedule and
                    stay on track. I passed all my exams with flying
                    colors!&quot;
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="pricing"
          className="container space-y-12 py-12 md:py-24 lg:py-32 bg-gradient-to-b from-gray-900 to-black"
        >
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Simple, transparent pricing
            </h2>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              Start for free, upgrade when you need more features.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Free",
                description: "Perfect for getting started",
                price: "$0",
                features: [
                  "Up to 3 courses",
                  "Basic progress tracking",
                  "7-day revision history",
                ],
              },
              {
                title: "Pro",
                description: "For serious students",
                price: "$9.99",
                features: [
                  "Unlimited courses",
                  "Advanced progress analytics",
                  "Unlimited revision history",
                  "Smart reminders",
                ],
                popular: true,
              },
              {
                title: "Team",
                description: "For study groups",
                price: "$19.99",
                features: [
                  "Everything in Pro",
                  "Up to 5 team members",
                  "Collaborative study notes",
                  "Team progress reports",
                ],
              },
            ].map((plan) => (
              <div
                key={plan.title}
                className={`flex flex-col rounded-lg border ${
                  plan.popular
                    ? "border-purple-500 bg-gray-900/70"
                    : "border-gray-800 bg-gray-900/70"
                } p-6 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden`}
              >
                {plan.popular && (
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                )}
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-bl from-purple-500 to-pink-500 text-white text-xs font-bold py-1 px-3 rounded-bl-lg">
                    Popular
                  </div>
                )}
                <div className="flex-grow">
                  <h3 className="text-xl font-bold">{plan.title}</h3>
                  <p className="mt-2 text-muted-foreground">
                    {plan.description}
                  </p>
                  <div className="my-6">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center gap-2"
                      >
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link href="/signup" className="mt-auto">
                  <Button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white transition-all duration-300 transform hover:scale-105">
                    Get Started
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
