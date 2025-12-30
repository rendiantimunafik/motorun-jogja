# ⚡ QUICK COMMANDS - MOTORUN JOGJA

Copy-paste commands untuk upload ke Vercel dengan cepat!

---

## 🚀 METODE 1: GITHUB (RECOMMENDED)

### Step 1: Git Setup

```bash
git init
git add .
git commit -m "MotoRun Jogja - Ready to deploy"
git branch -M main
```

### Step 2: Buat Repo di GitHub

Buka: https://github.com/new
- Name: **motorun-jogja**
- **DON'T** check "Initialize with README"
- Click **"Create repository"**

### Step 3: Push ke GitHub

```bash
# GANTI 'USERNAME' dengan username GitHub Anda!
git remote add origin https://github.com/USERNAME/motorun-jogja.git
git push -u origin main
```

### Step 4: Deploy di Vercel

1. Buka: https://vercel.com
2. Login dengan GitHub
3. New Project → Import "motorun-jogja"
4. Deploy → DONE! 🎉

---

## 🚀 METODE 2: VERCEL CLI

### Install CLI

```bash
npm install -g vercel
```

### Login

```bash
vercel login
```

### Deploy

```bash
vercel --prod
```

**Ikuti prompts → DONE!** 🎉

---

## 🔧 TESTING COMMANDS

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Buka: http://localhost:5173

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## 🔄 UPDATE SETELAH DEPLOY

### Push Update ke Vercel

```bash
git add .
git commit -m "Update fitur baru"
git push
```

Vercel akan **auto-deploy** dalam 2-3 menit! 🔥

---

## 🐛 TROUBLESHOOTING COMMANDS

### Clear Cache & Reinstall

```bash
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

### Fix npm Audit

```bash
npm audit fix
```

**DON'T use:**
```bash
npm audit fix --force  # ❌ Bisa break app!
```

### Check Build Errors

```bash
npm run build
```

Fix semua error sebelum deploy!

---

## 🔐 GIT CREDENTIALS

### Set Git Email & Name (Jika diminta)

```bash
git config --global user.email "your@email.com"
git config --global user.name "Your Name"
```

### Save Credentials

```bash
git config --global credential.helper store
```

---

## 📦 VERCEL CLI ADVANCED

### Deploy to Preview

```bash
vercel
```

### Deploy to Production

```bash
vercel --prod
```

### List Deployments

```bash
vercel ls
```

### Remove Deployment

```bash
vercel rm [deployment-url]
```

### View Logs

```bash
vercel logs [deployment-url]
```

---

## 🎯 ONE-LINER DEPLOY

### Complete Deploy (Copy-Paste!)

```bash
git init && git add . && git commit -m "MotoRun Jogja - Ready to deploy" && git branch -M main
```

Lalu:
```bash
# Ganti USERNAME!
git remote add origin https://github.com/USERNAME/motorun-jogja.git && git push -u origin main
```

Lalu deploy di Vercel web interface! 🚀

---

## 🔄 AUTO-DEPLOY WORKFLOW

### After Initial Deploy:

```bash
# Make changes to code...

git add .
git commit -m "Describe your changes"
git push
```

Vercel automatically deploys! ✨

---

## 🌐 CUSTOM DOMAIN SETUP

### Add Domain via CLI

```bash
vercel domains add motorunjogja.com
```

### List Domains

```bash
vercel domains ls
```

---

## 📊 PROJECT INFO

### Check Vercel Project

```bash
vercel inspect
```

### Environment Variables

```bash
# Add env var
vercel env add VITE_API_URL production

# List env vars
vercel env ls
```

---

## ⚠️ COMMON ERRORS & FIXES

### Error: "not a git repository"

```bash
git init
```

### Error: "permission denied"

```bash
sudo npm install -g vercel
```

### Error: "remote already exists"

```bash
git remote remove origin
git remote add origin https://github.com/USERNAME/motorun-jogja.git
```

### Error: "failed to push"

```bash
git pull origin main --rebase
git push origin main
```

---

## 🎉 SUCCESS INDICATORS

### After `npm run dev`:
```
✓ Ready in XXXms
➜ Local:   http://localhost:5173/
```

### After `npm run build`:
```
✓ built in XXXs
dist/index.html
```

### After Vercel Deploy:
```
✓ Production: https://motorun-jogja.vercel.app
```

---

## 📚 HELPFUL LINKS

- Vercel Dashboard: https://vercel.com/dashboard
- GitHub: https://github.com
- Project Docs: README.md
- Troubleshooting: TROUBLESHOOTING.md

---

## 🔥 QUICK REFERENCE

| Command | Description |
|---------|-------------|
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server |
| `npm run build` | Build for production |
| `git add .` | Stage all changes |
| `git commit -m "msg"` | Commit changes |
| `git push` | Push to GitHub |
| `vercel --prod` | Deploy to production |
| `vercel logs` | View deployment logs |

---

## ✅ DEPLOYMENT CHECKLIST

Before deploying:
- [ ] Run `npm run build` - check for errors
- [ ] Test `npm run dev` - app works locally
- [ ] All imports correct - no `figma:asset`
- [ ] Git initialized - `git init` done
- [ ] Committed - `git commit` done
- [ ] Pushed to GitHub - `git push` done
- [ ] Vercel account - logged in

---

**Ready to deploy? Use commands above!** 🚀

**Questions? Read TROUBLESHOOTING.md or CARA_UPLOAD_VERCEL.md** 📖

**Happy Deploying! 🏍️💨**
