# Migration `20200712130039-card-update`

This migration has been generated by Mehmet Mert Özgün at 7/12/2020, 1:00:39 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
PRAGMA foreign_keys=OFF;

DROP INDEX "Vote.linkId_userId"

CREATE TABLE "Card" (
"createdAt" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
"description" TEXT NOT NULL,
"id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
"list" TEXT NOT NULL,
"postedById" INTEGER ,
"title" TEXT NOT NULL,FOREIGN KEY ("postedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE)

CREATE TABLE "new_Vote" (
"cardId" INTEGER NOT NULL,
"id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
"userId" INTEGER NOT NULL,FOREIGN KEY ("cardId") REFERENCES "Card"("id") ON DELETE CASCADE ON UPDATE CASCADE,
FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE)

INSERT INTO "new_Vote" ("id", "userId") SELECT "id", "userId" FROM "Vote"

PRAGMA foreign_keys=off;
DROP TABLE "Vote";;
PRAGMA foreign_keys=on

ALTER TABLE "new_Vote" RENAME TO "Vote";

CREATE UNIQUE INDEX "Vote.cardId_userId" ON "Vote"("cardId","userId")

PRAGMA foreign_keys=off;
DROP TABLE "Link";;
PRAGMA foreign_keys=on

PRAGMA foreign_key_check;

PRAGMA foreign_keys=ON;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200711175945-add-vote-model..20200712130039-card-update
--- datamodel.dml
+++ datamodel.dml
@@ -1,21 +1,22 @@
 // 1
 datasource db {
   provider = "sqlite" 
-  url = "***"
+  url = "***"
 }
 // 2
 generator client {
   provider = "prisma-client-js"
 }
 // 3
-model Link {
+model Card {
   id          Int      @id @default(autoincrement())
   createdAt   DateTime @default(now())
   description String
-  url         String
+  title         String
+  list         String
   postedBy User? @relation(fields: [postedById], references: [id])
   postedById Int?
   votes Vote[]
 }
@@ -24,17 +25,17 @@
   id        Int      @id @default(autoincrement())
   name String
   email String @unique
   password String
-  links Link[]
+  cards Card[]
   votes Vote[]
 }
 model Vote {
   id     Int  @id @default(autoincrement())
-  link   Link @relation(fields: [linkId], references: [id])
-  linkId Int
+  card   Card @relation(fields: [cardId], references: [id])
+  cardId Int
   user   User @relation(fields: [userId], references: [id])
   userId Int
-  @@unique([linkId, userId])
+  @@unique([cardId, userId])
   }
```


