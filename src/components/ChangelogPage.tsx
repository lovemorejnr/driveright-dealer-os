import React, { useState } from 'react';

type UpdateType = 'New feature' | 'Improvement' | 'Security';
type Filter = 'All updates' | UpdateType;

interface ChangelogEntry {
  date: string;
  area: string;
  type: UpdateType;
  title: string;
  details: string[];
}

const CHANGELOG_ENTRIES: ChangelogEntry[] = [
  {
    date: '12 September 2026',
    area: 'Inventory',
    type: 'New feature',
    title: 'Vehicle arrivals are now tracked from source to showroom',
    details: [
      'Record the supplier, expected arrival date, shipping status, and destination branch for every incoming vehicle.',
      'Mark a vehicle as arrived once and its status updates across the dealership workspace.',
    ],
  },
  {
    date: '29 August 2026',
    area: 'June AI',
    type: 'Improvement',
    title: 'Faster buyer reply drafts with clearer lead context',
    details: [
      'June now uses the vehicle, customer history, and latest enquiry when preparing a reply draft.',
      'Lead scores and suggested next actions are visible beside each conversation.',
    ],
  },
  {
    date: '14 August 2026',
    area: 'Sales',
    type: 'New feature',
    title: 'Deposits and part-payments stay tied to the sale',
    details: [
      'Log deposits, bank transfers, and later payments against the outstanding vehicle balance.',
      'Generate a branded invoice and official receipt from the same sales record.',
    ],
  },
  {
    date: '30 July 2026',
    area: 'Accounts',
    type: 'Security',
    title: 'Two-factor sign-in for dealership teams',
    details: [
      'Dealership owners can require an additional verification step when staff sign in.',
      'Session and role checks now protect sensitive payment and customer records.',
    ],
  },
  {
    date: '18 July 2026',
    area: 'Documents',
    type: 'Improvement',
    title: 'Expiry tracking for vehicle documents',
    details: [
      'Registration, customs, warranty, and proof-of-ownership records now show their expiry state at a glance.',
      'Teams can find missing paperwork before a viewing or handover is delayed.',
    ],
  },
  {
    date: '2 July 2026',
    area: 'Marketplace',
    type: 'New feature',
    title: 'Publish verified stock from one inventory record',
    details: [
      'Dealers can prepare marketplace listings from the photos and specifications already stored in DriveRight OS.',
      'Sold and reserved statuses remain visible to the team while listings are managed.',
    ],
  },
  {
    date: '16 June 2026',
    area: 'Reports',
    type: 'Improvement',
    title: 'Clearer revenue and conversion reporting',
    details: [
      'Sales, units, and enquiry conversion are calculated from dealership records in one reporting view.',
      'Date filters make it easier to compare performance across trading periods.',
    ],
  },
  {
    date: '28 May 2026',
    area: 'Operations',
    type: 'New feature',
    title: 'DriveRight Dealer OS goes live',
    details: [
      'The first release brings inventory, enquiries, customers, sales, calendars, team roles, and dealership reporting into one system.',
      'Excel inventory import helps existing dealerships get started without rebuilding their stock list by hand.',
    ],
  },
];

const FILTERS: Filter[] = ['All updates', 'New feature', 'Improvement', 'Security'];

const badgeStyles: Record<UpdateType, string> = {
  'New feature': 'border-[#FF5300]/30 bg-[#FF5300]/8 text-[#d94700]',
  Improvement: 'border-[#014090]/25 bg-[#014090]/8 text-[#014090]',
  Security: 'border-black/20 bg-black/5 text-black/70',
};

interface ChangelogPageProps {
  onOpenDemo: () => void;
  onNavigate: (route: string) => void;
}

