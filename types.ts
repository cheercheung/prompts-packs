
export interface Prompt {
  title: string;
  description?: string;
  prompt: string;
  suggestion?: string;
}

export interface SubCategory {
  title: string;
  description?: string;
  prompts: Prompt[];
}

export interface Category {
  id: string;
  title: string;
  description?: string;
  subCategories: SubCategory[];
}
