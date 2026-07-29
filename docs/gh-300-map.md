# GH-300 対応マップ

この資料は、GitHub Copilot ハンズオンの各セッションを、Microsoft Learn の GitHub Copilot 学習パスと Exam GH-300 の主なスキル領域に対応付けるためのマップです。

## 使い方

- 受講者には、各セッションがどの GH-300 領域に接続するかを示します。
- 講師は、時間が限られる場合でも、機能体験、プロンプト、検証、Responsible AI のバランスが崩れないよう確認します。
- 試験対策そのものではなく、Learn の観点を実務に近いハンズオンへ落とし込むための補助資料として扱います。

## GH-300 領域の整理

| 領域 | この教材での扱い |
| --- | --- |
| Use GitHub Copilot features (25-30%) | IDE、Chat、インライン提案、Agent Mode、Code Review などを段階的に体験する |
| Apply prompt engineering and context crafting (10-15%) | 目的、対象、制約、完了条件、ファイル参照、会話履歴を意識して依頼する |
| Improve developer productivity (10-15%) | 既存コード理解、仕様整理、テスト、リファクタリング、ドキュメント化に活用する |
| Use Copilot responsibly (15-20%) | AI 出力の限界、検証、倫理的利用、人間による最終判断を扱う |
| Data, architecture, privacy, content exclusions, and safeguards | データの扱い、prompt building、プライバシー、content exclusions、組織ポリシー、保護策を扱う |

## セッション別マッピング

| Session | ハンズオンテーマ | 対応する Microsoft Learn / GH-300 観点 | 主なドメイン |
| --- | --- | --- | --- |
| S0 | Introduction and environment setup | GitHub Copilot Fundamentals Part 1、Copilot の利用開始、IDE での有効化、利用上の注意 | Use GitHub Copilot features (25-30%); Use Copilot responsibly (15-20%) |
| S1 | First steps: inline suggestions and Chat entry points | GitHub Copilot in the IDE、inline suggestions、Copilot Chat、`/explain`、`@workspace` | Use GitHub Copilot features (25-30%) |
| S2 | Prompt engineering basics | Prompt crafting and prompt engineering、コンテキストの決まり方、zero-shot / few-shot、ファイル参照 | Apply prompt engineering and context crafting (10-15%); Data, architecture, privacy, content exclusions, and safeguards |
| S3 | Understand existing code | Developer use cases for AI with GitHub Copilot、既存コード理解、学習時間とコンテキスト切り替えの削減 | Improve developer productivity (10-15%); Use GitHub Copilot features (25-30%) |
| S4 | Organize specifications and generate documentation | Copilot によるドキュメント生成、仕様整理、Markdown 化、レビュー観点の洗い出し | Improve developer productivity (10-15%); Apply prompt engineering and context crafting (10-15%) |
| S5 | Refactor existing code safely with tests | Testing with GitHub Copilot、リファクタリング、テストケース生成、エッジケース、Code Review | Improve developer productivity (10-15%); Use GitHub Copilot features (25-30%); Use Copilot responsibly (15-20%) |
| S6 | Responsible AI, validation, privacy, and safeguards | Responsible AI with GitHub Copilot、出力検証、public code matching、content exclusions、privacy settings、組織ポリシー | Use Copilot responsibly (15-20%); Data, architecture, privacy, content exclusions, and safeguards |
| S7 | Wrap-up and next steps | GitHub Copilot Fundamentals Part 2、継続学習、業務への適用、GH-300 学習計画 | Use Copilot responsibly (15-20%); Improve developer productivity (10-15%) |

## Learn モジュールとの接続例

| Learn リソース | ハンズオンでの接続 |
| --- | --- |
| GitHub Copilot Fundamentals Part 1 | S0-S2 で、Copilot の基本機能、IDE での利用、Chat の入口を確認する |
| GitHub Copilot Fundamentals Part 2 | S5-S7 で、より実務に近い開発支援、レビュー、継続利用へ接続する |
| Responsible AI with GitHub Copilot | S6 で、AI の限界、検証、人間の判断、倫理的利用を扱う |
| Developer use cases for AI with GitHub Copilot | S3-S5 で、既存コード理解、ドキュメント化、リファクタリングに応用する |
| Develop unit tests using GitHub Copilot tools | S5 で、テストケース、エッジケース、アサーション、確認結果を扱う |
| GitHub Copilot plans and features | S0-S1 で、利用できる機能やプラン差による見え方の違いを補足する |
| How GitHub Copilot works and handles data | S2 と S6 で、入力、コンテキスト、データの扱い、prompt building を説明する |
| Privacy fundamentals and content exclusions | S6 で、content exclusions、公開コード一致フィルター、組織ポリシーを確認する |

## カバレッジ確認

| 観点 | 対応状況 |
| --- | --- |
| 機能を試すだけで終わらない | S3-S5 で既存コード理解、仕様整理、リファクタリングに接続する |
| プロンプトを具体化する練習がある | S2 で目的、対象、制約、完了条件を明示する |
| 生産性向上を実務タスクで扱う | S3-S5 でコード理解、ドキュメント化、テスト、リファクタリングを扱う |
| Responsible AI を独立して扱う | S6 で検証、プライバシー、保護策をまとめて扱う |
| データとプライバシーの説明がある | S2 と S6 で context、prompt building、content exclusions を扱う |
| 次の学習へ接続する | S7 で Microsoft Learn、GH-300、業務での継続利用へ接続する |

## 講師向け補足

- GH-300 の割合は、ハンズオン時間配分を厳密に同じ比率へ合わせるためではなく、扱う観点の偏りを確認するために使います。
- 受講者には試験範囲の暗記よりも、各領域が日常の開発作業にどう現れるかを説明します。
- 組織の Copilot 設定、利用可能なプラン、content exclusions の設定可否は環境によって異なるため、講師が事前に確認します。
