# GitHub Copilot ハンズオン

## 既存コードの理解・ドキュメント化・リファクタリングから始める「最初の一歩」

このページは、半日（約 4.5 時間）の受講者向けハンズオンの入口です。GitHub Copilot を日々の開発に取り入れ始める開発者・エンジニアが、既存コードの理解、仕様整理、ドキュメント化、リファクタリングを Copilot と一緒に進める基本手順を練習します。

Copilot は作業を速くするための支援ツールですが、出力は常に候補です。Copilot の出力は人が確認し、採用する前に必ずコード、差分、仕様、実行結果をレビューしてください。

## 前提事項

- GitHub Copilot を利用できる GitHub アカウントがある
- Visual Studio Code など、GitHub Copilot と Copilot Chat を利用できるエディターを使える
- Git の基本操作（clone、branch、commit、diff の確認）ができる
- JavaScript、HTML、CSS などの基本的なコードを読める
- 講師から案内されたサンプルリポジトリを開ける
- ローカル実行の場合は Node.js 20.12.0以上とnpmを利用できる

## 受講開始前にサイトとDashboardを開く

> [!IMPORTANT]
> 教材サイトとDashboardは、cloneしたリポジトリまたはCodespacesから起動します。`index.html`を直接ダブルクリックせず、必ずWebサーバー経由で開いてください。

### Windowsローカルで演習する場合（推奨）

リポジトリのルートをエディターで開き、ターミナルで実行します。

```bash
npm run app
```

表示された次のURLを開きます。サーバーを使うセッション中は、このターミナルを閉じません。

- 教材: <http://127.0.0.1:8000/>
- Dashboard: <http://127.0.0.1:8000/app/support-ticket-dashboard/>

### Codespacesで演習する場合

Codespacesのターミナルで実行します。

```bash
npm run app
```

**ポート**タブで`8000`の**ブラウザーで開く**を選びます。Dashboardは、転送されたURLの末尾に`/app/support-ticket-dashboard/`を付けて開きます。

### 起動成功の判定

- [ ] Topに`COP / 01`とS0-S7ナビゲーションが表示される
- [ ] Dashboardに12件のチケットが表示される
- [ ] 検索、ステータス絞り込み、並び順を操作できる

> [!NOTE]
> Dashboardには、仕様書と実装を比較するための差分候補が含まれます。12件表示され、操作時にエラーが出なければ起動成功です。S4で根拠を整理するまで、気づいた差分を先回りして修正しないでください。

起動できない場合は、[ローカルプレビュー手順](../docs/local-preview.md)を確認します。

## 開始前チェック

作業を始める前に、次を上から確認します。

- [ ] エディターでこのリポジトリ全体を開いた
- [ ] GitHub アカウントでサインインした
- [ ] GitHub Copilot / GitHub Copilot Chat 拡張機能が有効になっている
- [ ] Copilot Chat を開き、Chat View、Inline Chat、Quick Chat の入口を確認した
- [ ] S0で講師指定の作業ブランチ、または自分の練習用ブランチを確認する
- [ ] Copilot の提案を採用する前に、人がレビューする前提で進めることを理解した

> [!TIP]
> Copilot の回答が正しそうに見えても、存在しないファイル、古い API、仕様にない動作を含むことがあります。回答は出発点として使い、最後は自分で確認します。

## 全体の流れ

| Session | Time | Theme | Page |
| --- | ---: | --- | --- |
| S0 | 20 min | Introduction and environment setup | [00-setup.md](./00-setup.md) |
| S1 | 40 min | First steps: inline suggestions and Chat entry points | [01-first-steps.md](./01-first-steps.md) |
| S2 | 30 min | Prompt engineering basics | [02-prompt-basics.md](./02-prompt-basics.md) |
| S3 | 40 min | Understand existing code | [03-code-understanding.md](./03-code-understanding.md) |
| Break | 10 min | Break | - |
| S4 | 40 min | Organize specifications and generate documentation | [04-documentation.md](./04-documentation.md) |
| S5 | 45 min | Refactor existing code safely with tests | [05-refactoring.md](./05-refactoring.md) |
| S6 | 30 min | Responsible AI, validation, privacy, and safeguards | [06-responsible-ai.md](./06-responsible-ai.md) |
| S7 | 15 min | Wrap-up and next steps | [07-wrap-up.md](./07-wrap-up.md) |

S0-S2 では Copilot の基本操作とプロンプトの作り方を練習します。S3 以降では、既存コードを読み、仕様を整理し、テストやレビューで安全性を確認しながら改善を進めます。

## 進め方

1. 各セッションの目的と完了条件を読む
2. 指定された Copilot の機能を使って演習する
3. Copilot の回答に挙がったファイルや差分を自分で開いて確認する
4. 分からない点は、プロンプトを具体化して追加質問する
5. 各セッションのチェック項目を満たしてから次へ進む

## 完了条件

次を説明・実施できたら、この半日ハンズオンの完了です。

- [ ] GitHub Copilot のインライン提案、Inline Chat、Quick Chat、Chat View の使い分けを説明できる
- [ ] Role、Task、Context、Format を意識したプロンプトを書ける
- [ ] `@workspace`、`#file`、選択範囲、スラッシュコマンドなどで文脈を絞れる
- [ ] 既存コードの構成、仕様書との差分、変更対象を Copilot と一緒に調査できる
- [ ] Copilot が作った仕様、ドキュメント、コード変更を人がレビューし、根拠を確認できる
- [ ] リファクタリング前後で動作が変わっていないことをテストや手順で確認できる

まずは [S0: Introduction and environment setup](./00-setup.md) から始めてください。
