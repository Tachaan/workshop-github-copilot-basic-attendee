# ワークショップ全体設計 — GitHub Copilot ハンズオン

> **既存コードの理解・ドキュメント化・リファクタリングから始める「最初の一歩」**

本書は、半日形式の GitHub Copilot ハンズオンを設計・実施するための計画書です。受講者が Copilot の機能を単発で試すだけでなく、既存コードを理解し、仕様を整理し、検証しながらリファクタリングする一連の開発作業を体験できる構成にします。

## 1. 目的

このワークショップの目的は、GitHub Copilot を「コードを自動生成する道具」としてではなく、開発者の判断を支援する共同作業者として使う最初の実践を提供することです。

受講者は、Support Ticket Dashboard の既存コードを題材に、次の流れを体験します。

1. Copilot で既存コードの構造と処理を理解する
2. 仕様やドキュメントを整理し、不明点や差分を明確にする
3. テストや確認観点を使いながら、安全にリファクタリングする
4. Copilot の提案を検証し、採用・修正・見送りを判断する
5. Responsible AI、プライバシー、content exclusions などの基本的な保護策を理解する

## 2. 対象者と前提条件

| 項目 | 想定 |
| --- | --- |
| 対象者 | GitHub Copilot をこれから業務で使い始める開発者・エンジニア |
| GitHub 経験 | Repository、Issue、Pull Request の基本操作ができる |
| VS Code 経験 | ファイル編集、検索、ターミナルの基本操作ができる |
| 開発経験 | 既存コードを読み、小さな修正や確認を行った経験がある |
| Copilot 経験 | 未経験、または補完・チャットを試したことがある程度 |
| 必要環境 | GitHub アカウント、VS Code または Codespaces、GitHub Copilot、ブラウザー |

### 事前に済ませること

- GitHub と VS Code / Codespaces にサインインできること
- Copilot Chat が利用できること
- 教材リポジトリを開けること
- ローカル環境を使う場合は、Git、Node.js 20.12.0以上、npmを利用できること

詳細は [Workshop 事前準備・環境確認](setup.md) を参照します。

## 3. 実施形式

| 形式 | 内容 |
| --- | --- |
| 座学 | Copilot の役割、得意・不得意、検証の必要性を説明する |
| 講師デモ | 既存コードの読み方、プロンプトの改善、差分確認を短く実演する |
| 個人演習 | 受講者が各セッションのタスクを手元で進める |
| 共有・レビュー | 依頼文、生成された差分、検証結果、判断理由を確認する |
| まとめ | GH-300 / Microsoft Learn への接続と継続学習を整理する |

## 4. タイムテーブル

合計 270 分の半日ハンズオンです。休憩 10 分を含め、各セッションは初心者が手を動かしながら進められる時間配分にします。

| Session | 時間 | 形式 | テーマ | 到達点 |
| --- | ---: | --- | --- | --- |
| S0 | 20 min | 座学 + 環境確認 | Introduction and environment setup | 目的、環境、扱う題材、注意点を理解する |
| S1 | 40 min | デモ + 演習 | First steps: inline suggestions and Chat entry points | インライン提案と Chat の基本操作を試す |
| S2 | 30 min | 座学 + 演習 | Prompt engineering basics | 目的・対象・制約・完了条件を含む依頼を作る |
| S3 | 40 min | 演習 | Understand existing code | Copilot の回答をコードで確認しながら既存処理を説明する |
| Break | 10 min | 休憩 | Break | 休憩 |
| S4 | 40 min | 演習 | Organize specifications and generate documentation | 仕様や確認観点を Markdown として整理する |
| S5 | 45 min | 演習 | Refactor existing code safely with tests | テストと差分を確認しながら小さくリファクタリングする |
| S6 | 30 min | 座学 + 演習 | Responsible AI, validation, privacy, and safeguards | 提案の検証、プライバシー、保護策を説明できる |
| S7 | 15 min | まとめ | Wrap-up and next steps | 学びを整理し、次の学習につなげる |
| **合計** | **270 min** |  |  |  |

## 5. セッション詳細

### S0: Introduction and environment setup（20 min）

| 項目 | 内容 |
| --- | --- |
| 目的 | ワークショップのゴール、題材、進め方、責任ある利用姿勢をそろえる |
| 主な活動 | GitHub / VS Code / Codespaces / Copilot Chat の確認、教材ページの確認 |
| Copilot 機能 | Copilot Chat、VS Code / Codespaces の Copilot 表示 |
| 完了条件 | Copilot Chat に簡単な質問を送れ、教材リポジトリを開ける |

