/*
  Warnings:

  - You are about to drop the column `title` on the `Brand` table. All the data in the column will be lost.
  - Added the required column `name` to the `Brand` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name_hira` to the `Brand` table without a default value. This is not possible if the table is not empty.
  - Added the required column `url` to the `Brand` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Brand" DROP COLUMN "title",
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "name_hira" TEXT NOT NULL,
ADD COLUMN     "url" TEXT NOT NULL;
