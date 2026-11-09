'use client'

import { ArrowDownLeft, ArrowUpRight, TrendingUp } from 'lucide-react'
import { useEffect, useState } from 'react'
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { calculateCashFlow } from '@/src/lib/cashFlow'
import type { TTransfer } from '@/src/types/homebanking'

interface CashFlowChartProps {
  transfers: TTransfer[]
  username: string
}

export default function CashFlowChart({
  transfers,
  username,
}: CashFlowChartProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const { totalInflow, totalOutflow, netCashFlow } = calculateCashFlow(
    transfers,
    username,
  )

  const chartData = [
    {
      type: 'Ingresos',
      amount: totalInflow,
      fill: '#059669',
    },
    {
      type: 'Egresos',
      amount: totalOutflow,
      fill: '#dc2626',
    },
  ]

  if (!mounted) {
    return (
      <div className='w-full h-64 flex items-center justify-center text-sm text-foreground/50'>
        Cargando análisis de flujo...
      </div>
    )
  }

  const isPositive = netCashFlow >= 0

  return (
    <article className='bg-surface rounded-2xl border border-surface-border p-6 shadow-md flex flex-col gap-4'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <div className='p-2 rounded-lg bg-primary-500/15 text-primary-600 dark:text-primary-300'>
            <TrendingUp className='h-5 w-5' />
          </div>
          <div>
            <h3 className='text-base font-semibold text-foreground'>
              Flujo de Fondos
            </h3>
            <p className='text-xs text-foreground/70'>
              Balance acumulado de transferencias
            </p>
          </div>
        </div>

        <div
          className={`flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full border ${
            isPositive
              ? 'bg-emerald-100 text-emerald-800 border-emerald-300 dark:bg-emerald-500/20 dark:text-emerald-300 dark:border-emerald-500/30'
              : 'bg-rose-100 text-rose-800 border-rose-300 dark:bg-rose-500/20 dark:text-rose-300 dark:border-rose-500/30'
          }`}
        >
          {isPositive ? (
            <ArrowDownLeft className='h-4 w-4' />
          ) : (
            <ArrowUpRight className='h-4 w-4' />
          )}
          <span>
            {isPositive ? '+' : ''}${netCashFlow.toLocaleString('es-AR')}
          </span>
        </div>
      </div>

      <div className='grid grid-cols-2 gap-3 my-1'>
        <div className='bg-surface-card border border-emerald-200 dark:border-surface-border rounded-xl p-3 flex flex-col gap-1 shadow-sm'>
          <span className='text-xs text-emerald-700 dark:text-emerald-400 font-bold flex items-center gap-1'>
            <ArrowDownLeft className='h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400' />{' '}
            Ingresos
          </span>
          <span className='text-lg font-bold text-foreground'>
            ${totalInflow.toLocaleString('es-AR')}
          </span>
        </div>

        <div className='bg-surface-card border border-rose-200 dark:border-surface-border rounded-xl p-3 flex flex-col gap-1 shadow-sm'>
          <span className='text-xs text-rose-700 dark:text-rose-400 font-bold flex items-center gap-1'>
            <ArrowUpRight className='h-3.5 w-3.5 text-rose-600 dark:text-rose-400' />{' '}
            Egresos
          </span>
          <span className='text-lg font-bold text-foreground'>
            ${totalOutflow.toLocaleString('es-AR')}
          </span>
        </div>
      </div>

      <div className='w-full h-44'>
        <ResponsiveContainer width='100%' height='100%'>
          <BarChart
            data={chartData}
            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
          >
            <CartesianGrid
              strokeDasharray='3 3'
              stroke='rgba(128,128,128,0.2)'
              vertical={false}
            />
            <XAxis
              dataKey='type'
              stroke='rgba(128,128,128,0.6)'
              fontSize={12}
            />
            <YAxis
              stroke='rgba(128,128,128,0.6)'
              fontSize={11}
              tickFormatter={(val) =>
                val >= 1000 ? `${(val / 1000).toFixed(0)}k` : val
              }
            />
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload?.length) {
                  const item = payload[0]
                  return (
                    <div className='rounded-lg border border-surface-border bg-surface-card p-2.5 text-xs text-foreground shadow-xl'>
                      <p className='font-semibold'>{item.payload.type}</p>
                      <p className='text-primary-600 dark:text-primary-300 font-bold'>
                        ${Number(item.value).toLocaleString('es-AR')}
                      </p>
                    </div>
                  )
                }
                return null
              }}
            />
            <Bar dataKey='amount' radius={[6, 6, 0, 0]}>
              {chartData.map((entry) => (
                <Cell key={`bar-${entry.type}`} fill={entry.fill} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </article>
  )
}