### S1: First steps: inline suggestions and Chat entry points（40 min）

| 項目 | 内容 |
| --- | --- |
| 目的 | Copilot の入口を体験し、補完と Chat の使い分けを理解する |
| 主な活動 | インライン提案を確認する、Chat でファイルや処理を説明させる、回答をコードで確認する |
| Copilot 機能 | インライン提案、Chat、`/explain`、`@workspace` |
| 完了条件 | 生成された提案をそのまま採用せず、意図と差分を確認する手順を説明できる |

### S2: Prompt engineering basics（30 min）

| 項目 | 内容 |
| --- | --- |
| 目的 | Copilot に渡す情報を整理し、再現性のある依頼文を作る |
| 主な活動 | 曖昧な依頼を、目的・対象・制約・完了条件・確認方法に分解する |
| Copilot 機能 | Chat、`#file`、`@workspace`、チャット履歴とコンテキスト |
| 完了条件 | 既存コード調査や修正に使える具体的なプロンプトを作成できる |

### S3: Understand existing code（40 min）

| 項目 | 内容 |
| --- | --- |
| 目的 | 既存コードの構成、データの流れ、主要な関数を理解する |
| 主な活動 | 関連ファイルを特定する、処理の流れを説明させる、回答を実ファイルと照合する |
| Copilot 機能 | `@workspace`、`/explain`、ファイル参照、質問の分割 |
| 完了条件 | Support Ticket Dashboard の主要な処理と確認すべき仕様を説明できる |

### S4: Organize specifications and generate documentation（40 min）

| 項目 | 内容 |
| --- | --- |
| 目的 | 仕様、実装、確認観点の差分を整理し、ドキュメント化する |
| 主な活動 | 仕様の不足や曖昧さを洗い出す、Markdown の構成案を作る、生成文をレビューする |
| Copilot 機能 | Chat、Markdown 生成、表の整理、レビュー観点の洗い出し |
| 完了条件 | 仕様、前提、確認観点、未決事項を区別したドキュメントを作れる |

### S5: Refactor existing code safely with tests（45 min）

| 項目 | 内容 |
| --- | --- |
| 目的 | 既存動作を守りながら、読みやすさや重複処理を改善する |
| 主な活動 | テストや確認観点を先に整理する、小さく変更する、差分と結果を確認する |
| Copilot 機能 | Agent Mode、Copilot Edits、`/tests`、リファクタリング支援、Code Review |
| 完了条件 | 変更理由、対象範囲、テストまたは確認結果を説明できる |

### S6: Responsible AI, validation, privacy, and safeguards（30 min）

| 項目 | 内容 |
| --- | --- |
| 目的 | Copilot の出力を安全に扱うための判断基準を理解する |
| 主な活動 | 出力の検証、機密情報を入れない依頼、content exclusions、組織ポリシー、公開コード一致フィルターを確認する |
| Copilot 機能 | Code Review、privacy settings、content exclusions、組織ポリシー |
| 完了条件 | Copilot に渡してよい情報、避ける情報、検証方法を説明できる |

### S7: Wrap-up and next steps（15 min）

| 項目 | 内容 |
| --- | --- |
| 目的 | 学びを整理し、日常業務と GH-300 学習へ接続する |
| 主な活動 | 今日使ったプロンプト、差分確認、検証手順を振り返る |
| Copilot 機能 | Chat、学習パス、継続利用のチェックリスト |
| 完了条件 | 自分の業務で次に試す Copilot 活用シナリオを1つ決める |

## 6. Microsoft Learn / GH-300 alignment summary

このハンズオンは、Microsoft Learn の GitHub Copilot 学習パスと Exam GH-300 のスキル領域を、実務に近い作業順に並べ直して扱います。

| GH-300 領域 | 主に扱うセッション | ハンズオンでの対応 |
| --- | --- | --- |
| Use GitHub Copilot responsibly | S0, S5, S6, S7 | AI 出力の限界、検証、責任分界、採用判断を扱う |
| Use GitHub Copilot features | S0, S1, S3, S5 | IDE、Chat、インライン提案、Agent Mode、Code Review を使う |
| Understand GitHub Copilot data and architecture | S2, S6 | データの扱いと流れ、prompt building、提案のライフサイクルを確認する |
| Apply prompt engineering and context crafting | S2, S3, S4 | 目的、対象ファイル、制約、完了条件、コンテキストを明確にする |
| Improve developer productivity with GitHub Copilot | S3, S4, S5 | コード理解、ドキュメント化、テスト、リファクタリングを効率化する |
| Configure privacy, content exclusions, and safeguards | S6 | content exclusions、公開コード一致フィルター、保護策を確認する |

