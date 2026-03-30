import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ChevronLeft,
  ChevronRight,
  Award,
  Users,
  Sprout,
  GraduationCap,
  BadgeCheck,
  Trophy,
  Star,
  CheckCircle2,
  Lock,
  ArrowRight,
  Share2,
  Download,
  UserPlus,
  Search,
  Eye,
  RefreshCw,
  Heart,
  Sparkles,
  X,
  ArrowUp,
  ArrowDown,
  Minus,
  Megaphone,
} from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { Avatar, AvatarFallback } from '@/app/components/ui/avatar';
import { Progress } from '@/app/components/ui/progress';

interface AIEnabledEducatorCertificateProps {
  onBack?: () => void;
}

type TierStatus = 'earned' | 'current' | 'locked';

interface Tier {
  id: string;
  title: string;
  role: string;
  description: string;
  status: TierStatus;
  score: number;
  color: string;
  bgColor: string;
  borderColor: string;
  dotColor: string;
  textColor: string;
  image: string;
}

const tiers: Tier[] = [
  {
    id: 'brown',
    title: 'Assessment Contributor',
    role: 'Assessment Contributor',
    description: 'Created first AI assessments and shared with the community',
    status: 'earned',
    score: 200,
    color: '#8B6914',
    bgColor: 'bg-white',
    borderColor: 'border-gray-200',
    dotColor: 'bg-[#8B6914]',
    textColor: 'text-[#8B6914]',
    image: '/certificate-brown.png',
  },
  {
    id: 'silver',
    title: 'Assessment Builder',
    role: 'Assessment Builder',
    description: 'Consistently creating quality content and engaging peers',
    status: 'earned',
    score: 450,
    color: '#6B7280',
    bgColor: 'bg-white',
    borderColor: 'border-gray-200',
    dotColor: 'bg-gray-400',
    textColor: 'text-gray-500',
    image: '/certificate-silver.png',
  },
  {
    id: 'gold',
    title: 'Assessment Mentor',
    role: 'Assessment Mentor',
    description: 'Recognized as a top mentor with cross-university impact',
    status: 'current',
    score: 750,
    color: '#D4A017',
    bgColor: 'bg-white',
    borderColor: 'border-gray-200',
    dotColor: 'bg-amber-400',
    textColor: 'text-amber-600',
    image: '/certificate-gold.png',
  },
  {
    id: 'platinum',
    title: 'Assessment Authority',
    role: 'Assessment Authority',
    description: 'Highest recognition — mastery in AI-powered education',
    status: 'locked',
    score: 1200,
    color: '#94A3B8',
    bgColor: 'bg-white',
    borderColor: 'border-gray-200',
    dotColor: 'bg-slate-300',
    textColor: 'text-slate-400',
    image: '/certificate-platinum.png',
  },
];

const universityBadges = [
  { initial: 'H', name: 'Harvard' },
  { initial: 'MIT', name: 'MIT', wide: true },
  { initial: 'S', name: 'Stanford' },
  { initial: 'S', name: 'Sorbonne' },
];

const recentPosts = [
  {
    author: 'prof_singh',
    avatar: 'PS',
    role: 'Assessment Contributor',
    title: 'How I used AI to redesign my midterm exam',
    preview: 'After attending the workshop, I rebuilt my entire assessment using Bloom\'s taxonomy mapped through PrepAI...',
    tags: ['#AI', '#assessment', '#bloom'],
    likes: 12,
    reuses: 4,
    views: 38,
    time: '2h ago',
  },
  {
    author: 'dr_mehta',
    avatar: 'DM',
    role: 'Quiz Creator',
    title: 'Case-based MCQs for pharmacology — feedback needed',
    preview: 'I created a set of 15 case-based MCQs targeting application-level thinking. Would love peer review...',
    tags: ['#MCQ', '#pharmacology', '#peer-review'],
    likes: 8,
    reuses: 2,
    views: 24,
    time: '5h ago',
  },
  {
    author: 'sarah_edu',
    avatar: 'SE',
    role: 'Community Mentor',
    title: 'Tips for writing distractor options that actually work',
    preview: 'Most distractors are too obviously wrong. Here\'s my framework for creating plausible alternatives...',
    tags: ['#tips', '#MCQ', '#assessment-design'],
    likes: 21,
    reuses: 9,
    views: 67,
    time: '1d ago',
  },
];

// --- Leaderboard data ---

type SortKey = 'overall' | 'seeds' | 'reuses' | 'nurtures';
type Movement = { dir: 'up' | 'down' | 'same'; val: number };

interface University {
  id: string;
  name: string;
  initials: string;
  points: number;
  seeds: number;
  reuses: number;
  nurtures: number;
  movement: Movement;
  isYou?: boolean;
}

