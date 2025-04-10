"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion, useAnimation } from "framer-motion"
import { ArrowRight, Cloud, Code, Download, Image, Tv, Youtube, Music } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useInView } from "react-intersection-observer"

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  }

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/80 z-10"></div>

          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            {isLoaded && (
              <>
                <motion.div
                  className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl"
                  animate={{
                    x: [0, 30, 0],
                    y: [0, -30, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                />
                <motion.div
                  className="absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full bg-secondary/10 blur-3xl"
                  animate={{
                    x: [0, -40, 0],
                    y: [0, 40, 0],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                />
                <motion.div
                  className="absolute top-1/2 right-1/4 w-72 h-72 rounded-full bg-primary/5 blur-3xl"
                  animate={{
                    x: [0, 50, 0],
                    y: [0, 20, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 12,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                />
              </>
            )}
          </div>

          <div className="container px-4 md:px-6 relative z-20">
            <motion.div
              className="flex flex-col items-center space-y-4 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="space-y-2 max-w-3xl mx-auto text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <motion.div
                  className="inline-block p-2 mb-4 bg-primary/10 rounded-full"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 1, type: "spring" }}
                >
                  <Cloud className="h-10 w-10 text-primary" />
                </motion.div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                  JKT48 API Documentation
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-4">
                  Powerful, reliable, and easy to integrate API services for your applications.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="mt-8 flex justify-center w-full"
              >
                <Link href="/docs">
                  <Button size="lg" className="group bg-primary hover:bg-primary/90 text-white rounded-full px-8">
                    Explore Documentation
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Our API Services</h2>
              <p className="mt-4 text-muted-foreground md:text-lg max-w-3xl mx-auto">
                Explore our collection of powerful APIs designed to enhance your applications with minimal integration
                effort.
              </p>
            </div>

            <motion.div
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-stretch"
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
            >
              <motion.div
                custom={0}
                variants={cardVariants}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="flex flex-col p-6 bg-background shadow-lg rounded-xl border border-muted hover:shadow-xl transition-all duration-300"
              >
                <div className="p-3 bg-primary/10 rounded-full w-fit mb-6">
                  <Cloud className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Live API</h3>
                <p className="text-muted-foreground mb-6 flex-grow">
                  Get accurate live jkt48 data in real-time idn and also showroom directly.
                </p>
                <div className="mt-auto pt-4">
                  <Link href="/docs/live">
                    <Button
                      variant="outline"
                      className="w-full group rounded-lg border-primary/20 hover:border-primary hover:bg-primary/5"
                    >
                      View Documentation
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </motion.div>

              <motion.div
                custom={1}
                variants={cardVariants}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="flex flex-col p-6 bg-background shadow-lg rounded-xl border border-muted hover:shadow-xl transition-all duration-300"
              >
                <div className="p-3 bg-primary/10 rounded-full w-fit mb-6">
                  <Download className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">IDN API</h3>
                <p className="text-muted-foreground mb-6 flex-grow">
                  all live member data in real time on the IDN application platform.
                </p>
                <div className="mt-auto pt-4">
                  <Link href="/docs/idn">
                    <Button
                      variant="outline"
                      className="w-full group rounded-lg border-primary/20 hover:border-primary hover:bg-primary/5"
                    >
                      View Documentation
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </motion.div>

              <motion.div
                custom={2}
                variants={cardVariants}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="flex flex-col p-6 bg-background shadow-lg rounded-xl border border-muted hover:shadow-xl transition-all duration-300"
              >
                <div className="p-3 bg-primary/10 rounded-full w-fit mb-6">
                  <Tv className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Showroom API</h3>
                <p className="text-muted-foreground mb-6 flex-grow">
                  All live JKT48 member data in real time on the Showroom application.
                </p>
                <div className="mt-auto pt-4">
                  <Link href="/docs/showroom">
                    <Button
                      variant="outline"
                      className="w-full group rounded-lg border-primary/20 hover:border-primary hover:bg-primary/5"
                    >
                      View Documentation
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </motion.div>

              <motion.div
                custom={3}
                variants={cardVariants}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="flex flex-col p-6 bg-background shadow-lg rounded-xl border border-muted hover:shadow-xl transition-all duration-300"
              >
                <div className="p-3 bg-primary/10 rounded-full w-fit mb-6">
                  <Image className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Recent Live API</h3>
                <p className="text-muted-foreground mb-6 flex-grow">
                Displays data on JKT48 members who previously went live along with the total nominal gift.
                </p>
                <div className="mt-auto pt-4">
                  <Link href="/docs/recent">
                    <Button
                      variant="outline"
                      className="w-full group rounded-lg border-primary/20 hover:border-primary hover:bg-primary/5"
                    >
                      View Documentation
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </motion.div>

              <motion.div
                custom={4}
                variants={cardVariants}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="flex flex-col p-6 bg-background shadow-lg rounded-xl border border-muted hover:shadow-xl transition-all duration-300"
              >
                <div className="p-3 bg-primary/10 rounded-full w-fit mb-6">
                  <Music className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">TikTok Downloader</h3>
                <p className="text-muted-foreground mb-6 flex-grow">
                  Download TikTok videos and audio by providing a valid TikTok video URL.
                </p>
                <div className="mt-auto pt-4">
                  <Link href="/docs/tiktok">
                    <Button
                      variant="outline"
                      className="w-full group rounded-lg border-primary/20 hover:border-primary hover:bg-primary/5"
                    >
                      View Documentation
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </motion.div>

              <motion.div
                custom={5}
                variants={cardVariants}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="flex flex-col p-6 bg-background shadow-lg rounded-xl border border-muted hover:shadow-xl transition-all duration-300"
              >
                <div className="p-3 bg-primary/10 rounded-full w-fit mb-6">
                  <Youtube className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">YouTube Downloader</h3>
                <p className="text-muted-foreground mb-6 flex-grow">
                  Download YouTube videos and extract audio by providing a valid YouTube video URL.
                </p>
                <div className="mt-auto pt-4">
                  <Link href="/docs/yt">
                    <Button
                      variant="outline"
                      className="w-full group rounded-lg border-primary/20 hover:border-primary hover:bg-primary/5"
                    >
                      View Documentation
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <div className="inline-block p-1 bg-primary/10 rounded-lg mb-2">
                  <div className="bg-primary/10 p-2 rounded-md">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h2 className="text-3xl font-bold tracking-tight">Easy Integration</h2>
                <p className="text-muted-foreground">
                  Our APIs are designed with developers in mind. Simple endpoints, clear documentation, and predictable
                  responses make integration a breeze.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="mr-2 h-4 w-4 rounded-full bg-primary/20 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                    </div>
                    <span>RESTful API design</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-4 w-4 rounded-full bg-primary/20 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                    </div>
                    <span>JSON response format</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-4 w-4 rounded-full bg-primary/20 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                    </div>
                    <span>Comprehensive documentation</span>
                  </li>
                </ul>
                <div className="pt-4 flex justify-center">
                  <Link href="/docs">
                    <Button className="rounded-lg">
                      View All APIs
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative w-full max-w-full overflow-hidden"
              >
                <div className="absolute -inset-4 rounded-xl bg-primary/5 -z-10 blur-sm"></div>
                <div className="bg-background border rounded-xl p-4 md:p-6 shadow-lg overflow-x-auto">
                  <div className="flex items-center justify-between mb-3 md:mb-4">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-xs text-muted-foreground">Terminal</div>
                  </div>
                  <pre className="bg-muted p-2 md:p-4 rounded-md overflow-x-auto text-xs md:text-sm whitespace-pre-wrap md:whitespace-pre">
                    <code className="text-sm">
                      <span className="text-muted-foreground">$</span> <span className="text-primary">curl</span> -X GET
                      "https://api.jkt48connect.my.id/api/live?api_key=valzz"
                      <br />
                      <br />
                      <span className="text-muted-foreground">// Response</span>
                      <br />
                      {`[
  {
    "name": "Fritzy",
    "img": "https://cdn.idntimes.com/content-images/post/20250331/717109e0-a064-4f15-8187-5c4d46e56a58-250331190058.jpg",
    "img_alt": "https://cdn.idn.media/idnaccount/avatar/500/f4d25811b1b50effd560fb480cac8ba0.webp?v=1712299807",
    "url_key": "jkt48_fritzy",
    "slug": "hii-250331190058",
    "room_id": 510011,
    "is_graduate": false,
    "is_group": false,
    "chat_room_id": "arn:aws:ivschat:us-east-1:050891932989:room/dsKjuKRqfoRE",
    "started_at": "2025-03-31T12:01:07.000Z",
    "streaming_url_list": [
      {
        "label": "original",
        "quality": 1,
        "url": "https://4b964ca68cf1.us-east-1.playback.live-video.net/api/video/v1/us-east-1.050891932989.channel.K9fM2uTS2hX3.m3u8"
      }
    ],
    "type": "idn"
  }
]`}
                    </code>
                  </pre>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

