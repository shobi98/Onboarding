import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Search,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Eye,
  Users,
  ArrowRight,
  Sprout,
  Calendar,
  Clock,
  BookOpen,
  FileText,
  Newspaper,
  Brain,
  FlaskConical,
  GraduationCap,
  RefreshCw,
  Heart,
  Sparkles,
  BadgeCheck,
} from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { Avatar, AvatarFallback } from '@/app/components/ui/avatar';

interface CommunityHomeProps {
  onBack?: () => void;
}

const universities = [
  { name: 'Tshwane University of Technology', members: 1, verified: true, image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=300&h=200&fit=crop' },
  { name: 'Byte Size College', members: 1, verified: true, image: 'https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=300&h=200&fit=crop' },
  { name: 'Guru Nanak Dev University Amritsar', members: 1, verified: true, image: 'https://images.unsplash.com/photo-1580537659466-0a9bfa916a54?w=300&h=200&fit=crop' },
  { name: 'University of the Witwatersrand', members: 1, verified: false, image: 'https://images.unsplash.com/photo-1568792923760-d70635a89fdc?w=300&h=200&fit=crop' },
];

const discussions = [
  {
    author: 'prof_singh',
    avatar: 'PS',
    category: 'Education',
    title: 'My students struggle with instructions',
    description: 'I give clear instructions. I repeat them. Half the class does something else entirely...',
    tags: ['#class', '#instructions', '#assessment'],
    views: 2,
  },
  {
    author: 'dr_mehta',
    avatar: 'DM',
    category: 'AI',
    title: 'How are you using AI tools for formative assessment?',
    description: 'Curious to know what tools other educators are using for quick formative checks...',
    tags: ['#AI', '#formative', '#tools'],
    views: 5,
  },
];

function HeroBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-xl px-5 py-3.5 flex items-center gap-5 overflow-hidden relative border border-gray-100 shadow-sm"
    >
      <div className="absolute right-0 top-0 bottom-0 w-[45%] pointer-events-none">
        <img
          src="/hero-leaves.jpg"
          alt=""
          className="w-full h-full object-cover object-left opacity-20"
        />
      </div>

      <div className="relative z-10 flex-1 text-center flex flex-col items-center">
        <h1 className="text-sm sm:text-base font-semibold text-neutral-800 flex items-center gap-2 mb-1">
          <Sprout className="w-4 h-4 text-green-600" />
          Where Educators Build Better Assessments Together
        </h1>
        <p className="text-[11px] sm:text-xs text-neutral-500 leading-relaxed mb-2 max-w-xl">
          Share real assessment work, reuse what others created,
          and build recognition through impact.
        </p>
        <div className="flex items-center gap-4 text-[11px] text-neutral-500">
          <span className="flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5 text-green-600" /> <b className="text-neutral-700">8,200</b> Seeds
          </span>
          <span className="flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5 text-green-600" /> <b className="text-neutral-700">1,300</b> Educators
          </span>
          <span className="flex items-center gap-1.5">
            <GraduationCap className="w-3.5 h-3.5 text-green-600" /> <b className="text-neutral-700">92</b> Universities
          </span>
        </div>
      </div>
    </motion.div>
  );
}

function WorkshopBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -15 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: 0.15 }}
      className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm"
    >
      <h3 className="text-sm font-bold text-neutral-800 mb-3">Upcoming Workshop</h3>

      <div className="flex items-center gap-3 text-[11px] text-neutral-500 mb-2">
        <span className="flex items-center gap-1">
          <Calendar className="w-3 h-3" /> Apr 12
        </span>
        <span className="flex items-center gap-1">
          <Clock className="w-3 h-3" /> 90 minutes
        </span>
      </div>

      <p className="text-sm font-semibold text-neutral-800 leading-snug mb-2">
        Designing Better Case-Based MCQs
      </p>

      <div className="flex items-center gap-2 mb-3">
        <Avatar className="w-6 h-6">
          <AvatarFallback className="text-[10px] bg-green-100 text-green-700">AB</AvatarFallback>
        </Avatar>
        <span className="text-xs text-neutral-600">Dr. Ahmed Bello</span>
        <Sparkles className="w-3 h-3 text-amber-400" />
      </div>

      <Button className="w-full bg-[#2d6a4f] hover:bg-[#245a42] text-white rounded-full py-2 text-xs font-medium flex items-center justify-center gap-1.5">
        Reserve Seat <ChevronRight className="w-3.5 h-3.5" />
      </Button>

      <button className="w-full text-center text-[11px] text-neutral-500 hover:text-green-700 mt-2 flex items-center justify-center gap-1">
        <ArrowRight className="w-3 h-3" /> Workshop Library
      </button>
    </motion.div>
  );
}

function CommunityResources() {
  const resources = [
    { icon: BookOpen, label: 'Workshop Library' },
    { icon: FileText, label: 'Assessment Guides' },
    { icon: Newspaper, label: 'Research Articles' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -15 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: 0.25 }}
      className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm"
    >
      <h3 className="text-sm font-bold text-neutral-800 mb-3">Community Resources</h3>
      <div className="flex flex-col gap-1">
        {resources.map((item) => (
          <button
            key={item.label}
            className="flex items-center gap-2.5 px-2 py-2 rounded-lg text-xs text-neutral-700 hover:bg-gray-50 transition-colors w-full text-left"
          >
            <item.icon className="w-4 h-4 text-neutral-400" />
            {item.label}
          </button>
        ))}
      </div>
    </motion.div>
  );
}

