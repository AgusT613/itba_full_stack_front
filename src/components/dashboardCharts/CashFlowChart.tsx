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
      fill: '#10b981',
    },
    {
      type: 'Egresos',
      amount: totalOutflow,
      fill: '#ef4444',
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
          <div className='p-2 rounded-lg bg-primary-500/20 text-primary-300'>
            <TrendingUp className='h-5 w-5' />
          </div>
          <div>
            <h3 className='text-base font-semibold text-white'>
              Flujo de Fondos
            </h3>
            <p className='text-xs text-foreground/70'>
              Balance acumulado de transferencias
            </p>
          </div>
        </div>

        <div
          className={`flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full ${
            isPositive
              ? 'bg-emerald-500/20 text-emerald-300'
              : 'bg-rose-500/20 text-rose-300'
          }`}
        >
          {isPositive ? (
            <ArrowDownLeft className='h-3.5 w-3.5' />
          ) : (
            <ArrowUpRight className='h-3.5 w-3.5' />
          )}
          <span>
            {isPositive ? '+' : ''}${netCashFlow.toLocaleString('es-AR')}
          </span>
        </div>
      </div>

      <div className='grid grid-cols-2 gap-3 my-1'>
        <div className='bg-black/30 border border-white/10 rounded-xl p-3 flex flex-col gap-1'>
          <span className='text-xs text-emerald-400 font-medium flex items-center gap-1'>
            <ArrowDownLeft className='h-3 w-3' /> Ingresos
          </span>
          <span className='text-lg font-bold text-white'>
            ${totalInflow.toLocaleString('es-AR')}
          </span>
        </div>

        <div className='bg-black/30 border border-white/10 rounded-xl p-3 flex flex-col gap-1'>
          <span className='text-xs text-rose-400 font-medium flex items-center gap-1'>
            <ArrowUpRight className='h-3 w-3' /> Egresos
          </span>
          <span className='text-lg font-bold text-white'>
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
              stroke='rgba(255,255,255,0.1)'
              vertical={false}
            />
            <XAxis
              dataKey='type'
              stroke='rgba(255,255,255,0.6)'
              fontSize={12}
            />
            <YAxis
              stroke='rgba(255,255,255,0.6)'
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
                    <div className='rounded-lg border border-white/20 bg-[#180f2e] p-2.5 text-xs text-white shadow-xl'>
                      <p className='font-semibold'>{item.payload.type}</p>
                      <p className='text-primary-300 font-bold'>
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
