# Portfolio Website - Engineer Portfolio

A modern, cyberpunk-themed portfolio website built with Next.js, TypeScript, and stunning neon animations. Designed to impress recruiters and engineering teams for job applications.

## Features

### Design & Animations
- **Dark Cyberpunk Theme**: Neon colors (cyan, pink, green) with dark background
- **Particle Network Background**: Animated particle system with connecting lines across all sections
- **Advanced Animations**:
  - Glitch effects on headings
  - Neon flicker and glow effects
  - 3D tilt effects on cards
  - Floating animations
  - Pulse glow effects
  - Shimmer effects
  - Typing animation on hero title
  - Trail effects on particles

### Sections
- **Hero**: Eye-catching introduction with animated particles and social links
- **About Me**: Personal introduction and background (Pink neon heading)
- **Experience**: Work history timeline with hover effects (Green neon heading)
- **Featured Projects**: Project showcase with images and tech stacks (Cyan neon heading)
- **Skills & Technologies**: Categorized tech stack with icons (Cyan neon heading)
- **Get In Touch**: Contact form and social media links (Cyan neon heading)
  - Email
  - GitHub
  - LinkedIn
  - Instagram
  - Discord

### Technical Features
- Fully responsive design (mobile-first)
- Smooth scroll navigation
- Intersection Observer animations
- SEO optimized
- English language for international reach

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Fonts**: Geist Sans & Geist Mono
- **Icons**: Lucide React

## Project Structure

