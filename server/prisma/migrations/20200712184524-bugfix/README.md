# Migration `20200712184524-bugfix`

This migration has been generated by Mehmet Mert Özgün at 7/12/2020, 6:45:24 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql

```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200712173002-update..20200712184524-bugfix
--- datamodel.dml
+++ datamodel.dml
@@ -1,8 +1,8 @@
 // 1
 datasource db {
   provider = "sqlite" 
-  url = "***"
+  url = "***"
 }
 // 2
 generator client {
@@ -26,9 +26,9 @@
   title         String
   list         String
   postedBy User? @relation(fields: [postedById], references: [id])
   postedById Int?
-  feed   Card @relation(fields: [feedId], references: [id])
+  feed   Feed @relation(fields: [feedId], references: [id])
   feedId Int
   votes Vote[]
 }
```

