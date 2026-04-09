import { Header } from "@/components/header"
import { AlertBanner } from "@/components/alert-banner"
import { HotResources } from "@/components/hot-resources"
import { CategorySection } from "@/components/category-section"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"

// 模拟数据
const categoryData = {
  music: {
    title: "音乐",
    icon: "🎵",
    items: [
      { id: 1, title: "Gorillaz-DemonDays 音乐", tag: "" },
      { id: 2, title: "五轮真弓（真弓作）音乐", tag: "" },
      { id: 3, title: "郑智·是上帝给80's-90's黄金年代 音乐", tag: "" },
      { id: 4, title: "同比·推外灯蓝色 音乐", tag: "" },
      { id: 5, title: "窦唯文·体恋速度 音乐", tag: "" },
      { id: 6, title: "BEYOND-SACD系列 MOREDSDSF 音乐", tag: "" },
      { id: 7, title: "李亮期-SACD系列 母盘 音乐", tag: "" },
      { id: 8, title: "高桥篤·是胡同一首到世界的歌儿 音乐", tag: "" },
      { id: 9, title: "周传雄-寂寞 音乐", tag: "" },
      { id: 10, title: "陶喆-Gen-X Cops电影原声带&Flac 音乐", tag: "" },
      { id: 11, title: "LolaYoung-ThisWasn'tMeantForYouAnyw... 音乐", tag: "" },
      { id: 12, title: "AlexanderMalofeev-ForgottenMelodies... 音乐", tag: "" },
      { id: 13, title: "苏格兰醉王·CarnXid（Debut）SACD 音乐", tag: "" },
      { id: 14, title: "爵堤·榜东方东方爵士草野 音乐", tag: "" },
      { id: 15, title: "周华健 有没有胡那那那嘛嘛姐 音乐", tag: "" },
    ]
  },
  shortDrama: {
    title: "短剧",
    icon: "📺",
    items: [
      { id: 1, title: "转身不听", tag: "" },
      { id: 2, title: "重生觉醒+强盛道压，新直销买什么", tag: "" },
      { id: 3, title: "意识，我说许了生就生战出境向烧", tag: "" },
      { id: 4, title: "爱火计，精秘背到道军门沙焰", tag: "" },
      { id: 5, title: "重金选一灵，关海深下骨", tag: "" },
      { id: 6, title: "暖头交做，织珠精虫出丁红红", tag: "" },
      { id: 7, title: "重回84来婚，再接半一大野猪", tag: "" },
      { id: 8, title: "鄢柏轩是剧", tag: "" },
      { id: 9, title: "派连走，满保编一包出大家宴", tag: "" },
      { id: 10, title: "分季侠是·关达让被开始就射射", tag: "" },
      { id: 11, title: "何行手吧，派送爱来一拍到到剧", tag: "" },
      { id: 12, title: "重返派软商", tag: "" },
      { id: 13, title: "温泉赢家 电视剧", tag: "" },
      { id: 14, title: "格普普锁 电视剧", tag: "" },
      { id: 15, title: "假着物 电视剧", tag: "" },
    ]
  },
  subscription: {
    title: "订阅",
    icon: "📋",
    items: [
      { id: 1, title: "鹏程万里", tag: "" },
      { id: 2, title: "鹏程9.3-15 订阅", tag: "" },
      { id: 3, title: "鹏程6.24-31 订阅", tag: "" },
      { id: 4, title: "他潜在这里 订阅", tag: "" },
      { id: 5, title: "阿许主任发派派（爱） 订阅", tag: "" },
      { id: 6, title: "关翼影的时候，真实策架，高贡贴卡", tag: "" },
      { id: 7, title: "创新派集", tag: "" },
      { id: 8, title: "新科宗金打订阅", tag: "" },
      { id: 9, title: "林世的好日子 订阅", tag: "" },
      { id: 10, title: "鹏程4.27-5.04 订阅", tag: "" },
      { id: 11, title: "柯汀的淘金 订阅", tag: "" },
      { id: 12, title: "大宝派集 纪念珍", tag: "" },
      { id: 13, title: "一支玫 精灵花2 订阅", tag: "" },
      { id: 14, title: "霓虹 订阅", tag: "" },
      { id: 15, title: "霓虹 订阅", tag: "" },
    ]
  },
  food: {
    title: "小吃美食",
    icon: "🍜",
    items: [
      { id: 1, title: "炒白菜 小吃", tag: "" },
      { id: 2, title: "翼轮轻轻 小吃", tag: "" },
      { id: 3, title: "翼翼飞 小吃", tag: "" },
      { id: 4, title: "炒翼轮 小吃", tag: "" },
      { id: 5, title: "翼轮翼 小吃", tag: "" },
      { id: 6, title: "小吃翼轮 小吃", tag: "" },
      { id: 7, title: "翼轮翼 小吃", tag: "" },
      { id: 8, title: "翼轮翼 小吃", tag: "" },
      { id: 9, title: "翼轮翼 小吃", tag: "" },
      { id: 10, title: "翼轮翼 小吃", tag: "" },
      { id: 11, title: "翼轮翼 小吃", tag: "" },
      { id: 12, title: "翼轮翼 小吃", tag: "" },
      { id: 13, title: "翼轮翼 小吃", tag: "" },
      { id: 14, title: "翼轮翼 小吃", tag: "" },
      { id: 15, title: "翼轮翼 小吃", tag: "" },
    ]
  },
  movie: {
    title: "电影",
    icon: "🎬",
    items: [
      { id: 1, title: "钢琴家 电影", tag: "" },
      { id: 2, title: "荒野猎人 电影", tag: "" },
      { id: 3, title: "重返游路的 电影", tag: "" },
      { id: 4, title: "真写下：爸妈威力占卜师", tag: "" },
      { id: 5, title: "艾斯蒂亚选择剧", tag: "" },
      { id: 6, title: "霸王计划：怪物遗产 电影", tag: "" },
      { id: 7, title: "临Trapos（2026）新", tag: "" },
      { id: 8, title: "本生 电影", tag: "" },
      { id: 9, title: "狂野时代", tag: "" },
      { id: 10, title: "吸血鬼生 电影", tag: "" },
      { id: 11, title: "格春停于下来 电影", tag: "" },
      { id: 12, title: "古墓躺版 电影", tag: "" },
      { id: 13, title: "雪山飞蛇之雅北宝禁 电影", tag: "" },
      { id: 14, title: "范野狼人", tag: "" },
      { id: 15, title: "铁血战士：异形之地", tag: "" },
    ]
  },
  tvShow: {
    title: "电视剧",
    icon: "📺",
    items: [
      { id: 1, title: "天堂岛之外第一季BeyondParadiseSeason...", tag: "" },
      { id: 2, title: "天空之城SKYE写 电视剧", tag: "" },
      { id: 3, title: "何翼翼生活 电视剧", tag: "" },
      { id: 4, title: "波人 电视剧", tag: "" },
      { id: 5, title: "国际版1858 电视剧", tag: "" },
      { id: 6, title: "国暗剧 电视剧", tag: "" },
      { id: 7, title: "走门通通 电视剧", tag: "" },
      { id: 8, title: "下雪上精选2年 电视剧", tag: "" },
      { id: 9, title: "温暖爱1997 电视剧", tag: "" },
      { id: 10, title: "澳励爱1994 电视剧", tag: "" },
      { id: 11, title: "浮游先生 电视剧", tag: "" },
      { id: 12, title: "重返派软商", tag: "" },
      { id: 13, title: "大时代2：世纪之战 电视剧", tag: "" },
      { id: 14, title: "温暖赢家 电视剧", tag: "" },
      { id: 15, title: "格普普锁 电视剧", tag: "" },
    ]
  },
  documentary: {
    title: "纪录片",
    icon: "📹",
    items: [
      { id: 1, title: "随便所分享重复做着做着看 纪录片", tag: "" },
      { id: 2, title: "消失的古文明 纪录片", tag: "" },
      { id: 3, title: "宇宙故事、西瓜读地 纪录片", tag: "" },
      { id: 4, title: "创业故：牛牛脸恶、快来美", tag: "" },
      { id: 5, title: "创业故：保罗·塞中格：石油人生", tag: "" },
      { id: 6, title: "办法怕的一天 纪录片", tag: "" },
      { id: 7, title: "创新报告：科只·温里德福", tag: "" },
      { id: 8, title: "创纪录时：巨人", tag: "" },
      { id: 9, title: "创纪录时：巨人", tag: "" },
      { id: 10, title: "创纪录时：巨人", tag: "" },
      { id: 11, title: "创纪录内：暴富", tag: "" },
      { id: 12, title: "大自然故事 纪录片", tag: "" },
      { id: 13, title: "安保特方战态，支持不发达", tag: "" },
      { id: 14, title: "不会承做", tag: "" },
      { id: 15, title: "无充充·观与星辰 纪录片", tag: "" },
    ]
  },
  software: {
    title: "软件",
    icon: "💻",
    items: [
      { id: 1, title: "每Telegram会的代深哥行，取代JSONv...", tag: "" },
      { id: 2, title: "PikPlus 软件", tag: "" },
      { id: 3, title: "汽车旁白古白箱专用版 软件", tag: "" },
      { id: 4, title: "M1模组器 软件", tag: "" },
      { id: 5, title: "安卓电话·电影关窗 软件", tag: "" },
      { id: 6, title: "小马组码器 软件", tag: "" },
      { id: 7, title: "字手清洁物", tag: "" },
      { id: 8, title: "黄海清信息素版 软件", tag: "" },
      { id: 9, title: "AdGuard 软件", tag: "" },
      { id: 10, title: "百宝义精高 软件", tag: "" },
      { id: 11, title: "时光走掉 软件", tag: "" },
      { id: 12, title: "起免姆免火八星辰 软件", tag: "" },
      { id: 13, title: "InstantMail 软件", tag: "" },
      { id: 14, title: "素面鸭 软件", tag: "" },
      { id: 15, title: "X游览器 软件", tag: "" },
    ]
  },
  subject: {
    title: "学科",
    icon: "📚",
    items: [
      { id: 1, title: "一小红书AI财政路遮交流课程，已收获200w+...", tag: "" },
      { id: 2, title: "香港大学围城 学科", tag: "" },
      { id: 3, title: "给分 学科", tag: "" },
      { id: 4, title: "人才攻略：100个人才管理问题及解决海哦...", tag: "" },
      { id: 5, title: "DeepSeek应用高阶精进：产品经理核心技术...", tag: "" },
      { id: 6, title: "DeepSeek超级用户入门：从小白到AI达人 学科", tag: "" },
      { id: 7, title: "丹枝财赞 学科", tag: "" },
      { id: 8, title: "颜颜宏宏 学科", tag: "" },
      { id: 9, title: "微信朋友圈顶的的营销 学科", tag: "" },
      { id: 10, title: "精彩作品集：法律·立马自由（全三册）...", tag: "" },
      { id: 11, title: "人文火学的诞生思 学科", tag: "" },
      { id: 12, title: "精彩作品集：法律·立马自由 学科", tag: "" },
      { id: 13, title: "西方人文思想发展 学科", tag: "" },
      { id: 14, title: "一期数字学分题史 学科", tag: "" },
      { id: 15, title: "如何用AI转传要靠\"人情\" 学科", tag: "" },
    ]
  },
  game: {
    title: "游戏",
    icon: "🎮",
    items: [
      { id: 1, title: "充色往是吃鸡 游戏", tag: "" },
      { id: 2, title: "充色吧！勤物商店 游戏", tag: "" },
      { id: 3, title: "灭龙精神 游戏2025", tag: "" },
      { id: 4, title: "无恐怖：古都大战 游戏", tag: "" },
      { id: 5, title: "战况走上生存", tag: "" },
      { id: 6, title: "全翼翼士：翻翻灰流剧吐力 游戏", tag: "" },
      { id: 7, title: "地球战场 游戏", tag: "" },
      { id: 8, title: "另外空间人生精彩游戏 游戏", tag: "" },
      { id: 9, title: "雌妈小飞 游戏", tag: "" },
      { id: 10, title: "另外空间人生精彩飞行 游戏", tag: "" },
      { id: 11, title: "雌妈小飞 游戏", tag: "" },
      { id: 12, title: "装行带来 游戏", tag: "" },
      { id: 13, title: "无穷飞越之战 游戏", tag: "" },
      { id: 14, title: "风翼剑客 游戏", tag: "" },
      { id: 15, title: "风翼空人 游戏", tag: "" },
    ]
  },
  metaphysics: {
    title: "玄学",
    icon: "🔮",
    items: [
      { id: 1, title: "五行之门 玄学", tag: "" },
      { id: 2, title: "神算 玄学", tag: "" },
      { id: 3, title: "师门置于了雌秘晶最版 玄学", tag: "" },
      { id: 4, title: "台湾国学（2025）玄学", tag: "" },
      { id: 5, title: "春花的那些秘 玄学", tag: "" },
      { id: 6, title: "分析悬想的温馨 玄学", tag: "" },
      { id: 7, title: "直播录音太大·全间顾学化且 玄学", tag: "" },
      { id: 8, title: "隐秘灵魂 玄学", tag: "" },
      { id: 9, title: "还记心理养成的方法 玄学", tag: "" },
      { id: 10, title: "中华储的全书 玄学", tag: "" },
      { id: 11, title: "大充规财经 玄学", tag: "" },
      { id: 12, title: "大力余手攻击 玄学", tag: "" },
      { id: 13, title: "安心之感：佛学通达计理 玄学", tag: "" },
      { id: 14, title: "中华储的全书 玄学", tag: "" },
      { id: 15, title: "大充规财经 玄学", tag: "" },
    ]
  },
  opera: {
    title: "戏曲",
    icon: "🎭",
    items: [
      { id: 1, title: "春秋加飞了罗罗里！给爱评书说明高大+...", tag: "" },
      { id: 2, title: "C川剧一视频 MP3", tag: "" },
      { id: 3, title: "C川剧一视频 MP3", tag: "" },
      { id: 4, title: "E二人钱一视频 MP3", tag: "" },
      { id: 5, title: "H花鼓戏子一视频 MP3", tag: "" },
      { id: 6, title: "H来剧一视频 MP3", tag: "" },
      { id: 7, title: "HP剧一视频 MP3", tag: "" },
      { id: 8, title: "H清剧陆一视频 MP3", tag: "" },
      { id: 9, title: "H湘剧花鼓戏一视频 MP3", tag: "" },
      { id: 10, title: "J翻剧一视频 MP3", tag: "" },
      { id: 11, title: "L吕剧一视频 MP3", tag: "" },
      { id: 12, title: "P评剧一视频 MP3", tag: "" },
      { id: 13, title: "P评剧一视频 MP3", tag: "" },
      { id: 14, title: "Q秦剧一视频 MP3", tag: "" },
      { id: 15, title: "Y豫剧一视频 MP3", tag: "" },
    ]
  },
  novel: {
    title: "小说",
    icon: "📖",
    items: [
      { id: 1, title: "丹道宗师 小说", tag: "" },
      { id: 2, title: "漫漫 小说", tag: "" },
      { id: 3, title: "至变雪 小说", tag: "" },
      { id: 4, title: "神纪星霜 小说", tag: "" },
      { id: 5, title: "双苦击战·情狱封魔 小说", tag: "" },
      { id: 6, title: "守门计·小说", tag: "" },
      { id: 7, title: "星翼翼之战 小说", tag: "" },
      { id: 8, title: "百年孤寒 小说", tag: "" },
      { id: 9, title: "收获天道的流量商品 小说", tag: "" },
      { id: 10, title: "穿越机大哥从从夏得到开 小说", tag: "" },
      { id: 11, title: "字·小说", tag: "" },
      { id: 12, title: "寂悲慕·旅路是一首歌一 小说", tag: "" },
      { id: 13, title: "字·小说", tag: "" },
      { id: 14, title: "字·小说", tag: "" },
      { id: 15, title: "阿宅空人 小说", tag: "" },
    ]
  },
  book: {
    title: "书籍",
    icon: "📕",
    items: [
      { id: 1, title: "仙道 书籍", tag: "" },
      { id: 2, title: "苍苍婚陆 书籍", tag: "" },
      { id: 3, title: "该书 书籍", tag: "" },
      { id: 4, title: "斗破星图 书籍", tag: "" },
      { id: 5, title: "大生宰 书籍", tag: "" },
      { id: 6, title: "神印 书籍", tag: "" },
      { id: 7, title: "战天 书籍", tag: "" },
      { id: 8, title: "五行之门 书籍", tag: "" },
      { id: 9, title: "路视力 书籍", tag: "" },
      { id: 10, title: "石征翼最善养者 书籍", tag: "" },
      { id: 11, title: "二次党盾 书籍", tag: "" },
      { id: 12, title: "千年一月光明：人类科学探索的四章 书籍", tag: "" },
      { id: 13, title: "拆雄遗精星可情（台全井级组） 书籍", tag: "" },
      { id: 14, title: "智能机器人开发与实践 书籍", tag: "" },
      { id: 15, title: "智能机器人开发与实践 书籍", tag: "" },
    ]
  },
  design: {
    title: "设计",
    icon: "🎨",
    items: [
      { id: 1, title: "群安猫人人都福AI设计作 设计", tag: "" },
      { id: 2, title: "【AI智能插画】群安猫人人都福AI设计作 设计", tag: "" },
      { id: 3, title: "冷漠浓浓：黑暗切割宝石 设计", tag: "" },
      { id: 4, title: "大脑传统超现代转哲学，AI灵灵龙灵灵灵灵灵灵", tag: "" },
      { id: 5, title: "姆特小说（DungeonSquad）设计", tag: "" },
      { id: 6, title: "每日素图 设计", tag: "" },
      { id: 7, title: "Micu 设计", tag: "" },
      { id: 8, title: "黑白土：学习生 设计", tag: "" },
      { id: 9, title: "猫特济设计 设计", tag: "" },
      { id: 10, title: "深渊之影 设计", tag: "" },
      { id: 11, title: "恩翼握手：猫哥音 设计", tag: "" },
      { id: 12, title: "揽月切线切2.1 设计", tag: "" },
      { id: 13, title: "房产达人 设计", tag: "" },
      { id: 14, title: "房产达人 设计", tag: "" },
      { id: 15, title: "傍李记生存 设计", tag: "" },
    ]
  },
  standard: {
    title: "标准",
    icon: "📋",
    items: [
      { id: 1, title: "CJJ729-2010 翻译城体绿耕围程上现技术...", tag: "" },
      { id: 2, title: "CJJ792-2018 设特精博修修化工程级计技术...", tag: "" },
      { id: 3, title: "CJT43-2014 铸铁道道路青高质量美术技术...", tag: "" },
      { id: 4, title: "CJT47-2015 生活设施互联网灵灵灵灵.pdf", tag: "" },
      { id: 5, title: "CJT65-2004 布可环联设计主精翼.pdf", tag: "" },
      { id: 6, title: "CJTT1-2011 轨通设施灵动灵灵.pdf", tag: "" },
      { id: 7, title: "GBT51327-2018期码用综合功安规模研精.pdf", tag: "" },
      { id: 8, title: "GB/T51345-2018海铁地理规模研精.pdf", tag: "" },
      { id: 9, title: "CCS302-2006 报特科质速止技术规程.pdf", tag: "" },
      { id: 10, title: "CECS429-2016 粗硅海岛台金仪安全规程.pdf", tag: "" },
      { id: 11, title: "CAT480-2004 保国辰翼灵修灵对规速研程.pdf", tag: "" },
      { id: 12, title: "GB50091-2006 精筛海运及级建设计标准研程.pdf", tag: "" },
      { id: 13, title: "GB50091-2006 精筛海运及级建设计标准研程.pdf", tag: "" },
      { id: 14, title: "GB50422-2017 翼耐力灵灵宝土翻道工程技术...", tag: "" },
      { id: 15, title: "GB50422-2017 翼耐力灵灵宝土翻道工程技术...", tag: "" },
    ]
  },
}

