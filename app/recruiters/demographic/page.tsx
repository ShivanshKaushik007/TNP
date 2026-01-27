'use client';

import { useState, useEffect, useRef } from 'react';
import Script from 'next/script';
import Link from 'next/link';

// Define types for our data structure
type ProgramData = {
  labels: string[];
  values: number[];
  colors: string[];
};

type AllData = {
  programs: ProgramData;
  btech: ProgramData;
  mtech: ProgramData;
  mba: ProgramData;
  mca: ProgramData;
};

type PlacementOffersData = {
  labels: string[];
  values: number[];
};

type PackagesData = {
  labels: string[];
  highest: number[];
  average: number[];
};

// Data Constants
const DATA: AllData = {
  programs: {
    labels: ["MBA", "MCA", "B.Tech", "M.Tech"],
    values: [57, 67, 541, 108],
    colors: ["#F6C06E", "#F6A8BF", "#B79AD6", "#6E98A3"],
  },
  btech: {
    labels: ["CS-R", "CS-AI", "CS-SF", "ECE", "ME", "CHE", "EE", "CE"],
    values: [74, 69, 72, 72, 64, 64, 57, 69],
    colors: [
      "#F6C06E", "#F6A78E", "#F6A8BF", "#E5B2D9",
      "#B79AD6", "#9CA8D6", "#7F9CC7", "#6E98A3",
    ],
  },
  mtech: {
    labels: [
      "Electrical", "Structural", "Biotech",
      "Environmental", "Mechanical", "Micro Electronics",
    ],
    values: [20, 22, 18, 16, 18, 14],
    colors: [
      "#F6C06E", "#F6A78E", "#F6A8BF",
      "#E5B2D9", "#B79AD6", "#6E98A3",
    ],
  },
  mba: {
    labels: ["Finance", "Marketing", "Operations", "Human Resources"],
    values: [28, 12, 8, 9],
    colors: ["#F6C06E", "#F6A78E", "#F6A8BF", "#B79AD6"],
  },
  mca: {
    labels: ["Year 1", "Year 2", "Year 3"],
    values: [22, 23, 22],
    colors: ["#9EB0E6", "#B79AD6", "#8CC1A8"],
  },
};

const PLACEMENT_OFFERS: PlacementOffersData = {
  labels: ["2020-21", "2021-22", "2022-23", "2023-24", "2024-25"],
  values: [172, 246, 384, 404, 518],
};

const PACKAGES_OFFERED: PackagesData = {
  labels: ["2022", "2023", "2024", "2025"],
  highest: [45, 49, 60, 54],
  average: [8, 7, 12, 7],
};