export const ChangelogPage: React.FC<ChangelogPageProps> = ({ onOpenDemo, onNavigate }) => {
  const [activeFilter, setActiveFilter] = useState<Filter>('All updates');

  const visibleEntries = activeFilter === 'All updates'
    ? CHANGELOG_ENTRIES
    : CHANGELOG_ENTRIES.filter((entry) => entry.type === activeFilter);

  const countFor = (filter: Filter) => filter === 'All updates'
    ? CHANGELOG_ENTRIES.length
    : CHANGELOG_ENTRIES.filter((entry) => entry.type === filter).length;

  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <section className="px-4 pb-12 pt-14 text-center sm:px-6 sm:pb-16 sm:pt-20 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-bold text-[#FF5300]">Product updates</p>
          <h1 className="mt-3 font-['Outfit'] text-4xl font-extrabold tracking-tight text-black sm:text-5xl lg:text-6xl">
            Changelog
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-black/60 sm:text-lg">
            The meaningful improvements we ship across DriveRight Dealer OS, newest first.
          </p>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 sm:pb-28 lg:px-8">
        <div className="mx-auto grid min-w-0 max-w-5xl gap-10 lg:grid-cols-[208px_minmax(0,1fr)] lg:gap-16">
          <aside className="min-w-0 lg:sticky lg:top-24 lg:self-start" aria-label="Filter changelog updates">
            <p className="mb-3 text-xs font-bold uppercase tracking-wider text-black/45">Filter</p>
            <div className="flex max-w-full gap-2 overflow-x-auto pb-2 lg:block lg:space-y-1 lg:overflow-visible lg:pb-0">
              {FILTERS.map((filter) => {
                const isActive = activeFilter === filter;
                return (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setActiveFilter(filter)}
                    aria-pressed={isActive}
                    className={`flex min-w-max items-center justify-between gap-6 rounded-lg px-3 py-2 text-sm font-semibold transition-colors lg:w-full ${
                      isActive
                        ? 'bg-[#014090]/8 text-[#014090]'
                        : 'text-black/55 hover:bg-black/5 hover:text-black'
                    }`}
                  >
                    <span>{filter}</span>
                    <span className="text-xs tabular-nums opacity-70">{countFor(filter)}</span>
                  </button>
                );
              })}
            </div>
          </aside>

          <div className="min-w-0" aria-live="polite">
            {visibleEntries.map((entry) => (
              <article key={`${entry.date}-${entry.title}`} className="border-b border-black/10 pb-10 [&+article]:pt-10 sm:pb-12 sm:[&+article]:pt-12">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-2 text-xs font-medium text-black/55 sm:text-sm">
                  <time>{entry.date}</time>
                  <span className="text-black/20" aria-hidden="true">/</span>
                  <span>{entry.area}</span>
                  <span className={`rounded-full border px-2.5 py-1 text-[11px] font-bold ${badgeStyles[entry.type]}`}>
                    {entry.type}
                  </span>
                </div>

                <h2 className="mt-4 break-words font-['Outfit'] text-2xl font-bold tracking-tight text-black sm:text-3xl">
                  {entry.title}
                </h2>

                <ul className="mt-5 space-y-3 text-sm leading-7 text-black/65 sm:text-base">
                  {entry.details.map((detail) => (
                    <li key={detail} className="flex gap-3">
                      <span className="mt-[11px] h-1 w-1 shrink-0 rounded-full bg-[#FF5300]" aria-hidden="true" />
                      <span className="min-w-0 break-words">{detail}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#014090]/15 bg-[#014090]/5 px-4 py-14 sm:px-6 sm:py-18 lg:px-8">
        <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-['Outfit'] text-2xl font-bold text-black sm:text-3xl">See what DriveRight can do for your dealership.</h2>
            <p className="mt-2 text-sm text-black/60 sm:text-base">Explore the system or book a guided walkthrough with our team.</p>
          </div>
          <div className="flex w-full shrink-0 gap-3 sm:w-auto">
            <button
              type="button"
              onClick={() => onNavigate('products')}
              className="flex-1 rounded-md border border-[#014090]/25 bg-white px-4 py-2.5 text-sm font-bold text-[#014090] transition-colors hover:bg-[#014090] hover:text-white sm:flex-none"
            >
              Explore the OS
            </button>
            <button
              type="button"
              onClick={onOpenDemo}
              className="flex-1 rounded-md bg-[#FF5300] px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-black sm:flex-none"
            >
              Book a demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
