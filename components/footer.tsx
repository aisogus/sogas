const footerCategories = [
  "大数据课程",
  "人工智能",
  "情感升级",
  "健身减脂",
  "网络赚钱",
  "平面设计",
  "网站源码",
  "前端开发",
  "后端开发",
  "运营推广MP",
]

const footerLinks = [
  "免责声明",
  "隐私政策",
  "关于我们",
  "联系我们",
]

export function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-8">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* 分类标签 */}
        <div className="flex flex-wrap gap-2 justify-center mb-5">
          {footerCategories.map((category) => (
            <button
              key={category}
              className="px-3 py-1.5 text-sm text-muted-foreground bg-muted/50 rounded-full hover:bg-muted hover:text-foreground transition-colors"
            >
              {category}
            </button>
          ))}
        </div>

        {/* 底部链接 */}
        <div className="flex flex-wrap gap-6 justify-center text-sm text-muted-foreground mb-4">
          {footerLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="hover:text-primary transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        {/* 版权信息 */}
        <div className="text-center space-y-1">
          <p className="text-xs text-muted-foreground leading-relaxed">
            免责声明：本站资料非官方存储免费分享。不得依据任何法规传播或使用，不存储任何违规隐私和支付数据
          </p>
          <p className="text-xs text-muted-foreground">
            联系邮箱：example@email.com
          </p>
        </div>
      </div>
    </footer>
  )
}
