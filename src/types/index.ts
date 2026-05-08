export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  preview?: string;
}

export interface GitHubActivity {
  date: string;
  count: number;
  level: number;
}

export interface ResumeSection {
  title: string;
  items: ResumeItem[];
}

export interface ResumeItem {
  title: string;
  organization: string;
  period: string;
  description?: string[];
  technologies?: string[];
}