const leaderboardData: University[] = [
  { id: 'uol', name: 'University of Lagos', initials: 'UL', points: 1204, seeds: 312, reuses: 189, nurtures: 47, movement: { dir: 'up', val: 2 } },
  { id: 'iitd', name: 'IIT Delhi', initials: 'ID', points: 847, seeds: 198, reuses: 156, nurtures: 39, movement: { dir: 'up', val: 1 } },
  { id: 'uon', name: 'University of Nairobi', initials: 'UN', points: 731, seeds: 167, reuses: 134, nurtures: 31, movement: { dir: 'same', val: 0 } },
  { id: 'sppu', name: 'SPPU Pune', initials: 'SP', points: 689, seeds: 145, reuses: 112, nurtures: 28, movement: { dir: 'down', val: 1 } },
  { id: 'mu', name: 'Mumbai University', initials: 'MU', points: 634, seeds: 132, reuses: 98, nurtures: 24, movement: { dir: 'up', val: 3 } },
  { id: 'ju', name: 'Jadavpur University', initials: 'JU', points: 612, seeds: 128, reuses: 91, nurtures: 21, movement: { dir: 'down', val: 2 } },
  { id: 'au', name: 'Amity University', initials: 'AU', points: 589, seeds: 119, reuses: 84, nurtures: 20, movement: { dir: 'up', val: 1 } },
  { id: 'bu', name: 'BITS Pilani', initials: 'BP', points: 561, seeds: 114, reuses: 79, nurtures: 18, movement: { dir: 'same', val: 0 } },
  { id: 'tut', name: 'Tshwane University', initials: 'TU', points: 534, seeds: 108, reuses: 72, nurtures: 17, movement: { dir: 'down', val: 1 } },
  { id: 'gndu', name: 'Guru Nanak Dev Univ.', initials: 'GN', points: 512, seeds: 102, reuses: 68, nurtures: 15, movement: { dir: 'up', val: 2 } },
  { id: 'wits', name: 'Univ. of Witwatersrand', initials: 'UW', points: 498, seeds: 97, reuses: 64, nurtures: 14, movement: { dir: 'same', val: 0 } },
  { id: 'pu', name: 'Panjab University', initials: 'PU', points: 476, seeds: 93, reuses: 59, nurtures: 13, movement: { dir: 'down', val: 3 } },
  { id: 'du', name: 'Delhi University', initials: 'DU', points: 461, seeds: 89, reuses: 55, nurtures: 12, movement: { dir: 'up', val: 1 } },
  { id: 'you', name: 'Your University', initials: 'YU', points: 443, seeds: 84, reuses: 51, nurtures: 11, movement: { dir: 'up', val: 3 }, isYou: true },
  { id: 'cu', name: 'Calcutta University', initials: 'CU', points: 428, seeds: 79, reuses: 47, nurtures: 10, movement: { dir: 'down', val: 1 } },
  { id: 'ou', name: 'Osmania University', initials: 'OU', points: 411, seeds: 74, reuses: 43, nurtures: 9, movement: { dir: 'same', val: 0 } },
];