export default function Demographic() {
  const [activeProgram, setActiveProgram] = useState<keyof AllData | 'overview'>('overview');
  const [currentData, setCurrentData] = useState<ProgramData>(DATA.programs);
  const [desc, setDesc] = useState({ title: 'Overview', text: 'Program distribution across degree types (MBA, MCA, B.Tech, M.Tech).' });
  const [isChartReady, setIsChartReady] = useState(false);
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<any>(null);
  const barChartRef = useRef<HTMLCanvasElement>(null);
  const barChartInstance = useRef<any>(null);
  const lineChartRef = useRef<HTMLCanvasElement>(null);
  const lineChartInstance = useRef<any>(null);

  // Handle Chart Initialization and Updates
  useEffect(() => {
    if (isChartReady && chartRef.current) {
      // Destroy existing chart if it exists
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      // @ts-ignore - Chart is loaded via CDN script
      const ctx = chartRef.current.getContext('2d');
      // @ts-ignore
      chartInstance.current = new window.Chart(ctx, {
        type: 'pie',
        data: {
          labels: currentData.labels,
          datasets: [
            {
              data: currentData.values,
              backgroundColor: currentData.colors,
              borderColor: "#FFFFFF",
              borderWidth: 2,
            },
          ],
        },
        options: {
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              callbacks: { 
                // @ts-ignore
                label: (ctx) => `${ctx.label}: ${ctx.parsed}` 
              },
            },
          },
        },
      });
    }
  }, [isChartReady, currentData]);

  useEffect(() => {
    if (isChartReady && barChartRef.current) {
      if (barChartInstance.current) {
        barChartInstance.current.destroy();
      }

      // @ts-ignore - Chart is loaded via CDN script
      const ctx = barChartRef.current.getContext('2d');
      // @ts-ignore
      barChartInstance.current = new window.Chart(ctx, {
        type: 'bar',
        data: {
          labels: PLACEMENT_OFFERS.labels,
          datasets: [
            {
              label: 'Placement Offers',
              data: PLACEMENT_OFFERS.values,
              backgroundColor: [
                '#6FE7EA',
                '#46B9D6',
                '#2F88B5',
                '#2D5A95',
                '#0B3B84',
              ],
              borderColor: [
                '#5DD6DA',
                '#3AA7C2',
                '#2A78A1',
                '#274F83',
                '#082F6C',
              ],
              borderWidth: 1,
              borderRadius: { topLeft: 10, topRight: 10, bottomLeft: 0, bottomRight: 0 },
              borderSkipped: 'bottom',
              barThickness: 56,
              maxBarThickness: 64,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          layout: {
            padding: { top: 16, right: 12, bottom: 8, left: 8 },
          },
          scales: {
            x: {
              grid: { display: false },
              ticks: { color: '#6B7280', font: { size: 12 } },
              title: {
                display: true,
                text: 'Academic Year',
                color: '#374151',
                font: { size: 12, weight: '600' },
              },
            },
            y: {
              beginAtZero: true,
              suggestedMax: 600,
              grid: { color: 'rgba(15, 23, 42, 0.10)' },
              ticks: { color: '#6B7280', stepSize: 100 },
              title: {
                display: true,
                text: 'Total Number of Job Offers',
                color: '#374151',
                font: { size: 12, weight: '600' },
              },
            },
          },
          plugins: {
            legend: { display: false },
            tooltip: {
              callbacks: {
                // @ts-ignore
                label: (ctx) => `${ctx.parsed.y}`,
              },
            },
          },
        },
        plugins: [
          {
            id: 'valueLabels',
            // @ts-ignore
            afterDatasetsDraw: (chart) => {
              const { ctx } = chart;
              ctx.save();
              ctx.font = '12px serif';
              ctx.fillStyle = '#111827';
              ctx.textAlign = 'center';
              // @ts-ignore
              const meta = chart.getDatasetMeta(0);
              // @ts-ignore
              meta.data.forEach((bar, index) => {
                const value = chart.data.datasets[0].data[index];
                // @ts-ignore
                ctx.fillText(value, bar.x, bar.y - 6);
              });
              ctx.restore();
            },
          },
        ],
      });
    }
  }, [isChartReady]);

  useEffect(() => {
    if (isChartReady && lineChartRef.current) {
      if (lineChartInstance.current) {
        lineChartInstance.current.destroy();
      }

      // @ts-ignore - Chart is loaded via CDN script
      const ctx = lineChartRef.current.getContext('2d');
      // @ts-ignore
      lineChartInstance.current = new window.Chart(ctx, {
        type: 'line',
        data: {
          labels: PACKAGES_OFFERED.labels,
          datasets: [
            {
              label: 'Highest',
              data: PACKAGES_OFFERED.highest,
              borderColor: '#1E4FA2',
              backgroundColor: '#1E4FA2',
              pointBackgroundColor: '#1E4FA2',
              pointRadius: 4,
              pointHoverRadius: 5,
              borderWidth: 3,
              tension: 0.3,
            },
            {
              label: 'Average',
              data: PACKAGES_OFFERED.average,
              borderColor: '#70D3FF',
              backgroundColor: '#70D3FF',
              pointBackgroundColor: '#70D3FF',
              pointRadius: 4,
              pointHoverRadius: 5,
              borderWidth: 3,
              tension: 0.3,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          layout: { padding: { top: 10, right: 18, bottom: 8, left: 8 } },
          scales: {
            x: {
              grid: { display: false },
              ticks: { color: '#6B7280' },
              title: {
                display: true,
                text: 'Years',
                color: '#374151',
                font: { size: 12, weight: '600' },
              },
            },
            y: {
              beginAtZero: true,
              suggestedMax: 60,
              grid: { color: 'rgba(15, 23, 42, 0.18)' },
              ticks: { color: '#6B7280', stepSize: 10 },
              title: {
                display: true,
                text: 'Package',
                color: '#374151',
                font: { size: 12, weight: '600' },
              },
            },
          },
          plugins: {
            legend: {
              display: true,
              position: 'top',
              align: 'center',
              labels: {
                usePointStyle: true,
                pointStyle: 'circle',
                boxWidth: 8,
                color: '#111827',
                font: { size: 12, weight: '600' },
              },
            },
            tooltip: {
              callbacks: {
                // @ts-ignore
                label: (ctx) => `${ctx.dataset.label}: ${ctx.parsed.y}`,
              },
            },
          },
        },
      });
    }
  }, [isChartReady]);

  const handleProgramChange = (program: string) => {
    if (program === 'overview') {
      setActiveProgram('overview');
      setCurrentData(DATA.programs);
      setDesc({ title: 'Overview', text: 'Program distribution across degree types (MBA, MCA, B.Tech, M.Tech).' });
    } else if (program === 'btech') {
      setActiveProgram('btech');
      setCurrentData(DATA.btech);
      setDesc({ title: "Bachelor's of Technology", text: "The B.Tech program is divided among 6 departments and 8 branches. Click a branch to highlight it in the chart (legend keeps actual counts)." });
    } else if (program === 'mtech') {
      setActiveProgram('mtech');
      setCurrentData(DATA.mtech);
      setDesc({ title: "Master's of Technology", text: "The college promotes in-depth study and research and hosts diverse higher studies programs." });
    } else if (program === 'mba') {
      setActiveProgram('mba');
      setCurrentData(DATA.mba);
      setDesc({ title: "Master's of Business Administration", text: "MBA program is divided among departments; the legend shows department names and counts." });
    } else if (program === 'mca') {
      setActiveProgram('mca');
      setCurrentData(DATA.mca);
      setDesc({ title: "Master of Computer Application", text: "MCA program distribution (year wise)." });
    }
  };

  const handleBranchClick = (branch: string) => {
    const idx = DATA.btech.labels.indexOf(branch);
    if (idx === -1 || !chartInstance.current) return;

    // Emphasize the selected slice logic from original HTML
    const emphasizedValues = DATA.btech.values.map((v, i) =>
      i === idx ? Math.round(v * 1.18) : v
    );

    // Update chart data only, keep legend data same
    chartInstance.current.data.datasets[0].data = emphasizedValues;
    chartInstance.current.update();
  };

  return (
    <div className="bg-white">
      {/* Load Chart.js from CDN */}
      <Script 
        src="https://cdn.jsdelivr.net/npm/chart.js" 
        strategy="afterInteractive"
        onLoad={() => setIsChartReady(true)}
      />

      {/* MAIN CONTENT */}
      <main className="bg-white py-20" id="demographics">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* Placement Offers Bar Chart */}
          <section className="mb-12">
            <div className="mb-6 text-center lg:text-left">
              <div className="inline-block px-3 py-1 rounded-full bg-brand-800/5 text-brand-800 font-semibold">
                PLACEMENT OFFERS
              </div>
              <h2 className="mt-3 text-2xl font-semibold text-gray-900">Session-wise Placement Offers</h2>
              <p className="mt-2 text-muted max-w-3xl">
                Placement offers across recent academic sessions.
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-glow-md">
              <div className="h-[360px] w-full">
                <canvas ref={barChartRef} id="placementOffersChart" className="w-full h-full"></canvas>
              </div>
            </div>
          </section>

           {/* Packages Offered Line Chart */}
          <section className="mb-12">
            <div className="mb-6 text-center lg:text-left">
              <div className="inline-block px-3 py-1 rounded-full bg-brand-800/5 text-brand-800 font-semibold">
                PACKAGES OFFERED
              </div>
              <h2 className="mt-3 text-2xl font-semibold text-gray-900">Highest vs Average Packages</h2>
              <p className="mt-2 text-muted max-w-3xl">
                Year-wise comparison of highest and average packages offered.
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-glow-md">
              <div className="h-[360px] w-full">
                <canvas ref={lineChartRef} id="packagesLineChart" className="w-full h-full"></canvas>
              </div>
            </div>
          </section>

          {/* Top title */}
          <div className="mb-8 text-center lg:text-left">
            <div className="inline-block px-3 py-1 rounded-full bg-brand-800/5 text-brand-800 font-semibold">
              ACADEMIC PROGRAMMES
            </div>
            <p className="mt-4 text-muted max-w-3xl">
              The college has various under graduation and post graduations program, each run and supervised by its own departments, with most no. of students in B Tech degree program totaling up to 541.
            </p>
          </div>

          {/* Main layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* LEFT: selector & descriptions */}
            <aside className="lg:col-span-3 space-y-6">
              <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                <h3 className="text-sm font-semibold text-brand-800 mb-3">
                  Select Program
                </h3>

                <div className="space-y-2">
                  <button
                    onClick={() => handleProgramChange('overview')}
                    className={`w-full text-left px-4 py-2 rounded-md hover:bg-gray-50 active:bg-gray-100 transition font-medium ${activeProgram === 'overview' ? 'bg-brand-800/5' : ''}`}
                  >
                    Overview (All Programs)
                  </button>
                  <button
                    onClick={() => handleProgramChange('btech')}
                    className={`w-full text-left px-4 py-2 rounded-md hover:bg-gray-50 active:bg-gray-100 transition font-medium ${activeProgram === 'btech' ? 'bg-brand-800/5' : ''}`}
                  >
                    B.Tech (541)
                  </button>
                  <button
                    onClick={() => handleProgramChange('mtech')}
                    className={`w-full text-left px-4 py-2 rounded-md hover:bg-gray-50 active:bg-gray-100 transition font-medium ${activeProgram === 'mtech' ? 'bg-brand-800/5' : ''}`}
                  >
                    M.Tech (108)
                  </button>
                  <button
                    onClick={() => handleProgramChange('mba')}
                    className={`w-full text-left px-4 py-2 rounded-md hover:bg-gray-50 active:bg-gray-100 transition font-medium ${activeProgram === 'mba' ? 'bg-brand-800/5' : ''}`}
                  >
                    MBA (57)
                  </button>
                  <button
                    onClick={() => handleProgramChange('mca')}
                    className={`w-full text-left px-4 py-2 rounded-md hover:bg-gray-50 active:bg-gray-100 transition font-medium ${activeProgram === 'mca' ? 'bg-brand-800/5' : ''}`}
                  >
                    MCA (67)
                  </button>
                </div>
              </div>

              {/* Program description */}
              <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm text-sm text-muted space-y-3">
                <div className="text-brand-800 font-semibold">{desc.title}</div>
                <div>{desc.text}</div>
              </div>

              {/* B.Tech branch quick selector (only visible when B.Tech selected) */}
              {activeProgram === 'btech' && (
                <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                  <h4 className="text-sm font-semibold text-brand-800 mb-3">
                    B.Tech Branches
                  </h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    {DATA.btech.labels.map((branch) => (
                      <button
                        key={branch}
                        onClick={() => handleBranchClick(branch)}
                        className="px-3 py-2 text-left rounded-md hover:bg-gray-50 focus:font-semibold focus:text-brand-800 group"
                      >
                        {branch}
                        <span className="ml-2 text-brand-800 hidden group-focus:inline">➜</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </aside>

            {/* CENTER: Chart card */}
            <div className="lg:col-span-6">
              <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-glow-md min-h-[380px] flex flex-col items-center justify-center">
                <div className="w-[260px] sm:w-[320px] md:w-[380px]">
                  <canvas ref={chartRef} id="mainChart"></canvas>
                </div>

                {/* Mini Legend */}
                <div className="mt-6 w-full max-w-xl hidden sm:block">
                  <div className="flex flex-wrap gap-3">
                    {currentData.labels.map((label, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-muted">
                        <span 
                          style={{ 
                            background: currentData.colors[i],
                            width: '12px',
                            height: '12px',
                            borderRadius: '3px',
                            display: 'inline-block',
                            border: '1px solid rgba(0,0,0,0.04)'
                          }}
                        ></span>
                        <div>{label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: Legend & counts */}
            <div className="lg:col-span-3">
              <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                <h4 className="text-sm font-semibold text-brand-800 mb-4">Legend</h4>
                <div className="space-y-3 text-sm">
                  {currentData.labels.map((label, idx) => (
                    <div key={idx} className="flex items-center gap-3 py-2">
                      <div className="flex items-center gap-3">
                        <span 
                          style={{
                            background: currentData.colors[idx],
                            width: '16px',
                            height: '16px',
                            display: 'inline-block',
                            borderRadius: '4px',
                            border: '1px solid rgba(0,0,0,0.05)'
                          }}
                        ></span>
                        <div className="text-sm font-medium" style={{ color: '#0A2647' }}>
                          {label}
                        </div>
                      </div>
                      <div className="ml-auto text-sm text-muted">
                        {currentData.values[idx]}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="bg-brand-900 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Insights</h4>
              <ul className="space-y-3 text-white/80 text-sm">
                <li><Link href="/insights/aboutiet" className="hover:text-white transition-colors">About IET</Link></li>
                <li><Link href="/insights/message" className="hover:text-white transition-colors">Director&apos;s Message</Link></li>
                <li><a href="https://www.ietlucknow.ac.in/acad/publications" className="hover:text-white transition-colors">Faculty Publications</a></li>
                <li><Link href="/insights/recruiters" className="hover:text-white transition-colors">Past Recruiters</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">For Recruiters</h4>
              <ul className="space-y-3 text-white/80 text-sm">
                <li><Link href="/recruiters/procedure" className="hover:text-white transition-colors">Procedure</Link></li>
                <li><Link href="/recruiters/invitation" className="hover:text-white transition-colors">Invitation</Link></li>
                <li><Link href="/recruiters/ContactForm" id="company-contact-link" className="hover:text-white transition-colors">Company Contact Form</Link></li>
                <li><Link href="/recruiters/demographic" className="hover:text-white transition-colors">Demographics</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">For Students</h4>
              <ul className="space-y-3 text-white/80 text-sm">
                <li><a href="/files/Student_Placement_Policy.pdf" className="hover:text-white transition-colors">Placement Policy</a></li>
                <li><a href="/files/Company_Guidelines_21-22.pdf" className="hover:text-white transition-colors">Internship Guidelines</a></li>
                <li><Link href="/faq" className="hover:text-white transition-colors">FAQs</Link></li>
                <li><Link href="/downloads" className="hover:text-white transition-colors">Downloads</Link></li>
              </ul>
            </div>

            <div className="bg-brand-800/40 p-6 rounded-xl border border-white/5">
              <h4 className="font-semibold text-lg mb-3">Training &amp; Placement Office</h4>
              <p className="text-sm text-white/80 mb-4">Lecture Theatre Building,<br/>Institute of Engineering and Technology,<br/>Lucknow - 226021</p>

              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  <a href="mailto:placement@ietlucknow.ac.in" className="underline hover:text-white">placement@ietlucknow.ac.in</a>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-white/10">
                <h5 className="font-medium text-sm">Officer Incharge</h5>
                <div className="text-sm text-white/80">Dr. Arun Kumar Tiwari</div>
                <div className="text-sm mt-1 flex items-center gap-2">
                  <svg className="w-4 h-4 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  <a href="mailto:aruntiwari@ietlucknow.ac.in" className="underline hover:text-white">aruntiwari@ietlucknow.ac.in</a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-brand-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <a href="https://www.facebook.com/ietplacementcell/" className="text-white/80 hover:text-white transition-all hover:-translate-y-1">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://x.com/iet_lucknow" className="text-white/80 hover:text-white transition-all hover:-translate-y-1">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.033 10.033 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"/></svg>
              </a>
              <a href="https://www.linkedin.com/in/placement-cell-iet-lucknow-439a1357" className="text-white/80 hover:text-white transition-all hover:-translate-y-1">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>

            <div className="text-sm text-white/70 text-center px-4">© 2025 Institute of Engineering &amp; Technology, Lucknow. All Rights Reserved.</div>

            <div><a href="#demographics" className="text-sm underline hover:no-underline whitespace-nowrap">Go to Top</a></div>
          </div>
        </div>
      </footer>
    </div>
  );
}