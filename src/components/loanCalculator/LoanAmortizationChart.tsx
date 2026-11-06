'use client'

import { useEffect, useState } from 'react'
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import type { AmortizationPoint } from '@/src/lib/amortization'

interface LoanAmortizationChartProps {
  schedule: AmortizationPoint[]
}

export default function LoanAmortizationChart({
  schedule,
}: LoanAmortizationChartProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className='w-full h-64 flex items-center justify-center text-sm text-foreground/50'>
        Cargando cronograma...
      </div>
    )
  }

  // To prevent crowding the X axis, sample points if total months > 24
  const displayData =
    schedule.length > 36
      ? schedule.filter((_, idx) => idx % Math.ceil(schedule.length / 24) === 0)
      : schedule

  return (
    <div className='flex flex-col w-full'>
      <h4 className='text-sm font-semibold mb-2 text-foreground/90'>
        Evolución de Saldo Remanente
      </h4>
      <div className='w-full h-56'>
        <ResponsiveContainer width='100%' height='100%'>
          <AreaChart
            data={displayData}
            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id='colorBalance' x1='0' y1='0' x2='0' y2='1'>
                <stop offset='5%' stopColor='#8213df' stopOpacity={0.8} />
                <stop offset='95%' stopColor='#8213df' stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray='3 3'
              stroke='rgba(255,255,255,0.1)'
            />
            <XAxis
              dataKey='month'
              tickFormatter={(m) => `M${m}`}
              stroke='rgba(255,255,255,0.5)'
              fontSize={11}
            />
            <YAxis
              stroke='rgba(255,255,255,0.5)'
              fontSize={11}
              tickFormatter={(val) =>
                val >= 1000 ? `${(val / 1000).toFixed(0)}k` : val
              }
            />
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload?.length) {
                  const data = payload[0].payload as AmortizationPoint
                  return (
                    <div className='rounded-lg border border-white/20 bg-[#180f2e] p-2.5 text-xs text-white shadow-xl flex flex-col gap-1'>
                      <p className='font-semibold'>
                        Mes {data.month} (Año {data.year})
                      </p>
                      <p className='text-primary-300'>
                        Saldo remanente: $
                        {data.remainingBalance.toLocaleString('es-AR')}
                      </p>
                      <p className='text-white/70'>
                        Cuota: ${data.totalPayment.toLocaleString('es-AR')}
                      </p>
                    </div>
                  )
                }
                return null
              }}
            />
            <Area
              type='monotone'
              dataKey='remainingBalance'
              stroke='#8213df'
              strokeWidth={2}
              fillOpacity={1}
              fill='url(#colorBalance)'
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
