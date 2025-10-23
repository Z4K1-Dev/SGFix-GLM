# 🔄 Git Workflow Automation

## 📋 **Prosedur Wajib untuk AI Development**

### 🚀 **Auto-Trigger Workflow (HARUS DIPATUHI)**

Setiap kali user melakukan chat, AI HARUS melakukan:

```bash
# 1. CEK GIT STATUS (Auto)
git status --porcelain

# 2. JIKA ADA UNCOMMITTED CHANGES → AUTO BACKUP
git add .
git commit -m "feat: auto-backup mm-dd-hh-mm

🤖 Generated with [Claude Code](https://claude.ai/code)
Co-Authored-By: Claude <noreply@anthropic.com>"

# 3. TAMPILKAN COMMIT MESSAGE
# 4. TUNGGU KONFIRMASI USER
# 5. IMPLEMENTASI → SELESAI
```

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
feat: auto-backup mm-dd-hh-mm

🎯 **Files Backed Up:** X files
📅 **Timestamp:** mm-dd-hh-mm
🔄 **Status:** Ready untuk implementasi

---
🤔 **Apa yang ingin Anda implementasi sekarang?**
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
- Setelah menampilkan commit message

### ❌ **TIDAK BOLEH DIIMPLEMENTASI:**
- Sebelum git check
- Sebelum auto backup
- Sebelum menampilkan commit message
- Tanpa konfirmasi user

## 📅 **Timestamp Format**

**WAJIB:** `mm-dd-hh-mm`
- Contoh: `10-23-14-30`
- Gunakan current time saat backup

## 🔄 **Complete Flow**

1. **User Chat** → Auto git check
2. **Ada changes?** → Auto backup + tampilkan commit
3. **Tidak ada changes?** → Langsung ke step 5
4. **User konfirmasi** → Implementasi
5. **SELESAI** → Tunggu user chat berikutnya

## ⚠️ **CRITICAL RULES**

### 🚫 **NEVER SKIP:**
- Git status check
- Auto backup (jika ada changes)
- Menampilkan commit message
- Menunggu konfirmasi user

### ✅ **ALWAYS DO:**
- Check git status di setiap awal chat
- Backup sebelum implementasi apapun
- Tampilkan commit message yang jelas
- Tunggu konfirmasi sebelum implementasi

## 🎯 **Example Scenarios**

### Scenario 1: Ada Changes
```
User: "Fix mobile layout"
AI: [Check git] → [Auto backup] → [Show commit] → "Ready untuk implementasi. Lanjut?"
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

## 📞 **Contact**

If you have questions about this workflow:
- Always prioritize safety
- When in doubt, backup first
- Never implement without confirmation

---

**Last Updated:** 2025-10-23
**Version:** 1.0
**Status:** ACTIVE - MANDATORY FOR ALL AI ASSISTANTS