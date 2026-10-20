import Image from "next/image";
import type { CSSProperties } from "react";
import { SITE_NAME } from "@/lib/site";

/** <head> で実行する初期化スクリプト（トップページの初回訪問時だけ data-intro を付ける） */
export const INTRO_SCRIPT = `(function(){try{
var d=document.documentElement;
if(location.pathname!=="/"||sessionStorage.getItem("kt-intro")||matchMedia("(prefers-reduced-motion: reduce)").matches)return;
sessionStorage.setItem("kt-intro","1");
d.setAttribute("data-intro","1");
setTimeout(function(){d.removeAttribute("data-intro")},4200);
}catch(e){}})();`;

/**
 * トップページ初回訪問時のオープニング演出（CSS のみ）。
 * html[data-intro="1"] のときだけ表示され、約1.6秒で幕が上がる。操作は妨げない（pointer-events: none）。
 */
export default function IntroCurtain() {
  const chars = Array.from(SITE_NAME);
  return (
    <div className="intro-curtain" aria-hidden="true">
      <div className="intro-curtain__inner">
        <div className="intro-curtain__logo">
          <Image src="/logo-96.png" alt="" width={56} height={56} loading="eager" />
        </div>
        <p className="intro-curtain__name" style={{ fontFamily: "var(--font-serif)" }}>
          {chars.map((ch, i) => (
            <span key={i} className="intro-curtain__char">
              <span style={{ "--i": i } as CSSProperties}>{ch}</span>
            </span>
          ))}
        </p>
        <span className="intro-curtain__line" />
        <p className="intro-curtain__en">KATSUSHIKA TATAMI STORE</p>
      </div>
    </div>
  );
}
