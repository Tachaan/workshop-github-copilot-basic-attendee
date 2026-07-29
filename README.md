# GitHub Copilot ハンズオン（受講者用）

> **既存コードの理解・ドキュメント化・リファクタリングから始める「最初の一歩」**

このリポジトリは、開発者・エンジニアが GitHub Copilot を日常業務で使い始めるためのハンズオン教材です。既存コードを題材に、Copilot でコードを理解し、仕様を整理し、安全にリファクタリングする流れを、半日版または60分Quick版で体験します。

- **形式**: ハンズオンワークショップ
- **時間**: 通常版 270 分、Quick版 60 分
- **対象**: GitHub Copilot をこれから業務で活用したい開発者・エンジニア
- **題材**: Support Ticket Dashboard の既存コード、仕様、確認観点
- **GitHub Pages**: <https://tachaan.github.io/workshop-github-copilot-basic-attendee/>
- **GitHub Pages Quick版**: <https://tachaan.github.io/workshop-github-copilot-basic-attendee/quick.html>

## 教材サイト

GitHub Pages では、既存の Markdown 教材を共通シェル内に読み込みます。通常版の表示情報は `assets/site.config.js`、Quick版は `assets/quick-site.config.js` で管理し、教材本文は各 Markdown ファイルを正本として保持します。

- **通常版（270分）**: `index.html`
- **Quick版（60分）**: `quick.html`

Quick版は、既存コードの理解、仕様整理とドキュメント化、安全なリファクタリング、GitHub Copilot利用の最初の一歩をQ0-Q4で一巡します。

## Quick版の講師投影スライド

Quick版には、Slidevで作成した60分用の講師投影スライドがあります。受講者向け手順は`quick/`を正本としており、スライドは講師用リポジトリで管理しています。

| ファイル | 用途 |
| --- | --- |
| `index.html` | アイコンを使わないヘッダー、ナビゲーション、本文領域 |
| `quick.html` | 60分Quick版のヘッダー、ナビゲーション、本文領域 |
| `assets/site.config.js` | S0-S7 の順序、表示情報、関連リンク |
| `assets/quick-site.config.js` | Q0-Q4 の順序、表示情報、関連リンク |
| `assets/site.css` | GitHub green / neutral パレットとレスポンシブ表示 |
| `assets/site.js` | Markdown 読み込み、ページ目次、コードコピー、図版拡大 |

ヘッダーの `Support Ticket Dashboard` から、演習アプリをこれまでと同じパスで開けます。

## リポジトリ構成

| パス | 用途 |
| --- | --- |
| `app/support-ticket-dashboard/` | 通常版とQuick版で使う演習アプリ |
| `handson/` | 通常版S0-S7の受講者向け教材 |
| `quick/` | Quick版Q0-Q4の受講者向け教材 |
| `assets/` | 教材サイトの共通コードとスクリーンショット |
| `docs/` | 仕様、環境準備、設計、補足資料 |
| `templates/` | 演習で参照するプロンプト例 |
| `tests/` | Dashboardのベースラインテスト |
| `scripts/` | Node.jsによるローカル配信スクリプト |

## 本日のゴール

このハンズオンでは、Copilot にすべてを任せるのではなく、開発者が目的・制約・完了条件を持って活用することを重視します。

受講後に目指す状態:

- Copilot を使って既存コードの構造や処理の流れを理解できる
- Copilot を使って仕様やドキュメントを整理できる
- Copilot を使って既存コードを安全にリファクタリングできる
- Copilot の提案を検証し、責任ある使い方の最初の実践ステップを説明できる

## 対象者と前提

| 項目 | 想定 |
| --- | --- |
| GitHub | Repository、Issue、Pull Request の基本操作を知っている |
| GitHub Copilot | Copilot Chatを利用できるプランが有効になっている |
| VS Code | ファイル検索、編集、ターミナル操作ができる |
| 開発経験 | 既存コードを読み、小さな修正を行った経験がある |
| Copilot 経験 | 未経験、または補完・チャットを少し試したことがある |
| 必要環境 | GitHub アカウント、VS Code または Codespaces、GitHub Copilot、Node.js 20.12.0以上 |

環境に不安がある場合は、開始前に[Workshop 事前準備・環境確認](docs/setup.md)を確認してください。演習用リポジトリは、[画面付きの作成手順](docs/create-workshop-repository.md)に沿って公開テンプレートから自分の個人Owner配下へ作成します。

## アジェンダ

