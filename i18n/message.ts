export const messages = {
  en: {
    heroDescription: "Building exceptional web experiences with modern technologies. Passionate about creating elegant, performant, and accessible applications.",
    heroContact: "Get In Touch",
    heroProjects: "View Projects",
    aboutDescription1: "I am a motivated Software Engineer with experience in full-stack development using modern technologies. I have a strong TypeScript and Java foundation, build user-focused web applications, and have supported organizations through volunteer web development.",
    aboutDescription2: "I also have solid data science skills, including data processing, analysis, visualization, and building predictive models using Python libraries.",
    aboutDescription3: "I have practical experience with cloud deployment (AWS, Firebase), modern front-end and back-end frameworks, and efficient version control using Git platforms.",
    aboutDescriptionName: "- Wataru Okada",
    aboutHobbies: "Hobbies",
  },
  ja: {
    heroDescription: "最新の技術で優れた Web 体験を創り上げます。\nエレガントで高性能、そしてアクセシブルなアプリケーション開発に情熱を注いでいます。",
    heroContact: "お問い合わせはこちら",
    heroProjects: "My プロジェクトはこちら",
    aboutDescription1:
      "私はモダンな技術を使ったフルスタック開発の経験を持つ、意欲的なソフトウェアエンジニアです。TypeScriptとJavaの強い基礎があり、ユーザー中心のWebアプリケーションを構築してきました。また、カナダや日本の企業で、インターンとしてWebサイト開発にも貢献してきました。",
    aboutDescription2:
      "さらに、データ処理・分析・可視化・予測モデル構築など、Pythonを使ったデータサイエンスのスキルも持っています。",
    aboutDescription3:
      "AWSやFirebaseを使ったクラウドデプロイの経験があり、最新のフロントエンドやバックエンドの技術を使って開発できます。また、Git・GitHubを使った効率的なバージョン管理も得意です。",
    aboutDescriptionName: "- 岡田 航",
    aboutHobbies: "趣味",
  },
} as const;

export type Locale = keyof typeof messages;
export type MessageKey = keyof (typeof messages)["en"];
