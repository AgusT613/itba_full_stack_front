'use client'

import { AnimatePresence, motion } from 'motion/react'

interface AnimatedBalanceProps {
  balance: number
  isVisible: boolean
}

export default function AnimatedBalance({
  balance,
  isVisible,
}: AnimatedBalanceProps) {
  const formattedBalance = balance.toLocaleString('es-AR')

  return (
    <span
      className='text-2xl font-bold tracking-tight inline-flex items-center min-w-[7rem]'
      aria-live='polite'
    >
      <span className='mr-1.5'>$</span>
      <AnimatePresence mode='wait' initial={false}>
        {isVisible ? (
          <motion.span
            key='visible-balance'
            initial={{ opacity: 0, y: 8, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -8, filter: 'blur(4px)' }}
            transition={{ type: 'spring', damping: 20, stiffness: 280 }}
            className='inline-block'
          >
            {formattedBalance}
          </motion.span>
        ) : (
          <motion.span
            key='hidden-balance'
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.15 }}
            className='inline-block tracking-widest text-lg text-foreground/80'
          >
            ••••••
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  )
}
