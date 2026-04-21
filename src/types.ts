export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  thumbnail: string;
  tags: string[];
  link?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "基于 UE5 的 2D 模拟 PVZ 项目",
    category: "游戏开发 / 逻辑系统",
    description: "在模拟《植物大战僵尸》的基础上，实现了地图生成、背包系统、编辑器、商店、装备、整装效果等功能。包含完整的 UI 逻辑和游戏流程控制，以及 BUFF 系统。",
    thumbnail: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1000&auto=format&fit=crop",
    tags: ["UE5", "蓝图系统", "UI 框架", "存档系统", "BUFF 系统"],
    link: "https://www.bilibili.com/video/BV1GSkB8Eepj/"
  },
  {
    id: 2,
    title: "C++ 开发的第三人称动作游戏 Demo",
    category: "C++ / Gameplay",
    description: "实现了基础的视角锁定、动画通知驱动的位移、攻击连招、重击、精准判定、摄像机抖动及受击反馈。项目利用 C++ 拓展原生控制器，遵循面向对象编程及常用设计模式。",
    thumbnail: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=1000&auto=format&fit=crop",
    tags: ["UE C++", "动作系统", "设计模式", "Gameplay"],
    link: "https://github.com/abcde12123/Combat-System"
  },
  {
    id: 3,
    title: "UE 虚拟电影场景制作",
    category: "环境特效 / 渲染",
    description: "着重实现真实的水体模拟、PCG 植被生成、材质的修改和复用，以及 UE 与 3ds Max 的模型联动。",
    thumbnail: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=1000&auto=format&fit=crop",
    tags: ["水体模拟", "PCG", "材质编辑", "3ds Max"],
    link: "https://github.com/abcde12123/Integrated-Landscape-Design"
  },
  {
    id: 4,
    title: "校内 MiniGame 创作大赛：俄罗斯方块变体",
    category: "比赛项目 / 主程序",
    description: "作为主程序负责 3C 设计、逻辑构建及高弹判定系统。在 7 天内完成完整游戏 Demo，获得最佳评审奖第二名。",
    thumbnail: "https://images.unsplash.com/photo-1544333346-604274984405?q=80&w=1000&auto=format&fit=crop",
    tags: ["主程序", "3C 设计", "碰撞判定"],
    link: "https://www.bilibili.com/video/BV1JJxSBPBrp/"
  }
];
