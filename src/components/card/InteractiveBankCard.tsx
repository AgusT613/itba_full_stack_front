'use client'

import { Cpu, CreditCard, RotateCw, ShieldCheck, Wifi } from 'lucide-react'
import { motion } from 'motion/react'
import { useState } from 'react'

export interface CardData {
  brand?: string
  type?: string
  card_type?: string
  number?: string
  last_four?: string
  expirationDate?: string
  expiration_date?: string
  cvv?: string | number
  cardHolderName?: string
  card_holder_name?: string
}

export interface InteractiveBankCardProps {
  card?: CardData | null
}

export default function InteractiveBankCard({
  card,
}: InteractiveBankCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  if (!card) {
    return (
      <output className='w-full max-w-sm mx-auto p-6 text-center text-sm text-foreground/70 bg-surface rounded-2xl border border-surface-border block shadow-md'>
        No tenés ninguna tarjeta disponible para visualizar.
      </output>
    )
  }

  const brand = card.brand ?? ''
  const type = card.type ?? card.card_type ?? ''
  const number =
    card.number ??
    (card.last_four
      ? `•••• •••• •••• ${card.last_four}`
      : '•••• •••• •••• ••••')
  const expirationDate = card.expirationDate ?? card.expiration_date ?? '--/--'
  const cvv = String(card.cvv ?? card.last_four ?? '•••')
  const cardHolderName =
    card.cardHolderName ?? card.card_holder_name ?? 'CLIENTE ITBANK'

  const handleToggleFlip = () => {
    setIsFlipped((prev) => !prev)
  }

  return (
    <div className='flex flex-col items-center gap-4 w-full max-w-sm mx-auto'>
      <div className='perspective-1000 w-full'>
        <motion.div
          className='relative w-full aspect-[1.586/1] rounded-2xl preserve-3d cursor-pointer shadow-2xl select-none'
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ type: 'spring', damping: 20, stiffness: 220 }}
          onClick={handleToggleFlip}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          aria-label='Tarjeta bancaria interactiva. Haz clic para girar.'
          role='button'
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault()
              handleToggleFlip()
            }
          }}
        >
          {/* FRONT FACE */}
          <div className='absolute inset-0 backface-hidden w-full h-full rounded-2xl p-5 flex flex-col justify-between overflow-hidden bg-gradient-to-tr from-[#140827] via-[#290f4e] to-[#4c1682] border border-purple-400/30 text-white'>
            {/* Background metallic accent circles */}
            <div className='absolute -right-12 -top-12 w-44 h-44 rounded-full bg-purple-500/10 blur-2xl pointer-events-none' />
            <div className='absolute -left-12 -bottom-12 w-44 h-44 rounded-full bg-indigo-500/10 blur-2xl pointer-events-none' />

            {/* Top row: Brand & Contactless */}
            <div className='flex items-center justify-between relative z-10'>
              <div className='flex items-center gap-2'>
                <span className='font-black tracking-widest text-lg bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent'>
                  ITBANK
                </span>
                {type && (
                  <span className='text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-white/10 text-purple-200 border border-white/10'>
                    {type}
                  </span>
                )}
              </div>
              <Wifi className='w-5 h-5 text-white/70 rotate-90' />
            </div>

            {/* Middle: EMV Chip & Brand */}
            <div className='flex items-center gap-4 relative z-10 my-1'>
              <div className='w-11 h-8 rounded-md bg-gradient-to-br from-amber-200 via-amber-400 to-amber-500 p-1 flex items-center justify-center shadow-inner border border-amber-300/60'>
                <Cpu className='w-6 h-6 text-amber-900/80' />
              </div>
              <CreditCard className='w-5 h-5 text-purple-300/50' />
            </div>

            {/* Card Number */}
            <div className='font-mono text-lg sm:text-xl tracking-widest text-white/95 font-semibold drop-shadow-sm relative z-10'>
              {number}
            </div>

            {/* Bottom Row: Holder, Expiration, Network */}
            <div className='flex items-end justify-between relative z-10 text-xs'>
              <div className='flex flex-col'>
                <span className='text-[9px] uppercase tracking-wider text-purple-200/60'>
                  Titular
                </span>
                <span className='font-medium uppercase tracking-wider text-white'>
                  {cardHolderName}
                </span>
              </div>

              <div className='flex flex-col items-center'>
                <span className='text-[9px] uppercase tracking-wider text-purple-200/60'>
                  Vence
                </span>
                <span className='font-mono font-medium text-white'>
                  {expirationDate}
                </span>
              </div>

              {brand && (
                <div className='font-bold uppercase tracking-wider text-sm bg-white/10 px-2 py-0.5 rounded border border-white/15'>
                  {brand}
                </div>
              )}
            </div>
          </div>

          {/* BACK FACE */}
          <div className='absolute inset-0 backface-hidden rotate-y-180 w-full h-full rounded-2xl py-5 flex flex-col justify-between overflow-hidden bg-gradient-to-tr from-[#0f051c] via-[#1e0a38] to-[#380e61] border border-purple-400/30 text-white'>
            {/* Magnetic Stripe */}
            <div className='w-full h-10 bg-black/90 shadow-inner' />

            {/* Signature Strip & CVV */}
            <div className='px-5 flex flex-col gap-2'>
              <div className='flex items-center gap-3'>
                <div className='h-8 flex-1 rounded bg-white/20 flex items-center px-3 border border-white/10 overflow-hidden'>
                  <span className='font-mono italic text-[11px] text-white/50 tracking-wider truncate select-none'>
                    FIRMA AUTORIZADA • NO VALIDA SIN FIRMA
                  </span>
                </div>
                <div className='h-8 w-14 bg-white rounded flex items-center justify-center border border-gray-300 shadow-inner'>
                  <span className='font-mono text-xs font-bold text-gray-900 tracking-wider'>
                    {cvv}
                  </span>
                </div>
              </div>
              <span className='text-[9px] text-right text-purple-200/60 pr-1'>
                Código de seguridad (CVV)
              </span>
            </div>

            {/* Security Hologram & Support Footer */}
            <div className='px-5 flex items-center justify-between text-[9px] text-purple-200/70 border-t border-white/10 pt-2 mx-5'>
              <div className='flex items-center gap-1.5'>
                <ShieldCheck className='w-4 h-4 text-emerald-400' />
                <span>Tarjeta protegida por ITBANK Security</span>
              </div>
              <span className='font-mono font-medium text-white/80'>
                0800-888-ITBANK
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Tactile Flip Button */}
      <button
        type='button'
        onClick={handleToggleFlip}
        className='flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full bg-surface border border-surface-border text-foreground hover:bg-surface-hover active:scale-95 transition-all cursor-pointer shadow-sm'
      >
        <RotateCw className='w-3.5 h-3.5 text-primary-600 dark:text-primary-300' />
        <span>{isFlipped ? 'Ver Frente' : 'Girar Tarjeta (Ver CVV)'}</span>
      </button>
    </div>
  )
}
