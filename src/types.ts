export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  thumbnail: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Magic Explosion - Niagara",
    category: "Unreal Engine 5",
    description: "A high-end magic explosion effect created using Niagara System with GPU particles.",
    thumbnail: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1000&auto=format&fit=crop",
    tags: ["Niagara", "UE5", "Magic", "Materials"]
  },
  {
    id: 2,
    title: "Cyberpunk Rain Environment",
    category: "Environment VFX",
    description: "Realistic rain and puddle ripple effects using custom shaders and Blueprint controllers.",
    thumbnail: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=1000&auto=format&fit=crop",
    tags: ["Shaders", "Blueprints", "Environment"]
  },
  {
    id: 3,
    title: "Stylized Fire Blast",
    category: "Stylized VFX",
    description: "Hand-painted style fire effect for mobile games, optimized for performance.",
    thumbnail: "https://images.unsplash.com/photo-1544333346-604274984405?q=80&w=1000&auto=format&fit=crop",
    tags: ["Stylized", "Mobile", "Texture Painting"]
  },
  {
    id: 4,
    title: "Sci-Fi Portal Gate",
    category: "Unreal Engine 5",
    description: "Interdimensional portal effect using Volumetric Fog and Niagara ribbons.",
    thumbnail: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=1000&auto=format&fit=crop",
    tags: ["Niagara", "Volumetrics", "Sci-Fi"]
  }
];
