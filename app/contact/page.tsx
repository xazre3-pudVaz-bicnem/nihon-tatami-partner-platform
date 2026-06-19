"use client";

import { useState } from "react";

const TYPES = [
  "サービスへのご質問",
  "業者登録について",
  "料金プランについて",
  "取材・メディア掲載",
  "業務提携のご相談",
  "その他",
];

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", type: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate() {
    const errs: Record<string, string> = {};
    if (!form.name) errs.name = "お名前を入力してください";
    if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "正しいメールアドレスを入力してください";
    if (!form.type) errs.type = "お問い合わせ種別を選択してください";
    if (!form.message) errs.message = "お問い合わせ内容を入力してください";
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
        <div className="text-center p-8">
          <div className="w-12 h-12 bg-igusa/10 border border-igusa/30 flex items-center justify-center mx-auto mb-4 text-igusa text-xl">✓</div>
          <h2 className="text-xl text-sumi mb-2" style={{ fontFamily: "var(--font-serif)" }}>送信が完了しました</h2>
          <p className="text-sm text-sumi/60">2営業日以内にご連絡いたします。</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="bg-sumi py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl text-white mb-2" style={{ fontFamily: "var(--font-serif)" }}>お問い合わせ</h1>
          <p className="text-sm text-white/50">ご質問・ご要望はこちらから。2営業日以内に返信します。</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <form onSubmit={handleSubmit} className="bg-white border border-border p-6 sm:p-8 space-y-5" noValidate>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-sumi/60 block mb-1.5">お名前 <span className="text-do">*</span></label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full border border-border text-sm px-3 py-2.5 focus:outline-none focus:border-ai transition-colors"
                placeholder="山田 太郎"
              />
              {errors.name && <p className="text-xs text-do mt-1">{errors.name}</p>}
            </div>
            <div>
              <label className="text-xs text-sumi/60 block mb-1.5">メールアドレス <span className="text-do">*</span></label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full border border-border text-sm px-3 py-2.5 focus:outline-none focus:border-ai transition-colors"
                placeholder="example@email.com"
              />
              {errors.email && <p className="text-xs text-do mt-1">{errors.email}</p>}
            </div>
          </div>

          <div>
            <label className="text-xs text-sumi/60 block mb-1.5">お問い合わせ種別 <span className="text-do">*</span></label>
            <select
              value={form.type}
              onChange={(e) => setForm({ ...form, type: e.target.value })}
              className="w-full border border-border text-sm px-3 py-2.5 focus:outline-none focus:border-ai transition-colors bg-white"
            >
              <option value="">選択してください</option>
              {TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
            {errors.type && <p className="text-xs text-do mt-1">{errors.type}</p>}
          </div>

          <div>
            <label className="text-xs text-sumi/60 block mb-1.5">お問い合わせ内容 <span className="text-do">*</span></label>
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={6}
              className="w-full border border-border text-sm px-3 py-2.5 focus:outline-none focus:border-ai transition-colors resize-none"
              placeholder="ご質問・ご要望をご記入ください"
            />
            {errors.message && <p className="text-xs text-do mt-1">{errors.message}</p>}
          </div>

          <button type="submit" className="w-full bg-sumi text-white text-sm py-3.5 tracking-wider hover:bg-sumi-light transition-colors duration-200">
            送信する
          </button>
        </form>
      </div>
    </>
  );
}
