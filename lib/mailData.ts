export interface TempMailSite {
  id: string;
  name: string;
  url: string;
  description: string;
  features: string[];
  category: string;
}

export const categories = [
  { id: 'all', name: '全部', icon: '📧' },
  { id: 'popular', name: '热门推荐', icon: '🔥' },
  { id: 'secure', name: '安全加密', icon: '🔒' },
  { id: 'disposable', name: '一次性', icon: '⚡' },
  { id: 'anonymous', name: '匿名保护', icon: '👤' },
  { id: 'api', name: 'API支持', icon: '🔧' },
];

export const tempMailSites: TempMailSite[] = [
  {
    id: '1',
    name: 'YOPmail',
    url: 'https://yopmail.com',
    description: '免费临时邮箱，无需注册，即时查看邮件',
    features: ['无需注册', '即时查看', '多语言支持'],
    category: 'popular'
  },
  {
    id: '2',
    name: 'Temp Mail',
    url: 'https://temp-mail.org',
    description: '自动生成临时邮箱地址，保护隐私安全',
    features: ['自动生成', '隐私保护', 'API支持'],
    category: 'popular'
  },
  {
    id: '3',
    name: '10 Minute Mail',
    url: 'https://10minutemail.com',
    description: '10分钟临时邮箱，时间到期自动销毁',
    features: ['10分钟有效', '自动销毁', '简单易用'],
    category: 'disposable'
  },
  {
    id: '4',
    name: 'Guerrilla Mail',
    url: 'https://www.guerrillamail.com',
    description: '一次性电子邮件地址，保护真实邮箱',
    features: ['一次性使用', '附件支持', '多域名'],
    category: 'disposable'
  },
  {
    id: '5',
    name: 'Maildrop',
    url: 'https://maildrop.cc',
    description: '免费的临时邮箱服务，无需注册',
    features: ['无限邮箱', '开源项目', 'API接口'],
    category: 'api'
  },
  {
    id: '6',
    name: 'Mohmal',
    url: 'https://www.mohmal.com',
    description: '阿拉伯语临时邮箱服务',
    features: ['45分钟有效', '多语言', '简洁界面'],
    category: 'disposable'
  },
  {
    id: '7',
    name: 'Mailinator',
    url: 'https://www.mailinator.com',
    description: '公共邮箱系统，任何人都可以查看',
    features: ['公共邮箱', '无需注册', 'RSS订阅'],
    category: 'popular'
  },
  {
    id: '8',
    name: 'ThrowAwayMail',
    url: 'https://www.throwawaymail.com',
    description: '48小时临时邮箱',
    features: ['48小时有效', '随机地址', '简单快速'],
    category: 'disposable'
  },
  {
    id: '9',
    name: 'FakeMail',
    url: 'https://www.fakemail.net',
    description: '假邮箱生成器，保护真实身份',
    features: ['随机生成', '隐私保护', '免费使用'],
    category: 'anonymous'
  },
  {
    id: '10',
    name: 'TempMail.Plus',
    url: 'https://tempmail.plus',
    description: '高级临时邮箱服务',
    features: ['高级功能', '长期保存', '自定义域名'],
    category: 'secure'
  },
  {
    id: '11',
    name: 'EmailOnDeck',
    url: 'https://www.emailondeck.com',
    description: '即时临时邮箱，快速接收验证码',
    features: ['即时接收', '自动刷新', '移动优化'],
    category: 'popular'
  },
  {
    id: '12',
    name: 'Burner Mail',
    url: 'https://burnermail.io',
    description: '一次性邮箱转发服务',
    features: ['邮件转发', '隐藏真实邮箱', '浏览器插件'],
    category: 'secure'
  },
  {
    id: '13',
    name: 'MailDrop',
    url: 'https://maildrop.cc',
    description: '开源临时邮箱',
    features: ['开源', 'API支持', '无广告'],
    category: 'api'
  },
  {
    id: '14',
    name: 'Temp Mail IO',
    url: 'https://temp-mail.io',
    description: '简洁的临时邮箱服务',
    features: ['简洁界面', '快速加载', '多域名选择'],
    category: 'popular'
  },
  {
    id: '15',
    name: 'DropMail',
    url: 'https://dropmail.me',
    description: '自动生成临时邮箱',
    features: ['自动生成', 'GraphQL API', '现代化设计'],
    category: 'api'
  },
  {
    id: '16',
    name: 'Minute Inbox',
    url: 'https://www.minuteinbox.com',
    description: '快速临时邮箱',
    features: ['快速创建', '简单界面', '自动刷新'],
    category: 'disposable'
  },
  {
    id: '17',
    name: 'GuerrillaMail',
    url: 'https://www.guerrillamail.com',
    description: '战地邮箱，匿名发送接收',
    features: ['匿名发送', '接收邮件', '加密通信'],
    category: 'anonymous'
  },
  {
    id: '18',
    name: 'TempInbox',
    url: 'https://tempinbox.com',
    description: '临时收件箱',
    features: ['临时收件', '自动刷新', '简洁设计'],
    category: 'disposable'
  },
  {
    id: '19',
    name: 'MailCatch',
    url: 'https://mailcatch.com',
    description: '邮件捕捉器',
    features: ['捕捉邮件', '开发测试', 'SMTP服务'],
    category: 'api'
  },
  {
    id: '20',
    name: 'FakeMailGenerator',
    url: 'https://www.fakemailgenerator.com',
    description: '假邮件生成器',
    features: ['批量生成', '多域名', '即时接收'],
    category: 'anonymous'
  },
  {
    id: '21',
    name: 'TempMailAddress',
    url: 'https://www.tempmailaddress.com',
    description: '临时邮箱地址生成',
    features: ['随机地址', '自动删除', '安全可靠'],
    category: 'disposable'
  },
  {
    id: '22',
    name: 'DisposableMail',
    url: 'https://www.disposablemail.com',
    description: '一次性邮件服务',
    features: ['一次性', '无需注册', '快速访问'],
    category: 'disposable'
  },
  {
    id: '23',
    name: 'MyTrashMail',
    url: 'https://www.mytrashmail.com',
    description: '垃圾邮箱服务',
    features: ['垃圾邮件隔离', '自定义地址', '长期保存'],
    category: 'secure'
  },
  {
    id: '24',
    name: 'MailTemp',
    url: 'https://mailtemp.net',
    description: '临时邮件服务',
    features: ['快速创建', '多语言', '移动友好'],
    category: 'popular'
  },
  {
    id: '25',
    name: 'AnonBox',
    url: 'https://www.anonbox.net',
    description: '匿名邮箱',
    features: ['完全匿名', '安全加密', '无日志'],
    category: 'anonymous'
  },
  {
    id: '26',
    name: 'TempEmail',
    url: 'https://tempemail.net',
    description: '临时电子邮件',
    features: ['即时生成', '自动删除', '简洁UI'],
    category: 'disposable'
  },
  {
    id: '27',
    name: 'EmailFake',
    url: 'https://emailfake.com',
    description: '虚假邮箱生成',
    features: ['虚假邮箱', '隐私保护', '免费使用'],
    category: 'anonymous'
  },
  {
    id: '28',
    name: 'Spambox',
    url: 'https://www.spambox.info',
    description: '垃圾邮件箱',
    features: ['垃圾邮件过滤', '临时使用', '自动清理'],
    category: 'disposable'
  },
  {
    id: '29',
    name: 'TempMailGen',
    url: 'https://tempmail.ninja',
    description: '忍者临时邮箱',
    features: ['快速生成', '自动刷新', 'PWA支持'],
    category: 'popular'
  },
  {
    id: '30',
    name: 'ThrowawayEmail',
    url: 'https://throwawayemail.com',
    description: '抛弃式邮箱',
    features: ['抛弃式', '即用即抛', '保护隐私'],
    category: 'disposable'
  },
  {
    id: '31',
    name: 'Temp-Mail.ru',
    url: 'https://temp-mail.ru',
    description: '俄罗斯临时邮箱服务',
    features: ['俄语支持', '自动生成', '免费使用'],
    category: 'popular'
  },
  {
    id: '32',
    name: 'MailNesia',
    url: 'https://mailnesia.com',
    description: '简单快速的临时邮箱',
    features: ['无需注册', '即时访问', '多域名'],
    category: 'disposable'
  },
  {
    id: '33',
    name: 'GetAirMail',
    url: 'https://getairmail.com',
    description: '空中邮件服务',
    features: ['云端存储', '快速接收', '安全可靠'],
    category: 'secure'
  },
  {
    id: '34',
    name: 'TempMailo',
    url: 'https://tempmailo.com',
    description: '临时邮箱在线服务',
    features: ['在线查看', '自动刷新', '简洁界面'],
    category: 'popular'
  },
  {
    id: '35',
    name: 'TempInbox.com',
    url: 'https://tempinbox.com',
    description: '临时收件箱服务',
    features: ['临时收件', '快速访问', '无需注册'],
    category: 'disposable'
  },
  {
    id: '36',
    name: 'MintEmail',
    url: 'https://www.mintemail.com',
    description: '薄荷邮箱',
    features: ['清新界面', '快速生成', '隐私保护'],
    category: 'anonymous'
  },
  {
    id: '37',
    name: 'TempMailAddress',
    url: 'https://www.tempmailaddress.com',
    description: '临时邮箱地址生成器',
    features: ['地址生成', '自动删除', '安全保护'],
    category: 'disposable'
  },
  {
    id: '38',
    name: 'Nada Email',
    url: 'https://getnada.com',
    description: '无广告临时邮箱',
    features: ['无广告', '自定义域名', '长期保存'],
    category: 'secure'
  },
  {
    id: '39',
    name: 'Temp Mail Box',
    url: 'https://tempmailbox.com',
    description: '临时邮箱盒子',
    features: ['邮箱盒子', '批量管理', '快速切换'],
    category: 'popular'
  },
  {
    id: '40',
    name: 'DisposableEmail',
    url: 'https://www.disposable-email.com',
    description: '一次性邮箱服务',
    features: ['一次性使用', '即时生成', '自动销毁'],
    category: 'disposable'
  },
  {
    id: '41',
    name: 'EmailDrop',
    url: 'https://www.emaildrop.io',
    description: '邮件降落服务',
    features: ['快速降落', '即时接收', '简单易用'],
    category: 'disposable'
  },
  {
    id: '42',
    name: 'TempEmail.net',
    url: 'https://tempemail.net',
    description: '临时电子邮件服务',
    features: ['电子邮件', '临时使用', '快速访问'],
    category: 'popular'
  },
  {
    id: '43',
    name: 'TrashMail',
    url: 'https://trashmail.com',
    description: '垃圾邮件服务',
    features: ['垃圾隔离', '转发功能', '长期使用'],
    category: 'secure'
  },
  {
    id: '44',
    name: 'MailDrop.cc',
    url: 'https://maildrop.cc',
    description: 'MailDrop临时邮箱',
    features: ['开源免费', 'API接口', '无需注册'],
    category: 'api'
  },
  {
    id: '45',
    name: 'TempMail.Email',
    url: 'https://tempmail.email',
    description: '临时邮件服务',
    features: ['自动生成', '快速访问', '多语言'],
    category: 'popular'
  },
  {
    id: '46',
    name: 'CrapMail',
    url: 'https://www.crapmail.com',
    description: '废料邮件服务',
    features: ['废料隔离', '临时使用', '保护隐私'],
    category: 'disposable'
  },
  {
    id: '47',
    name: 'MailForSpam',
    url: 'https://www.mailforspam.com',
    description: '垃圾邮件专用',
    features: ['垃圾专用', '隔离保护', '自动清理'],
    category: 'disposable'
  },
  {
    id: '48',
    name: 'SafetyMails',
    url: 'https://www.safetymails.com',
    description: '安全邮件服务',
    features: ['安全保护', '加密传输', '隐私优先'],
    category: 'secure'
  },
  {
    id: '49',
    name: 'PrivateEmail',
    url: 'https://privateemail.com',
    description: '私密邮件服务',
    features: ['私密保护', '匿名使用', '安全可靠'],
    category: 'anonymous'
  },
  {
    id: '50',
    name: 'SecureMail',
    url: 'https://securemail.com',
    description: '安全邮件系统',
    features: ['安全系统', '加密保护', '隐私保障'],
    category: 'secure'
  },
  {
    id: '51',
    name: 'QuickMail.io',
    url: 'https://quickmail.io',
    description: '快速邮件服务',
    features: ['快速生成', '即时接收', '简单操作'],
    category: 'popular'
  },
  {
    id: '52',
    name: 'InstantEmail',
    url: 'https://instantemail.org',
    description: '即时邮件服务',
    features: ['即时生成', '快速访问', '无需等待'],
    category: 'disposable'
  },
  {
    id: '53',
    name: 'FastMail.fm',
    url: 'https://fastmail.fm',
    description: '快速邮件系统',
    features: ['快速系统', '高效接收', '稳定可靠'],
    category: 'popular'
  },
  {
    id: '54',
    name: 'SpeedyMail',
    url: 'https://speedymail.org',
    description: '急速邮件服务',
    features: ['急速接收', '快速响应', '高效处理'],
    category: 'disposable'
  },
  {
    id: '55',
    name: 'RapidMail',
    url: 'https://rapidmail.com',
    description: '迅速邮件服务',
    features: ['迅速生成', '快捷访问', '简便操作'],
    category: 'popular'
  },
  {
    id: '56',
    name: 'ProtonMail Temp',
    url: 'https://protonmail-temp.com',
    description: '质子临时邮箱',
    features: ['端到端加密', '瑞士隐私', '安全可靠'],
    category: 'secure'
  },
  {
    id: '57',
    name: 'CryptoMail',
    url: 'https://cryptomail.com',
    description: '加密邮件服务',
    features: ['加密保护', '匿名使用', '安全通信'],
    category: 'secure'
  },
  {
    id: '58',
    name: 'HideMail',
    url: 'https://hidemail.org',
    description: '隐藏邮件服务',
    features: ['隐藏地址', '保护隐私', '匿名收信'],
    category: 'anonymous'
  },
  {
    id: '59',
    name: 'MaskMail',
    url: 'https://maskmail.com',
    description: '掩码邮件服务',
    features: ['掩码保护', '身份隐藏', '安全转发'],
    category: 'anonymous'
  },
  {
    id: '60',
    name: 'AliasEmail',
    url: 'https://aliasemail.com',
    description: '别名邮件服务',
    features: ['别名生成', '多重身份', '灵活管理'],
    category: 'anonymous'
  },
  {
    id: '61',
    name: 'ForwardMail',
    url: 'https://forwardmail.net',
    description: '转发邮件服务',
    features: ['邮件转发', '自定义规则', '灵活配置'],
    category: 'secure'
  },
  {
    id: '62',
    name: 'RelayMail',
    url: 'https://relaymail.com',
    description: '中继邮件服务',
    features: ['中继转发', '隐私保护', '安全可靠'],
    category: 'secure'
  },
  {
    id: '63',
    name: 'BounceEmail',
    url: 'https://bounceemail.com',
    description: '弹回邮件服务',
    features: ['邮件弹回', '保护真实邮箱', '临时使用'],
    category: 'disposable'
  },
  {
    id: '64',
    name: 'FakeMail.net',
    url: 'https://fakemail.net',
    description: '虚假邮件生成',
    features: ['虚假生成', '测试专用', '开发友好'],
    category: 'api'
  },
  {
    id: '65',
    name: 'TestMail',
    url: 'https://testmail.app',
    description: '测试邮件服务',
    features: ['测试专用', 'API支持', '开发者工具'],
    category: 'api'
  },
  {
    id: '66',
    name: 'DevMail',
    url: 'https://devmail.dev',
    description: '开发者邮箱',
    features: ['开发测试', 'API接口', '技术支持'],
    category: 'api'
  },
  {
    id: '67',
    name: 'MailTrap',
    url: 'https://mailtrap.io',
    description: '邮件陷阱服务',
    features: ['邮件测试', '开发调试', 'SMTP服务'],
    category: 'api'
  },
  {
    id: '68',
    name: 'EmailTester',
    url: 'https://emailtester.com',
    description: '邮件测试器',
    features: ['邮件测试', '调试工具', '开发辅助'],
    category: 'api'
  },
  {
    id: '69',
    name: 'MailHog',
    url: 'https://mailhog.org',
    description: '邮件猪服务',
    features: ['本地测试', 'SMTP捕获', '开源工具'],
    category: 'api'
  },
  {
    id: '70',
    name: 'MailCatcher',
    url: 'https://mailcatcher.me',
    description: '邮件捕手',
    features: ['邮件捕获', 'SMTP测试', '开发工具'],
    category: 'api'
  },
  {
    id: '71',
    name: 'InboxKitten',
    url: 'https://inboxkitten.com',
    description: '收件箱小猫',
    features: ['可爱界面', '临时收件', '开源项目'],
    category: 'popular'
  },
  {
    id: '72',
    name: 'EmailLair',
    url: 'https://emaillair.com',
    description: '邮件巢穴',
    features: ['安全巢穴', '隐私保护', '长期保存'],
    category: 'secure'
  },
  {
    id: '73',
    name: 'MailVault',
    url: 'https://mailvault.com',
    description: '邮件保险库',
    features: ['安全存储', '加密保护', '长期保管'],
    category: 'secure'
  },
  {
    id: '74',
    name: 'InboxShield',
    url: 'https://inboxshield.com',
    description: '收件箱护盾',
    features: ['护盾保护', '垃圾过滤', '安全防护'],
    category: 'secure'
  },
  {
    id: '75',
    name: 'MailGuard',
    url: 'https://mailguard.io',
    description: '邮件守卫',
    features: ['守卫保护', '威胁拦截', '安全监控'],
    category: 'secure'
  },
  {
    id: '76',
    name: 'TempBox',
    url: 'https://tempbox.email',
    description: '临时邮箱盒',
    features: ['临时盒子', '快速访问', '自动清理'],
    category: 'disposable'
  },
  {
    id: '77',
    name: 'QuickInbox',
    url: 'https://quickinbox.com',
    description: '快速收件箱',
    features: ['快速创建', '即时接收', '简单操作'],
    category: 'popular'
  },
  {
    id: '78',
    name: 'SpeedInbox',
    url: 'https://speedinbox.com',
    description: '急速收件箱',
    features: ['急速生成', '快捷访问', '高效处理'],
    category: 'disposable'
  },
  {
    id: '79',
    name: 'FlashMail',
    url: 'https://flashmail.io',
    description: '闪电邮件',
    features: ['闪电速度', '即时生成', '快速响应'],
    category: 'popular'
  },
  {
    id: '80',
    name: 'BlitzMail',
    url: 'https://blitzmail.com',
    description: '闪电邮件服务',
    features: ['闪电接收', '快速处理', '高效稳定'],
    category: 'disposable'
  },
  {
    id: '81',
    name: 'SnapMail',
    url: 'https://snapmail.cc',
    description: '快照邮件',
    features: ['快照功能', '即时保存', '快速访问'],
    category: 'popular'
  },
  {
    id: '82',
    name: 'ZapMail',
    url: 'https://zapmail.io',
    description: '闪电邮箱',
    features: ['闪电般快', '即时创建', '简单易用'],
    category: 'disposable'
  },
  {
    id: '83',
    name: 'BoltMail',
    url: 'https://boltmail.com',
    description: '雷电邮件',
    features: ['雷电速度', '快速生成', '稳定可靠'],
    category: 'popular'
  },
  {
    id: '84',
    name: 'SwiftMail',
    url: 'https://swiftmail.io',
    description: '迅捷邮件',
    features: ['迅捷服务', '快速响应', '高效处理'],
    category: 'disposable'
  },
  {
    id: '85',
    name: 'JetMail',
    url: 'https://jetmail.com',
    description: '喷气邮件',
    features: ['喷气速度', '快速接收', '稳定服务'],
    category: 'popular'
  },
  {
    id: '86',
    name: 'RocketMail',
    url: 'https://rocketmail.cc',
    description: '火箭邮件',
    features: ['火箭速度', '超快接收', '高效稳定'],
    category: 'disposable'
  },
  {
    id: '87',
    name: 'NinjaEmail',
    url: 'https://ninjaemail.com',
    description: '忍者邮箱',
    features: ['忍者隐身', '匿名保护', '快速访问'],
    category: 'anonymous'
  },
  {
    id: '88',
    name: 'StealthMail',
    url: 'https://stealthmail.io',
    description: '隐身邮件',
    features: ['隐身模式', '匿名使用', '安全可靠'],
    category: 'anonymous'
  },
  {
    id: '89',
    name: 'GhostMail',
    url: 'https://ghostmail.com',
    description: '幽灵邮件',
    features: ['幽灵模式', '完全匿名', '无痕使用'],
    category: 'anonymous'
  },
  {
    id: '90',
    name: 'PhantomMail',
    url: 'https://phantommail.io',
    description: '幻影邮件',
    features: ['幻影保护', '匿名收信', '隐私优先'],
    category: 'anonymous'
  },
  {
    id: '91',
    name: 'ShadowMail',
    url: 'https://shadowmail.com',
    description: '暗影邮件',
    features: ['暗影保护', '匿名通信', '安全加密'],
    category: 'anonymous'
  },
  {
    id: '92',
    name: 'IncognitoMail',
    url: 'https://incognitomail.com',
    description: '隐身模式邮件',
    features: ['隐身模式', '匿名服务', '隐私保护'],
    category: 'anonymous'
  },
  {
    id: '93',
    name: 'UndergroundMail',
    url: 'https://undergroundmail.com',
    description: '地下邮件',
    features: ['地下服务', '极致隐私', '安全可靠'],
    category: 'anonymous'
  },
  {
    id: '94',
    name: 'DarkMail',
    url: 'https://darkmail.io',
    description: '暗黑邮件',
    features: ['暗网级别', '极致加密', '匿名保护'],
    category: 'secure'
  },
  {
    id: '95',
    name: 'BlackMail.io',
    url: 'https://blackmail.io',
    description: '黑色邮件',
    features: ['黑色保护', '加密通信', '安全可靠'],
    category: 'secure'
  },
  {
    id: '96',
    name: 'VaultMail',
    url: 'https://vaultmail.com',
    description: '保险库邮件',
    features: ['保险库级', '安全存储', '加密保护'],
    category: 'secure'
  },
  {
    id: '97',
    name: 'FortressMail',
    url: 'https://fortressmail.com',
    description: '堡垒邮件',
    features: ['堡垒防护', '军事级加密', '极致安全'],
    category: 'secure'
  },
  {
    id: '98',
    name: 'BunkerMail',
    url: 'https://bunkermail.io',
    description: '地堡邮件',
    features: ['地堡保护', '安全加密', '隐私优先'],
    category: 'secure'
  },
  {
    id: '99',
    name: 'CastleMail',
    url: 'https://castlemail.com',
    description: '城堡邮件',
    features: ['城堡防御', '多层保护', '安全可靠'],
    category: 'secure'
  },
  {
    id: '100',
    name: 'ShieldMail',
    url: 'https://shieldmail.io',
    description: '护盾邮件',
    features: ['护盾防护', '安全保障', '隐私保护'],
    category: 'secure'
  }
];
