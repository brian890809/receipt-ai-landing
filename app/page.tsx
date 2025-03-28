import Link from "next/link"
import { ArrowRight, BarChart3, Clock, CreditCard, Mail, Search, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import ThemeToggle from "@/components/theme-toggle"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="container z-40 bg-background">
        <div className="flex h-20 items-center justify-between py-6">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <CreditCard className="h-6 w-6" />
              <span className="font-bold inline-block">ReceiptAI</span>
            </Link>
            <nav className="hidden gap-6 md:flex">
              <Link
                href="#features"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Features
              </Link>
              <Link
                href="#how-it-works"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                How It Works
              </Link>
              <Link
                href="#pricing"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Pricing
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button asChild>
              <Link href="/login">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
          <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="text-primary">See</span> what your money is really doing.
            </h1>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              AI-powered receipt analysis that reduces finance tracking time by 70% while bringing unprecedented
              transparency to your spending.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/register">
                  Start for free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#demo">View demo</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Feature Section */}
        <section id="features" className="container space-y-6 bg-slate-50 py-8 dark:bg-slate-950 md:py-12 lg:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">AI-Powered Financial Clarity</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Our intelligent system doesn't just track expenses—it reveals patterns, identifies savings opportunities,
              and gives you complete visibility into your financial life.
            </p>
          </div>
          <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Smart Receipt Scanning</CardTitle>
                <Search className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Instantly extract and categorize data from any receipt format with 99.8% accuracy.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Email Integration</CardTitle>
                <Mail className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Automatically process receipts from your email inbox without lifting a finger.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Spending Insights</CardTitle>
                <BarChart3 className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Visualize spending patterns and receive personalized recommendations.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Time Savings</CardTitle>
                <Clock className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Reduce finance tracking time by 70% with automated categorization and tagging.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">URL Receipt Capture</CardTitle>
                <Zap className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Simply share a URL to your digital receipt and we'll do the rest.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Comprehensive Dashboard</CardTitle>
                <BarChart3 className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  All your financial data in one place with powerful filtering and search.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Content Section */}
        <section id="how-it-works" className="container space-y-6 py-8 md:py-12 lg:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">Beyond Just Tracking Expenses</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              ReceiptAI reveals not just how much you spend, but what you're spending on, bringing true transparency to
              your finances.
            </p>
          </div>
          <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl">
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Intelligent Categorization</h3>
              <p className="text-sm text-muted-foreground">
                Our AI automatically categorizes your expenses with incredible precision, learning your spending habits
                over time.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Trend Analysis</h3>
              <p className="text-sm text-muted-foreground">
                Identify spending patterns and receive alerts when your habits change or unusual transactions occur.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Multi-Platform Support</h3>
              <p className="text-sm text-muted-foreground">
                Whether it's a paper receipt, email confirmation, or online purchase, we've got you covered across all
                platforms.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Secure and Private</h3>
              <p className="text-sm text-muted-foreground">
                Bank-level encryption ensures your financial data remains secure and private at all times.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="container space-y-6 bg-slate-50 py-8 dark:bg-slate-950 md:py-12 lg:py-24">
          <div className="mx-auto max-w-[58rem] text-center">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">
              The Numbers Speak for Themselves
            </h2>
          </div>
          <div className="mx-auto grid max-w-[64rem] grid-cols-2 gap-8 md:grid-cols-4">
            <div className="flex flex-col items-center justify-center">
              <div className="text-3xl font-bold md:text-5xl">70%</div>
              <div className="text-center text-sm text-muted-foreground">Less Time Spent on Finance Tracking</div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="text-3xl font-bold md:text-5xl">99.8%</div>
              <div className="text-center text-sm text-muted-foreground">Receipt Data Accuracy</div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="text-3xl font-bold md:text-5xl">23%</div>
              <div className="text-center text-sm text-muted-foreground">Average Savings Identified</div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="text-3xl font-bold md:text-5xl">10K+</div>
              <div className="text-center text-sm text-muted-foreground">Happy Users</div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="cta" className="container space-y-6 py-8 md:py-12 lg:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center gap-4 text-center">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">
              Ready to Transform Your Financial Clarity?
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Join thousands of users who have revolutionized their approach to personal finance.
            </p>
            <Button size="lg" className="mt-4" asChild>
              <Link href="/register">
                Start Your Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-slate-50 py-6 dark:bg-slate-950">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <CreditCard className="h-5 w-5" />
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              © 2025 ReceiptAI. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="/terms" className="text-sm text-muted-foreground underline underline-offset-4">
              Terms
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground underline underline-offset-4">
              Privacy
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground underline underline-offset-4">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

