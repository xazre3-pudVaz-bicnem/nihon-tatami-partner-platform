"use client";

import { useState } from "react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { SITE_TEL, SITE_EMAIL, SITE_LINE } from "@/lib/site";

const hasTel = (SITE_TEL as string).trim() !== "";
const hasEmail = (SITE_EMAIL as string).trim() !== "";
const hasLine = (SITE_LINE as string).trim() !== "";

const INQUIRY_TYPES = [
  "畳の表替え・裏返し",
  "畳の新調",
  "縁なし畳・和紙畳・樹脂畳への変更",
  "内装工事（クロス・床・建具）",
  "賃貸退去後の原状回復",
  "法人・管理会社としてのご相談",
  "旅館・施設の畳整備",
  "寺院・神社の畳整備",
  "店舗の内装・和空間づくり",
  "その他",
];

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", company: "", tel: "", email: "", area: "", type: "", message: "", method: "", privacy: false });
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate() {
    const errs: Record<string, string> = {};
    if (!form.name) errs.name = "お名前を入力してください";
    if (!form.tel && !form.email) errs.contact = "電話番号またはメールアドレスをご入力ください";
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "正しいメールアドレスを入力してください";
    if (!form.type) errs.type = "お問い合わせ種別を選択してください";
    if (!form.message) errs.message = "お問い合わせ内容を入力してください";
    if (!form.privacy) errs.privacy = "プライバシーポリシーへの同意が必要です";
    return errs;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setSent(true);
  }

  if (sent) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-shiro">
        <div className="text-center p-8 max-w-md">
          <div className="w-12 h-12 border border-igusa/30 bg-igusa/10 flex items-center justify-center mx-auto mb-6">
            <span className="text-igusa text-lg">—</span>
          </div>
          <h2 className="text-2xl text-sumi mb-3" style={{ fontFamily: "var(--font-serif)" }}>送信が完了しました</h2>
          <p className="text-sm text-sumi/60 leading-relaxed">
            お問い合わせありがとうございます。内容を確認のうえ、担当よりご連絡いたします。
          </p>
          {hasTel && (
            <a href={`tel:${SITE_TEL.replace(/-/g, "")}`} className="block mt-4 text-sm text-kincya">{SITE_TEL}</a>
          )}
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="bg-sumi py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 tatami-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "お問い合わせ" }]} />
          <p className="text-xs text-kincya tracking-[0.3em] mb-4 uppercase">Contact</p>
          <h1 className="text-3xl sm:text-4xl text-white mb-4" style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.06em" }}>
            お問い合わせ・無料見積もり
          </h1>
          <p className="text-sm text-white/60 max-w-xl leading-relaxed">
            現地確認・お見積もりは無料です。個人のお客様から法人・管理会社様まで、お気軽にご相談ください。
          </p>
        </div>
      </section>

      {(hasTel || hasEmail || hasLine) && (
        <section className="py-10 bg-kiji border-b border-border">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-10">
              {hasTel && (
                <div className="text-center">
                  <p className="text-xs text-sumi/50 tracking-wide mb-2">お電話でのご相談</p>
                  <a href={`tel:${SITE_TEL.replace(/-/g, "")}`} className="text-xl text-sumi hover:text-ai transition-colors" style={{ fontFamily: "var(--font-serif)" }}>
                    {SITE_TEL}
                  </a>
                </div>
              )}
              {hasLine && (
                <div className="text-center">
                  <p className="text-xs text-sumi/50 tracking-wide mb-2">LINEでのご相談</p>
                  <a href={SITE_LINE} className="inline-block border border-kincya/40 text-kincya text-sm px-5 py-2 hover:bg-kincya/10 transition-colors duration-300">
                    LINEで問い合わせる
                  </a>
                </div>
              )}
              {hasEmail && (
                <div className="text-center">
                  <p className="text-xs text-sumi/50 tracking-wide mb-2">メールでのご相談</p>
                  <a href={`mailto:${SITE_EMAIL}`} className="text-sm text-ai hover:underline">{SITE_EMAIL}</a>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 bg-shiro">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl text-sumi mb-8 text-center" style={{ fontFamily: "var(--font-serif)" }}>お問い合わせフォーム</h2>

          <form onSubmit={handleSubmit} className="space-y-5 bg-white border border-border p-6 sm:p-8" noValidate>
            <div>
              <label className="block text-xs text-sumi/60 mb-2 tracking-wide">
                お問い合わせ種別 <span className="text-kincya">必須</span>
              </label>
              <select
                value={form.type}
                onChange={(e) => setForm({ ...form, type: e.target.value })}
                className="w-full border border-border text-sm text-sumi py-3 px-4 bg-shiro focus:outline-none focus:border-ai transition-colors appearance-none"
              >
                <option value="">選択してください</option>
                {INQUIRY_TYPES.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
              {errors.type && <p className="text-xs text-do mt-1">{errors.type}</p>}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs text-sumi/60 mb-2 tracking-wide">
                  お名前（またはご担当者名） <span className="text-kincya">必須</span>
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full border border-border text-sm text-sumi py-3 px-4 bg-shiro focus:outline-none focus:border-ai transition-colors"
                  placeholder="山田 太郎"
                />
                {errors.name && <p className="text-xs text-do mt-1">{errors.name}</p>}
              </div>
              <div>
                <label className="block text-xs text-sumi/60 mb-2 tracking-wide">会社名・施設名（法人の方）</label>
                <input
                  type="text"
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  className="w-full border border-border text-sm text-sumi py-3 px-4 bg-shiro focus:outline-none focus:border-ai transition-colors"
                  placeholder="〇〇不動産株式会社"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs text-sumi/60 mb-2 tracking-wide">電話番号</label>
                <input
                  type="tel"
                  value={form.tel}
                  onChange={(e) => setForm({ ...form, tel: e.target.value })}
                  className="w-full border border-border text-sm text-sumi py-3 px-4 bg-shiro focus:outline-none focus:border-ai transition-colors"
                  placeholder="090-0000-0000"
                />
              </div>
              <div>
                <label className="block text-xs text-sumi/60 mb-2 tracking-wide">メールアドレス</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full border border-border text-sm text-sumi py-3 px-4 bg-shiro focus:outline-none focus:border-ai transition-colors"
                  placeholder="info@example.com"
                />
                {errors.contact && <p className="text-xs text-do mt-1">{errors.contact}</p>}
                {errors.email && <p className="text-xs text-do mt-1">{errors.email}</p>}
              </div>
            </div>

            <div>
              <label className="block text-xs text-sumi/60 mb-2 tracking-wide">施工場所（都道府県・市区町村）</label>
              <input
                type="text"
                value={form.area}
                onChange={(e) => setForm({ ...form, area: e.target.value })}
                className="w-full border border-border text-sm text-sumi py-3 px-4 bg-shiro focus:outline-none focus:border-ai transition-colors"
                placeholder="例：東京都渋谷区"
              />
            </div>

            <div>
              <label className="block text-xs text-sumi/60 mb-2 tracking-wide">
                お問い合わせ内容 <span className="text-kincya">必須</span>
              </label>
              <textarea
                rows={6}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full border border-border text-sm text-sumi py-3 px-4 bg-shiro focus:outline-none focus:border-ai transition-colors resize-none"
                placeholder="例：和室6畳の畳表替えを検討しています。現地確認をお願いしたいです。"
              />
              {errors.message && <p className="text-xs text-do mt-1">{errors.message}</p>}
            </div>

            <div>
              <label className="block text-xs text-sumi/60 mb-2 tracking-wide">ご希望の連絡方法</label>
              <div className="flex flex-wrap gap-5">
                {["電話", "メール", "LINE", "どちらでも可"].map((method) => (
                  <label key={method} className="flex items-center gap-2 text-sm text-sumi/70 cursor-pointer">
                    <input
                      type="radio"
                      name="contact_method"
                      value={method}
                      checked={form.method === method}
                      onChange={() => setForm({ ...form, method })}
                      className="accent-sumi"
                    />
                    {method}
                  </label>
                ))}
              </div>
            </div>

            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                id="privacy"
                checked={form.privacy}
                onChange={(e) => setForm({ ...form, privacy: e.target.checked })}
                className="mt-1 accent-sumi"
              />
              <label htmlFor="privacy" className="text-xs text-sumi/60 leading-relaxed cursor-pointer">
                <a href="/privacy" className="text-ai hover:underline">プライバシーポリシー</a>に同意します
              </label>
            </div>
            {errors.privacy && <p className="text-xs text-do">{errors.privacy}</p>}

            <button type="submit" className="w-full bg-sumi text-white text-sm py-4 tracking-wider hover:bg-sumi-light transition-colors duration-300">
              無料見積もりを相談する
            </button>

            <p className="text-xs text-sumi/40 text-center">
              ※ 内容確認後にご連絡します。お急ぎの場合はその旨をお問い合わせ内容にご記載ください。
            </p>
          </form>
        </div>
      </section>
    </>
  );
}
