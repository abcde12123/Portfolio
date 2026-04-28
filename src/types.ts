export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  thumbnail: string;
  tags: string[];
  link?: string;
  isVFX: boolean;
  technicalData?: string;
}

export const projects: Project[] = [
  {
    id: 5,
    title: "UE 火焰技能特效",
    category: "UE VFX / Niagara",
    description: "基于 UE 的火焰技能效果制作。包含火焰刀光，能量聚集蓄力，剑气发射3个核心部分，以及地裂，石头飞溅，火光四射等辅助部分。",
    thumbnail: "/images/Fire_vfx.webp",
    tags: ["Niagara", "UE5", "材质系统", "火焰特效"],
    link: "/videos/FireSkill1.0.mp4",
    isVFX: true
  },
  {
    id: 6,
    title: "UE 冰技能特效",
    category: "UE VFX / Niagara",
    description: "利用 Niagara 系统构建的冰霜材质与粒子交互特效。实现了基于深度的冻结效果与冰晶折射材质。",
    thumbnail: "/images/IceSkill.webp",
    tags: ["Niagara", "UE5", "Ice Shader"],
    link: "/videos/IceSkill0.9.mp4",
    isVFX: true
  },
  {
    id: 10,
    title: "UE 武器特效（能量爆发）",
    category: "UE VFX / Niagara",
    description: "武器的能量特效演示",
    thumbnail: "/images/Power.webp",
    tags: ["Niagara", "UE5", "武器特效", "能量"],
    link: "/videos/Power.mp4",
    isVFX: true
  },
  {
    id: 7,
    title: "《原神》狼末武器模型与材质全流程制作",
    category: "3D Art / VFX Support",
    description: "完成了狼末武器的高低模制作、UV 拆解及材质表现。通过合理的 UV 布局与多通道 Mask 设计，为后续特效动画提供了精准的材质控制接口。",
    thumbnail: "/images/LM_MAYA.webp",
    tags: ["模型制作", "材质表现", "UV 布局", "Mask 设计"],
    link: "#",
    isVFX: true
  },
  {
    id: 8,
    title: "UE 祭坛展示场景",
    category: "场景特效 / 渲染",
    description: "结合狼末武器模型，在 UE 中搭建的黑暗风格祭坛展示场景。通过粒子系统、后处理特效及动态光影，营造出极具氛围感的视觉表现。",
    thumbnail: "/images/LM_CJ.webp",
    tags: ["场景渲染", "动态光影", "后处理特效", "氛围营造"],
    link: "#",
    isVFX: true
  },
  {
    id: 9,
    title: "UE 溶解材质函数",
    category: "UE 材质 / Shader",
    description: "用于角色/物体的通用溶解材质函数，可控颜色与边缘宽度，支持在不同材质实例中快速复用。",
    thumbnail: "/images/Dissolve.webp",
    tags: ["UE5", "材质函数", "溶解", "Shader"],
    link: "/videos/dissolve.mp4",
    isVFX: true
  },
  {
    id: 3,
    title: "UE 虚拟场景制作 (环境特效)",
    category: "环境特效 / 渲染",
    description: "着重实现真实的水体模拟、PCG 植被生成、材质的修改和复用，以及 UE 与 3ds Max 的模型联动。",
    thumbnail: "/images/R5.webp",
    tags: ["水体模拟", "PCG", "材质编辑", "3ds Max"],
    link: "#",
    isVFX: true
  },
  {
    id: 4,
    title: "校内 MiniGame 创作大赛：Neowise",
    category: "比赛项目 / 主程序",
    description: "作为主程序负责 3C 设计、逻辑构建及高弹判定系统。在 7 天内完成完整游戏 Demo，获得最佳评审奖第二名。",
    thumbnail: "/images/Neowise.webp",
    tags: ["主程序", "3C 设计", "碰撞判定"],
    link: "https://www.bilibili.com/video/BV1JjXsBPErp/",
    isVFX: false
  },
  {
    id: 1,
    title: "基于 UE5 的 2D 模拟 PVZ 项目",
    category: "游戏开发 / 逻辑系统",
    description: "在模拟《植物大战僵尸》的基础上，实现了地图生成、背包系统、编辑器、商店、装备、整装效果等功能。包含完整的 UI 逻辑 and 游戏流程控制，以及 BUFF 系统。",
    thumbnail: "/images/PVZ2D.webp",
    tags: ["UE5", "蓝图系统", "UI 框架", "存档系统", "BUFF 系统"],
    link: "https://www.bilibili.com/video/BV165XsBeEpj/",
    isVFX: false
  },
  {
    id: 2,
    title: "C++ 开发的第三人称动作游戏 Demo",
    category: "C++ / Gameplay",
    description: "实现了基础的视角锁定、动画通知驱动的位移、攻击连招、重击、精准判定、摄像机抖动及受击反馈。项目利用 C++ 拓展原生控制器，遵循面向对象编程及常用设计模式。",
    thumbnail: "/images/Combat1.webp",
    tags: ["UE C++", "动作系统", "设计模式", "Gameplay"],
    link: "#",
    isVFX: false
  }
];
