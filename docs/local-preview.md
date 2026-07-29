# ローカルプレビュー手順

この資料では、演習アプリ `Support Ticket Dashboard` を、ローカルまたは Codespaces のブラウザで確認する手順を説明します。

各セッションの手順書（`handson/` と `quick/` の Markdown）は、エディターまたは GitHub 上でそのまま読めます。サーバーの起動は Dashboard を動かすために行います。

## 確認する URL

| 種類 | URL |
| --- | --- |
| Support Ticket Dashboard | <http://127.0.0.1:8000/app/support-ticket-dashboard/> |

## 前提

- Web ブラウザ（Microsoft Edge、Google Chrome など）
- Node.js 20.12.0以上とnpm

Node.jsとnpmが使えるか確認します。

```text
node --version
npm --version
```

## ローカルで起動する

1. エディターまたはターミナルで、このリポジトリのルートフォルダーを開きます。
2. ルートフォルダーに `package.json` があることを確認します。
3. 次のコマンドを実行します。

```text
npm run app
```

4. ターミナルに次のような URL が表示されたら、ブラウザで開きます。

```text
Open the app: http://127.0.0.1:8000/app/support-ticket-dashboard/
```

5. 確認を終えたら、ターミナルで <kbd>Ctrl</kbd> + <kbd>C</kbd> を押して停止します。

別のポートを使う場合は、`--port` を指定します。

```text
npm run app -- --port 8001
```

その場合は URL も `http://127.0.0.1:8001/app/support-ticket-dashboard/` に変更します。

## Codespaces で確認する

Codespacesでもローカルと同じコマンドで起動します。

```bash
npm run app
```

起動後、次の手順でポートを開きます。

1. VS Code の **ポート** タブを開きます。
2. ポート `8000` が表示されていない場合は、**ポートの転送** を選択して `8000` を入力します。
3. ポート `8000` の **転送されたアドレス** の末尾に `/app/support-ticket-dashboard/` を付けてブラウザで開きます。

例:

```text
https://<codespace-name>-8000.app.github.dev/app/support-ticket-dashboard/
```

Codespaces では `http://127.0.0.1:8000/` ではなく、ポート転送された URL を使います。

## よくあるトラブル

### Node.jsまたはnpmが見つからない

[Node.js公式ダウンロードページ](https://nodejs.org/en/download)からLTS版をインストールし、ターミナルまたはエディターを開き直してください。`node --version`と`npm --version`の両方が表示されることを確認します。

### ポート 8000 が使用中と表示される

別のサーバーがすでに動いている可能性があります。先に起動したターミナルで <kbd>Ctrl</kbd> + <kbd>C</kbd> を押して停止してから、もう一度実行します。

停止できない場合は別のポートを指定します。

```text
npm run app -- --port 8001
```

ブラウザで開く URL も `8001` に変更してください。

### ファイルを直接開くとアプリが正しく動かない

`app/support-ticket-dashboard/index.html` をエクスプローラーから直接開くと、URL が `file:///...` になります。この方法ではブラウザの制限によりスクリプトを読み込めないことがあります。

必ずローカルサーバーを起動し、次の URL から確認してください。

```text
http://127.0.0.1:8000/app/support-ticket-dashboard/
```

## 確認チェックリスト

- [ ] `npm run app`でローカルサーバーを起動できる
- [ ] <http://127.0.0.1:8000/app/support-ticket-dashboard/> でアプリを開き、12件のチケットが表示される
- [ ] 検索、ステータス絞り込み、並び順を操作してもエラーが出ない
- [ ] `npm test` がすべて成功する
