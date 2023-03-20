-- DropForeignKey
ALTER TABLE "cidades" DROP CONSTRAINT "cidades_estado_id_fkey";

-- AddForeignKey
ALTER TABLE "cidades" ADD CONSTRAINT "cidades_estado_id_fkey" FOREIGN KEY ("estado_id") REFERENCES "estados"("id") ON DELETE CASCADE ON UPDATE CASCADE;
