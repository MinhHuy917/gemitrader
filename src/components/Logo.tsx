import { useId } from 'react'
import clsx from 'clsx'

export function Logomark({
  invert = false,
  filled = false,
  ...props
}: React.ComponentPropsWithoutRef<'svg'> & {
  invert?: boolean
  filled?: boolean
}) {
  const strokeColor = invert ? 'white' : '#0a0a0a'
  const fillColor = invert ? 'white' : '#0a0a0a'

  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      {/* Modern "G" logo with upward trend - Clean and professional */}
      
      {/* Letter G - Clean design */}
      <g>
        {/* Outer circle of G */}
        <circle
          cx="16"
          cy="16"
          r="10"
          fill="none"
          stroke={strokeColor}
          strokeWidth="2"
          strokeLinecap="round"
          className={clsx(
            'transition-all duration-300',
            filled ? 'opacity-100' : 'opacity-100',
          )}
        />
        {/* G opening and inner line */}
        <path
          d="M16 6 L16 16 L22 16"
          fill="none"
          stroke={strokeColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={clsx(
            'transition-all duration-300',
            filled ? 'opacity-100' : 'opacity-100',
          )}
        />
      </g>

      {/* Upward trend arrow - Appears on hover */}
      <g className={clsx('transition-all duration-300', filled ? 'opacity-100' : 'opacity-0 group-hover/logo:opacity-100')}>
        {/* Trend line from bottom left to top right */}
        <line
          x1="4"
          y1="28"
          x2="28"
          y2="4"
          stroke={strokeColor}
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* Arrow head */}
        <path
          d="M24 6 L28 4 L26 4 L28 2"
          fill="none"
          stroke={strokeColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      {/* Filled version when active */}
      {filled && (
        <>
          <circle
            cx="16"
            cy="16"
            r="10"
            fill={fillColor}
            className="opacity-100"
          />
          <path
            d="M16 6 L16 16 L22 16"
            fill="none"
            stroke={invert ? '#0a0a0a' : 'white'}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="opacity-100"
          />
        </>
      )}
    </svg>
  )
}

export function Logo({
  className,
  invert = false,
  filled = false,
  fillOnHover = false,
  ...props
}: React.ComponentPropsWithoutRef<'svg'> & {
  invert?: boolean
  filled?: boolean
  fillOnHover?: boolean
}) {
  return (
    <svg
      viewBox="0 0 200 32"
      aria-hidden="true"
      className={clsx(fillOnHover && 'group/logo', className)}
      {...props}
    >
      <Logomark
        preserveAspectRatio="xMinYMid meet"
        invert={invert}
        filled={filled}
      />
      <text
        x="44"
        y="22"
        className={clsx(
          'font-display font-semibold text-lg',
          invert ? 'fill-white' : 'fill-neutral-950',
        )}
        style={{ fontSize: '18px', fontFamily: 'system-ui, -apple-system, sans-serif' }}
      >
        Gemi Trader
      </text>
    </svg>
  )
}
