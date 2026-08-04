# GH-300 対応マップ

この資料は、GitHub Copilot ハンズオンの各セッションを、Microsoft Learn の GitHub Copilot 学習パスと Exam GH-300 の主なスキル領域に対応付けるためのマップです。

## 出典と注意

- 領域名の出典は [Study guide for Exam GH-300: GitHub Copilot](https://learn.microsoft.com/credentials/certifications/resources/study-guides/gh-300) です。
- 出題領域、配点比率、対象機能は改訂されます。**最新の内容は必ず公式ページを正としてください。**
- この資料では**配点比率を転載せず**、領域名のみを対応付けに使います。学習の重み付けを判断する場合は公式ページの数値を確認します。
- 本資料は試験問題の内容を含みません。試験対策そのものではなく、Learn の観点を実務に近いハンズオンへ落とし込むための補助資料です。

## 使い方

- 受講者には、各セッションがどの GH-300 領域に接続するかを示します。
- 講師は、時間が限られる場合でも、機能体験、プロンプト、検証、Responsible AI のバランスが崩れないよう確認します。

## GH-300 領域の整理

| 領域 | この教材での扱い |
| --- | --- |
| Use GitHub Copilot responsibly | AI 出力の限界、検証、倫理的利用、人間による最終判断を扱う |
| Use GitHub Copilot features | IDE、Chat、インライン提案、Agent Mode、Code Review などを段階的に体験する |
| Understand GitHub Copilot data and architecture | データの扱いと流れ、prompt building、提案のライフサイクル、LLM の限界を扱う |
| Apply prompt engineering and context crafting | 目的、対象、制約、完了条件、ファイル参照、会話履歴を意識して依頼する |
| Improve developer productivity with GitHub Copilot | 既存コード理解、仕様整理、テスト、リファクタリング、ドキュメント化に活用する |
| Configure privacy, content exclusions, and safeguards | content exclusions、公開コード一致フィルター、組織ポリシー、保護策を確認する |

### この教材が扱わない範囲

本教材は業務利用の最初の一歩に絞っているため、GH-300 の出題範囲のうち次は扱いません。受験を目指す場合は、公式 Study guide と Learn の学習パスで補ってください。

| 扱わない範囲 | 補う場所 |
| --- | --- |
| GitHub Copilot CLI のインストールと操作 | 公式ドキュメントと Learn の該当モジュール |
| MCP、Sub-Agents、Agent Sessions の詳細 | 公式ドキュメント |
| Spaces、Spark、Pull Request summaries | 公式ドキュメント |
| Organization / Enterprise のポリシー管理、audit log、REST API による購読管理 | 管理者向けドキュメント |

## セッション別マッピング

| Session | ハンズオンテーマ | 対応する Microsoft Learn / GH-300 観点 | 主なドメイン |
| --- | --- | --- | --- |
| S0 | Introduction and environment setup | GitHub Copilot Fundamentals Part 1、Copilot の利用開始、IDE での有効化、利用上の注意 | Use GitHub Copilot features; Use GitHub Copilot responsibly |
| S1 | First steps: inline suggestions and Chat entry points | GitHub Copilot in the IDE、inline suggestions、Copilot Chat、`/explain`、`@workspace` | Use GitHub Copilot features |
| S2 | Prompt engineering basics | Prompt crafting and prompt engineering、コンテキストの決まり方、zero-shot / few-shot、ファイル参照 | Apply prompt engineering and context crafting; Understand GitHub Copilot data and architecture |
| S3 | Understand existing code | Developer use cases for AI with GitHub Copilot、既存コード理解、学習時間とコンテキスト切り替えの削減 | Improve developer productivity with GitHub Copilot; Use GitHub Copilot features |
| S4 | Organize specifications and generate documentation | Copilot によるドキュメント生成、仕様整理、Markdown 化、レビュー観点の洗い出し | Improve developer productivity with GitHub Copilot; Apply prompt engineering and context crafting |
| S5 | Refactor existing code safely with tests | Testing with GitHub Copilot、リファクタリング、テストケース生成、エッジケース、Code Review | Improve developer productivity with GitHub Copilot; Use GitHub Copilot features; Use GitHub Copilot responsibly |
| S6 | Responsible AI, validation, privacy, and safeguards | Responsible AI with GitHub Copilot、出力検証、public code matching、content exclusions、privacy settings、組織ポリシー | Use GitHub Copilot responsibly; Configure privacy, content exclusions, and safeguards |
| S7 | Wrap-up and next steps | GitHub Copilot Fundamentals Part 2、継続学習、業務への適用、GH-300 学習計画 | Use GitHub Copilot responsibly; Improve developer productivity with GitHub Copilot |

## Learn モジュールとの接続例

| Learn リソース | ハンズオンでの接続 |
| --- | --- |
| [GitHub Copilot Fundamentals Part 1](https://learn.microsoft.com/training/paths/copilot/) | S0-S2 で、Copilot の基本機能、IDE での利用、Chat の入口を確認する |
| [GitHub Copilot Fundamentals Part 2](https://learn.microsoft.com/training/paths/gh-copilot-2/) | S5-S7 で、より実務に近い開発支援、レビュー、継続利用へ接続する |
| [Responsible AI with GitHub Copilot](https://learn.microsoft.com/training/modules/responsible-ai-with-github-copilot/) | S6 で、AI の限界、検証、人間の判断、倫理的利用を扱う |
| [Developer use cases for AI with GitHub Copilot](https://learn.microsoft.com/training/modules/developer-use-cases-for-ai-with-github-copilot/) | S3-S5 で、既存コード理解、ドキュメント化、リファクタリングに応用する |
| [Develop unit tests using GitHub Copilot tools](https://learn.microsoft.com/training/modules/develop-unit-tests-using-github-copilot-tools/) | S5 で、テストケース、エッジケース、アサーション、確認結果を扱う |
| [GitHub Copilot plans and features](https://docs.github.com/copilot/about-github-copilot/plans-for-github-copilot) | S0-S1 で、利用できる機能やプラン差による見え方の違いを補足する |
| [How GitHub Copilot works and handles data](https://github.com/trust-center) | S2 と S6 で、入力、コンテキスト、データの扱い、prompt building を説明する |
| [Privacy fundamentals and content exclusions](https://docs.github.com/copilot/managing-copilot/configuring-and-auditing-content-exclusion) | S6 で、content exclusions、公開コード一致フィルター、組織ポリシーを確認する |

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

- GH-300 の領域は、ハンズオン時間配分を出題比率へ厳密に合わせるためではなく、扱う観点の偏りを確認するために使います。配点比率を受講者へ提示する場合は、公式 Study guide の最新値を参照します。
- 受講者には試験範囲の暗記よりも、各領域が日常の開発作業にどう現れるかを説明します。
- 組織の Copilot 設定、利用可能なプラン、content exclusions の設定可否は環境によって異なるため、講師が事前に確認します。
- 出題範囲は改訂されます。開催前に公式 Study guide の Change log を確認し、本マップとの差分があれば受講者へ口頭で補足します。
