# 婚禮邀請網站 💐

Ya-Hsin Cheng & Jordan Hawkins 的婚禮邀請網站，包含兩個版本。

## 📁 檔案說明

| 檔案 | 用途 |
|------|------|
| `index.html` | **家人版**（含 6/8 公證 + 8/9 晚宴兩個活動） |
| `friends.html` | **朋友版**（只有 8/9 晚宴） |
| `images/our-photo.jpg` | 首頁插圖（你和 Jordan Hawkins 跟貓咪） |
| `README.md` | 這份說明文件 |

---

## 💻 用 VS Code 打開與預覽

1. 下載並解壓縮整個 `wedding-website` 資料夾
2. 打開 **VS Code** → File → Open Folder → 選擇 `wedding-website` 資料夾
3. （建議）安裝擴充套件 **Live Server**：
   - 左側點擊四方形「Extensions」圖示，搜尋 `Live Server`，安裝
4. 在 `index.html` 上按右鍵 → **Open with Live Server**
   - 瀏覽器會自動打開，存檔後會即時更新
   - 朋友版預覽：網址後面加上 `/friends.html`

---

## ✏️ 如何修改內容

所有顏色在每個 HTML 檔案最上方的 `:root { }` 區塊，例如：

```css
:root {
  --linen:  #faf6ee;   /* 米色背景 */
  --sage:   #9aab8e;   /* 鼠尾草綠 */
  --emerald:#3f6650;   /* 深綠 */
  --terracotta: #c1684a; /* 陶土橘 */
}
```

文字內容直接在 HTML 下方找到對應段落修改即可（日期、地點、姓名等）。

要換照片：把新照片放進 `images/` 資料夾，命名為 `our-photo.jpg`（或改 HTML 裡的 `src="images/..."`）。

---

## 🚀 上傳到 GitHub 並發布

### 1. 建立 Repository
- 登入 [github.com](https://github.com) → 右上角「+」→ New repository
- 取名（例如 `wedding`），設為 **Public**，按 Create

### 2. 上傳檔案
- 點 "uploading an existing file"
- 把整個資料夾的內容拖進去（`index.html`、`friends.html`、`images` 資料夾）
- 按 Commit changes

### 3. 開啟 GitHub Pages
- Settings → Pages → Branch 選 `main` / root → Save
- 等 1–2 分鐘，會得到網址：`https://你的帳號.github.io/wedding`
- 家人版：`.../wedding/`
- 朋友版：`.../wedding/friends.html`

### 4.（選擇性）使用自己的網域，去掉 github.io
- 在 [Namecheap](https://namecheap.com) 或 [Porkbun](https://porkbun.com) 買網域（約 US$12/年）
- 在網域商的 DNS 設定加入四筆 **A record**：
  ```
  185.199.108.153
  185.199.109.153
  185.199.110.153
  185.199.111.153
  ```
- 再加一筆 **CNAME**：host 填 `www` → 指向 `你的帳號.github.io`
- 回 GitHub → Settings → Pages → Custom domain 填入你的網域 → Save → 勾選 Enforce HTTPS

完成後訪客直接看到 `你的網域.com`，網址不會出現 github。

---

## 📨 讓 RSVP 真正收得到回覆

目前 RSVP 按鈕會打開訪客的 email app，自動填好寄給 `shoppingsunnyonly@gmail.com`。

若想要訪客不用 email app、回覆自動進到後台，可用免費的 **Formspree**：

1. 到 [formspree.io](https://formspree.io) 註冊（免費版每月 50 筆）
2. 建立表單 → 取得表單 ID（像 `xpwzgkla`）
3. 把 ID 告訴我，我幫你改成自動送出的版本

---

有任何問題隨時再找我調整！🤍
