# BitespeedBE – Identity Reconciliation API

A clean backend service for handling customer identity reconciliation—built using **Node.js**, **TypeScript**, **Prisma**, and **PostgreSQL**. Designed for FluxKart/Bitespeed to unify fragmented customer data with accurate primary-secondary linking.

---

## 🚀 Features

- **POST** `/identify`: Consolidates contact via email and/or phone
- **GET** `/contacts`: Fetches all stored contacts and their linked data
- Handles new contacts and gracefully links secondary info
- Maintains **linkPrecedence** and **linkedId** metadata
- Fully typed with **TypeScript**
- Powered by **Prisma ORM** and **PostgreSQL**
- Easy to extend, test, and deploy

---

## 🛠 Tech Stack

- **Backend**: Node.js, Express.js, TypeScript
- **ORM**: Prisma (v6+)
- **Database**: PostgreSQL (compatible with Neon, Render, Supabase)
- **Typing**: TypeScript for type safety and clarity

---