\`\`\`
├── app/
│   ├── page.tsx          # Main page component
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles and theme tokens
├── components/
│   ├── navigation.tsx    # Navigation bar
│   ├── hero.tsx          # Hero section
│   ├── about.tsx         # About section
│   ├── experience.tsx    # Experience section
│   ├── projects.tsx      # Projects section
│   ├── skills.tsx        # Skills section
│   ├── contact.tsx       # Contact section
│   └── footer.tsx        # Footer
└── public/               # Static assets
\`\`\`

## Customization

### Update Personal Information

1. **Hero Section** (`components/hero.tsx`):
   - Update name, title, and description
   - Change social media links

2. **About Section** (`components/about.tsx`):
   - Update personal introduction text

3. **Experience Section** (`components/experience.tsx`):
   - Add/edit work experiences with company names, roles, dates, and descriptions

4. **Projects Section** (`components/projects.tsx`):
   - Add/edit project information
   - Update project images in `/public` folder
   - Add tech stacks used in each project

5. **Skills Section** (`components/skills.tsx`):
   - Add/remove technologies from each category
   - Categories: Frontend, Backend, Tools & Others

6. **Contact Section** (`components/contact.tsx`):
   - Update email address
   - Update social media usernames/links
   - Customize contact form action

### Color Customization

Edit `app/globals.css` to change the color scheme:

\`\`\`css
@theme inline {
  --color-primary: /* Neon cyan */
  --color-secondary: /* Neon pink */
  --color-accent: /* Neon green */
  /* ... other color tokens */
}
\`\`\`

## Installation & Development

### Using shadcn CLI (Recommended)

\`\`\`bash
npx shadcn@latest init
\`\`\`

This command will:
- Install all dependencies
- Set up the project configuration
- Install required shadcn/ui components

### Manual Installation

1. Download the ZIP file from v0
2. Extract the files
3. Install dependencies:

\`\`\`bash
npm install
# or
pnpm install
# or
yarn install
\`\`\`

4. Run the development server:

\`\`\`bash
npm run dev
# or
pnpm dev
# or
yarn dev
\`\`\`

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment

### Deploy to Vercel (Recommended)

1. Click the "Publish" button in v0 (top right)
2. Or push to GitHub and connect your repository to Vercel
3. Vercel will automatically detect Next.js and configure the build settings

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Deploy to Other Platforms

Build the production version:

\`\`\`bash
npm run build
npm start
\`\`\`

The app can be deployed to any platform that supports Next.js:
- Netlify
- Cloudflare Pages
- AWS Amplify
- Digital Ocean App Platform

## Environment Variables

No environment variables are required for the basic portfolio. 

If you want to add a functional contact form, you'll need to:
1. Set up a form handling service (e.g., Formspree, SendGrid)
2. Add the API endpoint to the form action in `components/contact.tsx`
3. Add any required API keys as environment variables

## Performance Tips

- Images are optimized using Next.js Image component
- Animations are GPU-accelerated using CSS transforms
- Particle systems use Canvas API for smooth performance
- Lazy loading for sections below the fold
- Code splitting by route

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Feel free to use this portfolio template for your personal use.

## Support

For issues or questions:
- Open a support ticket at [vercel.com/help](https://vercel.com/help)
- Check the [Next.js documentation](https://nextjs.org/docs)
- Visit [v0.dev](https://v0.dev) for more AI-generated components

---

Built with ❤️ using [v0.dev](https://v0.dev)


🇯🇵 ポートフォリオサイト – エンジニア向けポートフォリオ

Next.js と TypeScript を使用して構築した、近未来のサイバーパンク風ポートフォリオサイトです。ネオンアニメーションを用いて、採用担当者やエンジニアリングチームに強く印象を残すデザインになっています。

⸻

🔥 特徴

🎨 デザイン & アニメーション
	•	ダーク・サイバーパンクテーマ
ネオンカラー（シアン / ピンク / グリーン）＋黒背景
	•	パーティクルネットワーク背景
全画面に広がるアニメーション粒子エフェクト
	•	高度なアニメーション演出
	•	見出しのグリッチ効果
	•	ネオンの揺らぎ・光り方のフェード
	•	3D カードのチルトエフェクト
	•	浮遊アニメーション
	•	グロー・パルス効果
	•	シマー演出
	•	Hero セクションのタイピングアニメーション
	•	パーティクルの軌跡エフェクト

🧩 各セクション
	•	Hero — パーティクル背景 + ソーシャルリンク付きの印象的な導入
	•	About Me — 自己紹介（ピンクのネオン見出し）
	•	Experience — ホバーエフェクト付きの職歴タイムライン（グリーン見出し）
	•	Featured Projects — 画像 + 技術スタック付きのプロジェクト紹介（シアン見出し）
	•	Skills & Technologies — 技術スタック一覧（シアン見出し）
	•	Get In Touch — 連絡フォーム＆SNSリンク
	•	Email
	•	GitHub
	•	LinkedIn
	•	Instagram
	•	Discord

⚙️ 技術的特徴
	•	モバイルファースト・完全レスポンシブ
	•	スムーズスクロール
	•	Intersection Observer によるアニメーション
	•	SEO 最適化
	•	国際向けに全編英語

⸻

🛠️ 技術スタック
	•	Framework: Next.js 16（App Router 使用）
	•	Language: TypeScript
	•	Styling: Tailwind CSS v4
	•	UI Components: shadcn/ui
	•	Fonts: Geist Sans & Geist Mono
	•	Icons: Lucide React

⸻

📁 プロジェクト構成

├── app/
│   ├── page.tsx          # メインページ
│   ├── layout.tsx        # レイアウト
│   └── globals.css       # グローバルスタイル
├── components/
│   ├── navigation.tsx    # ナビゲーション
│   ├── hero.tsx          # Hero セクション
│   ├── about.tsx         # About セクション
│   ├── experience.tsx    # Experience セクション
│   ├── projects.tsx      # Projects セクション
│   ├── skills.tsx        # Skills セクション
│   ├── contact.tsx       # Contact セクション
│   └── footer.tsx        # フッター
└── public/               # 画像などの静的ファイル


⸻

🎛️ カスタマイズ方法

1. Hero セクション（components/hero.tsx）
	•	名前・職種・紹介文を編集
	•	SNS リンクを変更

2. About セクション（components/about.tsx）
	•	自己紹介文を編集

3. Experience セクション
	•	会社名 / 役職 / 期間 / 業務内容を追加・編集

4. Projects セクション
	•	プロジェクト名・説明文・画像を変更
	•	/public に画像を追加

5. Skills セクション
	•	技術を追加・削除
	•	カテゴリ：Frontend / Backend / Tools & Others

6. Contact セクション
	•	メールアドレス
	•	SNS リンク
	•	問い合わせフォームの送信先を設定

⸻

🎨 色のカスタマイズ

app/globals.css で色テーマを変更できます：

@theme inline {
  --color-primary: /* ネオンシアン */
  --color-secondary: /* ネオンピンク */
  --color-accent: /* ネオングリーン */
}


⸻

🚀 インストール & 開発

🔧 shadcn CLI（推奨）

npx shadcn@latest init

これで：
	•	必要な依存関係のインストール
	•	shadcn/ui の設定
	•	コンポーネントのセットアップ
が自動で行われます。

手動インストール
	1.	v0 から ZIP をダウンロード
	2.	解凍
	3.	依存関係をインストール：

npm install

	4.	開発サーバーを起動：

npm run dev

	5.	http://localhost:4001 にアクセス

⸻

📡 デプロイ

▶️ Vercel にデプロイ（推奨）

方法：
	1.	v0 の右上の「Publish」ボタンを押す
	2.	または GitHub に push → Vercel に接続
	3.	自動で Next.js としてビルドされる

⸻

🔑 環境変数

基本のポートフォリオでは不要。
もし連絡フォームを動作させる場合は：
	•	Formspree / SendGrid などの外部サービスを設定
	•	contact.tsx に API エンドポイントを追加
	•	API キーを環境変数として設定

⸻

⚡ パフォーマンス最適化
	•	Next.js の Image 最適化
	•	CSS transform による GPU アニメーション
	•	Canvas API の高速パーティクル描画
	•	Lazy loading
	•	コード分割

⸻

🌐 対応ブラウザ
	•	Chrome 最新版
	•	Firefox 最新版
	•	Safari 最新版
	•	Edge 最新版

⸻

📄 ライセンス

個人利用のために自由に使ってOKです。

⸻

🆘 サポート
	•	Vercel: https://vercel.com/help
	•	Next.js Docs: https://nextjs.org/docs
	•	v0.dev コンポーネント

⸻
