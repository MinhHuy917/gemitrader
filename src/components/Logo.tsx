import clsx from 'clsx'

export function Logomark({
  invert = false,
  filled = false,
  ...props
}: React.ComponentPropsWithoutRef<'div'> & {
  invert?: boolean
  filled?: boolean
}) {
  return (
    <div
      className={clsx(
        'flex items-baseline gap-2',
        'transition-all duration-300',
        props.className,
      )}
      {...props}
    >
      <span
        className={clsx(
          'font-display font-bold text-lg sm:text-xl tracking-tight',
          invert ? 'text-white' : 'text-neutral-950 dark:text-neutral-50',
          'transition-all duration-300',
        )}
      >
        GEMI
      </span>
      <span
        className={clsx(
          'font-display font-light text-sm sm:text-base tracking-wider',
          invert ? 'text-white/70' : 'text-neutral-600 dark:text-neutral-200',
          'transition-all duration-300',
          'uppercase',
        )}
      >
        TRADER
      </span>
    </div>
  )
}

export function Logo({
  className,
  invert = false,
  filled = false,
  fillOnHover = false,
  ...props
}: React.ComponentPropsWithoutRef<'div'> & {
  invert?: boolean
  filled?: boolean
  fillOnHover?: boolean
}) {
  return (
    <div
      className={clsx(
        'group/logo flex items-baseline gap-2.5',
        'transition-all duration-300',
        className,
      )}
      {...props}
    >
      {/* GEMI - Bold, prominent */}
      <span
        className={clsx(
          'font-display font-bold text-lg sm:text-xl tracking-tight',
          invert ? 'text-white' : 'text-neutral-950 dark:text-neutral-50',
          'transition-all duration-300',
          'group-hover/logo:opacity-90',
        )}
      >
        GEMI
      </span>
      
      {/* Accent divider */}
      <span
        className={clsx(
          'h-3 w-px',
          invert ? 'bg-white/30' : 'bg-neutral-300 dark:bg-neutral-700',
          'transition-all duration-300',
          'group-hover/logo:bg-neutral-950 dark:group-hover/logo:bg-neutral-50',
          invert && 'group-hover/logo:bg-white',
        )}
      />
      
      {/* TRADER - Light, subtle */}
      <span
        className={clsx(
          'font-display font-light text-sm sm:text-base tracking-wider',
          invert ? 'text-white/70' : 'text-neutral-600 dark:text-neutral-200',
          'transition-all duration-300',
          'uppercase',
          'group-hover/logo:text-neutral-950 dark:group-hover/logo:text-neutral-50',
          invert && 'group-hover/logo:text-white',
        )}
      >
        TRADER
      </span>
    </div>
  )
}
