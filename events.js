/* 体験の情報の置き場（サイト上では「体験」と呼ぶ）。登壇者・日時が決まったら、該当する元素の items に足すだけで反映される。
   items の形：{ title, summary, date, place, specialist, contact:{label,href} }（無い項目は省略可） */
window.LAFTEL_EVENTS = {
  earth: { items: [
    { title: "出張断捨離 YOHAKU", summary: "住まいと持ち物を整える、出張型の断捨離。",
      contact: { label: "メールで問い合わせる", href: "mailto:info@yohaku-ensostudio.jp" } }
  ] },
  fire: { items: [] },
  water: { items: [] },
  wind: { items: [] },
  sky: { items: [] }
};
