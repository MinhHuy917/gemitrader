'use client'

import { Suspense, useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'next/navigation'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'

// Trang này phụ thuộc vào searchParams (plan) nên không prerender tĩnh
export const dynamic = 'force-dynamic'

type PlanInfo = {
  id: string
  title: string
  price: string
}

const plans: PlanInfo[] = [
  { id: 'essential', title: 'Essential', price: '2.5 triệu (thanh toán một lần)' },
  { id: 'plus', title: 'Plus', price: '4.5 triệu (thanh toán một lần)' },
  { id: 'premium', title: 'Premium', price: '6 triệu (thanh toán một lần)' },
  { id: 'ultimate', title: 'Ultimate', price: '8.5 triệu (thanh toán một lần)' },
]

type Step = 'form' | 'qr' | 'verifying' | 'success'

function CheckoutContent() {
  const searchParams = useSearchParams()
  const defaultPlan = searchParams.get('plan') || 'plus'

  const [step, setStep] = useState<Step>('form')
  const [selectedPlan, setSelectedPlan] = useState(defaultPlan)
  const [form, setForm] = useState({ name: '', email: '', phone: '', telegram: '' })

  const activePlan = useMemo(
    () => plans.find((p) => p.id === selectedPlan) || plans[1],
    [selectedPlan],
  )

  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!form.name || !form.email || !form.phone) return
    setStep('qr')
  }

  function handlePaymentConfirmed() {
    setStep('verifying')
    setTimeout(() => {
      setStep('success')
      setTimeout(() => {
        window.location.reload()
      }, 1500)
    }, 1400)
  }

  useEffect(() => {
    if (defaultPlan && defaultPlan !== selectedPlan) {
      setSelectedPlan(defaultPlan)
    }
  }, [defaultPlan, selectedPlan])

  return (
    <>
      <PageIntro eyebrow="Thanh toán khoá học" title="Hoàn tất đăng ký & nhận hướng dẫn">
        <p>
          Điền thông tin, chọn gói khoá học, thanh toán bằng chuyển khoản qua mã QR. Sau khi chuyển
          khoản thành công, hệ thống sẽ tự động xác nhận và Gemi Trader sẽ liên hệ lại trong thời
          gian sớm nhất.
        </p>
      </PageIntro>

      <Container className="mt-10 pb-16">
        <FadeIn>
          <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
            {/* Left: form / QR / status */}
            <div className="rounded-2xl border border-neutral-200 bg-white/90 p-6 shadow-sm backdrop-blur dark:border-neutral-800 dark:bg-neutral-900/80 dark:shadow-black/30">
              {step === 'form' && (
                <form className="space-y-4" onSubmit={handleFormSubmit}>
                  <div>
                    <label className="text-sm font-semibold text-neutral-800 dark:text-neutral-100">
                      Họ tên *
                    </label>
                    <input
                      required
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                      className="mt-1 w-full rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-900 shadow-sm focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 dark:border-neutral-700 dark:bg-neutral-950 dark:text-neutral-50"
                      placeholder="Nguyễn Văn A"
                    />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="text-sm font-semibold text-neutral-800 dark:text-neutral-100">
                        Email *
                      </label>
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                        className="mt-1 w-full rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-900 shadow-sm focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 dark:border-neutral-700 dark:bg-neutral-950 dark:text-neutral-50"
                        placeholder="ban@example.com"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-neutral-800 dark:text-neutral-100">
                        Số điện thoại *
                      </label>
                      <input
                        required
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                        className="mt-1 w-full rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-900 shadow-sm focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 dark:border-neutral-700 dark:bg-neutral-950 dark:text-neutral-50"
                        placeholder="09xx xxx xxx"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="text-sm font-semibold text-neutral-800 dark:text-neutral-100">
                        Tài khoản Telegram (không bắt buộc)
                      </label>
                      <input
                        type="text"
                        value={form.telegram}
                        onChange={(e) => setForm((f) => ({ ...f, telegram: e.target.value }))}
                        className="mt-1 w-full rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-900 shadow-sm focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 dark:border-neutral-700 dark:bg-neutral-950 dark:text-neutral-50"
                        placeholder="@username"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-neutral-800 dark:text-neutral-100">
                      Chọn gói khoá học
                    </label>
                    <div className="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {plans.map((plan) => {
                        const active = plan.id === activePlan.id
                        return (
                          <button
                            type="button"
                            key={plan.id}
                            onClick={() => setSelectedPlan(plan.id)}
                            className={[
                              'rounded-2xl border p-4 text-left transition-all',
                              active
                                ? 'border-teal-500 bg-teal-50/70 text-teal-900 shadow-sm dark:border-teal-400 dark:bg-teal-900/30 dark:text-teal-50'
                                : 'border-neutral-200 hover:border-neutral-300 dark:border-neutral-700 dark:hover:border-neutral-600',
                            ].join(' ')}
                          >
                            <p className="text-sm font-semibold">{plan.title}</p>
                            <p className="text-xs text-neutral-500 dark:text-neutral-400">{plan.price}</p>
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  <div className="pt-2">
                    <Button type="submit" className="w-full justify-center">
                      Tiếp tục thanh toán
                    </Button>
                  </div>
                </form>
              )}

              {step === 'qr' && (
                <div className="space-y-5">
                  <div className="rounded-xl bg-gradient-to-br from-amber-50 to-amber-100/70 p-4 text-sm text-amber-900 dark:from-amber-900/20 dark:to-amber-900/10 dark:text-amber-100">
                    <p className="font-semibold">Bước 2: Quét mã QR để thanh toán</p>
                    <p className="mt-1">
                      Nội dung chuyển khoản: <strong>{form.phone || 'SĐT'} - {activePlan.title}</strong>
                    </p>
                    <p className="mt-1">Số tiền: {activePlan.price}</p>
                  </div>

                  <div className="flex flex-col items-center gap-4">
                    <div className="flex h-64 w-64 items-center justify-center rounded-2xl border border-dashed border-neutral-300 bg-white text-neutral-500 shadow-sm dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300">
                      <span className="text-center text-sm leading-snug">
                        QR code thanh toán
                        <br />
                        (đặt hình QR thật tại đây)
                      </span>
                    </div>
                    <p className="text-center text-xs text-neutral-500 dark:text-neutral-400">
                      Sau khi thanh toán, nhấn nút bên dưới để xác nhận. Trang sẽ tự kiểm tra và báo thành công.
                    </p>
                    <Button className="w-full justify-center sm:w-auto" onClick={handlePaymentConfirmed}>
                      Tôi đã chuyển khoản
                    </Button>
                  </div>
                </div>
              )}

              {step === 'verifying' && (
                <div className="flex flex-col items-center gap-3 py-12">
                  <div className="h-12 w-12 animate-spin rounded-full border-4 border-neutral-200 border-t-teal-500 dark:border-neutral-700 dark:border-t-teal-400" />
                  <p className="text-sm text-neutral-600 dark:text-neutral-300">
                    Đang kiểm tra thanh toán...
                  </p>
                </div>
              )}

              {step === 'success' && (
                <div className="space-y-3 rounded-2xl bg-gradient-to-br from-emerald-500/90 to-teal-500/90 p-6 text-white shadow-lg">
                  <h3 className="text-xl font-semibold">Thanh toán thành công</h3>
                  <p className="text-sm">
                    Cảm ơn bạn đã đăng ký {activePlan.title}. Gemi Trader sẽ liên lạc lại trong thời gian sớm nhất.
                  </p>
                  <p className="text-xs opacity-90">Trang sẽ tự tải lại để xác nhận.</p>
                </div>
              )}
            </div>

            {/* Right: summary */}
            <div className="rounded-2xl border border-neutral-200 bg-white/90 p-6 shadow-sm backdrop-blur dark:border-neutral-800 dark:bg-neutral-900/80 dark:shadow-black/30">
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
                Đơn hàng của bạn
              </h3>
              <div className="mt-4 space-y-3 text-sm text-neutral-700 dark:text-neutral-300">
                <div className="flex items-center justify-between rounded-xl bg-neutral-50 px-3 py-2 dark:bg-neutral-800/80">
                  <span>Khoá học</span>
                  <span className="font-semibold">{activePlan.title}</span>
                </div>
                <div className="flex items-center justify-between rounded-xl bg-neutral-50 px-3 py-2 dark:bg-neutral-800/80">
                  <span>Giá</span>
                  <span className="font-semibold">{activePlan.price}</span>
                </div>
                <div className="flex items-center justify-between rounded-xl bg-neutral-50 px-3 py-2 dark:bg-neutral-800/80">
                  <span>Hình thức</span>
                  <span className="font-semibold">Chuyển khoản QR</span>
                </div>
              </div>
              <div className="mt-6 space-y-2 rounded-xl bg-neutral-50 px-4 py-3 text-xs text-neutral-500 dark:bg-neutral-800/60 dark:text-neutral-300">
                <p>• Sau khi quét QR, nhấn “Tôi đã chuyển khoản”.</p>
                <p>• Hệ thống sẽ tự kiểm tra và báo thành công, sau đó tải lại trang.</p>
                <p>• Gemi Trader sẽ liên lạc lại để kích hoạt khoá học.</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </>
  )
}

export default function CheckoutPage() {
  return (
    <Suspense
      fallback={
        <Container className="mt-10 pb-16">
          <div className="flex h-64 items-center justify-center text-sm text-neutral-500 dark:text-neutral-300">
            Đang tải trang thanh toán...
          </div>
        </Container>
      }
    >
      <CheckoutContent />
    </Suspense>
  )
}