function Subcommunities() {
  const subs = [
    { icon: Brain, label: 'AI in Education' },
    { icon: FlaskConical, label: 'Case-Based Learning' },
    { icon: GraduationCap, label: 'STEM Assessments' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -15 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: 0.35 }}
      className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm"
    >
      <h3 className="text-sm font-bold text-neutral-800 mb-3">Subcommunities</h3>
      <div className="flex flex-col gap-1">
        {subs.map((item) => (
          <button
            key={item.label}
            className="flex items-center justify-between px-2 py-2 rounded-lg text-xs text-neutral-700 hover:bg-gray-50 transition-colors w-full"
          >
            <span className="flex items-center gap-2.5">
              <item.icon className="w-4 h-4 text-neutral-400" />
              {item.label}
            </span>
            <ChevronRight className="w-3.5 h-3.5 text-neutral-300" />
          </button>
        ))}
      </div>
    </motion.div>
  );
}

function DiscussionCard({ discussion }: { discussion: typeof discussions[0] }) {
  return (
    <div className="bg-white rounded-xl p-4 border border-gray-100 hover:shadow-sm transition-shadow">
      <div className="flex items-start justify-between mb-1.5">
        <div className="flex items-center gap-2.5">
          <Avatar className="w-8 h-8">
            <AvatarFallback className="text-[10px] bg-orange-100 text-orange-700">{discussion.avatar}</AvatarFallback>
          </Avatar>
          <span className="text-sm font-medium text-neutral-800">{discussion.author}</span>
          <Badge variant="outline" className="text-[10px] text-green-600 border-green-200 bg-green-50 px-2 py-0.5">
            {discussion.category}
          </Badge>
        </div>
        <div className="flex items-center gap-1 text-neutral-400 text-xs">
          <Eye className="w-3.5 h-3.5" /> {discussion.views}
        </div>
      </div>

      <h3 className="text-sm font-semibold text-neutral-800 mb-1">{discussion.title}</h3>
      <p className="text-xs text-neutral-500 leading-relaxed mb-2">{discussion.description}</p>

      <div className="flex items-center gap-2 mb-3">
        {discussion.tags.map((tag) => (
          <span key={tag} className="text-[11px] text-blue-500">{tag}</span>
        ))}
      </div>

      <div className="flex items-center gap-4 pt-2 border-t border-gray-50">
        <button className="flex items-center gap-1.5 text-[11px] text-neutral-500 hover:text-green-600 transition-colors">
          <RefreshCw className="w-3.5 h-3.5" /> Reuse
        </button>
        <button className="flex items-center gap-1.5 text-[11px] text-neutral-500 hover:text-green-600 transition-colors">
          <Heart className="w-3.5 h-3.5" /> Nurture
        </button>
        <button className="flex items-center gap-1.5 text-[11px] text-neutral-500 hover:text-green-600 transition-colors">
          <Eye className="w-3.5 h-3.5" /> Preview
        </button>
      </div>
    </div>
  );
}

function UniversityCard({ uni }: { uni: typeof universities[0] }) {
  return (
    <div className="min-w-[175px] max-w-[190px] bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 flex-shrink-0 cursor-pointer hover:shadow-md transition-shadow">
      <div className="relative h-[90px]">
        <img src={uni.image} alt={uni.name} className="w-full h-full object-cover" />
        {uni.verified && (
          <span className="absolute top-2 right-2 bg-green-500 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full flex items-center gap-1">
            <BadgeCheck className="w-3 h-3" /> Verified
          </span>
        )}
      </div>
      <div className="p-2.5">
        <p className="text-[11px] font-bold text-neutral-800 line-clamp-2 leading-tight mb-1.5">{uni.name}</p>
        <div className="flex items-center justify-between">
          <span className="text-[10px] text-neutral-500 flex items-center gap-1">
            <Users className="w-2.5 h-2.5" /> {uni.members} members
          </span>
          <div className="w-6 h-6 rounded-full bg-green-50 flex items-center justify-center">
            <ChevronRight className="w-3.5 h-3.5 text-green-500" />
          </div>
        </div>
      </div>
    </div>
  );
}

function ExploreUniversities() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className="bg-[#e8f5e9] rounded-xl p-4"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
            <GraduationCap className="w-4 h-4 text-green-700" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-neutral-800">Explore Universities</h2>
            <p className="text-[11px] text-neutral-500">Join communities from top institutions</p>
          </div>
        </div>
        <Button className="bg-[#2d6a4f] hover:bg-[#245a42] text-white rounded-full px-4 py-2 text-xs font-medium flex items-center gap-1.5">
          + Add University
        </Button>
      </div>

      <div className="relative">
        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
          {universities.map((uni, idx) => (
            <UniversityCard key={idx} uni={uni} />
          ))}
        </div>
        <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 z-10">
          <ChevronLeft className="w-4 h-4 text-neutral-600" />
        </button>
        <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 z-10">
          <ChevronRight className="w-4 h-4 text-neutral-600" />
        </button>
      </div>

      <div className="flex justify-end mt-2">
        <button className="text-xs text-green-700 hover:underline font-medium">View All</button>
      </div>
    </motion.div>
  );
}

