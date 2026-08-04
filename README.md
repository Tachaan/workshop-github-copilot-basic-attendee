# GitHub Copilot ハンズオン（受講者用）

> **既存コードの理解・ドキュメント化・リファクタリングから始める「最初の一歩」**

このリポジトリは、開発者・エンジニアが GitHub Copilot を日常業務で使い始めるためのハンズオン教材です。既存コードを題材に、Copilot でコードを理解し、仕様を整理し、安全にリファクタリングする流れを、半日版または60分Quick版で体験します。

- **形式**: ハンズオンワークショップ
- **時間**: 通常版 270 分、Quick版 60 分
- **対象**: GitHub Copilot をこれから業務で活用したい開発者・エンジニア
- **題材**: Support Ticket Dashboard の既存コード、仕様、確認観点
- **教材の読み方**: このリポジトリの Markdown をそのまま参照します

## 教材の構成

教材は Markdown と講師投影スライド（PDF）だけで構成しています。専用の教材サイトやローカルサーバーは不要です。GitHub 上、またはクローンしたリポジトリのエディターで Markdown をそのまま読み進めてください。

- **通常版（270分）**: [`handson/README.md`](handson/README.md) から S0-S7 へ進みます
- **Quick版（60分）**: [`quick/README.md`](quick/README.md) から Q0-Q4 へ進みます

Quick版は、既存コードの理解、仕様整理とドキュメント化、安全なリファクタリング、GitHub Copilot利用の最初の一歩をQ0-Q4で一巡します。

演習アプリの Support Ticket Dashboard は、`npm run app` で起動し、<http://localhost:8000/> をブラウザーで開きます。

## Quick版の講師投影スライド

Quick版の講師投影スライド（全27ページ）をPDFで同梱しています。受講後の振り返りにも利用できます。

- [Quick版スライド（PDF）](slides/github-copilot-basic-quick.pdf)

受講者向け手順は`quick/`のMarkdownを正本とし、スライドの編集元（Slidev）は講師用リポジトリで管理しています。

## リポジトリ構成

| パス | 用途 |
| --- | --- |
| `app/support-ticket-dashboard/` | 通常版とQuick版で使う演習アプリ |
| `handson/` | 通常版S0-S7の受講者向け教材 |
| `quick/` | Quick版Q0-Q4の受講者向け教材 |
| `slides/` | Quick版の講師投影スライド（PDF） |
| `assets/screenshots/` | 教材で参照するスクリーンショット |
| `docs/` | 仕様、環境準備、設計、補足資料 |
| `templates/` | 通常版とQuick版で参照するプロンプト例 |
| `tests/` | Dashboardのベースラインテスト |

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

Support Ticket Dashboard は、`npm run app` で起動し、<http://localhost:8000/> を開いて確認します。

## GH-300 / Microsoft Learn との対応

この教材は、Microsoft Learn の GitHub Copilot 学習パスと Exam GH-300 の観点を、初学者が手を動かして理解できる順番に並べ直したものです。

特に次の領域を扱います。

| 領域 | ハンズオンでの扱い |
| --- | --- |
| Use GitHub Copilot responsibly | 提案の検証、出力の限界、責任分界を確認する |
| Use GitHub Copilot features | インライン提案、Chat、Agent Mode、Code Review を段階的に使う |
| Understand GitHub Copilot data and architecture | データの扱いと流れ、prompt building、提案のライフサイクルを確認する |
| Apply prompt engineering and context crafting | 目的、対象ファイル、制約、完了条件を明確にして依頼する |
| Improve developer productivity with GitHub Copilot | コード理解、ドキュメント化、テスト、リファクタリングに活用する |
| Configure privacy, content exclusions, and safeguards | 入力する情報、content exclusions、組織ポリシー、保護策を確認する |

