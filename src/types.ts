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
    title: "魔法爆炸 - Niagara",
    category: "Unreal Engine 5",
    description: "使用 Niagara 系统和 GPU 粒子制作的高端魔法爆炸效果。",
    thumbnail: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1000&auto=format&fit=crop",
    tags: ["Niagara", "UE5", "魔法", "材质"]
  },
  {
    id: 2,
    title: "赛博朋克雨景环境",
    category: "环境特效",
    description: "使用自定义着色器和 Blueprint 控制器实现的逼真雨滴和积水涟漪效果。",
    thumbnail: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=1000&auto=format&fit=crop",
    tags: ["Shaders", "Blueprints", "环境"]
  },
  {
    id: 3,
    title: "写实火焰冲击",
    category: "写实特效",
    description: "为移动端游戏优化的手绘风格火焰效果，兼顾性能与视觉质量。",
    thumbnail: "https://images.unsplash.com/photo-1544333346-604274984405?q=80&w=1000&auto=format&fit=crop",
    tags: ["写实", "移动端", "纹理绘制"]
  },
  {
    id: 4,
    title: "科幻传送门",
    category: "Unreal Engine 5",
    description: "使用体积雾 (Volumetric Fog) 和 Niagara ribbons 实现的跨维度传送门效果。",
    thumbnail: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=1000&auto=format&fit=crop",
    tags: ["Niagara", "体积特效", "科幻"]
  }
];