function SeedFilterTabs({ activeTab, onTabChange }: { activeTab: string; onTabChange: (tab: string) => void }) {
  const tabs = [
    { id: 'all', label: 'All Seeds', icon: '🌱' },
    { id: 'materials', label: 'Shared Materials', icon: '📋' },
    { id: 'quizzes', label: 'Ready-to-Use Quizzes', icon: '📝' },
  ];

  return (
    <div className="flex items-center justify-between flex-wrap gap-3">
      <div className="flex gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`px-4 py-2 rounded-full text-xs font-medium transition-colors flex items-center gap-1.5 ${
              activeTab === tab.id
                ? 'bg-[#2d6a4f] text-white'
                : 'bg-white text-neutral-600 border border-gray-200 hover:bg-gray-50'
            }`}
          >
            {tab.label} <span className="text-sm">{tab.icon}</span>
          </button>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1.5 text-xs">
          <span className="text-neutral-500">Topic</span>
          <button className="flex items-center gap-1 bg-white border border-gray-200 rounded-lg px-3 py-1.5 text-neutral-700 hover:bg-gray-50">
            All <ChevronDown className="w-3 h-3" />
          </button>
        </div>
        <div className="flex items-center gap-1.5 text-xs">
          <span className="text-neutral-500">Sort By</span>
          <button className="flex items-center gap-1 bg-white border border-gray-200 rounded-lg px-3 py-1.5 text-neutral-700 hover:bg-gray-50">
            Latest <ChevronDown className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
}

function MentorUniversityCard({ uni }: { uni: typeof universities[0] }) {
  return (
    <div className="min-w-[180px] bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 flex-shrink-0 cursor-pointer hover:shadow-md transition-shadow">
      <div className="relative h-[80px]">
        <img src={uni.image} alt={uni.name} className="w-full h-full object-cover" />
      </div>
      <div className="p-2.5">
        <p className="text-[11px] font-semibold text-neutral-800 line-clamp-2 leading-tight mb-1">{uni.name}</p>
        <span className="text-[10px] text-neutral-500 flex items-center gap-1">
          <Users className="w-3 h-3" /> {uni.members} member{uni.members !== 1 ? 's' : ''}
        </span>
      </div>
    </div>
  );
}

export function CommunityHome({ onBack }: CommunityHomeProps) {
  const [activeSeedTab, setActiveSeedTab] = useState('all');

  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Top Navigation */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-neutral-800 tracking-tight">
              <span className="inline-block mr-1">📐</span>PrepAI
            </span>
          </div>

          <div className="hidden sm:flex items-center bg-gray-50 rounded-full px-4 py-2 w-[340px] border border-gray-200">
            <Search className="w-4 h-4 text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search Seeds, quizzes, materials..."
              className="bg-transparent text-sm text-neutral-600 outline-none w-full"
            />
          </div>

          <div className="flex items-center gap-3">
            <Button className="bg-[#2d6a4f] hover:bg-[#245a42] text-white rounded-full px-4 py-2 text-sm font-medium flex items-center gap-1.5">
              <Sprout className="w-4 h-4" /> Plant Seed
            </Button>
            <Avatar className="w-8 h-8 cursor-pointer">
              <AvatarFallback className="bg-neutral-200 text-neutral-600 text-sm">U</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5">
        {/* Top Hero Banner */}
        <div className="mb-5">
          <HeroBanner />
        </div>

        {/* Explore Universities - full width */}
        <div className="mb-5">
          <ExploreUniversities />
        </div>

        {/* Seed Filter Tabs - full width */}
        <div className="mb-5">
          <SeedFilterTabs activeTab={activeSeedTab} onTabChange={setActiveSeedTab} />
        </div>

        <div className="flex gap-5">
          {/* Left Sidebar */}
          <aside className="hidden md:flex flex-col gap-4 w-[220px] flex-shrink-0">
            <WorkshopBanner />
            <CommunityResources />
            <Subcommunities />
          </aside>

          {/* Right Content */}
          <main className="flex-1 min-w-0">

            {/* Discussion List */}
            <div className="flex flex-col gap-3 mb-6">
              {discussions.map((d, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                >
                  <DiscussionCard discussion={d} />
                </motion.div>
              ))}
            </div>

            {/* Top Assessment Mentors */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-sm font-bold text-neutral-800">Top Assessment Mentors This Week</h2>
                <button className="text-[11px] text-neutral-500 hover:text-green-700 flex items-center gap-1 font-medium">
                  <ArrowRight className="w-3 h-3" /> View Leaderboard
                </button>
              </div>
              <div className="flex gap-3 overflow-x-auto pb-2">
                {universities.map((uni, idx) => (
                  <MentorUniversityCard key={idx} uni={uni} />
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
