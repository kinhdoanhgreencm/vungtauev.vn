import Link from "next/link";
import type { ReactNode } from "react";

// Mỗi phần tử trong post.content là một khối: "## " tiêu đề mục, "### " tiêu đề nhỏ,
// các dòng "- " danh sách, "1. " danh sách đánh số, các dòng "|" bảng, "*...*" ghi chú, còn lại là đoạn văn.
// Trong dòng hỗ trợ [chữ](/duong-dan) và **chữ đậm**.

function inline(text: string): ReactNode[] {
  const out: ReactNode[] = [];
  const re = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    if (m[1]) {
      const href = m[2];
      out.push(
        href.startsWith("/") ? (
          <Link key={m.index} href={href} className="font-semibold text-ocean hover:underline">
            {m[1]}
          </Link>
        ) : (
          <a key={m.index} href={href} rel="noopener noreferrer" target="_blank" className="font-semibold text-ocean hover:underline">
            {m[1]}
          </a>
        ),
      );
    } else {
      out.push(<strong key={m.index}>{m[3]}</strong>);
    }
    last = re.lastIndex;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

const cells = (row: string) => row.trim().replace(/^\||\|$/g, "").split("|").map((c) => c.trim());

function Block({ block }: { block: string }) {
  const lines = block.split("\n");
  if (block.startsWith("### ")) {
    return <h3 className="pt-2 text-lg font-semibold text-navy">{inline(block.slice(4))}</h3>;
  }
  if (block.startsWith("## ")) {
    return <h2 className="pt-4 text-[1.4rem] font-semibold leading-snug text-navy">{inline(block.slice(3))}</h2>;
  }
  if (lines.every((l) => l.startsWith("- "))) {
    return (
      <ul className="list-disc space-y-2 pl-6 text-base leading-relaxed text-slate-700">
        {lines.map((l, i) => (
          <li key={i}>{inline(l.slice(2))}</li>
        ))}
      </ul>
    );
  }
  if (lines.every((l) => /^\d+\. /.test(l))) {
    return (
      <ol className="list-decimal space-y-2 pl-6 text-base leading-relaxed text-slate-700">
        {lines.map((l, i) => (
          <li key={i}>{inline(l.replace(/^\d+\. /, ""))}</li>
        ))}
      </ol>
    );
  }
  if (lines.length > 2 && lines.every((l) => l.startsWith("|"))) {
    const [head, , ...rows] = lines;
    return (
      <div className="overflow-x-auto rounded-xl border border-slate-200">
        <table className="w-full min-w-[520px] text-left text-sm text-slate-700">
          <thead className="bg-slate-50 text-navy">
            <tr>
              {cells(head).map((c, i) => (
                <th key={i} className="px-3 py-2 font-semibold">
                  {inline(c)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className="border-t border-slate-200">
                {cells(r).map((c, j) => (
                  <td key={j} className={`px-3 py-2 align-top ${j === 0 ? "font-medium text-navy" : ""}`}>
                    {inline(c)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  if (/^\*[^*].*\*$/.test(block)) {
    return <p className="text-sm italic text-slate-500">{inline(block.slice(1, -1))}</p>;
  }
  return <p className="text-base leading-relaxed text-slate-700">{inline(block)}</p>;
}

export function PostBody({ content }: { content: string[] }) {
  return (
    <div className="mt-8 space-y-5">
      {content.map((block, i) => (
        <Block key={i} block={block} />
      ))}
    </div>
  );
}