function MovementBadge({ movement }: { movement: Movement }) {
  if (movement.dir === 'up') {
    return (
      <span className="inline-flex items-center gap-0.5 text-[10px] font-medium text-[#1D9E75] bg-[#1D9E75]/10 px-1.5 py-0.5 rounded-full">
        <ArrowUp className="w-3 h-3" />{movement.val}
      </span>
    );
  }
  if (movement.dir === 'down') {
    return (
      <span className="inline-flex items-center gap-0.5 text-[10px] font-medium text-red-500 bg-red-50 px-1.5 py-0.5 rounded-full">
        <ArrowDown className="w-3 h-3" />{movement.val}
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-0.5 text-[10px] font-medium text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded-full">
      <Minus className="w-3 h-3" />
    </span>
  );
}

function Podium({ universities }: { universities: University[] }) {
  const top3 = universities.slice(0, 3);
  if (top3.length < 3) return null;

  const medals = ['🥇', '🥈', '🥉'];
  const bgTints = [
    'bg-amber-50/60 border-amber-200',
    'bg-gray-50 border-gray-200',
    'bg-orange-50/50 border-orange-200',
  ];
  const order = [1, 0, 2];

  return (
    <div className="grid grid-cols-3 gap-2.5 mb-4">
      {order.map((idx) => {
        const uni = top3[idx];
        const rank = idx;
        return (
          <div
            key={uni.id}
            className={`relative rounded-lg border p-3 text-center ${bgTints[rank]} ${rank === 0 ? 'ring-1 ring-amber-200' : ''}`}
          >
            <div className="absolute top-2 right-2">
              <MovementBadge movement={uni.movement} />
            </div>
            <span className="text-xl mb-1 block">{medals[rank]}</span>
            <div className="w-9 h-9 rounded-full bg-white border border-gray-200 mx-auto mb-1.5 flex items-center justify-center text-[10px] font-bold text-neutral-600">
              {uni.initials}
            </div>
            <p className="text-[11px] font-medium text-neutral-800 leading-tight mb-0.5">{uni.name}</p>
            <p className="text-xs font-bold text-neutral-700">{uni.points.toLocaleString()} pts</p>
          </div>
        );
      })}
    </div>
  );
}

function RankedRow({ uni, rank, subtitle }: { uni: University; rank: number; subtitle?: string }) {
  return (
    <div
      className={`flex items-center gap-3 px-3 py-2.5 rounded-lg border transition-colors ${
        uni.isYou
          ? 'bg-[#378ADD]/8 border-[#378ADD]/25'
          : 'bg-white border-gray-100 hover:bg-gray-50/50'
      }`}
    >
      <span className={`text-xs font-medium w-5 text-center ${uni.isYou ? 'text-[#378ADD]' : 'text-neutral-400'}`}>{rank}</span>
      <div className={`w-7 h-7 rounded-full border flex items-center justify-center text-[9px] font-bold flex-shrink-0 ${
        uni.isYou ? 'bg-[#378ADD]/10 border-[#378ADD]/20 text-[#378ADD]' : 'bg-gray-100 border-gray-200 text-neutral-600'
      }`}>
        {uni.initials}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1.5">
          <span className={`text-xs font-medium truncate ${uni.isYou ? 'text-[#378ADD]' : 'text-neutral-800'}`}>{uni.name}</span>
          {uni.isYou && (
            <span className="text-[9px] font-medium text-white bg-[#378ADD] px-1.5 py-0 rounded">You</span>
          )}
        </div>
        {subtitle && (
          <p className="text-[10px] text-[#378ADD]">{subtitle}</p>
        )}
      </div>
      <div className="flex items-center gap-4 text-[10px]">
        <span className="text-[#1D9E75] font-medium w-8 text-center">{uni.seeds}</span>
        <span className="text-[#378ADD] font-medium w-8 text-center">{uni.reuses}</span>
        <span className="text-[#BA7517] font-medium w-8 text-center">{uni.nurtures}</span>
      </div>
      <MovementBadge movement={uni.movement} />
    </div>
  );
}

function MyRankBanner({ sorted }: { sorted: University[] }) {
  const youIndex = sorted.findIndex(u => u.isYou);
  if (youIndex === -1) return null;
  const you = sorted[youIndex];
  const rank = youIndex + 1;
  const totalCount = sorted.length;
  const topPercent = Math.round((rank / totalCount) * 100);

  return (
    <div className="bg-[#378ADD]/8 border border-[#378ADD]/20 rounded-xl p-4 mb-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[10px] font-medium text-[#378ADD]/70 mb-0.5">Your rank this week</p>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-[#378ADD]">#{rank}</span>
            <div className="flex items-center gap-1.5 text-[11px]">
              {you.movement.dir === 'up' && (
                <span className="text-[#1D9E75] font-medium flex items-center gap-0.5">
                  <ArrowUp className="w-3 h-3" />{you.movement.val} from last week
                </span>
              )}
              {you.movement.dir === 'down' && (
                <span className="text-red-500 font-medium flex items-center gap-0.5">
                  <ArrowDown className="w-3 h-3" />{you.movement.val} from last week
                </span>
              )}
              {you.movement.dir === 'same' && (
                <span className="text-gray-400 font-medium">Same as last week</span>
              )}
              <span className="text-neutral-300">·</span>
              <span className="text-neutral-500">Top {topPercent}% globally</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-4 text-[10px]">
            <div className="text-center">
              <p className="font-bold text-[#1D9E75]">{you.seeds}</p>
              <p className="text-neutral-400">Seeds</p>
            </div>
            <div className="text-center">
              <p className="font-bold text-[#378ADD]">{you.reuses}</p>
              <p className="text-neutral-400">Reuses</p>
            </div>
            <div className="text-center">
              <p className="font-bold text-[#BA7517]">{you.nurtures}</p>
              <p className="text-neutral-400">Nurtures</p>
            </div>
          </div>
          <button className="bg-[#378ADD] hover:bg-[#2a75c4] text-white text-[11px] font-medium px-3.5 py-1.5 rounded-full flex items-center gap-1 transition-colors flex-shrink-0">
            Improve rank <ArrowUp className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
}

function EllipsisRow({ from, to }: { from: number; to: number }) {
  return (
    <div className="flex items-center justify-center py-2 text-[11px] text-neutral-400 gap-2">
      <span className="w-8 h-px bg-gray-200" />
      <span>ranks {from}–{to}</span>
      <span className="w-8 h-px bg-gray-200" />
    </div>
  );
}

type Scope = 'global' | 'university' | 'department';

function LeaderboardPanel({ onClose }: { onClose: () => void }) {
  const [sortBy, setSortBy] = useState<SortKey>('overall');
  const [scope, setScope] = useState<Scope>('global');

  const sorted = useMemo(() => {
    const copy = [...leaderboardData];
    switch (sortBy) {
      case 'seeds': return copy.sort((a, b) => b.seeds - a.seeds);
      case 'reuses': return copy.sort((a, b) => b.reuses - a.reuses);
      case 'nurtures': return copy.sort((a, b) => b.nurtures - a.nurtures);
      default: return copy.sort((a, b) => b.points - a.points);
    }
  }, [sortBy]);

  const sortPills: { key: SortKey; label: string }[] = [
    { key: 'overall', label: 'Overall' },
    { key: 'seeds', label: 'Seeds' },
    { key: 'reuses', label: 'Reuses' },
    { key: 'nurtures', label: 'Nurtures' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100] flex justify-end"
      onClick={onClose}
    >
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 28, stiffness: 300 }}
        className="w-full max-w-lg bg-white h-full overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white z-10 border-b border-gray-100 px-5 py-3.5">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h2 className="text-base font-bold text-neutral-800">Leaderboard</h2>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-medium text-neutral-500 bg-gray-100 px-2.5 py-1 rounded-full">
                Week 12 · Mar 2026
              </span>
              <button onClick={onClose} className="w-7 h-7 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors">
                <X className="w-4 h-4 text-neutral-400" />
              </button>
            </div>
          </div>

          {/* Scope toggle */}
          <div className="flex bg-gray-100 rounded-full p-0.5 mb-2.5">
            {([
              { key: 'global' as Scope, label: 'Global' },
              { key: 'university' as Scope, label: 'My university' },
              { key: 'department' as Scope, label: 'My department' },
            ]).map((s) => (
              <button
                key={s.key}
                onClick={() => setScope(s.key)}
                className={`flex-1 px-3 py-1.5 rounded-full text-[11px] font-medium transition-all ${
                  scope === s.key
                    ? 'bg-white text-neutral-800 shadow-sm'
                    : 'text-neutral-400 hover:text-neutral-600'
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>

          {/* Sort pills */}
          <div className="flex gap-1.5 mb-2.5">
            {sortPills.map((pill) => (
              <button
                key={pill.key}
                onClick={() => setSortBy(pill.key)}
                className={`px-3 py-1.5 rounded-full text-[11px] font-medium transition-colors ${
                  sortBy === pill.key
                    ? 'bg-[#1D9E75] text-white'
                    : 'bg-gray-100 text-neutral-500 hover:bg-gray-200'
                }`}
              >
                {pill.label}
              </button>
            ))}
          </div>

          {/* Legend */}
          <div className="flex items-center gap-4 text-[10px] text-neutral-400">
            <span><span className="font-medium text-[#1D9E75]">Seeds</span> = assessments created</span>
            <span><span className="font-medium text-[#378ADD]">Reuses</span> = picked by others</span>
            <span><span className="font-medium text-[#BA7517]">Nurtures</span> = faculty mentored</span>
          </div>
        </div>

        <div className="px-5 py-4">
          {/* My Rank Banner */}
          <MyRankBanner sorted={sorted} />

          {/* Podium */}
          <Podium universities={sorted} />

          {/* Column headers for ranked list */}
          <div className="flex items-center gap-3 px-3 mb-1.5">
            <span className="text-[9px] text-neutral-400 w-5 text-center">#</span>
            <span className="w-7" />
            <span className="flex-1 text-[9px] text-neutral-400">University</span>
            <div className="flex items-center gap-4 text-[9px]">
              <span className="text-[#1D9E75] w-8 text-center">Seeds</span>
              <span className="text-[#378ADD] w-8 text-center">Reuses</span>
              <span className="text-[#BA7517] w-8 text-center">Nurtures</span>
            </div>
            <span className="w-10" />
          </div>

          {/* Smart ranked list with ellipsis */}
          <div className="flex flex-col gap-1.5">
            {(() => {
              const rest = sorted.slice(3);
              const youIdx = rest.findIndex(u => u.isYou);

              if (youIdx === -1 || youIdx <= 2) {
                return rest.map((uni, i) => {
                  const rank = i + 4;
                  const aboveUni = i > 0 ? rest[i - 1] : sorted[2];
                  const gap = aboveUni.seeds - uni.seeds;
                  return (
                    <RankedRow
                      key={uni.id}
                      uni={uni}
                      rank={rank}
                      subtitle={uni.isYou ? `${gap} seeds away from #${rank - 1}` : undefined}
                    />
                  );
                });
              }

              const visibleRows: React.ReactNode[] = [];

              // Show ranks 4-5 (indices 0-1)
              for (let i = 0; i < Math.min(2, rest.length); i++) {
                visibleRows.push(
                  <RankedRow key={rest[i].id} uni={rest[i]} rank={i + 4} />
                );
              }

              // Ellipsis for skipped ranks
              const ellipsisFrom = 6 + 1;
              const ellipsisTo = youIdx + 4 - 1;
              if (ellipsisTo >= ellipsisFrom) {
                visibleRows.push(
                  <EllipsisRow key="ellipsis" from={ellipsisFrom} to={ellipsisTo} />
                );
              }

              // Row above "You"
              if (youIdx > 0) {
                const aboveIdx = youIdx - 1;
                if (aboveIdx >= 2) {
                  visibleRows.push(
                    <RankedRow key={rest[aboveIdx].id} uni={rest[aboveIdx]} rank={aboveIdx + 4} />
                  );
                }
              }

              // "You" row
              const aboveYou = youIdx > 0 ? rest[youIdx - 1] : sorted[2];
              const seedGap = aboveYou.seeds - rest[youIdx].seeds;
              const youRank = youIdx + 4;
              visibleRows.push(
                <RankedRow
                  key={rest[youIdx].id}
                  uni={rest[youIdx]}
                  rank={youRank}
                  subtitle={`${seedGap} seeds away from #${youRank - 1}`}
                />
              );

              // One row below "You"
              if (youIdx + 1 < rest.length) {
                visibleRows.push(
                  <RankedRow key={rest[youIdx + 1].id} uni={rest[youIdx + 1]} rank={youIdx + 5} />
                );
              }

              return visibleRows;
            })()}
          </div>

          {/* Weekly shoutout */}
          <div className="mt-5 border-l-[3px] border-[#BA7517] bg-amber-50/40 rounded-r-lg px-4 py-3">
            <div className="flex items-center gap-1.5 mb-1">
              <Megaphone className="w-3.5 h-3.5 text-[#BA7517]" />
              <span className="text-[11px] font-medium text-[#BA7517]">Weekly shoutout</span>
            </div>
            <p className="text-xs text-neutral-600 leading-relaxed">
              <span className="font-medium text-neutral-800">{sorted[0]?.name}</span> leads the board this week with {sorted[0]?.seeds} seeds created and {sorted[0]?.reuses} reuses across the community. Outstanding contribution to AI-powered education!
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// --- Existing components ---

function CompactProfileCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-xl border border-gray-100 shadow-sm p-4"
    >
      <div className="flex items-center gap-3 mb-3">
        <Avatar className="w-12 h-12 border-2 border-green-100">
          <AvatarFallback className="bg-[#2d6a4f] text-white text-sm font-bold">SC</AvatarFallback>
        </Avatar>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5">
            <h3 className="text-sm font-bold text-neutral-800 truncate">Shoheb Chaus</h3>
            <BadgeCheck className="w-4 h-4 text-[#2d6a4f] flex-shrink-0" />
          </div>
          <p className="text-[11px] text-neutral-400">@crofile</p>
          <Badge className="bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-50 px-2 py-0 text-[9px] font-semibold mt-0.5 inline-flex items-center gap-1">
            <Trophy className="w-2.5 h-2.5" /> Assessment Mentor
          </Badge>
        </div>
        <Button
          variant="outline"
          size="sm"
          className="rounded-full border-[#2d6a4f] text-[#2d6a4f] hover:bg-[#2d6a4f] hover:text-white text-[10px] px-3 h-7"
        >
          Edit Profile
        </Button>
      </div>

      <div className="flex items-center gap-4 mb-3">
        <div className="flex-1 bg-gray-50 rounded-lg px-3 py-2">
          <p className="text-[9px] text-[#2d6a4f] uppercase tracking-wider font-semibold">Craft Score</p>
          <div className="flex items-center gap-2">
            <span className="text-xl font-extrabold text-[#2d6a4f]">904</span>
            <span className="text-[10px] font-bold text-amber-600 flex items-center gap-0.5">🏆 Top 3%</span>
          </div>
        </div>
        <div className="flex-1 bg-gray-50 rounded-lg px-3 py-2">
          <p className="text-[10px] text-neutral-500 mb-1">
            Reused <b className="text-neutral-700">16×</b> across <b className="text-neutral-700">4</b> universities
          </p>
          <div className="flex gap-1.5">
            {universityBadges.map((u, i) => (
              <span key={i} className={`${u.wide ? 'px-2' : 'w-6'} h-6 rounded-full bg-white border border-gray-200 text-[9px] font-bold text-neutral-600 flex items-center justify-center`} title={u.name}>
                {u.initial}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-2 text-center">
        {[
          { icon: Sprout, value: 29, label: 'Contributions', color: 'text-green-600' },
          { icon: Users, value: 7, label: 'Followers', color: 'text-[#2d6a4f]' },
          { icon: UserPlus, value: 9, label: 'Following', color: 'text-amber-500' },
          { icon: Star, value: 373, label: 'Points', color: 'text-amber-500' },
        ].map((s) => (
          <div key={s.label}>
            <s.icon className={`w-3.5 h-3.5 mx-auto mb-0.5 ${s.color}`} />
            <p className="text-sm font-bold text-neutral-800">{s.value}</p>
            <p className="text-[9px] text-neutral-400">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="flex gap-2 mt-3">
        {[
          { icon: BadgeCheck, title: 'Trusted Educator', sub: 'Verified by community' },
          { icon: Sprout, title: 'Active Educator', sub: 'Consistent Contributor' },
        ].map((b) => (
          <div key={b.title} className="flex-1 bg-green-50 border border-green-100 rounded-lg px-3 py-2 flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
              <b.icon className="w-3.5 h-3.5 text-green-600" />
            </div>
            <div>
              <p className="text-[11px] font-bold text-neutral-800">{b.title}</p>
              <p className="text-[9px] text-neutral-400">{b.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function TierRoadmap({ onViewCertificate }: { onViewCertificate: (tier: Tier) => void }) {
  const currentTierIndex = tiers.findIndex(t => t.status === 'current');
  const progressPercent = Math.round(((currentTierIndex + 1) / tiers.length) * 100);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className="bg-white rounded-xl border border-gray-100 shadow-sm p-4"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#2d6a4f] to-[#52b788] flex items-center justify-center">
            <Award className="w-4 h-4 text-white" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-neutral-800">Certificate Roadmap</h3>
            <p className="text-[10px] text-neutral-400">3 of 4 certificates earned</p>
          </div>
        </div>
      </div>

      <div className="relative mb-4">
        <div className="absolute top-[18px] left-[36px] right-[36px] h-1 bg-gray-100 rounded-full" />
        <div
          className="absolute top-[18px] left-[36px] h-1 bg-gradient-to-r from-[#2d6a4f] to-[#52b788] rounded-full transition-all"
          style={{ width: `${progressPercent - 12}%` }}
        />

        <div className="relative flex justify-between">
          {tiers.map((tier, i) => {
            const isEarned = tier.status === 'earned';
            const isCurrent = tier.status === 'current';
            const isLocked = tier.status === 'locked';

            return (
              <motion.button
                key={tier.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                onClick={() => !isLocked && onViewCertificate(tier)}
                className="flex flex-col items-center gap-1.5 z-10 group cursor-pointer w-[22%]"
                disabled={isLocked}
              >
                <div className={`w-9 h-9 rounded-full flex items-center justify-center border-2 shadow-sm transition-transform group-hover:scale-110
                  ${isEarned ? `${tier.dotColor} border-white` : ''}
                  ${isCurrent ? `${tier.dotColor} border-white ring-2 ring-amber-200` : ''}
                  ${isLocked ? 'bg-gray-100 border-gray-200' : ''}
                `}>
                  {isEarned ? (
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  ) : isCurrent ? (
                    <Star className="w-4 h-4 text-white fill-white" />
                  ) : (
                    <Lock className="w-3.5 h-3.5 text-gray-400" />
                  )}
                </div>
                <span
                  className="text-[10px] font-bold px-2 py-0.5 rounded-full border"
                  style={{
                    color: isLocked ? '#9CA3AF' : tier.color,
                    borderColor: isLocked ? '#E5E7EB' : `${tier.color}30`,
                    backgroundColor: isLocked ? '#F9FAFB' : `${tier.color}10`,
                  }}
                >
                  {tier.role}
                </span>
                <span className={`text-[9px] ${isLocked ? 'text-neutral-300' : 'text-neutral-400'}`}>
                  {tier.score} pts
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-4 gap-2">
        {tiers.map((tier) => {
          const isEarned = tier.status === 'earned';
          const isCurrent = tier.status === 'current';
          const isLocked = tier.status === 'locked';

          return (
            <button
              key={tier.id}
              onClick={() => !isLocked && onViewCertificate(tier)}
              disabled={isLocked}
              className={`rounded-lg p-2.5 border text-center transition-all bg-white
                ${!isLocked ? 'border-gray-200 hover:shadow-sm cursor-pointer' : ''}
                ${isCurrent ? 'ring-1 ring-amber-200' : ''}
                ${isLocked ? 'border-gray-100 cursor-not-allowed opacity-50' : ''}
              `}
            >
              <p className={`text-[10px] font-bold mb-0.5 ${isLocked ? 'text-neutral-400' : 'text-neutral-700'}`}>
                {tier.role}
              </p>
              <p className={`text-[8px] leading-snug ${isLocked ? 'text-neutral-300' : 'text-neutral-400'}`}>
                {tier.description}
              </p>
              {(isEarned || isCurrent) && (
                <span className="inline-flex items-center gap-0.5 mt-1.5 text-[9px] font-medium text-[#2d6a4f]">
                  View <ChevronRight className="w-2.5 h-2.5" />
                </span>
              )}
            </button>
          );
        })}
      </div>
    </motion.div>
  );
}

function CertificateViewer({ tier, onClose }: { tier: Tier; onClose: () => void }) {
  const isLocked = tier.status === 'locked';

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <div className={`w-6 h-6 rounded-full ${tier.dotColor} flex items-center justify-center`}>
                {isLocked ? <Lock className="w-3 h-3 text-white" /> : <Award className="w-3 h-3 text-white" />}
              </div>
              <div>
                <h3 className="text-sm font-bold text-neutral-800">{tier.role}</h3>
                <p className="text-[10px] text-neutral-400">AI Enabled Educator Certificate</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {!isLocked && (
                <>
                  <Button variant="outline" size="sm" className="rounded-full text-[10px] h-7 px-3 flex items-center gap-1">
                    <Share2 className="w-3 h-3" /> Share
                  </Button>
                  <Button variant="outline" size="sm" className="rounded-full text-[10px] h-7 px-3 flex items-center gap-1">
                    <Download className="w-3 h-3" /> Download
                  </Button>
                </>
              )}
              <button onClick={onClose} className="w-7 h-7 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors">
                <X className="w-4 h-4 text-neutral-400" />
              </button>
            </div>
          </div>

          <div className="p-5">
            <div className="relative rounded-xl overflow-hidden border border-gray-100">
              <img
                src={tier.image}
                alt={`${tier.role} Certificate`}
                className="w-full h-auto"
              />
              {isLocked && (
                <div className="absolute inset-0 bg-white/50 backdrop-blur-[2px] flex items-center justify-center">
                  <div className="bg-white/95 rounded-full px-5 py-2.5 shadow-md flex items-center gap-2">
                    <Lock className="w-4 h-4 text-neutral-400" />
                    <span className="text-xs font-medium text-neutral-500">Score {tier.score} pts to unlock</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function EarnedCertificates({ onViewCertificate }: { onViewCertificate: (tier: Tier) => void }) {
  const earned = tiers.filter(t => t.status === 'earned' || t.status === 'current');

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className="bg-white rounded-xl border border-gray-100 shadow-sm p-4"
    >
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-bold text-neutral-800 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-400" /> My Certificates
        </h3>
        <span className="text-[10px] text-neutral-400">{earned.length} earned</span>
      </div>

      <div className="grid grid-cols-3 gap-2.5">
        {earned.map((tier) => (
          <button
            key={tier.id}
            onClick={() => onViewCertificate(tier)}
            className="rounded-lg overflow-hidden border border-gray-200 hover:shadow-md transition-all group cursor-pointer bg-white"
          >
            <div className="relative">
              <img src={tier.image} alt={tier.role} className="w-full h-auto" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                <Eye className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-md" />
              </div>
            </div>
            <div className="px-2 py-1.5 text-center">
              <span
                className="text-[9px] font-bold px-2 py-0.5 rounded-full border inline-block"
                style={{
                  color: tier.color,
                  borderColor: `${tier.color}30`,
                  backgroundColor: `${tier.color}10`,
                }}
              >
                {tier.role}
              </span>
            </div>
          </button>
        ))}
      </div>
    </motion.div>
  );
}

function PostCard({ post }: { post: typeof recentPosts[0] }) {
  return (
    <div className="bg-white rounded-xl p-4 border border-gray-100 hover:shadow-sm transition-shadow">
      <div className="flex items-center gap-2.5 mb-2">
        <Avatar className="w-7 h-7">
          <AvatarFallback className="text-[9px] bg-orange-100 text-orange-700">{post.avatar}</AvatarFallback>
        </Avatar>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-neutral-800">{post.author}</span>
            <Badge variant="outline" className="text-[9px] text-[#2d6a4f] border-green-200 bg-green-50 px-1.5 py-0">
              {post.role}
            </Badge>
            <span className="text-[10px] text-neutral-400 ml-auto">{post.time}</span>
          </div>
        </div>
      </div>

      <h4 className="text-sm font-semibold text-neutral-800 mb-1">{post.title}</h4>
      <p className="text-xs text-neutral-500 leading-relaxed mb-2 line-clamp-2">{post.preview}</p>

      <div className="flex items-center gap-2 mb-2.5">
        {post.tags.map((tag) => (
          <span key={tag} className="text-[10px] text-blue-500">{tag}</span>
        ))}
      </div>

      <div className="flex items-center gap-4 pt-2 border-t border-gray-50">
        <button className="flex items-center gap-1.5 text-[11px] text-neutral-500 hover:text-green-600 transition-colors">
          <Heart className="w-3.5 h-3.5" /> {post.likes}
        </button>
        <button className="flex items-center gap-1.5 text-[11px] text-neutral-500 hover:text-green-600 transition-colors">
          <RefreshCw className="w-3.5 h-3.5" /> {post.reuses}
        </button>
        <button className="flex items-center gap-1.5 text-[11px] text-neutral-500 hover:text-green-600 transition-colors">
          <Eye className="w-3.5 h-3.5" /> {post.views}
        </button>
      </div>
    </div>
  );
}

export function AIEnabledEducatorCertificate({ onBack }: AIEnabledEducatorCertificateProps) {
  const [viewingCertificate, setViewingCertificate] = useState<Tier | null>(null);
  const [showLeaderboard, setShowLeaderboard] = useState(false);

  return (
    <div className="min-h-screen bg-[#fafafa]">
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14">
          <div className="flex items-center gap-4">
            {onBack && (
              <button onClick={onBack} className="flex items-center gap-1 text-xs text-neutral-500 hover:text-[#2d6a4f] transition-colors">
                <ChevronLeft className="w-4 h-4" /> Back
              </button>
            )}
            <div className="flex items-center gap-1.5">
              <Sprout className="w-5 h-5 text-[#1D9E75]" />
              <div>
                <span className="text-sm font-bold text-neutral-800 leading-none block">PrepAI Community</span>
                <span className="text-[9px] text-neutral-400 leading-none">Faculty Platform</span>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-5 text-xs font-medium text-neutral-500">
            <button className="hover:text-[#1D9E75] transition-colors">Feed</button>
            <button className="hover:text-[#1D9E75] transition-colors">Workshops</button>
            <button className="hover:text-[#1D9E75] transition-colors">Profile</button>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={() => setShowLeaderboard(!showLeaderboard)}
              className="flex items-center gap-1.5 bg-[#1D9E75] hover:bg-[#178a65] text-white rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors"
            >
              <Trophy className="w-3.5 h-3.5" />
              {showLeaderboard ? 'Hide leaderboard' : 'Leaderboard'}
            </button>
            <Avatar className="w-8 h-8 cursor-pointer">
              <AvatarFallback className="bg-[#2d6a4f] text-white text-sm font-bold">SC</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5">
        <div className="flex gap-5">
          <aside className="hidden lg:flex flex-col gap-4 w-[300px] flex-shrink-0">
            <CompactProfileCard />
            <EarnedCertificates onViewCertificate={setViewingCertificate} />
          </aside>

          <main className="flex-1 min-w-0 flex flex-col gap-4">
            <div className="lg:hidden">
              <CompactProfileCard />
            </div>

            <TierRoadmap onViewCertificate={setViewingCertificate} />

            <div className="lg:hidden">
              <EarnedCertificates onViewCertificate={setViewingCertificate} />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="bg-gradient-to-r from-[#2d6a4f] to-[#40916c] rounded-xl px-5 py-4 text-white flex items-center justify-between relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-white/5 -mr-8 -mt-8" />
              <div className="flex items-center gap-3 relative z-10">
                <Sparkles className="w-5 h-5 text-amber-300 flex-shrink-0" />
                <div>
                  <p className="text-sm font-bold">Assessment Authority — 296 pts to go!</p>
                  <p className="text-[11px] text-green-100">Unlock the highest AI Enabled Educator recognition</p>
                </div>
              </div>
              <Button className="bg-white text-[#2d6a4f] hover:bg-green-50 rounded-full px-4 py-2 text-xs font-semibold flex items-center gap-1.5 shadow-sm relative z-10 flex-shrink-0">
                Continue <ArrowRight className="w-3.5 h-3.5" />
              </Button>
            </motion.div>

            <div>
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-sm font-bold text-neutral-800">Community Posts</h2>
                <button className="text-[11px] text-[#2d6a4f] hover:underline font-medium flex items-center gap-1">
                  View All <ArrowRight className="w-3 h-3" />
                </button>
              </div>
              <div className="flex flex-col gap-3">
                {recentPosts.map((post, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 + idx * 0.08 }}
                  >
                    <PostCard post={post} />
                  </motion.div>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>

      {viewingCertificate && (
        <CertificateViewer
          tier={viewingCertificate}
          onClose={() => setViewingCertificate(null)}
        />
      )}

      <AnimatePresence>
        {showLeaderboard && (
          <LeaderboardPanel onClose={() => setShowLeaderboard(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}
