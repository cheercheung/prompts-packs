import React, { useState, useMemo, useEffect, useRef } from 'react';
import { promptData } from './data/prompts';
import { Category } from './types';
import Sidebar from './components/Sidebar';
import PromptCard from './components/PromptCard';
import { MenuIcon, SearchIcon, XIcon } from './components/Icons';

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null);
  
  // FIX: The ref is for a <section> element, which is an HTMLElement, not an HTMLDivElement.
  const categoryRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveCategoryId(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -80% 0px', threshold: 0 }
    );
  
    const currentRefs = Object.values(categoryRefs.current);
  
    // Fix: Argument of type 'unknown' is not assignable to parameter of type 'Element'.
    // Use `instanceof Element` as a type guard to ensure type safety before calling observer methods.
    currentRefs.forEach((ref) => {
      if (ref instanceof Element) {
        observer.observe(ref);
      }
    });
  
    return () => {
      // Fix: Argument of type 'unknown' is not assignable to parameter of type 'Element'.
      // Use `instanceof Element` as a type guard to ensure type safety before calling observer methods.
      currentRefs.forEach((ref) => {
        if (ref instanceof Element) {
          observer.unobserve(ref);
        }
      });
    };
  }, [promptData]);

  const filteredData = useMemo(() => {
    if (!searchTerm) {
      return promptData;
    }
    const lowercasedFilter = searchTerm.toLowerCase();

    return promptData
      .map((category: Category) => {
        const filteredSubCategories = category.subCategories
          .map((subCategory) => {
            const filteredPrompts = subCategory.prompts.filter(
              (prompt) =>
                prompt.title.toLowerCase().includes(lowercasedFilter) ||
                prompt.prompt.toLowerCase().includes(lowercasedFilter) ||
                (prompt.suggestion && prompt.suggestion.toLowerCase().includes(lowercasedFilter))
            );
            if (filteredPrompts.length > 0) {
              return { ...subCategory, prompts: filteredPrompts };
            }
            if (subCategory.title.toLowerCase().includes(lowercasedFilter)) {
              return subCategory;
            }
            return null;
          })
          .filter((sc): sc is NonNullable<typeof sc> => sc !== null);

        if (filteredSubCategories.length > 0) {
          return { ...category, subCategories: filteredSubCategories };
        }
        if (category.title.toLowerCase().includes(lowercasedFilter)) {
          return category;
        }
        return null;
      })
      .filter((c): c is NonNullable<typeof c> => c !== null);
  }, [searchTerm]);

  return (
    <div className="flex h-screen font-sans">
      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 z-30 bg-black bg-opacity-50 transition-opacity lg:hidden ${
          sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setSidebarOpen(false)}
      ></div>
      <div className={`fixed inset-y-0 left-0 z-40 w-64 transform transition-transform lg:hidden ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <Sidebar categories={promptData} activeCategoryId={activeCategoryId} onClose={() => setSidebarOpen(false)} />
      </div>


      {/* Desktop Sidebar */}
      <div className="hidden lg:block lg:w-64 lg:flex-shrink-0">
        <div className="fixed inset-y-0 left-0 w-64">
           <Sidebar categories={promptData} activeCategoryId={activeCategoryId} onClose={() => {}} />
        </div>
      </div>
      
      <main className="flex-1 overflow-y-auto">
        <header className="sticky top-0 z-20 bg-brand-bg/80 backdrop-blur-sm border-b border-brand-border p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <button
                className="lg:hidden mr-4 text-brand-secondary"
                onClick={() => setSidebarOpen(true)}
              >
                <MenuIcon className="h-6 w-6" />
              </button>
              <h1 className="text-xl md:text-2xl font-bold text-brand-text">OpenAI Prompt Packs</h1>
            </div>
            <div className="flex items-center gap-4 ml-4">
              <div className="relative w-full max-w-xs">
                <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search prompts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-brand-border rounded-lg focus:ring-2 focus:ring-brand-primary focus:outline-none"
                />
              </div>
              <a
                href="https://x.com/cheerselflin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-brand-primary transition-colors flex-shrink-0"
                aria-label="Follow on X"
              >
                <XIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </header>

        <div className="p-4 md:p-8">
          {filteredData.length > 0 ? (
            filteredData.map((category) => (
              <section 
                key={category.id} 
                id={category.id} 
                className="mb-12 scroll-mt-24"
                // FIX: A ref callback must not return a value. Changed to a block body for a void return.
                ref={(el) => { categoryRefs.current[category.id] = el; }}
              >
                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-brand-text border-b-2 border-brand-primary pb-2">
                      {category.title}
                    </h2>
                    {category.description && (
                        <p className="mt-2 text-brand-secondary whitespace-pre-line">{category.description}</p>
                    )}
                </div>
                {category.subCategories.map((subCategory) => (
                  <div key={subCategory.title} className="mb-8">
                    <h3 className="text-2xl font-semibold text-brand-text mb-2">{subCategory.title}</h3>
                    {subCategory.description && (
                        <p className="text-md text-gray-600 mb-4">{subCategory.description}</p>
                    )}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                      {subCategory.prompts.map((prompt, index) => (
                        <PromptCard key={index} prompt={prompt} />
                      ))}
                    </div>
                  </div>
                ))}
              </section>
            ))
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-brand-secondary">No prompts found for "{searchTerm}".</p>
            </div>
          )}
          <footer className="text-center text-sm text-gray-500 mt-12 py-4 border-t border-brand-border">
            <div className="space-y-1">
                <p>Sourced from OpenAI Academy.</p>
                <p>整理者: 林悦己 | 整理日期: 2025-09-30</p>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default App;