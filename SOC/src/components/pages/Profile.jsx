import { Card, Pill, Btn, SectionTitle, PageWrap } from "../ui";
import logo from "../../assets/cuj-logo.png";

const SKILLS = ["React","Python","Node.js","Machine Learning","MongoDB","C++","Data Structures"];
const MYPROJECTS = [
  { icon:"🏆", bg:"bg-amber-500/10", name:"Smart Traffic Controller", meta:"HackBIT 2025 · 2 members", status:"Active", sc:"green" },
  { icon:"💻", bg:"bg-blue-500/10", name:"AI Resume Screener", meta:"SIH 2025 · 4 members", status:"Full", sc:"amber" },
];
const MYRESOURCES = [
  { name:"DS Complete Notes", meta:"Sem 5 · 142 downloads" },
  { name:"OS Unit 4 Notes", meta:"Sem 5 · 98 downloads" },
  { name:"CN Lab Manual", meta:"Sem 5 · 64 downloads" },
];

export default function Profile({ onNavigate }) {
  return (
    <PageWrap>
      <div className="grid grid-cols-2 gap-3 items-start">
        <div>
          {/* Profile card */}
          <div className="bg-[#f5efdc] border border-white/[0.07] rounded-xl overflow-hidden mb-3">
            {/* Cover with CUJ theming */}
            <div className="h-24 bg-gradient-to-br from-[#f1faf2] to-[#eef4fb] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-transparent to-blue-500/10" />
              <div className="absolute right-3 top-3 opacity-20">
                <img src={logo} alt="" className="w-14 h-14 object-cover rounded-full" />
              </div>
              <div className="absolute bottom-2 left-4 text-[10px] text-yellow-400/60 font-medium tracking-wider uppercase">
                CUJ · CSE · Batch 2022–26
              </div>
            </div>
            <div className="px-5 pb-5">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-violet-500 flex items-center justify-center text-xl font-bold text-white border-[3px] border-[#f5efdc] -mt-8 mb-2.5">AK</div>
              <div className="font-['Syne',sans-serif] text-lg font-bold">Aryan Kumar</div>
              <div className="text-sm text-[#5a6a85] mt-0.5">Roll No: 23CUCSE001</div>
              <div className="text-sm text-[#5a6a85] mt-0.5">B.Tech CSE · Semester 5 · AKTU</div>
              <div className="text-sm text-[#5a6a85] mt-1.5 leading-relaxed">Passionate about ML and full-stack dev. Building cool things one commit at a time.</div>
              <div className="flex gap-2 mt-3">
                <Btn size="sm" onClick={() => onNavigate("messages")}>💌 Message</Btn>
                <Btn variant="ghost" size="sm">🔗 Share</Btn>
                <Btn variant="ghost" size="sm">✏️ Edit</Btn>
              </div>
            </div>
          </div>

          <Card className="mb-3">
            <SectionTitle>Skills</SectionTitle>
            <div className="-mt-1">
              {SKILLS.map(s => (
                <button key={s} onClick={() => onNavigate("projects")}
                  className="inline-block text-[11px] px-2.5 py-1 rounded-md bg-[#ece4c8] border border-white/[0.07] text-[#5a6a85] m-0.5 hover:border-white/15 hover:text-[#1a2540] transition-all cursor-pointer">
                  {s}
                </button>
              ))}
            </div>
            <p className="text-[11px] text-[#5a6a85] mt-2">Click a skill to find open projects needing it ↗️</p>
          </Card>

          <Card>
            <SectionTitle>Achievements</SectionTitle>
            <div className="flex gap-2 flex-wrap">
              {[["🏆","HackBIT 2024","Finalist"],["⭐","Top contributor","Oct 2024"],["📚","142 resources","shared"]].map(([icon,t,s]) => (
                <div key={t} className="flex-1 min-w-[80px] text-center p-2.5 bg-[#ece4c8] rounded-xl">
                  <div className="text-2xl">{icon}</div>
                  <div className="text-[11px] text-[#5a6a85] mt-1 leading-snug">{t}<br/>{s}</div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div>
          <Card className="mb-3">
            <SectionTitle>My projects</SectionTitle>
            {MYPROJECTS.map((p,i) => (
              <div key={i} className="flex items-center gap-3 py-2.5 border-b border-white/[0.07] last:border-0">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-base ${p.bg} shrink-0`}>{p.icon}</div>
                <div className="flex-1">
                  <div className="text-sm font-medium">{p.name}</div>
                  <div className="text-[11px] text-[#5a6a85] mt-0.5 flex items-center gap-1.5">{p.meta} · <Pill color={p.sc} className="text-[10px]">{p.status}</Pill></div>
                </div>
                <Btn variant="ghost" size="sm" onClick={() => onNavigate("projects")}>View ↗️</Btn>
              </div>
            ))}
          </Card>

          <Card>
            <SectionTitle>Uploaded resources</SectionTitle>
            {MYRESOURCES.map((r,i) => (
              <div key={i} className="flex items-center gap-3 py-2.5 border-b border-white/[0.07] last:border-0">
                <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center text-red-400 shrink-0">📄</div>
                <div className="flex-1">
                  <div className="text-sm font-medium">{r.name}</div>
                  <div className="text-[11px] text-[#5a6a85] mt-0.5">{r.meta}</div>
                </div>
              </div>
            ))}
          </Card>
        </div>
      </div>
    </PageWrap>
  );
}
