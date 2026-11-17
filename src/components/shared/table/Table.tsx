import Link from 'next/link'
import type { ITable } from '@/src/types/table'

export function Table({ header, data, itemLink }: ITable) {
  return (
    <div className='w-full overflow-x-auto'>
      <table className='w-full text-center border-collapse'>
        <thead>
          <tr className='bg-primary-600 uppercase text-xs sm:text-sm font-semibold tracking-wider text-white'>
            {header.map((text) => (
              <th
                key={text}
                className='p-3 border border-surface-border font-semibold'
              >
                {text}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className='divide-y divide-surface-border'>
          {data.map((value) => (
            <tr
              key={value.id}
              className='hover:bg-surface-hover transition-colors text-xs sm:text-sm'
            >
              {Object.keys(value).map((entry) => {
                if (itemLink?.matchHeader === entry) {
                  return (
                    <td
                      className='p-3 border border-surface-border text-primary-600 dark:text-primary-300 font-semibold hover:underline cursor-pointer'
                      key={value[entry]}
                    >
                      <Link href={itemLink.href + value.id}>
                        {value[entry]}
                      </Link>
                    </td>
                  )
                }

                return (
                  <td
                    key={value.id + entry + value[entry]}
                    className='p-3 border border-surface-border text-foreground'
                  >
                    {value[entry]}
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