領域名の出典は [Study guide for Exam GH-300: GitHub Copilot](https://learn.microsoft.com/credentials/certifications/resources/study-guides/gh-300) です。出題領域と配点比率は改訂されるため、最新の内容は公式ページを正とします。詳細な対応は [GH-300 対応マップ](gh-300-map.md) にまとめます。

## 7. 必要な成果物

受講者は、ハンズオンの中で次の成果物または説明可能な状態を残します。

- 既存コードの構成と主要処理を説明したメモ
- 仕様、実装、確認観点を整理したドキュメント
- リファクタリング対象、理由、制約、完了条件を含むプロンプト
- 小さなリファクタリング差分
- テストまたは手動確認の結果
- Copilot の提案を採用・修正・見送りした理由
- Responsible AI とプライバシーの観点で気を付けることのメモ

## 8. 完了基準

ワークショップの完了は、Copilot がコードや文章を生成したことではなく、受講者が次を説明できることを基準にします。

- どのファイルや情報をコンテキストとして渡したか
- Copilot の回答をどのコードや実行結果で確認したか
- 仕様やドキュメントのどこを整理し、なぜその表現にしたか
- リファクタリングで既存動作を守るために何を確認したか
- 機密情報、プライバシー、content exclusions、組織ポリシーをどう考慮したか
- 自分の業務で次に試す Copilot 活用方法は何か

## 9. 時間が限られる場合の短縮・分割ガイド

### 180 分に短縮する場合

| 方針 | 内容 |
| --- | --- |
| 優先する | S1、S2、S3、S5、S6 の実践部分 |
| 圧縮する | S0 は事前準備、S4 は仕様整理の一部だけ実施、S7 は5分の振り返り |
| 省略しない | 出力検証、差分確認、プライバシーと Responsible AI の注意 |

### 2 回に分割する場合

| 回 | 内容 |
| --- | --- |
| Day 1 | S0-S3: 環境確認、基本操作、プロンプト、既存コード理解 |
| Day 2 | S4-S7: ドキュメント化、リファクタリング、Responsible AI、まとめ |

### 自習形式にする場合

- 各セッションの冒頭に「目的」と「完了チェック」を置く
- 受講者が使ったプロンプトと判断理由を記録する欄を用意する
- 講師デモを動画またはスクリーンショットで補う
- リファクタリングは必ず小さな変更に限定し、確認手順を明記する

## 10. 講師準備チェックリスト

### 教材と環境

- [ ] 受講者が教材リポジトリにアクセスできる
- [ ] 受講者が教材のMarkdownとスライドPDFを開ける
- [ ] Codespaces またはローカル環境のどちらで進めるか決めている
- [ ] Copilot Chat、インライン提案、Agent Mode、Code Review の利用可否を確認している
- [ ] 組織ポリシー、利用可能な Copilot プラン、機能差分を確認している
- [ ] content exclusions や公開コード一致フィルターの説明方針を決めている

### 進行

- [ ] S0-S7 の時間配分と休憩タイミングを共有できる
- [ ] デモ用の既存コード理解プロンプトを用意している
- [ ] 良いプロンプトと曖昧なプロンプトの比較例を用意している
- [ ] 仕様整理で扱う観点と、受講者に判断させる未決事項を決めている
- [ ] リファクタリングの対象範囲を小さく保つよう案内できる
- [ ] テストまたは手動確認の代替手順を用意している
- [ ] Copilot が利用できない受講者向けに、講師画面共有またはペア作業の代替案を用意している

### まとめとフォロー

- [ ] GH-300 / Microsoft Learn との対応を説明できる
- [ ] 受講者が次に試す業務シナリオを記録する時間を確保している
- [ ] 生成物、差分、プロンプト、検証結果を持ち帰れる形にしている
- [ ] セキュリティ、プライバシー、責任分界について組織のルールを補足できる

## 11. 講師メモ

- 初心者向けであっても、内容は「業務で最初に使う」ことを意識し、単なる機能紹介にしない。
- Copilot の回答は必ずコード、差分、テスト、公式情報、または講師の確認観点と照合する。
- 受講者が「何を依頼したか」「なぜ採用したか」「どう確認したか」を説明する時間を確保する。
- GH-300 対策としては暗記ではなく、各スキル領域が日常の開発作業のどこに現れるかを結び付ける。
