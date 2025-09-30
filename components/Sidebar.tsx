
import React from 'react';
import { Category } from '../types';

interface SidebarProps {
  categories: Category[];
  activeCategoryId: string | null;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ categories, activeCategoryId, onClose }) => {
  const handleCategoryClick = (e: React.MouseEvent<HTMLAnchorElement>, categoryId: string) => {
    e.preventDefault();
    const element = document.getElementById(categoryId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    onClose();
  };

  return (
    <aside className="w-full h-full bg-brand-surface border-r border-brand-border p-4">
      <h2 className="text-xl font-bold text-brand-text mb-4">📖 目录</h2>
      <nav>
        <ul>
          {categories.map((category) => (
            <li key={category.id} className="mb-1">
              <a
                href={`#${category.id}`}
                onClick={(e) => handleCategoryClick(e, category.id)}
                className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150 ${
                  activeCategoryId === category.id
                    ? 'bg-brand-primary text-white'
                    : 'text-brand-secondary hover:bg-gray-100 hover:text-brand-text'
                }`}
              >
                {category.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