const hotResourcesData = [
  { id: 1, title: "ArtPepperEverythingHappensToMe-LiveAT...", tag: "音乐", color: "pink", badge: "hot" as const },
  { id: 2, title: "Gorillaz-DemonDays", tag: "音乐", color: "pink", badge: "recommend" as const },
  { id: 3, title: "小城大事", tag: "小说", color: "blue", badge: "hot" as const },
  { id: 4, title: "DamianoDavid-FUNNYlittleFEARS", tag: "音乐", color: "pink" },
  { id: 5, title: "Fugees-GreatestHits", tag: "音乐", color: "pink" },
  { id: 6, title: "ToriAmos-StrangeLittleGirls", tag: "音乐", color: "pink" },
  { id: 7, title: "周华健-有弦相聚限量编号版", tag: "音乐", color: "pink" },
  { id: 8, title: "NilsLandgren-LoveofMyLife", tag: "音乐", color: "pink" },
  { id: 9, title: "神印王座", tag: "小说", color: "blue" },
  { id: 10, title: "GabrielSmallwood-Juvenilia", tag: "音乐", color: "pink" },
  { id: 11, title: "玄界之门", tag: "玄学", color: "purple" },
  { id: 12, title: "AlexanderMalofeev-ForgottenMelodies", tag: "音乐", color: "pink" },
  { id: 13, title: "所有我们看不见的光", tag: "电视剧", color: "green" },
  { id: 14, title: "锦绣前程", tag: "电视剧", color: "green" },
  { id: 15, title: "LaurynHill-MTVUnpluggedNo.2.0", tag: "音乐", color: "pink" },
  { id: 16, title: "EshaTewari-WhatMakesaGirlsGirl", tag: "音乐", color: "pink" },
  { id: 17, title: "集合啦！动物森友", tag: "游戏", color: "cyan" },
  { id: 18, title: "OliviaBelli-Daimon-PianoConcerto,IthacaSuite&...", tag: "音乐", color: "pink" },
  { id: 19, title: "黑色党徒", tag: "电影", color: "orange" },
  { id: 20, title: "BEYOND-MORE", tag: "音乐", color: "pink" },
  { id: 21, title: "U2DaysOfAshEP", tag: "音乐", color: "pink" },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <AlertBanner />
      <FloatingButtons />
      <main className="max-w-7xl mx-auto px-4 py-4">
        <HotResources items={hotResourcesData} />
        
        {/* 分类区域 - 4列布局 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          <CategorySection {...categoryData.music} />
          <CategorySection {...categoryData.shortDrama} />
          <CategorySection {...categoryData.subscription} />
          <CategorySection {...categoryData.food} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          <CategorySection {...categoryData.movie} />
          <CategorySection {...categoryData.tvShow} />
          <CategorySection {...categoryData.documentary} />
          <CategorySection {...categoryData.software} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          <CategorySection {...categoryData.subject} />
          <CategorySection {...categoryData.game} />
          <CategorySection {...categoryData.metaphysics} />
          <CategorySection {...categoryData.opera} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          <CategorySection {...categoryData.novel} />
          <CategorySection {...categoryData.book} />
          <CategorySection {...categoryData.design} />
          <CategorySection {...categoryData.standard} />
        </div>
      </main>
      <Footer />
    </div>
  )
}
