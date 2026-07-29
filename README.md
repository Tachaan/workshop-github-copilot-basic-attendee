# GitHub Copilot ハンズオン（受講者用）

> **既存コードの理解・ドキュメント化・リファクタリングから始める「最初の一歩」**

このリポジトリは、開発者・エンジニアが GitHub Copilot を日常業務で使い始めるためのハンズオン教材です。既存コードを題材に、Copilot でコードを理解し、仕様を整理し、安全にリファクタリングする流れを、半日版または60分Quick版で体験します。

- **形式**: ハンズオンワークショップ
- **時間**: 通常版 270 分、Quick版 60 分
- **対象**: GitHub Copilot をこれから業務で活用したい開発者・エンジニア
- **題材**: Support Ticket Dashboard の既存コード、仕様、確認観点

## 教材サイトとアプリの起動

教材サイトと演習アプリは、cloneしたリポジトリまたはCodespacesから、ローカルのWebサーバー経由で開きます。`index.html`や`quick.html`を直接ダブルクリックしないでください。

```bash
npm run app
```

| 種類 | URL |
| --- | --- |
| 通常版（270分） | <http://127.0.0.1:8000/> |
| Quick版（60分） | <http://127.0.0.1:8000/quick.html> |
| Support Ticket Dashboard | <http://127.0.0.1:8000/app/support-ticket-dashboard/> |

Codespacesの場合は、**ポート**タブで転送された`8000`のURLを開き、末尾に`/quick.html`や`/app/support-ticket-dashboard/`を付けます。

教材本文は各 Markdown ファイルを正本とし、サイトは共通シェルがそれを読み込んで表示します。通常版の表示情報は `assets/site.config.js`、Quick版は `assets/quick-site.config.js` で管理しています。

起動できない場合は、[ローカルでの実行・確認手順](docs/local-preview.md) を参照してください。

## リポジトリ構成

| パス | 用途 |
| --- | --- |
| `app/support-ticket-dashboard/` | 通常版とQuick版で使う演習アプリ |
| `handson/` | 通常版S0-S7の受講者向け教材 |
| `quick/` | Quick版Q0-Q4の受講者向け教材 |
| `assets/` | 教材サイトの共通コードとスクリーンショット |
| `docs/` | 仕様、環境準備、補足資料 |
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
| VS Code | ファイル検索、編集、ターミナル操作ができる |
| 開発経験 | 既存コードを読み、小さな修正を行った経験がある |
| Copilot 経験 | 未経験、または補完・チャットを少し試したことがある |
| 必要環境 | GitHub アカウント、VS Code または Codespaces、GitHub Copilot、Node.js 20.12.0以上 |

環境に不安がある場合は、開始前に [Workshop 事前準備・環境確認](docs/setup.md) を確認してください。

## Quick版（60分）

Quick版は、既存コードの理解、仕様整理とドキュメント化、安全なリファクタリング、GitHub Copilot利用の最初の一歩をQ0-Q4で一巡します。

| Session | 時間 | ページ |
| --- | ---: | --- |
| Overview | 5 min | [Quick版の入口](quick/README.md) |
| Q0 | 5 min | [00-first-step](quick/00-first-step.md) |
| Q1 | 15 min | [01-code-understanding](quick/01-code-understanding.md) |
| Q2 | 15 min | [02-spec-documentation](quick/02-spec-documentation.md) |
| Q3 | 15 min | [03-refactoring](quick/03-refactoring.md) |
| Q4 | 5 min | [04-next-step](quick/04-next-step.md) |

## 通常版（270分）

| Session | 時間 | 概要 | ページ |
| --- | ---: | --- | --- |
| S0 | 20 min | イントロダクション、目的共有、環境確認 | [00-setup](handson/00-setup.md) |
| S1 | 40 min | 最初の一歩: インライン提案と Chat の入口 | [01-first-steps](handson/01-first-steps.md) |
| S2 | 30 min | プロンプトエンジニアリング基礎 | [02-prompt-basics](handson/02-prompt-basics.md) |
| S3 | 40 min | 既存コードを理解する | [03-code-understanding](handson/03-code-understanding.md) |
| Break | 10 min | 休憩 |  |
| S4 | 40 min | 仕様整理とドキュメント生成 | [04-documentation](handson/04-documentation.md) |
| S5 | 45 min | テストを使って安全にリファクタリングする | [05-refactoring](handson/05-refactoring.md) |
| S6 | 30 min | Responsible AI、検証、プライバシー、保護策 | [06-responsible-ai](handson/06-responsible-ai.md) |
| S7 | 15 min | まとめと次のステップ | [07-wrap-up](handson/07-wrap-up.md) |
| **合計** | **270 min** | **半日ハンズオン** |  |

## 進め方

1. [事前準備](docs/setup.md) で GitHub、VS Code / Codespaces、Copilot の状態を確認します。
2. S1-S2 で Copilot の入口と、具体的な依頼の作り方を練習します。
3. S3-S4 で既存コードを読み、仕様とドキュメントを整理します。
4. S5 でテストや確認観点を使いながら、安全にリファクタリングします。
5. S6-S7 で検証、Responsible AI、プライバシー、今後の学習計画を確認します。

Quick版では、Overview から Q0-Q4 の順に進めます。

## ドキュメント

| ドキュメント | 用途 |
| --- | --- |
| [Workshop 事前準備・環境確認](docs/setup.md) | 受講前の環境確認 |
| [ローカルでの実行・確認手順](docs/local-preview.md) | 教材サイトとアプリをローカルで確認する手順 |
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