領域名の出典は [Study guide for Exam GH-300: GitHub Copilot](https://learn.microsoft.com/credentials/certifications/resources/study-guides/gh-300) です。出題領域と配点比率は改訂されるため、最新の内容は公式ページを正としてください。詳しい対応表は [GH-300 対応マップ](docs/gh-300-map.md) を参照してください。

## ドキュメント

| ドキュメント | 用途 |
| --- | --- |
| [Workshop 事前準備・環境確認](docs/setup.md) | 受講前の環境確認 |
| [VS CodeでGitHub Copilotへサインイン](docs/vscode-sign-in.md) | GitHub認証からCopilot Chatの応答確認までの画面付き手順 |
| [演習用リポジトリを作成](docs/create-workshop-repository.md) | 公開テンプレートから自分の個人Owner配下へ作成し、cloneする画面付き手順 |
| [ワークショップ全体設計](docs/workshop-plan.md) | 目的、タイムテーブル、進行設計 |
| [GH-300 対応マップ](docs/gh-300-map.md) | Microsoft Learn / GH-300 との対応 |
| [Support Ticket Dashboard 仕様書](docs/app-spec.md) | ハンズオン題材アプリの仕様 |
| [GitHub Copilot の概要](docs/copilot-overview.md) | Copilot の基本姿勢と利用シナリオ |
| [GitHub Copilot のモードと機能の使い分け](docs/copilot-modes.md) | Ask、Plan、Agent、Review などの使い分け |
| [プロンプト例（半日 S0-S7）](templates/prompt-examples.md) | 通常版の演習で再利用できる依頼例 |
| [プロンプト例（Quick Q0-Q4）](templates/prompt-examples-quick.md) | Quick版の演習で再利用できる依頼例 |

## 完了の目安

受講者は、最後に次のことを自分の言葉で説明できる状態を目指します。

- Copilot に既存コードを理解させるとき、どの情報を渡すとよいか
- 仕様やドキュメントを生成・修正するとき、何を人間が確認するべきか
- リファクタリングでテスト、差分、動作確認をどう使うか
- Copilot の出力を安全に扱うため、入力してよい情報と避ける情報をどう判断するか

## 免責・補足

- 本教材は学習を目的としたサンプルであり、製品サポートの対象外です。
- 記載内容は作成時点の情報に基づきます。GitHub、Visual Studio Code、GitHub Copilot、Microsoft Learn の画面、機能、名称、提供条件は予告なく変更されます。最新の情報は各公式ドキュメントを参照してください。
- 演習アプリのコード、チケットデータ、社名、担当者名、プロンプト例はすべて架空のものです。実在の組織、個人、案件とは関係ありません。
- GH-300 の出題領域は改訂されます。学習の重み付けは [Study guide for Exam GH-300: GitHub Copilot](https://learn.microsoft.com/credentials/certifications/resources/study-guides/gh-300) を正としてください。
- 本教材の利用によって生じた結果について責任を負いません。実業務へ適用する際は、所属組織のポリシーとレビュープロセスに従ってください。

## ライセンス

| 対象 | ライセンス |
| --- | --- |
| ドキュメント（Markdown、スライドPDF、図版、スクリーンショット） | [CC BY 4.0](LICENSE) |
| コードサンプル（`app/`、`tests/` のコード） | [MIT](LICENSE-CODE) |

Copyright (c) Microsoft Corporation.

## Trademarks

This project may contain trademarks or logos for projects, products, or services. Authorized use of Microsoft trademarks or logos is subject to and must follow [Microsoft's Trademark & Brand Guidelines](https://www.microsoft.com/en-us/legal/intellectualproperty/trademarks/usage/general). Use of Microsoft trademarks or logos in modified versions of this project must not cause confusion or imply Microsoft sponsorship. Any use of third-party trademarks or logos are subject to those third-parties' policies.

GitHub、GitHub Copilot は GitHub, Inc. の商標または登録商標です。Microsoft、Microsoft Learn、Visual Studio Code は Microsoft Corporation の商標または登録商標です。その他の製品名、サービス名は各社の商標または登録商標です。
