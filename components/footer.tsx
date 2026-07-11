import { Search } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/70 rounded-lg flex items-center justify-center">
                <Search className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold gradient-text">盘搜</span>
            </div>
            <p className="text-sm text-muted-foreground">
              全网资源一站式搜索平台，快速找到您需要的电影、音乐、软件、教程等资源。
            </p>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">资源分类</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#movies" className="text-muted-foreground hover:text-foreground transition-colors">
                  电影资源
                </a>
              </li>
              <li>
                <a href="#music" className="text-muted-foreground hover:text-foreground transition-colors">
                  音乐资源
                </a>
              </li>
              <li>
                <a href="#software" className="text-muted-foreground hover:text-foreground transition-colors">
                  软件资源
                </a>
              </li>
              <li>
                <a href="#tutorials" className="text-muted-foreground hover:text-foreground transition-colors">
                  教程资源
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">支持</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  帮助中心
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  使用指南
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  常见问题
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  联系我们
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">法律</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  服务条款
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  隐私政策
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  版权声明
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  免责声明
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} 盘搜. 保留所有权利。 | 本站仅提供搜索服务，不涉及任何资源存储和分发。
          </p>
        </div>
      </div>
    </footer>
  )
}
