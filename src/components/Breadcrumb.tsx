import Link from 'next/link'
import clsx from 'clsx'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={clsx('flex items-center space-x-2 text-sm', className)}
    >
      <ol className="flex items-center space-x-2" itemScope itemType="https://schema.org/BreadcrumbList">
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          
          return (
            <li
              key={index}
              className="flex items-center"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              {item.href && !isLast ? (
                <>
                  <Link
                    href={item.href}
                    className="text-neutral-600 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-neutral-50 transition-colors"
                    itemProp="item"
                  >
                    <span itemProp="name">{item.label}</span>
                  </Link>
                  <meta itemProp="position" content={String(index + 1)} />
                  <span className="mx-2 text-neutral-400 dark:text-neutral-600" aria-hidden="true">
                    /
                  </span>
                </>
              ) : (
                <>
                  <span
                    className="text-neutral-950 dark:text-neutral-50 font-medium"
                    itemProp="name"
                    aria-current={isLast ? 'page' : undefined}
                  >
                    {item.label}
                  </span>
                  <meta itemProp="position" content={String(index + 1)} />
                </>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

