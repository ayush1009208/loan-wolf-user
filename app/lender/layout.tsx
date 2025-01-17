'use client';

import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { Sidebar } from '@/components/sidebar';
import { DollarSign, History, Settings } from "lucide-react";
import { usePathname } from 'next/navigation';
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion } from 'framer-motion';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div>
      <div className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex h-screen">
            <Sidebar>
              <motion.div
                whileHover={{ scale: 1.25 }}
                whileTap={{ scale: 0.95 }}
                
                layout
              >
                <Link
                  href="/loans"
                  className={cn(
                    "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                    pathname === "/loans" ? "text-white bg-white/10" : "text-zinc-400",
                  )}
                >
                  <div className="flex items-center flex-1">
                    <DollarSign className="h-5 w-5 mr-3 text-violet-500" />
                    Loans
                  </div>
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.25 }}
                whileTap={{ scale: 0.95 }}
                layout
              >
                <Link
                  href="/history"
                  className={cn(
                    "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                    pathname === "/history" ? "text-white bg-white/10" : "text-zinc-400",
                  )}
                >
                  <div className="flex items-center flex-1">
                    <History className="h-5 w-5 mr-3 text-orange-700" />
                    History
                  </div>
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.25 }}
                whileTap={{ scale: 0.95 }}
                layout
              >
                <Link
                  href="/settings"
                  className={cn(
                    "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                    pathname === "/settings" ? "text-white bg-white/10" : "text-zinc-400",
                  )}
                >
                  <div className="flex items-center flex-1">
                    <Settings className="h-5 w-5 mr-3 text-gray-500" />
                    Settings
                  </div>
                </Link>
              </motion.div>
            </Sidebar>
            <div className="flex-1 overflow-y-auto bg-background">
              {children}
            </div>
          </div>
          <Toaster />
        </ThemeProvider>
      </div>
    </div>
  );
}