| Session | 時間 | 概要 | 主な Copilot 機能・コマンド |
| --- | ---: | --- | --- |
| S0 | 20 min | イントロダクション、目的共有、環境確認 | Copilot Chat、VS Code / Codespaces、アカウント確認 |
| S1 | 40 min | 最初の一歩: インライン提案と Chat の入口 | インライン提案、Chat、`/explain`、`@workspace` |
| S2 | 30 min | プロンプトエンジニアリング基礎 | 目的・対象・制約・完了条件、`#file`、チャット履歴 |
| S3 | 40 min | 既存コードを理解する | `@workspace`、`/explain`、関連ファイル調査、質問の分解 |
| Break | 10 min | 休憩 |  |
| S4 | 40 min | 仕様整理とドキュメント生成 | 仕様の構造化、Markdown 下書き、差分確認 |
| S5 | 45 min | テストを使って安全にリファクタリングする | Agent Mode、Copilot Edits、`/tests`、リファクタリング支援 |
| S6 | 30 min | Responsible AI、検証、プライバシー、保護策 | 出力検証、機密情報の扱い、content exclusions、Code Review |
| S7 | 15 min | まとめと次のステップ | 振り返り、GH-300 学習接続、継続アクション |
| **合計** | **270 min** | **半日ハンズオン** |  |

## ハンズオンページ

各セッションの受講者向け手順は、次のパスで確認できます。

| Session | ページ |
| --- | --- |
| S0 | [00-setup](handson/00-setup.md) |
| S1 | [01-first-steps](handson/01-first-steps.md) |
| S2 | [02-prompt-basics](handson/02-prompt-basics.md) |
| S3 | [03-code-understanding](handson/03-code-understanding.md) |
| S4 | [04-documentation](handson/04-documentation.md) |
| S5 | [05-refactoring](handson/05-refactoring.md) |
| S6 | [06-responsible-ai](handson/06-responsible-ai.md) |
| S7 | [07-wrap-up](handson/07-wrap-up.md) |

## 進め方

1. [事前準備](docs/setup.md)でGitHub、VS Code / Codespaces、Copilotの状態を確認します。
2. [演習用リポジトリ作成手順](docs/create-workshop-repository.md)で、自分の個人Owner配下へリポジトリを作成してcloneします。
3. S1-S2でCopilotの入口と、具体的な依頼の作り方を練習します。
4. S3-S4で既存コードを読み、仕様とドキュメントを整理します。
5. S5でテストや確認観点を使いながら、安全にリファクタリングします。
6. S6-S7で検証、Responsible AI、プライバシー、今後の学習計画を確認します。

ローカルでページやアプリを確認する場合は、[ローカルでの実行・確認手順](docs/local-preview.md) を参照してください。

## GH-300 / Microsoft Learn との対応

この教材は、Microsoft Learn の GitHub Copilot 学習パスと Exam GH-300 の観点を、初学者が手を動かして理解できる順番に並べ直したものです。

特に次の領域を扱います。

| 領域 | ハンズオンでの扱い |
| --- | --- |
| Use GitHub Copilot features | インライン提案、Chat、Agent Mode、Code Review を段階的に使う |
| Apply prompt engineering and context crafting | 目的、対象ファイル、制約、完了条件を明確にして依頼する |
| Improve developer productivity | コード理解、ドキュメント化、テスト、リファクタリングに活用する |
| Use Copilot responsibly | 提案の検証、出力の限界、責任分界を確認する |
| Data, architecture, privacy, content exclusions, and safeguards | 入力する情報、content exclusions、組織ポリシー、保護策を確認する |

詳しい対応表は [GH-300 対応マップ](docs/gh-300-map.md) を参照してください。

## ドキュメント

| ドキュメント | 用途 |
| --- | --- |
| [Workshop 事前準備・環境確認](docs/setup.md) | 受講前の環境確認 |
| [VS CodeでGitHub Copilotへサインイン](docs/vscode-sign-in.md) | GitHub認証からCopilot Chatの応答確認までの画面付き手順 |
| [演習用リポジトリを作成](docs/create-workshop-repository.md) | 公開テンプレートから自分の個人Owner配下へ作成し、cloneする画面付き手順 |
| [ワークショップ全体設計](docs/workshop-plan.md) | 目的、タイムテーブル、進行設計 |
| [GH-300 対応マップ](docs/gh-300-map.md) | Microsoft Learn / GH-300 との対応 |
| [ローカルでの実行・確認手順](docs/local-preview.md) | GitHub Pages 以外で教材を確認する手順 |
| [Support Ticket Dashboard 仕様書](docs/app-spec.md) | ハンズオン題材アプリの仕様 |
| [GitHub Copilot の概要](docs/copilot-overview.md) | Copilot の基本姿勢と利用シナリオ |
| [GitHub Copilot のモードと機能の使い分け](docs/copilot-modes.md) | Ask、Plan、Agent、Review などの使い分け |
| [プロンプト例](templates/prompt-examples.md) | 演習で再利用できる依頼例 |

## 完了の目安

受講者は、最後に次のことを自分の言葉で説明できる状態を目指します。

- Copilot に既存コードを理解させるとき、どの情報を渡すとよいか
- 仕様やドキュメントを生成・修正するとき、何を人間が確認するべきか
- リファクタリングでテスト、差分、動作確認をどう使うか
- Copilot の出力を安全に扱うため、入力してよい情報と避ける情報をどう判断するか

## 免責・補足

- 本教材は学習を目的としたサンプルです。
- GitHub、VS Code、GitHub Copilot、Microsoft Learn の画面や機能は変更されることがあります。
- GitHub および GitHub Copilot は GitHub, Inc. の商標または登録商標です。
