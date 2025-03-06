"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, CheckCircle, Clock } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function DynamicBanner() {
  // Use clientSideRendered state to ensure content is visible even without JS
  const [clientSideRendered, setClientSideRendered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Mark as client-side rendered first
    setClientSideRendered(true);
    // Then trigger animations
    setIsVisible(true);
  }, []);

  // Animation configurations
  const container = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 0, opacity: 1 },
    show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } },
  };

  const features = [
    {
      icon: <BookOpen className="h-6 w-6 text-purple-400" />,
      title: "Organized Study Plans",
      description: "Keep all your courses in one place",
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-green-400" />,
      title: "Track Your Progress",
      description: "See how much you've accomplished",
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-400" />,
      title: "Never Miss a Deadline",
      description: "Countdown to your important exams",
    },
  ];

  // Render different content based on whether client-side JS has run
  return (
    <div className="relative overflow-hidden py-12 md:py-24 lg:py-32">
      {/* Background gradient animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20 z-0"></div>

      {/* Animated circles - only shown when client-side rendered */}
      {clientSideRendered && (
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-gradient-to-br from-purple-500/10 to-blue-500/10"
              style={{
                width: `${Math.random() * 300 + 100}px`,
                height: `${Math.random() * 300 + 100}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * 100 - 50],
                x: [0, Math.random() * 100 - 50],
                scale: [1, Math.random() + 0.5, 1],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>
      )}

      <div className="container relative z-10">
        {/* Conditional rendering based on client-side JS availability */}
        {clientSideRendered ? (
          // Animated version when client-side JS is available
          <motion.div
            variants={container}
            initial="hidden"
            animate={isVisible ? "show" : "hidden"}
            className="mx-auto flex max-w-[58rem] flex-col items-center space-y-8 text-center"
          >
            <motion.div variants={item}>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text animate-fade-in-down">
                Ace your exams with personalized study plans
              </h1>
            </motion.div>

            <motion.div variants={item}>
              <p className="max-w-[42rem] leading-normal text-blue-300 sm:text-xl sm:leading-8 animate-fade-in-up">
                StudyBuddy helps you organize your study materials, track your
                progress, and stay on schedule for your upcoming exams.
              </p>
            </motion.div>

            <motion.div
              variants={item}
              className="flex flex-wrap items-center justify-center gap-4 animate-bounce-in"
            >
              <Link href="/signup">
                <Button
                  size="lg"
                  className="gap-2 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 border-0 animate-glow"
                >
                  Get Started <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="#features">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-purple-500 text-purple-400 hover:text-purple-300 hover:bg-purple-950/30"
                >
                  Learn More
                </Button>
              </Link>
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              animate={isVisible ? "show" : "hidden"}
              className="grid gap-8 md:grid-cols-3 mt-12 w-full"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className="flex flex-col items-center p-6 rounded-lg bg-gray-900/30 backdrop-blur-sm border border-gray-800 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="rounded-full bg-gray-800 p-3 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-blue-200/80 text-center">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ) : (
          // Static fallback version when client-side JS is not available
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-8 text-center">
            <div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text animate-fade-in-down">
                Ace your exams with personalized study plans
              </h1>
            </div>

            <div>
              <p className="max-w-[42rem] leading-normal text-blue-300 sm:text-xl sm:leading-8 animate-fade-in-up">
                StudyBuddy helps you organize your study materials, track your
                progress, and stay on schedule for your upcoming exams.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 animate-bounce-in">
              <Link href="/signup">
                <Button
                  size="lg"
                  className="gap-2 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 border-0 animate-glow"
                >
                  Get Started <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="#features">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-purple-500 text-purple-400 hover:text-purple-300 hover:bg-purple-950/30"
                >
                  Learn More
                </Button>
              </Link>
            </div>

            <div className="grid gap-8 md:grid-cols-3 mt-12 w-full">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-6 rounded-lg bg-gray-900/30 backdrop-blur-sm border border-gray-800 hover:border-purple-500/50 transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="rounded-full bg-gray-800 p-3 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-blue-200/80 text-center">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
