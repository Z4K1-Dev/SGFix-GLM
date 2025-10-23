# 🔄 Git Workflow Automation

## 📋 **Prosedur Wajib untuk AI Development**

### 🚀 **Auto-Trigger Workflow (HARUS DIPATUHI)**

Setiap kali user melakukan chat, AI HARUS melakukan:

```bash
# 1. CEK GIT STATUS (Auto)
git status --porcelain

# 2. JIKA ADA UNCOMMITTED CHANGES → AUTO BACKUP
git add .
git commit -m "feat: auto-backup mm-dd_hh-mm

🤖 Generated with [Claude Code](https://claude.ai/code)
Co-Authored-By: Claude <noreply@anthropic.com>"

# 3. TANYAKAN TOKEN GITHUB KE USER
# 4. JIKA USER BERIKAN TOKEN → PUSH KE GITHUB
git push origin main

# 5. TAMPILKAN COMMIT MESSAGE
# 6. TUNGGU KONFIRMASI USER
# 7. IMPLEMENTASI → SELESAI
```

## 🌐 **GitHub Repository Configuration**

### 📦 **Repository Info:**
- **URL**: https://github.com/Z4K1-Dev/SGFix-GLM.git
- **Owner**: Z4K1-Dev
- **Repository**: SGFix-GLM
- **Branch**: main

### 🔐 **Authentication Process:**
```bash
# 1. Tanyakan token ke user setiap kali akan push
# 2. Setup remote dengan token dari user
git remote add origin https://Z4K1-Dev:[TOKEN_FROM_USER]@github.com/Z4K1-Dev/SGFix-GLM.git

# 3. Push ke repository
git push origin main
```

### 🔄 **Double Backup System:**
1. **Local Backup**: `/home/z/my-project/.git/` (19MB)
2. **Cloud Backup**: GitHub Repository (Manual push dengan token user)

## 📅 **Timestamp Format**

**WAJIB:** `mm-dd_hh-mm` (GMT +8)
- Contoh: `10-23_15-30`
- Gunakan current time GMT +8 saat backup
- Format: bulan-hari_jam-menit

## 📝 **Response Format WAJIB**

### 🔍 **Jika Ada Uncommitted Files:**
```
🔍 **Git Status Check:** 
❌ Found X uncommitted files:
- file1.tsx (modified)
- file2.tsx (new)
- file3.jpg (deleted)

✅ **Auto Backup Selesai!**

📝 **Commit Message:**
feat: auto-backup mm-dd_hh-mm

🎯 **Files Backed Up:** X files
📅 **Timestamp:** mm-dd_hh-mm (GMT +8)
🔄 **Status:** Siap push ke GitHub

🌐 **GitHub Push Required:**
Mohon berikan GitHub Personal Access Token untuk push ke repository:
https://github.com/Z4K1-Dev/SGFix-GLM.git

---
🤔 **Silakan berikan token GitHub, atau apa yang ingin Anda implementasi sekarang?**
```

### ✅ **Jika Tidak Ada Changes:**
```
🔍 **Git Status Check:** 
✅ Working tree clean

🎯 **Status:** Ready untuk implementasi

---
🤔 **Apa yang ingin Anda implementasi sekarang?**
```

## 🎯 **Implementasi Rules**

### ✅ **BOLEH DIIMPLEMENTASI:**
- Setelah user konfirmasi "lanjut/ya/ok"
- Setelah auto backup berhasil
- Setelah GitHub push (jika user berikan token)
- Setelah menampilkan commit message

### ❌ **TIDAK BOLEH DIIMPLEMENTASI:**
- Sebelum git check
- Sebelum auto backup
- Sebelum menampilkan commit message
- Tanpa konfirmasi user
- GitHub push opsional (tergantung user)

## 📅 **Timestamp Format**

**WAJIB:** `mm-dd_hh-mm` (GMT +8)
- Contoh: `10-23_15-30`
- Gunakan current time GMT +8 saat backup
- Format: bulan-hari_jam-menit

## 🔄 **Complete Flow**

1. **User Chat** → Auto git check
2. **Ada changes?** → Auto backup + tampilkan commit
3. **Tanyakan token GitHub** untuk push ke repository
4. **User berikan token?** → Push ke GitHub
5. **User konfirmasi implementasi** → Implementasi
6. **SELESAI** → Tunggu user chat berikutnya

## 🌐 **GitHub Commands Reference**

### 📤 **Push Commands:**
```bash
# Setup remote dengan token dari user
git remote add origin https://Z4K1-Dev:[TOKEN_FROM_USER]@github.com/Z4K1-Dev/SGFix-GLM.git

# Push setelah commit
git push origin main

# Force push (jika perlu)
git push origin main --force

# Check remote status
git remote -v

# Check sync status
git status
```

### 🔧 **Token Request Format:**
```
🌐 **GitHub Push Required:**
Repository: https://github.com/Z4K1-Dev/SGFix-GLM.git
Mohon berikan GitHub Personal Access Token dengan scope: repo

Token format: github_pat_XXXXXXXXXXXXXXXXXXXXXXXX
```

## ⚠️ **CRITICAL RULES**

### 🚫 **NEVER SKIP:**
- Git status check
- Auto backup (jika ada changes)
- Menampilkan commit message
- Menunggu konfirmasi user
- TANYAKAN token untuk GitHub push

### ✅ **ALWAYS DO:**
- Check git status di setiap awal chat
- Backup sebelum implementasi apapun
- Tampilkan commit message yang jelas
- Tunggu konfirmasi sebelum implementasi
- TANYAKAN token GitHub untuk push
- JANGAN SIMPAN token di file apapun

## 🎯 **Example Scenarios**

### Scenario 1: Ada Changes
```
User: "Fix mobile layout"
AI: [Check git] → [Auto backup] → [Show commit] → "Mohon token GitHub untuk push ke repository"
User: [Berikan token]
AI: [Push ke GitHub] → "Ready untuk implementasi. Lanjut?"
User: "Ya"
AI: [Implementasi] → "SELESAI!"
```

### Scenario 2: Tidak Ada Changes
```
User: "Tambah fitur search"
AI: [Check git] → "Working tree clean. Ready untuk implementasi. Lanjut?"
User: "Ok"
AI: [Implementasi] → "SELESAI!"
```

## 🤖 **AI Instructions**

**READ THIS FILE EVERY TIME YOU START WORK!**

- This workflow is MANDATORY
- No exceptions allowed
- Safety first, always backup
- Always show commit message
- Always wait for confirmation
- **TANYAKAN token GitHub untuk push (jangan simpan di file)**
- GitHub push opsional, tergantung user

## 📞 **Contact**

If you have questions about this workflow:
- Always prioritize safety
- When in doubt, backup first
- Never implement without confirmation
- **NEVER save tokens in files**
- GitHub sync is optional but recommended

---

**Last Updated:** 2025-10-23
**Version:** 2.1 (Secure GitHub Integration)
**Status:** ACTIVE - MANDATORY FOR ALL AI ASSISTANTS
**Repository:** https://github.com/Z4K1-Dev/SGFix-GLM.git
**Timezone:** GMT +8